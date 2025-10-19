export function LocalBusinessJsonLd() {
  const businessData = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": "https://www.usaepoxyfloor.com/#localbusiness",
    name: "USA Epoxy Floor",
    image: "https://www.usaepoxyfloor.com/logo.jpeg",
    url: "https://www.usaepoxyfloor.com",
    telephone: "+1-845-464-2539",
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
    serviceType: "Epoxy Flooring",
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Epoxy Flooring Installation",
          serviceType: "Floor Coating / Epoxy Flooring",
          areaServed: [
            { "@type": "City", name: "Fishkill" },
            { "@type": "City", name: "Poughkeepsie" },
            { "@type": "AdministrativeArea", name: "Dutchess County" },
            { "@type": "City", name: "Albany" },
            { "@type": "City", name: "New York City" },
          ],
        },
      },
    ],

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
        name: "Fishkill",
      },
      {
        "@type": "City",
        name: "New York City",
      },
      {
        "@type": "City",
        name: "Albany",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1-845-464-2539",
        contactType: "sales",
        areaServed: "US",
        availableLanguage: ["English"],
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
