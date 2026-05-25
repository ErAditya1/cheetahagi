"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
const WEB_URL = process.env.NEXT_PUBLIC_WEB_URL || "http://localhost:3001";
const collections = ["products", "posts", "services", "leads", "activities"] as const;
type Collection = (typeof collections)[number];

type Item = Record<string, any>;

const blankProduct = {
  slug: "",
  name: "",
  tagline: "",
  status: "Draft",
  tags: [],
  description: "",
  features: [],
  pricing: "",
  href: "",
  visible: true,
  showInNavbar: false,
  sortOrder: 99,
};

const blankService = {
  slug: "",
  name: "",
  tagline: "",
  longDescription: "",
  deliverables: [],
  timeline: "",
  investment: "",
  visible: true,
  sortOrder: 99,
};

const blankPost = {
  slug: "",
  title: "",
  excerpt: "",
  category: "Strategy",
  date: new Date().toISOString().slice(0, 10),
  readTime: "5 min",
  featured: false,
  body: "",
  visible: true,
};

export default function AdminPage() {
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("admin@cheetahagi.com");
  const [password, setPassword] = useState("change-this-password");
  const [active, setActive] = useState<Collection>("products");
  const [items, setItems] = useState<Record<Collection, Item[]>>({
    products: [],
    posts: [],
    services: [],
    leads: [],
    activities: [],
  });
  const [editing, setEditing] = useState<Item | null>(blankProduct);
  const [error, setError] = useState("");

  const displayedItems = useMemo(() => {
    const current = items[active] || [];
    if (active === "leads" || active === "activities") {
      return [...current].sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    }
    return current;
  }, [items, active]);

  const headers = useMemo(
    () => ({
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    }),
    [token],
  );

  useEffect(() => {
    const saved = localStorage.getItem("cheetah-admin-token");
    if (saved) setToken(saved);
  }, []);

  useEffect(() => {
    if (!token) return;
    refreshAll();
  }, [token]);

  useEffect(() => {
    if (active === "products") setEditing(blankProduct);
    if (active === "posts") setEditing(blankPost);
    if (active === "services") setEditing(blankService);
    if (active === "leads" || active === "activities") setEditing(null);
  }, [active]);

  async function login(e: FormEvent) {
    e.preventDefault();
    setError("");
    const res = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (!res.ok) {
      setError("Login failed. Check ADMIN_EMAIL and ADMIN_PASSWORD.");
      return;
    }
    const data = await res.json();
    localStorage.setItem("cheetah-admin-token", data.token);
    setToken(data.token);
  }

  async function refreshAll() {
    const next = { ...items };
    for (const collection of collections) {
      const res = await fetch(`${API_URL}/admin/${collection}`, { headers });
      if (res.ok) next[collection] = await res.json();
    }
    setItems(next);
  }

  async function saveItem(e: FormEvent) {
    e.preventDefault();
    if (!editing || (active !== "products" && active !== "posts" && active !== "services")) return;
    const id = editing.id;
    const payload = normalize(active, editing);
    const res = await fetch(`${API_URL}/admin/${active}${id ? `/${id}` : ""}`, {
      method: id ? "PATCH" : "POST",
      headers,
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      setError("Save failed.");
      return;
    }
    setEditing(active === "products" ? blankProduct : active === "posts" ? blankPost : blankService);
    await refreshAll();
  }

  async function deleteItem(id: string) {
    await fetch(`${API_URL}/admin/${active}/${id}`, { method: "DELETE", headers });
    await refreshAll();
  }

  async function markLead(lead: Item, status: string) {
    await fetch(`${API_URL}/admin/leads/${lead.id}`, {
      method: "PATCH",
      headers,
      body: JSON.stringify({ status }),
    });
    await refreshAll();
  }

  if (!token) {
    return (
      <main className="login-shell">
        <form className="login-card" onSubmit={login}>
          <p className="eyebrow">Cheetah AGI Admin</p>
          <h1>Sign in</h1>
          <label>Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button>Enter admin</button>
          {error && <p className="error">{error}</p>}
        </form>
      </main>
    );
  }

  return (
    <main className="admin-shell">
      <aside>
        <div>
          <p className="eyebrow">Cheetah AGI</p>
          <h1>Admin</h1>
        </div>
        <nav>
          {collections.map((collection) => (
            <button
              key={collection}
              className={active === collection ? "active" : ""}
              onClick={() => setActive(collection)}
            >
              {collection}
              <span>{items[collection].length}</span>
            </button>
          ))}
        </nav>
        <button
          className="ghost"
          onClick={() => {
            localStorage.removeItem("cheetah-admin-token");
            setToken("");
          }}
        >
          Sign out
        </button>
      </aside>

      <section className="workspace">
        <header>
          <div>
            <p className="eyebrow">Manage</p>
            <h2>{active}</h2>
          </div>
          <button onClick={refreshAll}>Refresh</button>
        </header>

        {error && <p className="error">{error}</p>}

        {(active === "products" || active === "posts" || active === "services") && editing && (
          <Editor
            collection={active}
            item={editing}
            setItem={setEditing}
            onSubmit={saveItem}
          />
        )}

        <div className="grid-list">
          {displayedItems.map((item) => (
            <article key={item.id} className="row-card">
              <div>
                {active === "leads" ? (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                      <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        item.type === "consultation" 
                          ? "bg-[#c5ff3d]/15 text-[#c5ff3d] border border-[#c5ff3d]/30" 
                          : "bg-neutral-800 text-neutral-300 border border-neutral-700"
                      }`}>
                        {item.type}
                      </span>
                      <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        item.status === "new" ? "bg-red-500/15 text-red-400 border border-red-500/30" :
                        item.status === "reviewed" ? "bg-blue-500/15 text-blue-400 border border-blue-500/30" :
                        item.status === "contacted" ? "bg-amber-500/15 text-amber-400 border border-amber-500/30" :
                        "bg-green-500/15 text-green-400 border border-green-500/30"
                      }`}>
                        {item.status}
                      </span>
                      <span className="text-neutral-500 font-mono text-[10px]">Source: {item.source}</span>
                    </div>
                    <h3 className="text-base font-semibold text-foreground">
                      {item.payload?.name ? `${item.payload.name} (${item.payload.email})` : item.payload?.email || "Anonymous Lead"}
                    </h3>
                    
                    <div className="mt-2 space-y-2 border-t border-neutral-800/80 pt-3">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1.5 text-xs">
                        {item.payload?.email && (
                          <div>
                            <span className="text-neutral-500 font-mono text-[10px] uppercase mr-2">Email:</span>
                            <a href={`mailto:${item.payload.email}`} className="text-[#c5ff3d] hover:underline font-mono">{String(item.payload.email)}</a>
                          </div>
                        )}
                        {item.payload?.name && (
                          <div>
                            <span className="text-neutral-500 font-mono text-[10px] uppercase mr-2">Name:</span>
                            <span className="text-foreground">{String(item.payload.name)}</span>
                          </div>
                        )}
                        {(item.payload?.business || item.payload?.company) && (
                          <div>
                            <span className="text-neutral-500 font-mono text-[10px] uppercase mr-2">Business/Company:</span>
                            <span className="text-foreground">{String(item.payload.business || item.payload.company)}</span>
                          </div>
                        )}
                        {item.payload?.role && (
                          <div>
                            <span className="text-neutral-500 font-mono text-[10px] uppercase mr-2">Role:</span>
                            <span className="text-foreground">{String(item.payload.role)}</span>
                          </div>
                        )}
                        {item.payload?.revenue && (
                          <div>
                            <span className="text-neutral-500 font-mono text-[10px] uppercase mr-2">Revenue:</span>
                            <span className="text-[#c5ff3d]/90 font-mono">{String(item.payload.revenue)}</span>
                          </div>
                        )}
                        {item.payload?.timeline && (
                          <div>
                            <span className="text-neutral-500 font-mono text-[10px] uppercase mr-2">Timeline:</span>
                            <span className="text-foreground">{String(item.payload.timeline)}</span>
                          </div>
                        )}
                        {item.payload?.phone && (
                          <div>
                            <span className="text-neutral-500 font-mono text-[10px] uppercase mr-2">Phone:</span>
                            <a href={`tel:${item.payload.phone}`} className="text-neutral-300 hover:text-[#c5ff3d] font-mono">{String(item.payload.phone)}</a>
                          </div>
                        )}
                      </div>
                      
                      {item.payload?.challenges && Array.isArray(item.payload.challenges) && item.payload.challenges.length > 0 && (
                        <div className="mt-2 text-xs">
                          <span className="text-neutral-500 font-mono text-[10px] uppercase mr-2 block mb-1">Challenges:</span>
                          <div className="flex flex-wrap gap-1.5">
                            {item.payload.challenges.map((c: string) => (
                              <span key={c} className="px-2 py-0.5 bg-[#c5ff3d]/10 border border-[#c5ff3d]/20 text-[#c5ff3d] text-[10px] rounded">
                                {c}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {item.payload?.description && (
                        <div className="mt-2 text-xs bg-neutral-950/40 p-2.5 border border-neutral-800 rounded">
                          <span className="text-neutral-500 font-mono text-[10px] uppercase block mb-1">Context / Description:</span>
                          <p className="text-neutral-300 whitespace-pre-line leading-relaxed !my-0">{String(item.payload.description)}</p>
                        </div>
                      )}

                      <div className="text-[10px] text-neutral-500 mt-2 flex justify-between font-mono">
                        <span>ID: {item.id}</span>
                        <span>Submitted: {new Date(item.createdAt).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                ) : active === "activities" ? (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-neutral-800 text-neutral-300 border border-neutral-700 rounded-full">
                        {item.type}
                      </span>
                      <span className="text-neutral-500 font-mono text-[10px]">Actor: {item.actor}</span>
                    </div>
                    <h3 className="text-base font-medium text-foreground">
                      {item.message}
                    </h3>
                    
                    <div className="mt-2 space-y-2 border-t border-neutral-800/80 pt-3">
                      {item.type === "lead.created" && item.metadata?.leadId ? (() => {
                        const associatedLead = items.leads.find(l => l.id === item.metadata.leadId);
                        if (!associatedLead) {
                          return (
                            <div className="text-[11px] text-neutral-500 bg-neutral-950/30 p-2 rounded border border-neutral-800">
                              Lead details (ID: {item.metadata.leadId}) not found.
                            </div>
                          );
                        }
                        const payload = associatedLead.payload || {};
                        return (
                          <div className="bg-neutral-950/40 p-3 border border-neutral-800 rounded space-y-2">
                            <div className="flex items-center justify-between border-b border-neutral-800 pb-1.5">
                              <span className="font-mono text-[10px] text-[#c5ff3d] font-semibold uppercase">Submitted Details</span>
                              <span className="font-mono text-[9px] text-neutral-500">Lead ID: {associatedLead.id}</span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1.5 text-xs">
                              {payload.email && (
                                <div>
                                  <span className="text-neutral-500 font-mono text-[10px] uppercase mr-1">Email:</span>
                                  <a href={`mailto:${payload.email}`} className="text-[#c5ff3d] hover:underline font-mono">{String(payload.email)}</a>
                                </div>
                              )}
                              {payload.name && (
                                <div>
                                  <span className="text-neutral-500 font-mono text-[10px] uppercase mr-1">Name:</span>
                                  <span className="text-foreground font-medium">{String(payload.name)}</span>
                                </div>
                              )}
                              {(payload.business || payload.company) && (
                                <div>
                                  <span className="text-neutral-500 font-mono text-[10px] uppercase mr-1">Business:</span>
                                  <span className="text-foreground">{String(payload.business || payload.company)}</span>
                                </div>
                              )}
                              {payload.role && (
                                <div>
                                  <span className="text-neutral-500 font-mono text-[10px] uppercase mr-1">Role:</span>
                                  <span className="text-foreground">{String(payload.role)}</span>
                                </div>
                              )}
                              {payload.revenue && (
                                <div>
                                  <span className="text-neutral-500 font-mono text-[10px] uppercase mr-1">Revenue:</span>
                                  <span className="text-[#c5ff3d]/90 font-mono">{String(payload.revenue)}</span>
                                </div>
                              )}
                              {payload.timeline && (
                                <div>
                                  <span className="text-neutral-500 font-mono text-[10px] uppercase mr-1">Timeline:</span>
                                  <span className="text-foreground">{String(payload.timeline)}</span>
                                </div>
                              )}
                            </div>
                            {payload.description && (
                              <div className="mt-1 text-xs border-t border-neutral-800/80 pt-1.5">
                                <span className="text-neutral-500 font-mono text-[10px] uppercase block mb-0.5">Description:</span>
                                <p className="text-neutral-300 whitespace-pre-line leading-relaxed !my-0">{String(payload.description)}</p>
                              </div>
                            )}
                          </div>
                        );
                      })() : item.metadata && Object.keys(item.metadata).length > 0 ? (
                        <div className="bg-neutral-950/20 p-2 border border-neutral-800 rounded">
                          <span className="text-neutral-500 font-mono text-[9px] uppercase block mb-1">Metadata:</span>
                          <pre className="text-xs font-mono text-neutral-400 overflow-x-auto whitespace-pre-wrap !my-0 p-1 bg-neutral-950/40 rounded">
                            {JSON.stringify(item.metadata, null, 2)}
                          </pre>
                        </div>
                      ) : null}
                      
                      <div className="text-[10px] text-neutral-500 mt-1 flex justify-between font-mono">
                        <span>ID: {item.id}</span>
                        <span>Occurred: {new Date(item.createdAt).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <p className="eyebrow">{item.status || item.category}</p>
                    <h3>{item.name || item.title}</h3>
                    <p>{item.tagline || item.excerpt}</p>
                    {item.showInNavbar !== undefined && (
                      <p className="meta">Navbar: {item.showInNavbar ? "visible" : "hidden"}</p>
                    )}
                    
                    {active === "products" && (item.slug || item.href) && (
                      <div className="mt-2 text-xs">
                        <span className="text-neutral-500 font-mono text-[10px] uppercase mr-2">Live Page:</span>
                        <a 
                          href={item.href && (item.href.startsWith("http") || item.href.startsWith("/")) ? item.href : `${WEB_URL}/products/${item.slug}`} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="text-[#c5ff3d] hover:underline font-mono"
                        >
                          {item.href && (item.href.startsWith("http") || item.href.startsWith("/")) ? item.href : `${WEB_URL}/products/${item.slug}`}
                        </a>
                      </div>
                    )}
                    {active === "services" && item.slug && (
                      <div className="mt-2 text-xs">
                        <span className="text-neutral-500 font-mono text-[10px] uppercase mr-2">Live Page:</span>
                        <a 
                          href={`${WEB_URL}/services/${item.slug}`} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="text-[#c5ff3d] hover:underline font-mono"
                        >
                          {`${WEB_URL}/services/${item.slug}`}
                        </a>
                      </div>
                    )}
                    {active === "posts" && item.slug && (
                      <div className="mt-2 text-xs">
                        <span className="text-neutral-500 font-mono text-[10px] uppercase mr-2">Live Page:</span>
                        <a 
                          href={`${WEB_URL}/blog/${item.slug}`} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="text-[#c5ff3d] hover:underline font-mono"
                        >
                          {`${WEB_URL}/blog/${item.slug}`}
                        </a>
                      </div>
                    )}
                  </>
                )}
              </div>
              <div className="actions">
                {(active === "products" || active === "posts" || active === "services") && (
                  <>
                    <button onClick={() => setEditing(item)}>Edit</button>
                    <button className="danger" onClick={() => deleteItem(item.id)}>Delete</button>
                  </>
                )}
                {active === "leads" && (
                  <>
                    <button onClick={() => markLead(item, "reviewed")}>Reviewed</button>
                    <button onClick={() => markLead(item, "contacted")}>Contacted</button>
                  </>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function Editor({
  collection,
  item,
  setItem,
  onSubmit,
}: {
  collection: "products" | "posts" | "services";
  item: Item;
  setItem: (item: Item) => void;
  onSubmit: (e: FormEvent) => void;
}) {
  const update = (key: string, value: any) => setItem({ ...item, [key]: value });
  return (
    <form className="editor" onSubmit={onSubmit}>
      <div className="form-grid">
        {collection === "products" ? (
          <>
            <Field label="Name" value={item.name} onChange={(v) => update("name", v)} />
            <Field label="Slug" value={item.slug} onChange={(v) => update("slug", v)} />
            <Field label="Status" value={item.status} onChange={(v) => update("status", v)} />
            <Field label="Pricing" value={item.pricing} onChange={(v) => update("pricing", v)} />
            <Field label="External / Live URL (Optional)" value={item.href || ""} onChange={(v) => update("href", v)} />
            <Field wide label="Tagline" value={item.tagline} onChange={(v) => update("tagline", v)} />
            <Field wide label="Description" value={item.description} onChange={(v) => update("description", v)} textarea />
            <Field wide label="Tags (comma separated)" value={Array.isArray(item.tags) ? item.tags.join(", ") : item.tags || ""} onChange={(v) => update("tags", v)} />
            <Field wide label="Features JSON" value={typeof item.features === "string" ? item.features : JSON.stringify(item.features || [], null, 2)} onChange={(v) => update("features", v)} textarea />
            <Toggle label="Visible" checked={item.visible} onChange={(v) => update("visible", v)} />
            <Toggle label="Show in navbar" checked={item.showInNavbar} onChange={(v) => update("showInNavbar", v)} />
          </>
        ) : collection === "services" ? (
          <>
            <Field label="Name" value={item.name} onChange={(v) => update("name", v)} />
            <Field label="Slug" value={item.slug} onChange={(v) => update("slug", v)} />
            <Field label="Timeline" value={item.timeline} onChange={(v) => update("timeline", v)} />
            <Field label="Investment" value={item.investment} onChange={(v) => update("investment", v)} />
            <Field wide label="Tagline" value={item.tagline} onChange={(v) => update("tagline", v)} />
            <Field wide label="Long Description" value={item.longDescription} onChange={(v) => update("longDescription", v)} textarea />
            <Field wide label="Deliverables JSON (Array of strings)" value={typeof item.deliverables === "string" ? item.deliverables : JSON.stringify(item.deliverables || [], null, 2)} onChange={(v) => update("deliverables", v)} textarea />
            <Field label="Sort Order" value={String(item.sortOrder ?? 99)} onChange={(v) => update("sortOrder", parseInt(v, 10) || 99)} />
            <Toggle label="Visible" checked={item.visible} onChange={(v) => update("visible", v)} />
          </>
        ) : (
          <>
            <Field label="Title" value={item.title} onChange={(v) => update("title", v)} />
            <Field label="Slug" value={item.slug} onChange={(v) => update("slug", v)} />
            <Field label="Category" value={item.category} onChange={(v) => update("category", v)} />
            <Field label="Read time" value={item.readTime} onChange={(v) => update("readTime", v)} />
            <Field wide label="Excerpt" value={item.excerpt} onChange={(v) => update("excerpt", v)} textarea />
            <Field wide label="Body" value={item.body} onChange={(v) => update("body", v)} textarea />
            <Toggle label="Visible" checked={item.visible} onChange={(v) => update("visible", v)} />
            <Toggle label="Featured" checked={item.featured} onChange={(v) => update("featured", v)} />
          </>
        )}
      </div>
      <button>{item.id ? "Save changes" : `Create ${collection.slice(0, -1)}`}</button>
    </form>
  );
}

function Field({
  label,
  value,
  onChange,
  textarea = false,
  wide = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  textarea?: boolean;
  wide?: boolean;
}) {
  return (
    <label className={wide ? "wide" : ""}>
      {label}
      {textarea ? (
        <textarea value={value || ""} onChange={(e) => onChange(e.target.value)} />
      ) : (
        <input value={value || ""} onChange={(e) => onChange(e.target.value)} />
      )}
    </label>
  );
}

function Toggle({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <label className="toggle">
      <input type="checkbox" checked={Boolean(checked)} onChange={(e) => onChange(e.target.checked)} />
      {label}
    </label>
  );
}

function normalize(collection: Collection, item: Item) {
  const next = { ...item };
  delete next.id;
  delete next.createdAt;
  delete next.updatedAt;
  if (collection === "products") {
    next.href = next.href && next.href.trim() ? next.href : `/products/${next.slug}`;
    next.tags = Array.isArray(next.tags) ? next.tags : String(next.tags || "").split(",").map((x) => x.trim()).filter(Boolean);
    if (typeof next.features === "string") {
      try {
        next.features = JSON.parse(next.features);
      } catch {
        next.features = [];
      }
    }
  }
  if (collection === "services") {
    if (typeof next.deliverables === "string") {
      try {
        next.deliverables = JSON.parse(next.deliverables);
      } catch {
        next.deliverables = [];
      }
    }
  }
  return next;
}
