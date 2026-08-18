import React, { useRef, useEffect, useState } from "react";
import { projects } from "../data/projects";
import { experience } from "../data/experience";
import { education } from "../data/education";
import { achievements } from "../data/achievements";
import { FaReact, FaGithub, FaGit, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import {
  SiVite,
  SiTailwindcss,
  SiFirebase,
  SiGo,
  SiTypescript,
  SiPostgresql,
  SiDocker,
  SiRailway,
} from "react-icons/si";

/* ─── Scroll reveal hook ─────────────────────────────────────── */
function useReveal(): React.RefObject<HTMLDivElement | null> {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".reveal").forEach((c) => c.classList.add("in-view"));
          obs.disconnect();
        }
      },
      { threshold: 0.06 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

/* ─── Cursor spotlight glow ──────────────────────────────────── */
function handleSpotlight(e: React.MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
  el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
}

/* ─── Tech stack (hero chips) ────────────────────────────────── */
const TECH_PRIMARY = [
  { name: "Go", icon: <SiGo /> },
  { name: "React", icon: <FaReact /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Docker", icon: <SiDocker /> },
  { name: "Railway", icon: <SiRailway /> },
  { name: "Git", icon: <FaGit /> },
];

const TECH_SECONDARY = [
  { name: "Flutter", icon: <FaFlutter /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Vite", icon: <SiVite /> },
];

/* ─── Stats strip ─────────────────────────────────────────────── */
const STATS = [
  { value: "5", label: "Live commercial platforms" },
  { value: "10+", label: "Production modules shipped" },
  { value: "6", label: "Months production experience" },
];

/* ─── Section label ──────────────────────────────────────────── */
function SectionLabel({ number, title }: { number: string; title: string }) {
  return (
    <div className="reveal" style={{ display: "flex", alignItems: "baseline", gap: "16px", marginBottom: "2.5rem" }}>
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.7rem",
          fontWeight: 500,
          color: "var(--accent)",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
        }}
      >
        {number}
      </span>
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
          fontWeight: 800,
          color: "var(--text)",
          lineHeight: 1.05,
          letterSpacing: "-0.025em",
          margin: 0,
        }}
      >
        {title}
      </h2>
    </div>
  );
}

/* ─── Tech tag pill (mono) ───────────────────────────────────── */
function TagMono({ children }: { children: React.ReactNode }) {
  return <span className="tag-mono">{children}</span>;
}

/* ─── Featured project (spotlight card) ──────────────────────── */
function FeaturedProjectCard({ project: p, index: i }: { project: typeof projects[0]; index: number }) {
  return (
    <article
      className={`reveal reveal-delay-${Math.min(i + 1, 5)} spotlight-card`}
      onMouseMove={handleSpotlight}
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "20px",
        padding: "clamp(22px, 4vw, 34px)",
        overflow: "hidden",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px", marginBottom: "18px" }}>
        <div>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: "10px",
            }}
          >
            <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "var(--accent)" }} />
            Featured
          </span>
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(1.35rem, 2.5vw, 1.7rem)",
              color: "var(--text)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              marginBottom: "6px",
            }}
          >
            {p.title}
          </h3>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "var(--accent-2)", fontWeight: 500 }}>
            {p.subtitle}
          </p>
        </div>
        {p.live && (
          <a
            href={p.live}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.8rem",
              fontWeight: 700,
              color: "var(--accent)",
              textDecoration: "none",
              flexShrink: 0,
              border: "1.5px solid var(--border)",
              borderRadius: "8px",
              padding: "7px 14px",
            }}
          >
            Live Site ↗
          </a>
        )}
      </div>

      <div style={{ display: "flex", gap: "14px", fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "18px", flexWrap: "wrap" }}>
        <span>{p.role}</span>
        <span style={{ opacity: 0.5 }}>·</span>
        <span>{p.period}</span>
      </div>

      <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] gap-6 lg:gap-10">
        <div>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.75, marginBottom: "18px" }}>
            {p.summary}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {p.stack.map((t) => (
              <TagMono key={t}>{t}</TagMono>
            ))}
          </div>
        </div>

        <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
          {p.highlights.map((h, j) => (
            <li
              key={j}
              style={{
                display: "flex",
                gap: "10px",
                fontFamily: "var(--font-body)",
                fontSize: "0.855rem",
                color: "var(--text-muted)",
                lineHeight: 1.65,
              }}
            >
              <span style={{ color: "var(--accent-2)", flexShrink: 0, marginTop: "6px", width: "4px", height: "4px", borderRadius: "50%", background: "var(--accent-2)" }} />
              {h}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

/* ─── Standard project card ──────────────────────────────────── */
function ProjectCard({ project: p, index: i }: { project: typeof projects[0]; index: number }) {
  return (
    <article
      className={`reveal reveal-delay-${Math.min(i + 1, 5)} spotlight-card`}
      onMouseMove={handleSpotlight}
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "16px",
        padding: "22px 24px",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.28s var(--ease-out), border-color 0.2s",
      }}
    >
      <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--text-muted)", marginBottom: "8px", letterSpacing: "0.04em" }}>
        {p.period}
      </p>
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: "1.025rem",
          color: "var(--text)",
          lineHeight: 1.3,
          marginBottom: "4px",
        }}
      >
        {p.title}
      </h3>
      <p style={{ fontFamily: "var(--font-body)", fontSize: "0.82rem", color: "var(--accent-2)", fontWeight: 500, marginBottom: "10px" }}>
        {p.subtitle}
      </p>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.855rem",
          color: "var(--text-muted)",
          lineHeight: 1.75,
          flexGrow: 1,
          marginBottom: "16px",
        }}
      >
        {p.summary}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: p.live ? "16px" : undefined }}>
        {p.stack.map((t) => (
          <TagMono key={t}>{t}</TagMono>
        ))}
      </div>
      {p.live ? (
        <a
          href={p.live}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "0.78rem",
            fontWeight: 700,
            color: "var(--accent)",
            textDecoration: "none",
            letterSpacing: "0.01em",
          }}
        >
          Live Site ↗
        </a>
      ) : (
        p.role !== "Academic project" && (
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--text-muted)", opacity: 0.75 }}>
            Private client system
          </span>
        )
      )}
    </article>
  );
}

/* ─── Contact form ───────────────────────────────────────────── */
type FormStatus = "idle" | "sending" | "success" | "error";

function ContactForm() {
  const [fields, setFields] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setFields({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputStyle: React.CSSProperties = { resize: "none" };

  const cardStyle: React.CSSProperties = {
    background: "var(--surface)",
    border: "1px solid var(--border)",
    borderRadius: "20px",
    padding: "28px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  };

  if (status === "success") {
    return (
      <div style={{ ...cardStyle, alignItems: "center", justifyContent: "center", textAlign: "center", minHeight: "320px" }}>
        <div style={{ fontSize: "2rem" }}>✓</div>
        <div>
          <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.1rem", color: "var(--text)", marginBottom: "6px" }}>
            Message sent!
          </p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "var(--text-muted)" }}>
            Thanks for reaching out. I'll get back to you soon.
          </p>
        </div>
        <button
          onClick={() => setStatus("idle")}
          style={{ fontFamily: "var(--font-display)", fontSize: "0.8rem", fontWeight: 600, color: "var(--accent)", background: "none", border: "none", cursor: "pointer", padding: 0 }}
        >
          Send another →
        </button>
      </div>
    );
  }

  return (
    <div style={cardStyle}>
      {/* Card header */}
      <div>
        <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.05rem", color: "var(--text)", marginBottom: "2px" }}>
          Get in Touch
        </p>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.82rem", color: "var(--text-muted)" }}>
          I'll reply as soon as I can.
        </p>
      </div>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        <div className="grid sm:grid-cols-2 gap-3">
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <label style={{ fontFamily: "var(--font-display)", fontSize: "0.72rem", fontWeight: 600, color: "var(--text-muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Name
            </label>
            <input
              className="portfolio-input"
              type="text"
              name="name"
              placeholder="Muhammad Nazrul"
              value={fields.name}
              onChange={handleChange}
              required
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <label style={{ fontFamily: "var(--font-display)", fontSize: "0.72rem", fontWeight: 600, color: "var(--text-muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Email
            </label>
            <input
              className="portfolio-input"
              type="email"
              name="email"
              placeholder="you@email.com"
              value={fields.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <label style={{ fontFamily: "var(--font-display)", fontSize: "0.72rem", fontWeight: 600, color: "var(--text-muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Message
          </label>
          <textarea
            className="portfolio-input"
            name="message"
            placeholder="Hi Nazrul, I'd like to..."
            rows={5}
            value={fields.message}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        {status === "error" && (
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.82rem", color: "#ef4444" }}>
            Something went wrong. Please try again or email me directly.
          </p>
        )}

        <button
          type="submit"
          disabled={status === "sending"}
          style={{
            width: "100%",
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "0.875rem",
            letterSpacing: "0.01em",
            background: status === "sending" ? "var(--text-muted)" : "var(--text)",
            color: "var(--bg)",
            border: "none",
            borderRadius: "10px",
            padding: "12px 24px",
            cursor: status === "sending" ? "not-allowed" : "pointer",
            transition: "opacity 0.2s, background 0.2s",
          }}
          onMouseEnter={(e) => { if (status !== "sending") e.currentTarget.style.opacity = "0.8"; }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
        >
          {status === "sending" ? "Sending…" : "Send Message"}
        </button>
      </form>
    </div>
  );
}

/* ─── Contact card ───────────────────────────────────────────── */
function ContactCard({ label, value, href, icon }: { label: string; value: string; href: string; icon: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target={href.startsWith("mailto") ? undefined : "_blank"}
      rel="noreferrer"
      style={{
        display: "block",
        background: "var(--surface)",
        border: `1px solid ${hovered ? "var(--accent)" : "var(--border)"}`,
        borderRadius: "14px",
        padding: "18px 20px",
        textDecoration: "none",
        transition: "border-color 0.2s, transform 0.2s",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span style={{ display: "block", fontSize: "1.05rem", color: "var(--accent)", marginBottom: "8px" }}>{icon}</span>
      <p style={{ fontFamily: "var(--font-display)", fontSize: "0.65rem", fontWeight: 600, color: "var(--text-muted)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "3px" }}>
        {label}
      </p>
      <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8rem", color: "var(--text)", fontWeight: 500, wordBreak: "break-all" }}>
        {value}
      </p>
    </a>
  );
}

/* ─── Divider ────────────────────────────────────────────────── */
function Divider() {
  return <div style={{ height: "1px", background: "var(--border)", margin: "0 clamp(1.25rem, 4vw, 3rem)" }} />;
}

/* ─── Section wrapper style ──────────────────────────────────── */
const S: React.CSSProperties = {
  padding: "clamp(3rem, 6vw, 5rem) clamp(1.25rem, 4vw, 3rem)",
  maxWidth: "72rem",
  margin: "0 auto",
};

const featuredProjects = projects.filter((p) => p.featured);
const otherProjects = projects.filter((p) => !p.featured);

/* ─── Home page ──────────────────────────────────────────────── */
export default function Home() {
  const heroRef    = useRef<HTMLDivElement>(null);
  const aboutRef   = useReveal();
  const eduRef     = useReveal();
  const expRef     = useReveal();
  const projRef    = useReveal();
  const contactRef = useReveal();

  // Staggered hero entrance on mount
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const items = el.querySelectorAll<HTMLElement>(".hero-item");
    items.forEach((item, i) => {
      item.style.opacity = "0";
      item.style.transform = "translateY(14px)";
      setTimeout(() => {
        item.style.transition =
          "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)";
        item.style.opacity = "1";
        item.style.transform = "translateY(0)";
      }, 60 + i * 100);
    });
  }, []);

  return (
    <div style={{ background: "var(--bg)", color: "var(--text)" }}>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <div
        ref={heroRef}
        id="home"
        className="scroll-mt-14 hero-section"
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          padding: "clamp(2rem, 6vw, 5rem) clamp(1.25rem, 4vw, 3rem)",
        }}
      >
        <div className="aurora-bg" aria-hidden="true" />
        <div
          className="w-full grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-center"
          style={{ maxWidth: "72rem", margin: "0 auto", position: "relative", zIndex: 1 }}
        >
          {/* Text content */}
          <div>
            {/* Status badge */}
            <div
              className="hero-item"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "var(--surface-subtle)",
                border: "1px solid var(--border)",
                borderRadius: "100px",
                padding: "5px 14px",
                marginBottom: "1.75rem",
              }}
            >
              <span className="pulse-dot" />
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  fontWeight: 500,
                  color: "var(--text-muted)",
                  letterSpacing: "0.06em",
                }}
              >
                Software Engineer · Open to related roles
              </span>
            </div>

            {/* Name */}
            <h1
              className="hero-item"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(3.5rem, 10vw, 7rem)",
                fontWeight: 800,
                lineHeight: 0.92,
                letterSpacing: "-0.04em",
                color: "var(--text)",
                marginBottom: "1.5rem",
              }}
            >
              Nazrul
              <br />
              <span className="grad-text">Arif</span>
            </h1>

            {/* Tagline */}
            <p
              className="hero-item"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
                color: "var(--text-muted)",
                lineHeight: 1.75,
                maxWidth: "500px",
                marginBottom: "2rem",
              }}
            >
              Fresh Software Engineering graduate with six months of production full-stack experience across five live commercial platforms. Builds React and TypeScript frontends on Go REST APIs and PostgreSQL, and owns the deployment pipeline end to end.
            </p>

            {/* CTAs */}
            <div
              className="hero-item"
              style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "2.25rem" }}
            >
              <a
                href="#projects"
                style={{
                  fontFamily: "var(--font-display)",
                  background: "var(--text)",
                  color: "var(--bg)",
                  padding: "11px 22px",
                  borderRadius: "10px",
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  textDecoration: "none",
                  letterSpacing: "0.01em",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                View Projects
              </a>
              <a
                href="#contact"
                style={{
                  fontFamily: "var(--font-display)",
                  background: "transparent",
                  color: "var(--text)",
                  padding: "11px 22px",
                  borderRadius: "10px",
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  textDecoration: "none",
                  border: "1.5px solid var(--border)",
                  letterSpacing: "0.01em",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--text-muted)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
              >
                Get in Touch
              </a>
            </div>

            {/* Stats strip */}
            <div className="hero-item" style={{ display: "flex", flexWrap: "wrap", gap: "clamp(1.5rem, 4vw, 2.5rem)", marginBottom: "2rem" }}>
              {STATS.map((s) => (
                <div key={s.label}>
                  <p style={{ fontFamily: "var(--font-mono)", fontWeight: 600, fontSize: "1.5rem", color: "var(--text)", letterSpacing: "-0.02em", lineHeight: 1 }}>
                    {s.value}
                  </p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.72rem", color: "var(--text-muted)", marginTop: "4px", maxWidth: "120px", lineHeight: 1.35 }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Tech chips */}
            <div className="hero-item" style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {TECH_PRIMARY.map((t) => (
                  <div
                    key={t.name}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                      borderRadius: "8px",
                      padding: "5px 12px",
                      fontFamily: "var(--font-display)",
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      color: "var(--text-muted)",
                    }}
                  >
                    <span style={{ color: "var(--accent)", display: "flex", alignItems: "center", fontSize: "13px" }}>
                      {t.icon}
                    </span>
                    {t.name}
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", opacity: 0.65 }}>
                {TECH_SECONDARY.map((t) => (
                  <div
                    key={t.name}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                      borderRadius: "8px",
                      padding: "4px 10px",
                      fontFamily: "var(--font-display)",
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      color: "var(--text-muted)",
                    }}
                  >
                    <span style={{ color: "var(--accent-2)", display: "flex", alignItems: "center", fontSize: "12px" }}>
                      {t.icon}
                    </span>
                    {t.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Profile image (desktop only) */}
          <div className="hidden md:flex" style={{ justifyContent: "center" }}>
            <img
              src="/nazrul.png"
              alt="Nazrul Arif"
              style={{
                width: "clamp(200px, 22vw, 300px)",
                objectFit: "contain",
                filter: "drop-shadow(0 24px 60px rgba(0,0,0,0.22))",
              }}
            />
          </div>
        </div>
      </div>

      <Divider />

      {/* ── ABOUT ────────────────────────────────────────────── */}
      <div ref={aboutRef} id="about" className="scroll-mt-14" style={S}>
        <SectionLabel number="01" title="About" />
        <p
          className="reveal reveal-delay-1"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(1rem, 2.5vw, 1.15rem)",
            color: "var(--text-muted)",
            lineHeight: 1.85,
            maxWidth: "660px",
          }}
        >
          I'm a fresh Software Engineering graduate from{" "}
          <strong style={{ color: "var(--text)", fontWeight: 500 }}>Universiti Kuala Lumpur MIIT</strong>{" "}
          (CGPA 3.46), graduating November 2026 with all degree requirements completed. Over six months as a{" "}
          <strong style={{ color: "var(--text)", fontWeight: 500 }}>
            Software Engineer Intern at{" "}
            <a
              href="https://nearbiz.tech"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--accent)", textDecoration: "none", fontWeight: 600 }}
            >
              Nearbiz Tech
            </a>
          </strong>
          , I shipped production code across five live commercial platforms — building React and TypeScript frontends on Go REST APIs and PostgreSQL, and owning deployment end to end on Railway and Cloudflare. I have prior industry experience from an internship at Anak2U Sdn. Bhd., where I worked on Flutter mobile development. I care about writing clean, tested code that solves real problems for real users.
        </p>
      </div>

      <Divider />

      {/* ── EDUCATION ────────────────────────────────────────── */}
      <div ref={eduRef} id="education" className="scroll-mt-14" style={S}>
        <SectionLabel number="02" title="Education" />
        <div className="grid sm:grid-cols-2 gap-4" style={{ maxWidth: "680px" }}>
          {education.map((edu, i) => (
            <div
              key={edu.institution}
              className={`reveal reveal-delay-${i + 1}`}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "16px",
                padding: "22px 24px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  fontWeight: 500,
                  color: "var(--text-muted)",
                  letterSpacing: "0.06em",
                  marginBottom: "6px",
                }}
              >
                {edu.period}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  color: "var(--text)",
                  lineHeight: 1.3,
                  marginBottom: "4px",
                }}
              >
                {edu.short}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.82rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.5,
                  marginBottom: "14px",
                }}
              >
                {edu.degree}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    background: "var(--surface-subtle)",
                    border: "1px solid var(--border)",
                    borderRadius: "8px",
                    padding: "4px 12px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "0.65rem",
                      fontWeight: 600,
                      color: "var(--text-muted)",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    CGPA
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "0.95rem",
                      fontWeight: 800,
                      color: "var(--accent)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {edu.gpa}
                  </span>
                </div>
                {edu.short === "UniKL MIIT" && (
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      background: "var(--surface-subtle)",
                      border: "1px solid var(--border)",
                      borderRadius: "8px",
                      padding: "4px 12px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.68rem",
                        fontWeight: 500,
                        color: "var(--accent-2)",
                      }}
                    >
                      Convocation Nov 2026
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Divider />

      {/* ── EXPERIENCE ───────────────────────────────────────── */}
      <div ref={expRef} id="experience" className="scroll-mt-14" style={S}>
        <SectionLabel number="03" title="Experience" />
        <div className="timeline-track" style={{ display: "flex", flexDirection: "column", gap: "18px", maxWidth: "680px", marginBottom: "2.5rem" }}>
          {experience.map((exp, i) => (
            <div key={exp.company} className={`reveal reveal-delay-${i + 1}`} style={{ display: "flex", gap: "18px" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "6px" }}>
                <div className={`timeline-dot ${i === 0 ? "is-accent" : ""}`} />
              </div>
              <div
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "16px",
                  padding: "22px 26px",
                  flex: 1,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: "8px",
                    marginBottom: "12px",
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                        fontSize: "1.025rem",
                        color: "var(--text)",
                        marginBottom: "3px",
                      }}
                    >
                      {exp.role}
                    </p>
                    {exp.url ? (
                      <a
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "0.875rem", color: "var(--accent)", textDecoration: "none" }}
                      >
                        {exp.company}
                      </a>
                    ) : (
                      <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "0.875rem", color: "var(--text-muted)" }}>
                        {exp.company}
                      </span>
                    )}
                  </div>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--text-muted)" }}>
                    {exp.period}
                  </span>
                </div>

                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "6px" }}>
                  {exp.bullets.map((b, j) => (
                    <li
                      key={j}
                      style={{
                        display: "flex",
                        gap: "10px",
                        fontFamily: "var(--font-body)",
                        fontSize: "0.86rem",
                        color: "var(--text-muted)",
                        lineHeight: 1.65,
                      }}
                    >
                      <span style={{ color: "var(--accent)", flexShrink: 0, marginTop: "2px" }}>–</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements strip */}
        <div className="reveal" style={{ maxWidth: "680px" }}>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              fontWeight: 500,
              color: "var(--text-muted)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            Achievements
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {achievements.map((a) => (
              <div
                key={a.title}
                style={{
                  background: "var(--surface-subtle)",
                  border: "1px solid var(--border)",
                  borderRadius: "14px",
                  padding: "16px 18px",
                }}
              >
                <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.9rem", color: "var(--text)", marginBottom: "2px" }}>
                  {a.title}
                </p>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--accent-2)", marginBottom: "8px" }}>
                  {a.context}
                </p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                  {a.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Divider />

      {/* ── PROJECTS ─────────────────────────────────────────── */}
      <div ref={projRef} id="projects" className="scroll-mt-14" style={S}>
        <SectionLabel number="04" title="Projects" />
        <p
          className="reveal"
          style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "1.75rem" }}
        >
          Production work built during my internship at Nearbiz Tech, plus selected academic projects.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2.5rem" }}>
          {featuredProjects.map((p, i) => (
            <FeaturedProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>

        <p
          className="reveal"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.7rem",
            fontWeight: 500,
            color: "var(--text-muted)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}
        >
          More work
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherProjects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>

      <Divider />

      {/* ── CONTACT ──────────────────────────────────────────── */}
      <div ref={contactRef} id="contact" className="scroll-mt-14" style={S}>
        <SectionLabel number="05" title="Contact" />

        <div
          className="reveal"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "var(--surface-subtle)",
            border: "1px solid var(--border)",
            borderRadius: "100px",
            padding: "6px 16px",
            marginBottom: "2rem",
          }}
        >
          <span className="pulse-dot" />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--text-muted)", letterSpacing: "0.02em" }}>
            Available to start immediately · Graduating November 2026, all degree requirements completed August 2026
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">

          {/* Left — cards + intro */}
          <div className="reveal reveal-delay-1" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.925rem", color: "var(--text-muted)", lineHeight: 1.75, marginBottom: "8px" }}>
              Want to collaborate, ask about my work, or discuss opportunities? Send me a message or reach out directly.
            </p>
            <ContactCard label="Email" value="nazrularif.na@gmail.com" href="mailto:nazrularif.na@gmail.com" icon={<FaEnvelope />} />
            <ContactCard label="GitHub" value="nazrularif17" href="https://github.com/nazrularif17" icon={<FaGithub />} />
            <ContactCard label="LinkedIn" value="nazrul-arif" href="https://linkedin.com/in/nazrul-arif" icon={<FaLinkedin />} />
          </div>

          {/* Right — form */}
          <div className="reveal reveal-delay-2">
            <ContactForm />
          </div>

        </div>
      </div>


    </div>
  );
}
