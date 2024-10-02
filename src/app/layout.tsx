import type { Metadata } from "next";
import "./globals.css";
import Providers from "./lib/providers";

export const metadata: Metadata = {
  title: "PeT BuddY",
  description: "Pet care and tips",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Providers>
          <div className="mx-auto container">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
