import Hero from "./Hero";
import Contact from "./Contact";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />
    </main>
  );
}
