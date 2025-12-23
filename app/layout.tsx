import ClientLayout from "./layout-client";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <link rel="canonical" href="https://onepercentlounge.id" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BarOrPub",
              name: "One Percent Lounge",
              description:
                "Luxury private lounge in Jakarta with exclusive rooms, refined ambiance, and curated member experiences.",
              image: "https://onepercentlounge.id/logo/onepercentzoom.png",
              url: "https://onepercentlounge.id",
              telephone: "+62-812-1414-4883",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Entertainment District, Jl HR Jl. Rasuna Said, Salembaran, Kec. Kosambi",
                addressLocality: "Kabupaten Tangerang",
                addressRegion: "Banten",
                addressCountry: "ID",
              },
              openingHours: "Mo-Su 20:00-03:00",
              servesCuisine: "Bar, Lounge, Japanese, Chinese, Fusion",
              priceRange: "$$$$",
            }),
          }}
        />

        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

export const metadata = {
  metadataBase: new URL("https://onepercentlounge.id"),
  title: {
    default: "One Percent Lounge | Luxury Private Lounge in Jakarta",
    template: "%s | One Percent Lounge",
  },
  description:
    "Jakarta’s most exclusive luxury lounge offering private rooms, refined ambiance, world-class service and a premium member experience.",
  keywords: [
    "luxury lounge jakarta",
    "private rooms jakarta",
    "vip lounge jakarta",
    "exclusive lounge jakarta",
    "scbd lounge",
    "jakarta nightlife premium",
    "one percent lounge"
  ],
  openGraph: {
    type: "website",
    url: "https://onepercentlounge.id",
    title: "One Percent Lounge | Luxury Private Lounge in Jakarta",
    description:
      "Step inside the circle of 1%. Discover private rooms, exclusive lounge experience and high-end service in the heart of Jakarta.",
    images: ["/logo/onepercentzoom.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "One Percent Lounge",
    description: "Luxury Private Lounge in Jakarta",
    images: ["/logo/onepercentzoom.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      maxImagePreview: "large",
      maxSnippet: -1,
      maxVideoPreview: -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

