import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="canonical" href="https://graniteimpressions.com/granite-vs-quartz-kansas-city/" />
        
        {/* Structured Data - LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Granite Impressions",
              "image": "https://graniteimpressions.com/images/hero-luxury-kitchen.jpg",
              "@id": "https://graniteimpressions.com/granite-vs-quartz-kansas-city/",
              "url": "https://graniteimpressions.com/",
              "telephone": "+1-913-555-0123",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "12345 W 135th Street",
                "addressLocality": "Olathe",
                "addressRegion": "KS",
                "postalCode": "66062",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "38.8814",
                "longitude": "-94.8191"
              },
              "priceRange": "$$$",
              "sameAs": [
                "https://www.facebook.com/graniteimpressions",
                "https://www.instagram.com/graniteimpressions"
              ],
              "service": ["Countertop installation", "Quartz countertops", "Granite countertops"],
              "serviceArea": {
                "@type": "Place",
                "name": "Kansas City Metropolitan Area"
              }
            })
          }}
        />

        {/* Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Quartz Countertop Installation",
              "description": "Professional quartz countertop installation services in Kansas City metro area",
              "provider": {
                "@type": "LocalBusiness",
                "name": "Granite Impressions"
              },
              "serviceType": "Home Improvement",
              "areaServed": [
                "Olathe, KS",
                "Overland Park, KS", 
                "Shawnee, KS",
                "Lenexa, KS",
                "Lee's Summit, MO",
                "Kansas City, MO"
              ]
            })
          }}
        />

        {/* Review Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Review",
              "itemReviewed": {
                "@type": "LocalBusiness",
                "name": "Granite Impressions"
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "author": {
                "@type": "Person",
                "name": "Sarah Johnson"
              },
              "reviewBody": "Outstanding work! The quartz countertops transformed our kitchen. Professional installation and beautiful results. Highly recommend for anyone in the Kansas City area."
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}