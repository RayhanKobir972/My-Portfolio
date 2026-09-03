import { createFileRoute } from "@tanstack/react-router";
import { BackgroundFX, CursorGlow } from "../components/portfolio/BackgroundFX";
import { Navbar } from "../components/portfolio/Navbar";
import {
  Hero,
  Stats,
  About,
  Skills,
  Services,
  Projects,
  Experience,
  Testimonials,
  Contact,
  Footer,
} from "../components/portfolio/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rayhan — WordPress Developer & UI/UX Designer" },
      {
        name: "description",
        content:
          "Premium portfolio of Rayhan Ahmed — WordPress developer and UI/UX designer crafting fast, modern, and beautiful digital experiences.",
      },
      {
        property: "og:title",
        content: "Rayhan — WordPress Developer & UI/UX Designer",
      },
      {
        property: "og:description",
        content:
          "Premium portfolio crafting fast, modern, and beautiful digital experiences.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen text-foreground w-full max-w-full overflow-x-clip">
      <BackgroundFX />
      <CursorGlow />
      <Navbar />
      <main className="w-full max-w-full overflow-x-clip">
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
