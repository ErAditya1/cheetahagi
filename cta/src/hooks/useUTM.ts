'use client';

import { useEffect, useState } from 'react';
import { UTMParams } from '@/types/lead';
import { parseUTM, saveUTMToStorage, getUTMFromStorage } from '@/lib/utm';

export function useUTM(): UTMParams {
  const [utm, setUTM] = useState<UTMParams>({});

  useEffect(() => {
    // Parse from current URL
    const parsed = parseUTM(window.location.search);

    // Merge with any existing stored values (URL params take precedence)
    const stored = getUTMFromStorage();
    const merged = { ...stored, ...parsed };

    // Only save if we got something new
    if (Object.keys(merged).length > 0) {
      saveUTMToStorage(merged);
    }

    // eslint-disable-next-line
    setUTM(merged);
  }, []);

  return utm;
}
