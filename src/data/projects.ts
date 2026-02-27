export type Project = {
  title: string;
  desc: string;
  tech: string[];
  repo?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: "EventSphere",
    desc: "An AI-powered event organizer developed using Flutter to simplify event planning through QR-based attendance, AI-generated summaries, admin approval workflows, and a points-based reward redemption system.",
    tech: ["Flutter", "Firebase", "Gemini AI"],
  },
  {
    title: "RumahStudent",
    desc: "A full-fledged house rental web application built with Django that allows users to browse, list, and rent properties efficiently with role-based management for landlords and tenants.",
    tech: ["Django"],
  },
  {
    title: "Carbon Emission Tracker",
    desc: "A Flutter-based mobile application developed during the RapidKL Data Hackathon 2023 to help users monitor their carbon footprint based on daily activities and promote environmentally conscious decisions.",
    tech: ["Flutter"],
  },
];