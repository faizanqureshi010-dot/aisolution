import type { MetadataRoute } from 'next';
import { agents } from '@/lib/agents';

const BASE = 'https://aisolutioncompany.com';

const routes = [
  { path: '', priority: 1.0 },
  { path: '/agents', priority: 0.9 },
  { path: '/claravox', priority: 0.6 },
  { path: '/products/aisc-booking-agent', priority: 0.9 },
  { path: '/products/dental-automated', priority: 0.9 },
  { path: '/products/medical-automated', priority: 0.9 },
  { path: '/industries', priority: 0.8 },
  { path: '/industries/automotive', priority: 0.7 },
  { path: '/industries/hotels', priority: 0.7 },
  { path: '/industries/restaurants', priority: 0.7 },
  { path: '/industries/cafes', priority: 0.7 },
  { path: '/company', priority: 0.6 },
  { path: '/about', priority: 0.6 },
  { path: '/why-aisc', priority: 0.6 },
  { path: '/careers', priority: 0.5 },
  { path: '/contact', priority: 0.6 },
  { path: '/book-demo', priority: 0.8 },
  { path: '/affiliate', priority: 0.5 },
  { path: '/resources', priority: 0.5 },
  { path: '/resources/blog', priority: 0.5 },
  { path: '/resources/documentation', priority: 0.4 },
  { path: '/resources/api', priority: 0.4 },
  { path: '/resources/help-center', priority: 0.4 },
  { path: '/resources/release-notes', priority: 0.4 },
  { path: '/resources/security-center', priority: 0.5 },
  { path: '/privacy-policy', priority: 0.3 },
  { path: '/terms-of-service', priority: 0.3 },
  { path: '/cookie-policy', priority: 0.3 },
  { path: '/accessibility-statement', priority: 0.3 },
];

const agentRoutes = agents.map((a) => ({ path: `/agents/${a.slug}`, priority: 0.7 }));

export default function sitemap(): MetadataRoute.Sitemap {
  return [...routes, ...agentRoutes].map((r) => ({
    url: `${BASE}${r.path}`,
    lastModified: new Date(),
    priority: r.priority,
  }));
}
