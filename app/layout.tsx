import type { Metadata, Viewport } from "next";
import "./globals.css";
import SiteLoader from './components/SiteLoader';
import { Web3Provider } from './providers/Web3Provider';

export const metadata: Metadata = {
  title: "Onewave - Multi-Chain Multi-Utility Platform",
  description: "Cutting-ceiling multi-can, multi-utility cryptocurrency platform designed to provide users with a comprehensive suite of blockchain-based tools and services.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased" style={{ fontFamily: 'var(--font-gilmer)' }}>
        <Web3Provider>
          <SiteLoader />
          {children}
        </Web3Provider>
      </body>
    </html>
  );
}
