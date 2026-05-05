# Use nginx alpine for a small footprint
FROM nginx:alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy the static content into the container
# We copy index.html as the default entry point
COPY . /usr/share/nginx/html/

# The default nginx configuration serves on port 80
EXPOSE 90

# Start nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
