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

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) {
      window.addEventListener("keydown", handleKey);
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflowY = "";
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "py-2 sm:py-3" : "py-2.5 sm:py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-3.5 sm:px-6">
        <nav
          className={`flex items-center justify-between rounded-2xl px-3.5 sm:px-6 py-2 sm:py-2.5 transition-all duration-300 ${
            scrolled
              ? "glass border border-white/10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.7)]"
              : "bg-[#09090b]/70 sm:bg-transparent backdrop-blur-xl sm:backdrop-blur-none border border-white/10 sm:border-transparent"
          }`}
        >
          <button
            onClick={() => go("home")}
            className="flex items-center gap-1.5 font-display text-lg sm:text-xl font-bold tracking-tight"
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
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-foreground h-9 w-9 grid place-items-center rounded-xl bg-white/[0.04] border border-white/10 active:scale-95 transition-all"
          >
            <div className="space-y-1.5 w-5">
              <span
                className={`block h-0.5 w-full bg-current transition-transform duration-300 ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-current transition-opacity duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-current transition-transform duration-300 ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </nav>

        {open && (
          <>
            {/* Backdrop overlay */}
            <div
              className="fixed inset-0 bg-black/75 backdrop-blur-md -z-10 lg:hidden"
              onClick={() => setOpen(false)}
            />

            {/* Dropdown Menu */}
            <div className="lg:hidden mt-2 rounded-2xl p-3 sm:p-4 border border-white/15 bg-[#0b0c10]/98 backdrop-blur-3xl shadow-[0_25px_60px_-10px_rgba(0,0,0,0.95)]">
              <ul className="flex flex-col gap-1">
                {links.map((l) => (
                  <li key={l.id}>
                    <button
                      onClick={() => go(l.id)}
                      className={`flex items-center justify-between w-full text-left px-4 py-3 rounded-xl text-sm transition-all ${
                        active === l.id
                          ? "bg-gradient-to-r from-[var(--accent-cyan)]/20 to-[var(--accent-blue)]/10 text-white font-semibold border border-[var(--accent-cyan)]/40 shadow-[0_0_20px_-5px_rgba(6,182,212,0.4)]"
                          : "text-muted-foreground hover:text-foreground hover:bg-white/5 active:bg-white/10"
                      }`}
                    >
                      <span>{l.label}</span>
                      {active === l.id && (
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-cyan)] shadow-[0_0_8px_var(--accent-cyan)]" />
                      )}
                    </button>
                  </li>
                ))}
                <li className="pt-2">
                  <button
                    onClick={() => go("contact")}
                    className="flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-primary px-5 py-3 text-sm font-semibold text-white shadow-[0_0_30px_-5px_rgba(6,182,212,0.6)] active:scale-[0.98] transition-transform"
                  >
                    Hire Me
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
