export type Achievement = {
  title: string;
  context: string;
  desc: string;
  period: string;
};

export const achievements: Achievement[] = [
  {
    title: "LAYAK",
    context: "Finhack 2026 · Team FinNIX · Backend Engineer",
    desc: "A neutral income credential platform for Malaysia's gig economy, positioning an e-wallet operator as an income credential issuer for informal earners. Owned database design, API development, deployment, and the CI/CD pipeline.",
    period: "2026",
  },
  {
    title: "Best Visualization Award",
    context: "MyRapid Hackathon 2023",
    desc: "Carbon Emission Tracker — a mobile app helping users track daily carbon footprint using RapidKL travel data. Competed against 20+ teams.",
    period: "2023",
  },
];
