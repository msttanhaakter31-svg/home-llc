import Navbar from "./Navbar";
import Footer from "./Footer";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://castlehomellc.com"),
  title: "Castle Home LLC",
  description: "Castle Home LLC - Dedicated to Quality, Trust, and Professional Excellence.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png" },
    ],
    shortcut: ["/favicon.ico"],
  },
  openGraph: {
    title: "Castle Home LLC",
    description: "Castle Home LLC - Dedicated to Quality, Trust, and Professional Excellence.",
    siteName: "Castle Home LLC",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 1024,
        alt: "Castle Home LLC Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Castle Home LLC",
    description: "Castle Home LLC - Dedicated to Quality, Trust, and Professional Excellence.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#fcfcfc]">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
