import Navbar from "./Navbar";
import Footer from "./Footer";
import "./globals.css";

export const metadata = {
  title: "AURA — Architectural Design Studio",
  description: "Designing spaces that breathe.",
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
