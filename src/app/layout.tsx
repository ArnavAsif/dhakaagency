import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Dhaka Agency | Growth-Driven Digital Marketing Experts",
  description:
    "Dhaka Agency is a remote-first digital marketing agency helping businesses scale with SEO, Paid Ads, CRO, Web Analytics & more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Kanit:wght@400;500;600;700&family=PT+Serif:ital,wght@0,400;0,700;1,400&family=Roboto+Slab:wght@400;500;700&family=Roboto:wght@400;500;700&family=Teko:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/assets/css/arolax-exact.css" />
      </head>
      <body
        suppressHydrationWarning
        className="home wp-singular page-template page-template-elementor_header_footer page page-id-6 wp-theme-arolax ezd-body-docs joya-gl-blog arolax-base elementor-default elementor-template-full-width elementor-kit-3 elementor-page elementor-page-6 e--ua-blink e--ua-chrome e--ua-webkit"
      >
        {children}
      </body>
    </html>
  );
}
