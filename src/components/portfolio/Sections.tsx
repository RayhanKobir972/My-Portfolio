import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type SVGProps,
} from "react";
import {
  siWordpress,
  siWoocommerce,
  siElementor,
  siFigma,
  siGit,
  siHtml5,
  siTailwindcss,
  siJavascript,
  siReact,
  siMysql,
  siPhp,
  siGithub,
  siPostman,
  siGooglechrome,
  type SimpleIcon,
} from "simple-icons";

import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Download,
  Github,
  Linkedin,
  Twitter,
  Dribbble,
  MessageCircle,
  Code2,
  Zap,
  Briefcase,
  Star,
  Trophy,
  Smile,
  Send,
  Loader2,
  CheckCircle2,
  PenTool,
  Palette,
  ShoppingBag,
  Gauge,
  Wrench,
  Globe,
  Quote,
  ArrowUp,
  BarChart3,
  Code,
  Package,
} from "lucide-react";
import profile from "../../assets/Rayhan_Potrait.png";
import p1 from "../../assets/project-1.jpg";
import p2 from "../../assets/project-2.jpg";
import p3 from "../../assets/project-3.jpg";

/* ------------------------------------------------------------------ */
/* Brand icons (simple-icons + inlined SVGs for missing brands)       */
/* ------------------------------------------------------------------ */
function SimpleIconSvg({
  icon,
  className,
}: {
  icon: SimpleIcon;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d={icon.path} />
    </svg>
  );
}

const PhotoshopIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 240 234" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M54,164.1V61.2c0-0.7,0.3-1.1,1-1.1c1.7,0,3.3,0,5.6-0.1c2.4-0.1,4.9-0.1,7.6-0.2c2.7-0.1,5.6-0.1,8.7-0.2c3.1-0.1,6.1-0.1,9.1-0.1c8.2,0,15,1,20.6,3.1c5,1.7,9.6,4.5,13.4,8.2c3.2,3.2,5.7,7.1,7.3,11.4c1.5,4.2,2.3,8.5,2.3,13c0,8.6-2,15.7-6,21.3c-4,5.6-9.6,9.8-16.1,12.2c-6.8,2.5-14.3,3.4-22.5,3.4c-2.4,0-4,0-5-0.1c-1-0.1-2.4-0.1-4.3-0.1v32.1c0.1,0.7-0.4,1.3-1.1,1.4c-0.1,0-0.2,0-0.4,0H55.2C54.4,165.4,54,165,54,164.1z M75.8,79.4V113c1.4,0.1,2.7,0.2,3.9,0.2H85c3.9,0,7.8-0.6,11.5-1.8c3.2-0.9,6-2.8,8.2-5.3c2.1-2.5,3.1-5.9,3.1-10.3c0.1-3.1-0.7-6.2-2.3-8.9c-1.7-2.6-4.1-4.6-7-5.7c-3.7-1.5-7.7-2.1-11.8-2c-2.6,0-4.9,0-6.8,0.1C77.9,79.2,76.5,79.3,75.8,79.4L75.8,79.4z" />
    <path d="M192,106.9c-3-1.6-6.2-2.7-9.6-3.4c-3.7-0.8-7.4-1.3-11.2-1.3c-2-0.1-4.1,0.2-6,0.7c-1.3,0.3-2.4,1-3.1,2c-0.5,0.8-0.8,1.8-0.8,2.7c0,0.9,0.4,1.8,1,2.6c0.9,1.1,2.1,2,3.4,2.7c2.3,1.2,4.7,2.3,7.1,3.3c5.4,1.8,10.6,4.3,15.4,7.3c3.3,2.1,6,4.9,7.9,8.3c1.6,3.2,2.4,6.7,2.3,10.3c0.1,4.7-1.3,9.4-3.9,13.3c-2.8,4-6.7,7.1-11.2,8.9c-4.9,2.1-10.9,3.2-18.1,3.2c-4.6,0-9.1-0.4-13.6-1.3c-3.5-0.6-7-1.7-10.2-3.2c-0.7-0.4-1.2-1.1-1.1-1.9v-17.4c0-0.3,0.1-0.7,0.4-0.9c0.3-0.2,0.6-0.1,0.9,0.1c3.9,2.3,8,3.9,12.4,4.9c3.8,1,7.8,1.5,11.8,1.5c3.8,0,6.5-0.5,8.3-1.4c1.6-0.7,2.7-2.4,2.7-4.2c0-1.4-0.8-2.7-2.4-4c-1.6-1.3-4.9-2.8-9.8-4.7c-5.1-1.8-9.8-4.2-14.2-7.2c-3.1-2.2-5.7-5.1-7.6-8.5c-1.6-3.2-2.4-6.7-2.3-10.2c0-4.3,1.2-8.4,3.4-12.1c2.5-4,6.2-7.2,10.5-9.2c4.7-2.4,10.6-3.5,17.7-3.5c4.1,0,8.3,0.3,12.4,0.9c3,0.4,5.9,1.2,8.6,2.3c0.4,0.1,0.8,0.5,1,0.9c0.1,0.4,0.2,0.8,0.2,1.2v16.3c0,0.4-0.2,0.8-0.5,1C192.9,107.1,192.4,107.1,192,106.9z" />
  </svg>
);

const IllustratorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 250 250" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M122.11,66.15h-37.41l-42.97,115.62h33.48l5.58-17.27h42.98l5.58,17.27h34.5l-41.73-115.62ZM102.27,135.65h-12.17l12.17-37.69,12.17,37.69h-12.17Z" />
    <rect x="168.12" y="90.74" width="30.98" height="91.03" />
    <path d="M200.12,74.28c.09,8.49-6.78,14.49-16.5,14.41-9.73.08-16.59-5.92-16.5-14.41-.09-8.49,6.78-14.49,16.5-14.41,9.73-.08,16.59,5.92,16.5,14.41Z" />
  </svg>
);

const VSCodeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M23.15 2.587L18.21.747a1.5 1.5 0 0 0-1.72.385L8.21 9.54 4.59 6.55a1.12 1.12 0 0 0-1.5.12L.87 9.05a1.12 1.12 0 0 0 .12 1.67L3.71 13 .99 15.28a1.12 1.12 0 0 0-.12 1.67l2.22 2.38a1.12 1.12 0 0 0 1.5.12l3.62-2.99 8.28 8.408a1.5 1.5 0 0 0 1.72.385l4.94-1.84a1.5 1.5 0 0 0 .99-1.41V4a1.5 1.5 0 0 0-.99-1.413zM18.17 19.07L10.5 12l7.67-7.07v14.14z" />
  </svg>
);

const goTo = (id: string) =>
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */
export function Hero() {
  return (
    <section
      id="home"
      className="relative pt-28 pb-16 sm:pt-40 sm:pb-28 px-4 sm:px-6 overflow-hidden sm:overflow-visible"
    >
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for Freelance
          </div>

          <h1 className="mt-5 sm:mt-6 font-display font-bold leading-[1.08] text-[clamp(2.1rem,6.5vw,4.5rem)]">
            Hi, I'm <br />
            <span className="text-gradient">Md. Rayhan Kobir</span>
          </h1>
          <p className="mt-4 sm:mt-5 text-lg sm:text-xl font-semibold text-foreground">
            WordPress Developer{" "}
          </p>
          <p className="mt-3 sm:mt-4 max-w-lg text-sm sm:text-base text-muted-foreground leading-relaxed">
            I craft modern, responsive WordPress websites and beautiful user
            interfaces that drive real results — fast, accessible, and built to
            convert.
          </p>

          <div className="mt-7 sm:mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => goTo("projects")}
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-primary px-5 sm:px-6 py-3 sm:py-3.5 text-sm font-semibold text-white shadow-[0_0_40px_-8px_rgba(6,182,212,0.7)] transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
            >
              View My Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => goTo("contact")}
              className="group inline-flex items-center justify-center gap-2 rounded-xl glass px-5 sm:px-6 py-3 sm:py-3.5 text-sm font-semibold text-foreground border border-white/10 hover:border-[var(--accent-cyan)]/40 transition-colors active:scale-[0.98]"
            >
              <MessageCircle className="h-4 w-4 text-[var(--accent-cyan)]" />
              Contact Me
            </button>
          </div>

          <div className="mt-8 sm:mt-10">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
              Follow me on
            </p>
            <div className="flex gap-2.5 sm:gap-3">
              {[
                { Icon: Mail, href: "mailto:rayhankobir972@gmail.com" },
                { Icon: Github, href: "https://github.com/RayhanKobir972" },
                {
                  Icon: Linkedin,
                  href: "https://linkedin.com/in/rayhan-kobir972",
                },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="grid place-items-center h-10 w-10 rounded-xl glass border border-white/5 text-muted-foreground hover:text-[var(--accent-cyan-hover)] hover:border-[var(--accent-cyan)]/40 hover:-translate-y-0.5 transition-all"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="relative w-full max-w-[480px] mx-auto h-[350px] xs:h-[400px] sm:h-[500px] lg:h-[580px] flex items-center justify-center overflow-visible"
        >
          {/* Glow ring */}
          <div className="absolute inset-0 grid place-items-center pointer-events-none">
            <div className="h-[260px] w-[260px] xs:h-[320px] xs:w-[320px] sm:h-[440px] sm:w-[440px] lg:h-[520px] lg:w-[520px] rounded-full bg-gradient-primary opacity-30 blur-3xl animate-pulse-glow" />
          </div>
          <div className="absolute inset-0 grid place-items-center pointer-events-none">
            <div className="relative h-[240px] w-[240px] xs:h-[290px] xs:w-[290px] sm:h-[400px] sm:w-[400px] lg:h-[460px] lg:w-[460px] rounded-full">
              <div
                className="absolute inset-0 rounded-full border border-[var(--accent-cyan)]/30 animate-spin-slow"
                style={{ boxShadow: "inset 0 0 40px rgba(6,182,212,0.15)" }}
              />
              <div className="absolute inset-2 sm:inset-3 rounded-full border border-white/5" />
              <div
                className="absolute -inset-1.5 sm:-inset-2 rounded-full border border-dashed border-white/10 animate-spin-slow"
                style={{
                  animationDirection: "reverse",
                  animationDuration: "30s",
                }}
              />
            </div>
          </div>

          <img
            src={profile}
            alt="Rayhan Kobir portrait"
            width={1024}
            height={1024}
            className="relative z-10 h-[240px] w-[240px] xs:h-[290px] xs:w-[290px] sm:h-[400px] sm:w-[400px] lg:h-[460px] lg:w-[460px] object-cover rounded-full"
            style={{
              maskImage: "radial-gradient(circle, black 70%, transparent 100%)",
            }}
          />

          {/* Floating cards */}
          <FloatCard
            className="top-1 sm:top-4 -right-1 sm:right-2 lg:right-4"
            delay={0.4}
            icon={
              <Briefcase className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[var(--accent-cyan)]" />
            }
            title="1+"
            subtitle="Years Experience"
          />
          <FloatCard
            className="bottom-8 sm:bottom-12 -left-1 sm:left-2 lg:left-4"
            delay={0.6}
            icon={
              <Code2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[var(--accent-cyan)]" />
            }
            title="Clean Code"
            subtitle="Scalable Sites"
          />
          <FloatCard
            className="bottom-0 sm:bottom-2 right-1 sm:right-6 lg:right-10"
            delay={0.8}
            icon={
              <Zap className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[var(--accent-cyan)]" />
            }
            title="Fast"
            subtitle="Performance"
          />
        </motion.div>
      </div>
    </section>
  );
}

function FloatCard({
  className,
  delay,
  icon,
  title,
  subtitle,
}: {
  className?: string;
  delay: number;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={`absolute z-20 ${className}`}
    >
      <div
        className="glass rounded-xl sm:rounded-2xl border border-white/10 px-2.5 py-2 sm:px-4 sm:py-3 min-w-[125px] sm:min-w-[160px] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)] animate-float-y backdrop-blur-xl bg-[#18181b]/85"
        style={{ animationDelay: `${delay}s` }}
      >
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="grid place-items-center h-7 w-7 sm:h-8 sm:w-8 rounded-lg bg-white/5 border border-white/10 shrink-0">
            {icon}
          </div>
          <div>
            <div className="text-xs sm:text-sm font-semibold text-foreground leading-tight">
              {title}
            </div>
            <div className="mt-0.5 text-[10px] sm:text-[11px] text-muted-foreground leading-tight">
              {subtitle}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Stats                                                               */
/* ------------------------------------------------------------------ */
const stats = [
  { icon: Smile, value: "50+", label: "Happy Clients" },
  { icon: Briefcase, value: "80+", label: "Projects Done" },
  { icon: Trophy, value: "1+", label: "Years Experience" },
  { icon: Star, value: "5+", label: "Awards Won" },
];

export function Stats() {
  return (
    <section className="px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="glass rounded-3xl border border-white/5 p-4 sm:p-8 grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex items-center gap-2.5 sm:gap-4"
            >
              <div
                className="grid place-items-center h-10 w-10 sm:h-12 sm:w-12 rounded-xl sm:rounded-2xl bg-gradient-primary/10 border border-[var(--accent-cyan)]/20 shrink-0"
                style={{ background: "rgba(6,182,212,0.08)" }}
              >
                <s.icon className="h-4 w-4 sm:h-5 sm:w-5 text-[var(--accent-cyan)]" />
              </div>
              <div className="min-w-0">
                <div className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">
                  {s.value}
                </div>
                <div className="text-[11px] sm:text-xs text-muted-foreground leading-tight truncate">
                  {s.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section header                                                      */
/* ------------------------------------------------------------------ */
function SectionHeader({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: React.ReactNode;
  desc?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl"
    >
      <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent-cyan)] font-semibold">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
        {title}
      </h2>
      {desc && <p className="mt-4 text-muted-foreground">{desc}</p>}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */
export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <SectionHeader
            eyebrow="About Me"
            title={
              <>
                Crafting digital experiences that{" "}
                <span className="text-gradient">inspire.</span>
              </>
            }
          />
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-lg">
            I'm a passionate WordPress developer with a sharp eye for detail and
            a love for creating seamless digital experiences. I combine
            creativity and technology to build websites that are fast,
            responsive, and genuinely user-friendly.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-lg">
            Over the last one years I've shipped 80+ projects for startups,
            agencies, and growing businesses — from luxury real-estate platforms
            to high-conversion WooCommerce stores.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                goTo("contact");
              }}
              className="inline-flex items-center gap-2 rounded-xl glass border border-white/10 px-5 py-3 text-sm font-medium hover:border-[var(--accent-cyan)]/40 hover:-translate-y-0.5 transition-all"
            >
              <Download className="h-4 w-4 text-[var(--accent-cyan)]" />{" "}
              Download Resume
            </a>
            <button
              onClick={() => goTo("experience")}
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              More About Me <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass rounded-3xl border border-white/5 p-6 sm:p-8 space-y-4"
        >
          {[
            { icon: Smile, label: "Name", value: "Md. Rayhan Kobir" },
            { icon: Mail, label: "Email", value: "rayhankobir972@gmail.com" },
            { icon: MapPin, label: "Location", value: "Dhaka, Bangladesh" },
            {
              icon: Briefcase,
              label: "Experience",
              value: "1+ Years (WordPress)",
            },
            {
              icon: Globe,
              label: "Availability",
              value: "Open to freelance & contract",
            },
          ].map((row) => (
            <div
              key={row.label}
              className="flex items-center gap-4 p-3 rounded-2xl border border-white/5 bg-white/[0.02]"
            >
              <div className="grid place-items-center h-10 w-10 rounded-xl bg-[rgba(6,182,212,0.1)] border border-[var(--accent-cyan)]/20">
                <row.icon className="h-4 w-4 text-[var(--accent-cyan)]" />
              </div>
              <div className="min-w-0">
                <div className="text-xs text-muted-foreground">{row.label}</div>
                <div className="text-sm font-medium text-foreground truncate">
                  {row.value}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Skills                                                              */
/* ------------------------------------------------------------------ */
const AdobeXdIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M14.31 11.45l3.32-5.45h-2.2l-2.22 3.85L11 6h-2.2l3.31 5.42L8.5 17h2.18l2.43-4.2L15.55 17h2.2l-3.44-5.55zM3 2h18a1 1 0 011 1v18a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1zm1 2v16h16V4H4z" />
  </svg>
);

type IconLike = SimpleIcon | React.FC<SVGProps<SVGSVGElement>>;

function isSimpleIcon(icon: IconLike): icon is SimpleIcon {
  return "path" in icon && typeof (icon as SimpleIcon).path === "string";
}

function BrandIcon({
  icon,
  className,
}: {
  icon: IconLike;
  className?: string;
}) {
  if (isSimpleIcon(icon))
    return <SimpleIconSvg icon={icon} className={className} />;
  const C = icon;
  return <C className={className} />;
}

const technicalSkills: { name: string; value: number; icon: IconLike }[] = [
  { name: "WordPress", value: 95, icon: siWordpress },
  { name: "HTML / CSS", value: 95, icon: siHtml5 },
  { name: "PHP", value: 70, icon: siPhp },
  { name: "Tailwind CSS", value: 90, icon: siTailwindcss },
  { name: "JavaScript", value: 90, icon: siJavascript },
  { name: "Elementor", value: 95, icon: siElementor },
  { name: "React", value: 85, icon: siReact },
  { name: "WooCommerce", value: 95, icon: siWoocommerce },
  { name: "MySQL", value: 85, icon: siMysql },
  { name: "Git & GitHub", value: 85, icon: siGithub },
];

const tools: { name: string; icon: IconLike }[] = [
  { name: "VS Code", icon: VSCodeIcon },
  { name: "Figma", icon: siFigma },
  { name: "Photoshop", icon: PhotoshopIcon },
  { name: "Postman", icon: siPostman },
  { name: "Chrome DevTools", icon: siGooglechrome },
  { name: "cPanel Hosting", icon: Globe },
  { name: "Git & GitHub", icon: siGithub },
];

const overviewStats = [
  { value: "10+", label: "Technologies" },
  { value: "1+", label: "Years Experience" },
  { value: "80+", label: "Projects Completed" },
];

const radarAxes = [
  { label: "Frontend", value: 95 },
  { label: "Backend", value: 90 },
  { label: "Design", value: 90 },
  { label: "Performance", value: 85 },
  { label: "Problem Solving", value: 95 },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        {/* Centered header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mx-auto max-w-3xl"
        >
          <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[var(--accent-cyan)] font-semibold">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[var(--accent-cyan)]/60" />
            My Skills
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[var(--accent-cyan)]/60" />
          </div>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Skills That Power My{" "}
            <span className="text-gradient">Creativity</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            A blend of technical expertise, creative thinking, and
            problem-solving abilities that help me build exceptional digital
            experiences.
          </p>
        </motion.div>

        {/* Two-card row */}
        <div className="mt-14 grid lg:grid-cols-5 gap-6">
          {/* Skills Overview */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 glass rounded-3xl border border-white/5 p-6 sm:p-8 hover:border-[var(--accent-cyan)]/30 transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="grid place-items-center h-9 w-9 rounded-xl bg-[rgba(6,182,212,0.1)] border border-[var(--accent-cyan)]/30">
                <BarChart3 className="h-4.5 w-4.5 text-[var(--accent-cyan)]" />
              </span>
              <h3 className="text-lg font-semibold">Skills Overview</h3>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 border-b border-white/5 pb-6">
              {overviewStats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-display text-2xl sm:text-3xl font-bold text-gradient">
                    {s.value}
                  </div>
                  <div className="mt-1 text-[11px] text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid place-items-center">
              <RadarChart axes={radarAxes} />
            </div>

            <div className="mt-6">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  goTo("contact");
                }}
                className="inline-flex items-center gap-2 rounded-xl glass border border-white/10 px-4 py-2.5 text-xs font-medium hover:border-[var(--accent-cyan)]/40 hover:-translate-y-0.5 transition-all"
              >
                <Download className="h-3.5 w-3.5 text-[var(--accent-cyan)]" />
                View Full Resume
              </a>
            </div>
          </motion.div>

          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 glass rounded-3xl border border-white/5 p-6 sm:p-8 hover:border-[var(--accent-cyan)]/30 transition-colors"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 min-w-0">
                <span className="grid place-items-center h-9 w-9 rounded-xl bg-[rgba(6,182,212,0.1)] border border-[var(--accent-cyan)]/30 shrink-0">
                  <Code className="h-4.5 w-4.5 text-[var(--accent-cyan)]" />
                </span>
                <h3 className="text-lg font-semibold truncate">
                  Technical Skills
                </h3>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-1 text-xs text-[var(--accent-cyan)] hover:text-[var(--accent-cyan-hover)] shrink-0"
              >
                View All Skills <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>

            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              {technicalSkills.map((s, i) => (
                <SkillRow key={s.name} {...s} delay={i * 0.04} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tools I Use */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-6 glass rounded-3xl border border-white/5 p-6 sm:p-8 hover:border-[var(--accent-cyan)]/30 transition-colors"
        >
          <div className="flex items-center gap-3">
            <span className="grid place-items-center h-9 w-9 rounded-xl bg-[rgba(6,182,212,0.1)] border border-[var(--accent-cyan)]/30">
              <Package className="h-4.5 w-4.5 text-[var(--accent-cyan)]" />
            </span>
            <h3 className="text-lg font-semibold">Tools I Use</h3>
          </div>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {tools.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ y: -4 }}
                className="group glass rounded-2xl border border-white/5 p-4 flex flex-col items-center gap-2.5 hover:border-[var(--accent-cyan)]/40 transition-colors"
              >
                <div className="grid place-items-center h-14 w-14 rounded-xl bg-white/[0.03] border border-white/5 group-hover:border-[var(--accent-cyan)]/30 group-hover:shadow-[0_0_20px_-4px_rgba(6,182,212,0.5)] transition-all">
                  <BrandIcon
                    icon={t.icon}
                    className="h-7 w-7 text-[var(--accent-cyan-hover)]"
                  />
                </div>
                <span className="text-[11px] text-muted-foreground text-center leading-tight">
                  {t.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SkillRow({
  name,
  value,
  icon,
  delay,
}: {
  name: string;
  value: number;
  icon: IconLike;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <div
      ref={ref}
      className="group rounded-2xl border border-white/5 bg-white/[0.02] p-3.5 hover:border-[var(--accent-cyan)]/30 hover:bg-white/[0.04] transition-colors"
    >
      <div className="flex items-center gap-3">
        <div className="grid place-items-center h-10 w-10 rounded-xl bg-white/[0.03] border border-white/5 shrink-0 group-hover:border-[var(--accent-cyan)]/30 transition-colors">
          <BrandIcon
            icon={icon}
            className="h-5 w-5 text-[var(--accent-cyan-hover)]"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline justify-between gap-2">
            <span className="text-sm font-medium text-foreground truncate">
              {name}
            </span>
            <span className="text-[11px] text-muted-foreground tabular-nums shrink-0">
              {value}%
            </span>
          </div>
          <div className="mt-2 relative h-1.5 rounded-full bg-white/5 overflow-visible">
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: `${value}%` } : { width: 0 }}
              transition={{ duration: 1.2, delay, ease: "easeOut" }}
              className="h-full rounded-full relative"
              style={{
                background: "linear-gradient(90deg,#06b6d4,#3b82f6)",
                boxShadow: "0 0 12px rgba(6,182,212,0.6)",
              }}
            >
              <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 h-2.5 w-2.5 rounded-full bg-[var(--accent-cyan)] shadow-[0_0_10px_rgba(6,182,212,0.9)]" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RadarChart({ axes }: { axes: { label: string; value: number }[] }) {
  const size = 260;
  const cx = size / 2;
  const cy = size / 2;
  const radius = 92;
  const n = axes.length;

  const point = (i: number, r: number) => {
    const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
    return [cx + Math.cos(angle) * r, cy + Math.sin(angle) * r] as const;
  };

  const rings = [0.25, 0.5, 0.75, 1];
  const dataPath =
    axes
      .map((a, i) => {
        const [x, y] = point(i, radius * (a.value / 100));
        return `${i === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`;
      })
      .join(" ") + " Z";

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      className="w-full max-w-[280px] h-auto"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="radarFill" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.15" />
        </radialGradient>
      </defs>
      {rings.map((r, i) => (
        <polygon
          key={i}
          points={axes
            .map((_, j) => {
              const [x, y] = point(j, radius * r);
              return `${x},${y}`;
            })
            .join(" ")}
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1"
        />
      ))}
      {axes.map((_, i) => {
        const [x, y] = point(i, radius);
        return (
          <line
            key={i}
            x1={cx}
            y1={cy}
            x2={x}
            y2={y}
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="1"
          />
        );
      })}
      <motion.path
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        d={dataPath}
        fill="url(#radarFill)"
        stroke="#06b6d4"
        strokeWidth="1.5"
        style={{
          transformOrigin: `${cx}px ${cy}px`,
          filter: "drop-shadow(0 0 12px rgba(6,182,212,0.5))",
        }}
      />
      {axes.map((a, i) => {
        const [x, y] = point(i, radius * (a.value / 100));
        return <circle key={i} cx={x} cy={y} r={3.5} fill="#06b6d4" />;
      })}
      {axes.map((a, i) => {
        const [x, y] = point(i, radius + 22);
        return (
          <g key={a.label}>
            <text
              x={x}
              y={y - 4}
              textAnchor="middle"
              className="fill-muted-foreground"
              style={{ fontSize: 10 }}
            >
              {a.label}
            </text>
            <text
              x={x}
              y={y + 8}
              textAnchor="middle"
              fill="#22d3ee"
              style={{ fontSize: 10, fontWeight: 600 }}
            >
              {a.value}%
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */
const services = [
  {
    icon: Globe,
    title: "Web Development",
    desc: "Fast, accessible websites built with modern best practices and clean code.",
  },
  {
    icon: PenTool,
    title: "WordPress Development",
    desc: "Custom themes, plugins, and bespoke WP solutions that scale.",
  },
  {
    icon: Palette,
    title: "Webflow",
    desc: "Modern, responsive websites crafted with clean layouts, smooth interactions, and pixel-perfect design.",
  },
  {
    icon: ShoppingBag,
    title: "WooCommerce",
    desc: "High-performance stores with optimised checkouts and product pages.",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    desc: "Core Web Vitals tuning, caching, and image pipelines for lightning-fast loads.",
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    desc: "Updates, backups, monitoring, and ongoing improvements.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Services"
          title={
            <>
              End-to-end services for{" "}
              <span className="text-gradient">modern brands.</span>
            </>
          }
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.55 }}
              whileHover={{ y: -6 }}
              className="group gradient-border glass rounded-3xl p-6 border border-white/5 hover:border-[var(--accent-cyan)]/30 transition-colors"
            >
              <div className="grid place-items-center h-12 w-12 rounded-2xl bg-gradient-primary text-white shadow-[0_0_30px_-8px_rgba(6,182,212,0.7)] group-hover:rotate-6 transition-transform">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
              <div className="mt-5 inline-flex items-center gap-1 text-xs text-[var(--accent-cyan)] opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */
const projects = [
  {
    img: p1,
    title: "Luxury Real Estate",
    desc: "Modern real-estate website with custom listings and advanced filtering.",
    tags: ["WordPress", "Elementor", "ACF"],
    demo: "https://example.com",
    repo: "https://github.com",
  },
  {
    img: p2,
    title: "Digital Agency",
    desc: "Creative agency site with smooth animations and interactive UI.",
    tags: ["WordPress", "PHP", "JavaScript"],
    demo: "https://example.com",
    repo: "https://github.com",
  },
  {
    img: p3,
    title: "eCommerce Store",
    desc: "Custom WooCommerce store with modern design and optimised performance.",
    tags: ["WooCommerce", "WordPress", "UI/UX"],
    demo: "https://example.com",
    repo: "https://github.com",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <SectionHeader
            eyebrow="Featured Projects"
            title={
              <>
                Selected work from{" "}
                <span className="text-gradient">recent years.</span>
              </>
            }
          />
          <a
            href="#"
            className="inline-flex items-center gap-1 text-sm text-[var(--accent-cyan)] hover:text-[var(--accent-cyan-hover)]"
          >
            View all projects <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} {...p} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  img,
  title,
  desc,
  tags,
  demo,
  repo,
  delay,
}: (typeof projects)[number] & { delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useTransform(
    useSpring(my, { stiffness: 150, damping: 15 }),
    [-0.5, 0.5],
    [6, -6],
  );
  const ry = useTransform(
    useSpring(mx, { stiffness: 150, damping: 15 }),
    [-0.5, 0.5],
    [-6, 6],
  );

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      className="group relative glass rounded-3xl border border-white/5 overflow-hidden hover:border-[var(--accent-cyan)]/40 transition-colors"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={img}
          alt={title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/40 to-transparent" />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-tr from-[var(--accent-cyan)]/20 via-transparent to-[var(--accent-blue)]/20" />
        <a
          href={demo}
          target="_blank"
          rel="noreferrer"
          aria-label={`${title} live demo`}
          className="absolute top-4 right-4 grid place-items-center h-10 w-10 rounded-full glass border border-white/10 text-[var(--accent-cyan)] hover:bg-gradient-primary hover:text-white transition-all"
        >
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-1.5">
          {tags.map((t) => (
            <span
              key={t}
              className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
        <h3 className="mt-4 text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          {desc}
        </p>
        <div className="mt-5 flex items-center gap-3">
          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--accent-cyan)] hover:text-[var(--accent-cyan-hover)]"
          >
            Live Demo <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <span className="h-3 w-px bg-white/10" />
          <a
            href={repo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground"
          >
            <Github className="h-3.5 w-3.5" /> GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Experience timeline                                                 */
/* ------------------------------------------------------------------ */
const experience = [
  {
    year: "Present",
    role: "WordPress Developer",
    company:
      "Building and maintaining high-performance WordPress websites with custom solutions, SEO, and optimization.",
  },
  {
    year: "Oct 2025 – Feb 2026",
    role: "WordPress Developer",
    company: "SardarIT",
    desc: "Developed 40+ responsive WordPress websites, WooCommerce stores, and optimized performance, security, and SEO.",
  },
  {
    year: "Jun 2025 – Aug 2025",
    role: "MERN Stack Developer",
    company: "9AM Solution",
    desc: "Built full-stack web applications using MongoDB, Express.js, React.js, and Node.js.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Experience"
          title={
            <>
              A timeline of{" "}
              <span className="text-gradient">craft & growth.</span>
            </>
          }
        />

        <div className="mt-14 relative">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent-cyan)]/60 via-white/10 to-transparent -translate-x-px" />
          <div className="space-y-10">
            {experience.map((e, i) => (
              <motion.div
                key={e.year + e.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className={`relative flex flex-col sm:flex-row items-start gap-6 ${
                  i % 2 === 1 ? "sm:flex-row-reverse" : ""
                }`}
              >
                <div className="hidden sm:block w-1/2" />
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-2 z-10">
                  <div className="h-4 w-4 rounded-full bg-gradient-primary shadow-[0_0_20px_rgba(6,182,212,0.8)] ring-4 ring-[#09090b]" />
                </div>
                <div className="pl-12 sm:pl-0 sm:w-1/2 sm:px-8">
                  <div className="glass rounded-2xl border border-white/5 p-5 hover:border-[var(--accent-cyan)]/30 transition-colors">
                    <span className="text-xs font-semibold text-[var(--accent-cyan)]">
                      {e.year}
                    </span>
                    <h3 className="mt-1 text-lg font-semibold">{e.role}</h3>
                    <p className="text-sm text-muted-foreground">{e.company}</p>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {e.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Testimonials                                                        */
/* ------------------------------------------------------------------ */
const testimonials = [
  {
    name: "John Doe",
    role: "CEO, Tech Solutions",
    text: "Rayhan delivered an exceptional website that exceeded our expectations. Highly recommended!",
  },
  {
    name: "Sarah Smith",
    role: "Founder, Digital Agency",
    text: "Professional, creative, and always on time. Working with Rayhan was a great experience.",
  },
  {
    name: "Michael Brown",
    role: "Marketing Manager",
    text: "The design and performance of our website improved drastically. Amazing work!",
  },
  {
    name: "Emily Carter",
    role: "Product Lead, Loom",
    text: "A rare blend of design taste and engineering rigour. We'd hire him again in a heartbeat.",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(
      () => setI((v) => (v + 1) % testimonials.length),
      5000,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="What Clients Say"
          title={
            <>
              Trusted by founders, <br className="hidden sm:block" /> agencies,
              and growing teams.
            </>
          }
        />

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {testimonials.slice(0, 3).map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="glass rounded-3xl border border-white/5 p-6 hover:border-[var(--accent-cyan)]/30 transition-colors"
            >
              <Quote className="h-6 w-6 text-[var(--accent-cyan)]" />
              <p className="mt-4 text-sm text-foreground/90 leading-relaxed">
                {t.text}
              </p>
              <div className="mt-5 flex items-center gap-1 text-[var(--accent-cyan)]">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="h-10 w-10 rounded-full bg-gradient-primary grid place-items-center text-sm font-semibold text-white">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured slider */}
        <div className="mt-10 glass rounded-3xl border border-white/5 p-8 sm:p-10 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-gradient-primary opacity-20 blur-3xl" />
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Quote className="h-8 w-8 text-[var(--accent-cyan)]" />
            <p className="mt-4 text-lg sm:text-xl font-display leading-relaxed text-foreground">
              "{testimonials[i].text}"
            </p>
            <div className="mt-5 text-sm">
              <span className="font-semibold">{testimonials[i].name}</span>
              <span className="text-muted-foreground">
                {" "}
                — {testimonials[i].role}
              </span>
            </div>
          </motion.div>
          <div className="mt-6 flex gap-2">
            {testimonials.map((_, k) => (
              <button
                key={k}
                onClick={() => setI(k)}
                className={`h-1.5 rounded-full transition-all ${
                  k === i ? "w-8 bg-gradient-primary" : "w-3 bg-white/15"
                }`}
                aria-label={`Show testimonial ${k + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Contact                                                             */
/* ------------------------------------------------------------------ */
export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok">("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Required";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = "Invalid email";
    if (!form.message.trim()) errs.message = "Required";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setStatus("loading");
    setTimeout(() => {
      setStatus("ok");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Let's Work Together"
          title={
            <>
              Have a project in mind?{" "}
              <span className="text-gradient">Let's talk.</span>
            </>
          }
        />

        <div className="mt-12 grid lg:grid-cols-5 gap-6">
          {/* Info */}
          <div className="lg:col-span-2 space-y-4">
            {[
              {
                icon: Mail,
                label: "Email",
                value: "rayhankobir972@gmail.com",
                href: "mailto:rayhankobir972@gmail.com",
              },
              {
                icon: Phone,
                label: "Phone",
                value: "+880 1318 924142",
                href: "tel:+8801318924142",
              },
              {
                icon: MapPin,
                label: "Location",
                value: "Khilkhet, Dhaka, Bangladesh",
              },
            ].map((row) => (
              <a
                key={row.label}
                href={row.href ?? "#"}
                className="block glass rounded-2xl border border-white/5 p-5 hover:border-[var(--accent-cyan)]/40 hover:-translate-y-0.5 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="grid place-items-center h-11 w-11 rounded-xl bg-gradient-primary text-white shadow-[0_0_30px_-10px_rgba(6,182,212,0.6)]">
                    <row.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">
                      {row.label}
                    </div>
                    <div className="text-sm font-medium">{row.value}</div>
                  </div>
                </div>
              </a>
            ))}
            <div className="glass rounded-2xl border border-white/5 p-5">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-75 animate-ping" />
                  <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Available for freelance projects
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                I'm currently accepting new projects and collaborations for the
                next quarter.
              </p>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={submit}
            className="lg:col-span-3 glass rounded-3xl border border-white/5 p-6 sm:p-8 space-y-4"
            suppressHydrationWarning
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field
                label="Your Name"
                value={form.name}
                error={errors.name}
                onChange={(v) => setForm({ ...form, name: v })}
              />
              <Field
                label="Your Email"
                type="email"
                value={form.email}
                error={errors.email}
                onChange={(v) => setForm({ ...form, email: v })}
              />
            </div>
            <Field
              label="Subject"
              value={form.subject}
              onChange={(v) => setForm({ ...form, subject: v })}
            />
            <div>
              <label className="block text-xs text-muted-foreground mb-2">
                Your Message
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                className="w-full rounded-2xl bg-white/[0.03] border border-white/10 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-[var(--accent-cyan)]/60 focus:ring-2 focus:ring-[var(--accent-cyan)]/20 transition-colors resize-none"
                placeholder="Tell me about your project..."
                suppressHydrationWarning
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-400">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 text-sm font-semibold text-white shadow-[0_0_40px_-8px_rgba(6,182,212,0.6)] hover:-translate-y-0.5 transition-transform disabled:opacity-70"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                </>
              ) : status === "ok" ? (
                <>
                  <CheckCircle2 className="h-4 w-4" /> Message sent
                </>
              ) : (
                <>
                  Send Message
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  error,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  error?: string;
}) {
  return (
    <div>
      <label className="block text-xs text-muted-foreground mb-2">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl bg-white/[0.03] border border-white/10 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-[var(--accent-cyan)]/60 focus:ring-2 focus:ring-[var(--accent-cyan)]/20 transition-colors"
        placeholder={label}
        suppressHydrationWarning
      />
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */
export function Footer() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <footer className="px-4 sm:px-6 pb-10">
      <div className="mx-auto max-w-7xl pt-10 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display text-xl font-bold tracking-tight"
        >
          Rayhan<span className="text-gradient">.</span>
        </button>
        <div className="flex items-center gap-3">
          {[Github, Linkedin, Dribbble, Twitter].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="grid place-items-center h-9 w-9 rounded-xl glass border border-white/5 text-muted-foreground hover:text-[var(--accent-cyan-hover)] hover:border-[var(--accent-cyan)]/40 transition-all"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
        <p className="text-xs text-muted-foreground" suppressHydrationWarning>
          © {new Date().getFullYear()} Rayhan Ahmed. All rights reserved.
        </p>
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-40 grid place-items-center h-12 w-12 rounded-2xl bg-gradient-primary text-white shadow-[0_0_30px_-8px_rgba(6,182,212,0.7)] transition-all ${
          show
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
}
