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
