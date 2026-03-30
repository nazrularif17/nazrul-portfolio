export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)" }}>
      <div
        style={{
          maxWidth: "72rem",
          margin: "0 auto",
          padding: "1.5rem clamp(1rem, 4vw, 3rem)",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "8px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "0.8rem",
            fontWeight: 600,
            color: "var(--text-muted)",
          }}
        >
          © {new Date().getFullYear()} Nazrul Arif
        </span>
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.78rem",
            color: "var(--text-muted)",
          }}
        >
          Built with React · Vite · Tailwind
        </span>
      </div>
    </footer>
  );
}
