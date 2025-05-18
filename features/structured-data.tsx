export function LocalBusinessJsonLd() {
  const businessData = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "USA Epoxy Floor",
    image: "https://www.usaepoxyfloor.com/logo.jpeg",
    url: "https://www.usaepoxyfloor.com",
    telephone: "(845) 464-2539",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1070 US-9 Suite 102",
      addressLocality: "Fishkill",
      addressRegion: "NY",
      postalCode: "12524",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.561384,
      longitude: -73.901749,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/usaepoxyfloor",
      "https://www.instagram.com/usaepoxyfloor",
    ],
    priceRange: "$$",
    servesCuisine: "Epoxy Flooring",
    areaServed: [
      {
        "@type": "City",
        name: "Poughkeepsie",
      },
      {
        "@type": "City",
        name: "Dutchess County",
      },
      {
        "@type": "City",
        name: "Fiskkill",
      },
      {
        "@type": "City",
        name: "New york city",
      },
      {
        "@type": "City",
        name: "Albany",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(businessData) }}
    />
  );
}
