/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      // Old flat "Products" index page is retired now that Products is no longer a top-level
      // nav dropdown — the 3 products live in the "Who We Serve" mega-menu / landing page instead.
      { source: '/products', destination: '/industries', permanent: true },
    ];
  },
};

module.exports = nextConfig;
