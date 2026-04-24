import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/pagar/'],
    },
    sitemap: 'https://tripconecta.com/sitemap.xml',
  }
}
