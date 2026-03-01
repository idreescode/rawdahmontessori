import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rawdah Montessori Primary School",
  description: "Rawdah Montessori Primary School - Opening Soon",
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Fonts — must load first */}
        <link rel="stylesheet" href="/fonts/stylesheet.css" />
        <link rel="stylesheet" href="/fonts/stylesheet2.css" />
        {/* Bootstrap CSS */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB"
          crossOrigin="anonymous"
        />
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        />
        {/* Normalize */}
        <link rel="stylesheet" href="/css/normalize.css" />
        {/* Custom styles — must load AFTER bootstrap and normalize */}
        <link rel="stylesheet" href="/css/styles.css" />
      </head>
      <body>
        {children}
        {/* Bootstrap JS */}
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
