import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'AI Solution Company',
    short_name: 'AI Solution Co.',
    description: 'AI Solution Company builds AI Employees for real business operations.',
    start_url: '/',
    display: 'standalone',
    background_color: '#07070C',
    theme_color: '#07070C',
    icons: [{ src: '/logo.jpeg', sizes: '192x192', type: 'image/jpeg' }],
  };
}
