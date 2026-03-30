import { useEffect, useState } from "react";
import { useTheme } from "../hooks/useTheme";

const NAV_LINKS = [
  { id: "about",      label: "About"      },
  { id: "education",  label: "Education"  },
  { id: "experience", label: "Experience" },
  { id: "projects",   label: "Projects"   },
  { id: "contact",    label: "Contact"    },
];

const ALL_SECTIONS = ["home", "about", "education", "experience", "projects", "contact"];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let current = ALL_SECTIONS[0];
      for (const id of ALL_SECTIONS) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.offsetTop - 120 <= scrollY) current = id;
      }
      setActive(current);
    };

    const raf = requestAnimationFrame(handleScroll);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        borderBottom: "1px solid var(--border)",
        background: "var(--bg)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      <div
        style={{
          maxWidth: "72rem",
          margin: "0 auto",
          padding: "0 clamp(1.25rem, 4vw, 3rem)",
          display: "flex",
          height: "56px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          style={{ display: "flex", alignItems: "center", textDecoration: "none" }}
        >
          <img
            src="/nzrl.svg"
            alt="Nazrul Arif"
            style={{
              height: "28px",
              width: "auto",
              filter: theme === "dark" ? "brightness(0) invert(1)" : "brightness(0)",
            }}
          />
        </a>

        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          {/* Desktop nav links */}
          <nav className="hidden md:flex" style={{ alignItems: "center", gap: "2px", marginRight: "6px" }}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setActive(link.id)}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.875rem",
                  fontWeight: active === link.id ? 700 : 500,
                  color: active === link.id ? "var(--text)" : "var(--text-muted)",
                  textDecoration: "none",
                  padding: "6px 12px",
                  borderRadius: "8px",
                  background: active === link.id ? "var(--surface-subtle)" : "transparent",
                  transition: "color 0.2s, background 0.2s",
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Theme toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            style={{
              width: "36px",
              height: "36px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "10px",
              border: "1.5px solid var(--border)",
              background: "var(--surface)",
              color: "var(--text)",
              cursor: "pointer",
              transition: "background 0.2s, border-color 0.2s",
              flexShrink: 0,
            }}
          >
            {theme === "dark" ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "15px", height: "15px" }}>
                <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "15px", height: "15px" }}>
                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
              </svg>
            )}
          </button>

          {/* Hamburger (mobile only) */}
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="flex md:hidden items-center justify-center"
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              border: "1.5px solid var(--border)",
              background: "var(--surface)",
              color: "var(--text)",
              cursor: "pointer",
              marginLeft: "4px",
              flexShrink: 0,
            }}
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "15px", height: "15px" }}>
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "15px", height: "15px" }}>
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className="md:hidden"
        style={{
          overflow: "hidden",
          maxHeight: menuOpen ? "280px" : "0",
          opacity: menuOpen ? 1 : 0,
          transition: "max-height 0.25s cubic-bezier(0.16,1,0.3,1), opacity 0.2s",
          borderTop: menuOpen ? "1px solid var(--border)" : "none",
          background: "var(--bg)",
        }}
      >
        <div style={{ padding: "8px clamp(1.25rem, 4vw, 3rem) 12px", display: "grid", gap: "2px" }}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.925rem",
                fontWeight: active === link.id ? 700 : 500,
                color: active === link.id ? "var(--text)" : "var(--text-muted)",
                textDecoration: "none",
                padding: "10px 12px",
                borderRadius: "8px",
                background: active === link.id ? "var(--surface-subtle)" : "transparent",
                transition: "background 0.15s",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
