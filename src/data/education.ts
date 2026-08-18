export type Education = {
  institution: string;
  short: string;
  degree: string;
  period: string;
  gpa: string;
  location: string;
};

export const education: Education[] = [
  {
    institution: "Universiti Kuala Lumpur MIIT",
    short: "UniKL MIIT",
    degree: "Bachelor of Information Technology (Hons) in Software Engineering",
    period: "Mar 2024 – Aug 2026",
    gpa: "3.46",
    location: "Kuala Lumpur",
  },
  {
    institution: "Kolej Profesional Mara Beranang",
    short: "KPM Beranang",
    degree: "Diploma in Computer Science",
    period: "Jul 2021 – Nov 2023",
    gpa: "3.73",
    location: "Selangor",
  },
];
