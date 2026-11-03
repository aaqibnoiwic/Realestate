import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Book Your Legacy | Property Advisory & Investment",
  description:
    "Independent real estate consultancy for considered investments in land, residences, commercial property and international opportunities.",
  openGraph: {
    title: "Book Your Legacy | Property Advisory & Investment",
    description:
      "A more considered approach to real estate across India and the UAE.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
