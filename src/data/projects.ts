export type Project = {
  title: string;
  desc: string;
  tech: string[];
  award?: string;
  repo?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: "Media Brozkey",
    desc: "Full-featured marketing and portfolio site for a creative production studio. Public site showcases video projects, photo albums, blogs, and services. Includes a complete admin dashboard for managing all content — projects, categories, blogs, albums, brand partners, and a subscriber list. Built solo end-to-end: architecture, UI design, data modeling, and production setup.",
    tech: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "Go", "PostgreSQL"],
    demo: "https://media.brozkey.com",
  },
  {
    title: "EventSphere",
    desc: "Cross-platform mobile app for university event management. Features AI-generated event proposals and post-event summaries via Gemini, QR-based attendance validation with check-in time control, a points & rewards redemption system, and role-based access for students, admins, and super admins.",
    tech: ["Flutter", "Firebase", "Gemini AI", "ToyyibPay"],
  },
  {
    title: "RumahStudent",
    desc: "Full-stack house rental management platform built with Django. Supports CRUD for listings, users, and booking records, with role-based access separating admin and tenant functionalities and a responsive front-end.",
    tech: ["Django", "Python", "HTML/CSS", "JavaScript"],
  },
  {
    title: "Carbon Emission Tracker",
    desc: "Mobile app developed for the MyRapid Hackathon 2023 that helps users track daily carbon footprint using RapidKL travel data. Competed against 20+ teams.",
    tech: ["Flutter", "Dart"],
    award: "Best Visualization Award · MyRapid Hackathon 2023",
  },
];
