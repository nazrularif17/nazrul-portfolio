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
    period: "Mar 2026 – Aug 2026 · 6 months",
    desc: "",
    bullets: [
      "Shipped production full-stack work across five live commercial platforms — CLore Ecosystem, The Brozkey Club, Media Brozkey, and Fyxe Glow — building React/TypeScript frontends on Go REST APIs and PostgreSQL.",
      "Owned feature epics end to end: data model, API, and admin UI, including authentication, payments, logistics integrations, and internal admin tooling.",
      "Set up and ran the deployment pipeline independently on Railway and Cloudflare — CI/CD, DNS, and infrastructure — for two client launches.",
    ],
    url: "https://nearbiz.tech",
    current: false,
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
