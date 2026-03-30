import React, { useRef, useEffect, useState } from "react";
import { projects } from "../data/projects";
import { experience } from "../data/experience";
import { education } from "../data/education";
import { FaReact, FaGithub, FaGit, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { SiVite, SiTailwindcss, SiFirebase, SiDjango, SiAngular, SiVuedotjs } from "react-icons/si";

/* ─── Scroll reveal hook ─────────────────────────────────────── */
function useReveal(): React.RefObject<HTMLDivElement> {
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

/* ─── Tech stack (hero chips) ────────────────────────────────── */
const TECH = [
  { name: "Flutter",  icon: <FaFlutter />      },
  { name: "Firebase", icon: <SiFirebase />      },
  { name: "Django",   icon: <SiDjango />        },
  { name: "React",    icon: <FaReact />         },
  { name: "Angular",  icon: <SiAngular />       },
  { name: "Vue.js",   icon: <SiVuedotjs />      },
  { name: "Tailwind", icon: <SiTailwindcss />   },
  { name: "Vite",     icon: <SiVite />          },
  { name: "Git",      icon: <FaGit />           },
  { name: "GitHub",   icon: <FaGithub />        },
];

/* ─── Section label ──────────────────────────────────────────── */
function SectionLabel({ number, title }: { number: string; title: string }) {
  return (
    <div className="reveal" style={{ display: "flex", alignItems: "baseline", gap: "16px", marginBottom: "2.5rem" }}>
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "0.7rem",
          fontWeight: 600,
          color: "var(--text-muted)",
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

/* ─── Project card ───────────────────────────────────────────── */
function ProjectCard({ project: p, index: i }: { project: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <article
      className={`reveal reveal-delay-${Math.min(i + 1, 5)}`}
      style={{
        background: "var(--surface)",
        border: `1px solid ${hovered ? "var(--accent-soft)" : "var(--border)"}`,
        borderRadius: "16px",
        padding: "22px 24px",
        display: "flex",
        flexDirection: "column",
        transition:
          "transform 0.28s cubic-bezier(0.16,1,0.3,1), box-shadow 0.28s cubic-bezier(0.16,1,0.3,1), border-color 0.2s",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        boxShadow: hovered ? "0 16px 48px rgba(0,0,0,0.1)" : "none",
        cursor: "default",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Featured badge (first project only) */}
      {i === 0 && (
        <span
          style={{
            display: "inline-block",
            fontFamily: "var(--font-display)",
            fontSize: "0.62rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--accent)",
            marginBottom: "10px",
          }}
        >
          ★ Featured
        </span>
      )}

      {/* Award badge */}
      {p.award && (
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            fontFamily: "var(--font-display)",
            fontSize: "0.62rem",
            fontWeight: 700,
            letterSpacing: "0.06em",
            color: "#ca8a04",
            background: "rgba(202,138,4,0.08)",
            border: "1px solid rgba(202,138,4,0.2)",
            borderRadius: "6px",
            padding: "3px 9px",
            marginBottom: "10px",
            width: "fit-content",
          }}
        >
          🏆 {p.award}
        </span>
      )}

      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: "1.025rem",
          color: "var(--text)",
          lineHeight: 1.3,
          marginBottom: "8px",
        }}
      >
        {p.title}
      </h3>
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
        {p.desc}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {p.tech.map((t) => (
          <span
            key={t}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.7rem",
              fontWeight: 600,
              color: "var(--text-muted)",
              background: "var(--surface-subtle)",
              border: "1px solid var(--border)",
              borderRadius: "6px",
              padding: "3px 9px",
            }}
          >
            {t}
          </span>
        ))}
      </div>
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
  return <div style={{ height: "1px", background: "var(--border)", margin: "0 clamp(1rem, 4vw, 3rem)" }} />;
}

/* ─── Section wrapper style ──────────────────────────────────── */
const S: React.CSSProperties = {
  padding: "clamp(3rem, 6vw, 5rem) clamp(1rem, 4vw, 3rem)",
  maxWidth: "72rem",
  margin: "0 auto",
};

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
        className="scroll-mt-14"
        style={{
          minHeight: "calc(100vh - 56px)",
          display: "flex",
          alignItems: "center",
          padding: "clamp(2rem, 6vw, 5rem) clamp(1rem, 4vw, 3rem)",
        }}
      >
        <div
          className="w-full grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-center"
          style={{ maxWidth: "72rem", margin: "0 auto" }}
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
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: "#22c55e",
                  flexShrink: 0,
                  boxShadow: "0 0 0 2px rgba(34,197,94,0.25)",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  color: "var(--text-muted)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Interning @ Nearbiz Tech
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
              Arif
            </h1>

            {/* Role */}
            <p
              className="hero-item"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
                color: "var(--text-muted)",
                marginBottom: "0.5rem",
              }}
            >
              Software Engineer Intern&nbsp;&nbsp;·&nbsp;&nbsp;
              <a
                href="https://nearbiz.tech"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--accent)", fontWeight: 600, textDecoration: "none" }}
              >
                Nearbiz Tech
              </a>
            </p>

            {/* Tagline */}
            <p
              className="hero-item"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(0.875rem, 1.8vw, 1rem)",
                color: "var(--text-muted)",
                lineHeight: 1.7,
                maxWidth: "460px",
                marginBottom: "2.5rem",
              }}
            >
              Final-year SE student at UniKL MIIT, building practical software across mobile and web — Flutter, Firebase, Django, and beyond.
            </p>

            {/* CTAs */}
            <div
              className="hero-item"
              style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "2.5rem" }}
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

            {/* Tech chips */}
            <div className="hero-item" style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {TECH.map((t) => (
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
          I'm a final-year Software Engineering student at{" "}
          <strong style={{ color: "var(--text)", fontWeight: 500 }}>Universiti Kuala Lumpur MIIT</strong>{" "}
          (CGPA 3.51), currently one month into my internship as a{" "}
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
          . I have prior industry experience from an internship at Anak2U Sdn. Bhd., where I worked on Flutter mobile development. I build practical, user-focused applications — from AI-powered mobile apps to full-stack web platforms — and care about writing clean code that solves real problems.
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
                  fontFamily: "var(--font-display)",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  color: "var(--text-muted)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
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
            </div>
          ))}
        </div>
      </div>

      <Divider />

      {/* ── EXPERIENCE ───────────────────────────────────────── */}
      <div ref={expRef} id="experience" className="scroll-mt-14" style={S}>
        <SectionLabel number="03" title="Experience" />
        <div style={{ display: "flex", flexDirection: "column", gap: "14px", maxWidth: "640px" }}>
          {experience.map((exp, i) => (
            <div
              key={exp.company}
              className={`reveal reveal-delay-${i + 1}`}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "16px",
                padding: "22px 26px 22px 30px",
                position: "relative",
              }}
            >
              {/* Accent bar */}
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: "16px",
                  bottom: "16px",
                  width: "3px",
                  background: exp.current ? "var(--accent)" : "var(--border)",
                  borderRadius: "0 3px 3px 0",
                }}
              />

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
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "5px" }}>
                  {exp.current && (
                    <span
                      style={{
                        display: "inline-block",
                        background: "rgba(34,197,94,0.1)",
                        color: "#22c55e",
                        fontFamily: "var(--font-display)",
                        fontSize: "0.62rem",
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        padding: "3px 9px",
                        borderRadius: "100px",
                        border: "1px solid rgba(34,197,94,0.25)",
                      }}
                    >
                      Now
                    </span>
                  )}
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "0.8rem", color: "var(--text-muted)" }}>
                    {exp.period}
                  </span>
                </div>
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
          ))}
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
          Selected work I've built.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>

      <Divider />

      {/* ── CONTACT ──────────────────────────────────────────── */}
      <div ref={contactRef} id="contact" className="scroll-mt-14" style={S}>
        <SectionLabel number="05" title="Contact" />

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
