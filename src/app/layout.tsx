import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hampton's Yacht - Luxury on the High Seas",
  description: "Experience luxury sailing with Hampton and his magnificent yacht. A distinguished gentleman with an egg for a head who has dedicated his life to the art of luxury sailing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

