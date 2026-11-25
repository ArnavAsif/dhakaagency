import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Nomad Digital BD | Growth-Driven Digital Marketing Experts",
  description:
    "Nomad Digital is a remote-first digital marketing agency helping businesses scale with SEO, Paid Ads, CRO, Web Analytics & more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&family=Roboto+Slab:wght@100..900&family=Roboto:ital,wght@0,100..900;1,100..900&family=Teko:wght@300..700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/assets/css/arolax-exact.css" />
      </head>
      <body className="home wp-singular page-template page-template-elementor_header_footer page page-id-6 wp-theme-arolax ezd-body-docs joya-gl-blog arolax-base elementor-default elementor-template-full-width elementor-kit-3 elementor-page elementor-page-6 e--ua-blink e--ua-chrome e--ua-webkit">
        {children}
      </body>
    </html>
  );
}
