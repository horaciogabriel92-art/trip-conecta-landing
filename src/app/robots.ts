import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/pagar/', '/_next/'],
    },
    sitemap: 'https://tripconecta.com/sitemap.xml',
  }
}
