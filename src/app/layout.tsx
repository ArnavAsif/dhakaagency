import type { Metadata } from "next";
import { Teko, DM_Sans, Kanit } from "next/font/google";
import "./globals.css";

const teko = Teko({
  variable: "--font-teko",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Web Design Agency - Arolax Replica",
  description: "Arolax Web Design Agency created with Next.js, GSAP and Framer Motion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${teko.variable} ${dmSans.variable} ${kanit.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-[#121212] font-dm selection:bg-[#FF845D] selection:text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
