import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shiv Gurukul Public School | Mangobandar, Khaira, Jamui",
  description:
    "Official website of Shiv Gurukul Public School, Mangobandar, Khaira, Jamui. Established in 2015.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}