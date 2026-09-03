import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      let current = "home";
      for (const l of links) {
        const el = document.getElementById(l.id);
        if (el && el.getBoundingClientRect().top <= 120) current = l.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-4 sm:px-6 transition-all duration-500 ${
          scrolled ? "" : ""
        }`}
      >
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-500 ${
            scrolled
              ? "glass border border-white/5 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)]"
              : "border border-transparent"
          }`}
        >
          <button
            onClick={() => go("home")}
            className="flex items-center gap-2 font-display text-xl font-bold tracking-tight"
          >
            <span className="text-foreground">Rayhan</span>
            <span className="text-gradient">.</span>
          </button>

          <ul className="hidden lg:flex items-center gap-1 text-sm">
            {links.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => go(l.id)}
                  className={`relative px-4 py-2 rounded-lg transition-colors ${
                    active === l.id
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l.label}
                  {active === l.id && (
                    <span className="absolute left-3 right-3 -bottom-0.5 h-[2px] rounded-full bg-gradient-primary" />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => go("contact")}
            className="group hidden sm:inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_30px_-8px_rgba(6,182,212,0.6)] transition-transform hover:-translate-y-0.5"
          >
            Hire Me
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>

          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-foreground p-2"
          >
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-6 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`block h-0.5 w-6 bg-current transition ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-6 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </div>
          </button>
        </nav>

        {open && (
          <div className="lg:hidden mt-2 glass rounded-2xl p-4 border border-white/5">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => go(l.id)}
                    className={`block w-full text-left px-4 py-3 rounded-lg ${
                      active === l.id
                        ? "bg-white/5 text-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    {l.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => go("contact")}
                  className="mt-2 w-full rounded-xl bg-gradient-primary px-5 py-3 text-sm font-semibold text-white"
                >
                  Hire Me
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
