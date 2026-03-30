export type Experience = {
  company: string;
  role: string;
  period: string;
  desc: string;
  bullets: string[];
  url: string;
  current: boolean;
};

export const experience: Experience[] = [
  {
    company: "Nearbiz Tech",
    role: "Software Engineer Intern",
    period: "Mar 2026 – Present · 1 month",
    desc: "",
    bullets: [
      "Contributing to engineering work at a tech startup as part of my final-semester internship.",
      "Collaborating with the team to build, maintain, and ship software features in a real-world product environment.",
    ],
    url: "https://nearbiz.tech",
    current: true,
  },
  {
    company: "Anak2U Sdn. Bhd.",
    role: "Software Developer Intern",
    period: "Aug 2023 – Oct 2023 · 3 months",
    desc: "",
    bullets: [
      "Contributed to the enhancement of a classroom mobile app built with Flutter.",
      "Fixed bugs and resolved data synchronization issues between UI/UX and backend modules.",
      "Implemented a certificate generation feature triggered upon full module completion.",
    ],
    url: "",
    current: false,
  },
];
