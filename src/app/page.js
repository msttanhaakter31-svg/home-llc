import Hero from "./Hero";
import Contact from "./Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fcfcfc] flex flex-col justify-between">
      <div>
        <Hero />
        <Contact />
      </div>
    </main>
  );
}
