import { useEffect, useState } from "react";
import { useTheme } from "../hooks/useTheme";

const linkBase =
  "px-3 py-2 rounded-lg text-sm font-medium transition hover:bg-slate-100 dark:hover:bg-slate-800";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  // If user rotates phone / resizes to desktop, close mobile menu
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false); // md breakpoint
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-500 bg-white/80 dark:border-slate-800 dark:bg-slate-900/70">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="text-base font-extrabold tracking-tight text-slate-900 dark:text-white"
            onClick={() => setMenuOpen(false)}
          >
            Nazrul Arif
          </a>

          {/* Right Group */}
          <nav className="flex items-center gap-2">
            {/* Desktop links */}
            <div className="hidden items-center gap-1 md:flex">
              <a
                href="#home"
                className={linkBase + " text-slate-700 dark:text-slate-200"}
              >
                Home
              </a>
              <a
                href="#about"
                className={linkBase + " text-slate-700 dark:text-slate-200"}
              >
                About
              </a>
              <a
                href="#projects"
                className={linkBase + " text-slate-700 dark:text-slate-200"}
              >
                Projects
              </a>
              <a
                href="#contact"
                className={linkBase + " text-slate-700 dark:text-slate-200"}
              >
                Contact
              </a>
            </div>

            {/* Theme toggle (show on all sizes) */}
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
              aria-label="Toggle theme"
              title={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              {theme === "dark" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5"
                >
                  <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5"
                >
                  <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
                </svg>
              )}
            </button>

            {/* Hamburger (mobile only) */}
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:bg-slate-50 md:hidden dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
              aria-label="Open menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5"
                >
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </nav>

          {/* Right-side buttons */}
        </div>

        {/* Mobile Menu Panel */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-200 ${
            menuOpen ? "max-h-64 pb-3 opacity-100" : "max-h-0 pb-0 opacity-0"
          }`}
        >
          <div className="mt-2 grid gap-1 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <a
              href="#home"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
