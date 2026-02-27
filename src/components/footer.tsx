export default function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Nazrul Arif</span>
        <span>Built with React + Vite + Tailwind</span>
      </div>
    </footer>
  );
}