export type Project = {
  title: string;
  subtitle: string;
  role: string;
  period: string;
  stack: string[];
  live?: string;
  summary: string;
  highlights: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "CLore Ecosystem",
    subtitle: "Production e-commerce platform",
    role: "Software Engineer Intern — full-stack",
    period: "Mar 2026 – Aug 2026",
    stack: ["Go", "React", "TanStack Router", "TanStack Query", "PostgreSQL", "Railway", "Cloudflare", "NinjaVan API"],
    live: "https://clore.my",
    summary:
      "A full-featured e-commerce platform serving live customers across Malaysia. Contributed ten production modules spanning authentication, storefront, commercial campaign features, logistics, and internal admin tooling.",
    highlights: [
      "JWT authentication with role-based access control across customer, admin, and affiliate roles, enforced at both the routing and API layers",
      "Complete shop frontend — product listing, detail, cart, and checkout — built in React with TanStack Query for server-state",
      "Lucky draw ticket engine and early bird logic in Go, driving fair automated campaign draws",
      "Affiliate module with referral link generation, commission tracking, and an affiliate dashboard",
      "NinjaVan logistics integration: automated shipment creation plus webhook-based delivery status tracking",
      "Admin panel and audit trail logging order, user, and campaign actions for operational traceability",
      "Bilingual i18n (Bahasa Malaysia / English) across every page",
    ],
    featured: true,
  },
  {
    title: "The Brozkey Club",
    subtitle: "Barbershop booking & membership platform",
    role: "Software Engineer Intern — full-stack, feature owner",
    period: "Jun 2026 – Aug 2026",
    stack: ["Go", "React", "TypeScript", "PostgreSQL", "GORM", "Docker", "Fiuu", "Resend"],
    live: "https://club.brozkey.com",
    summary:
      "A members-first booking and operations platform for a barbershop chain, covering walk-in queueing, appointment scheduling, membership tiers, loyalty, and staff scheduling. Owned several feature epics end to end, from data model through API to admin UI.",
    highlights: [
      "Walk-in queue with public self-service check-in and an admin assignment panel, including a server-side conflict guard preventing barbers from being double-booked",
      "Promotional campaign engine with price locked at commit time, scope-aware conflict detection between campaigns, and per-campaign redemption and revenue analytics",
      "Members-first relaunch: booking gated behind verified membership, timestamped T&C acceptance trail, and structural blocking of bookings made on another person's behalf",
      "Member dashboard with visit history, spend-based tier badges, and a nightly Go job computing each member's preferred barber — core logic written as pure, unit-tested functions",
      "Self-service cancel and reschedule with a configurable lead-time policy, plus a background scheduler sending day-before and hour-before appointment reminders",
      "Barber leave and shop-wide closure scheduling with a staged, all-or-nothing conflict resolution flow that forces every clashing booking to be resolved before saving",
      "Loyalty stamp abuse guards tying stamp earns to completed appointments, capped at one per visit, with audit logging on every award, redemption, and reversal",
      "Diagnosed and fixed a production payment blocker: an incorrect Fiuu vcode hash format (extended vs. legacy) that was failing membership checkout with error P03",
    ],
    featured: true,
  },
  {
    title: "Media Brozkey",
    subtitle: "Video streaming portfolio platform",
    role: "Software Engineer Intern — full-stack",
    period: "Mar 2026 – May 2026",
    stack: ["Go", "React", "Vite", "Tailwind CSS", "PostgreSQL", "HLS", "Railway", "Cloudflare"],
    live: "https://media.brozkey.com",
    summary:
      "A media portfolio and streaming platform for a production team, built to showcase video work to clients and the public.",
    highlights: [
      "HTTP Live Streaming implemented from scratch for adaptive video delivery that holds quality across browsers and viewer bandwidths",
      "Responsive frontend built from scratch in React, Vite, and Tailwind CSS",
      "Go and PostgreSQL backend for content management and persistence",
      "Railway CI/CD pipeline and Cloudflare DNS configured for automated single-push deployment",
    ],
  },
  {
    title: "Fyxe Glow",
    subtitle: "E-commerce platform for a beauty brand",
    role: "Software Engineer Intern — full-stack, independent delivery",
    period: "Jun 2026 – Aug 2026",
    stack: ["Go", "React", "PostgreSQL", "CHIP IN", "Railway", "Cloudflare", "Google Workspace"],
    live: "https://fyxeglow.com",
    summary:
      "An online store delivered end to end for a beauty and skincare brand launch — from business email and infrastructure setup through to a live production storefront.",
    highlights: [
      "Product catalogue, checkout, and order management modules",
      "CHIP IN payment gateway integration",
      "Google Workspace, Railway CI/CD, and Cloudflare DNS configured independently, taking the client from zero infrastructure to production",
    ],
  },
  {
    title: "EventSphere",
    subtitle: "Cross-platform event attendance app",
    role: "Academic project",
    period: "2025",
    stack: ["Flutter", "Firebase", "Gemini AI", "ToyyibPay"],
    summary:
      "Cross-platform mobile app for university event management, with AI-assisted event planning and QR-based attendance.",
    highlights: [
      "Gemini AI generating event proposals and post-event summaries",
      "QR-based attendance validation with check-in time control",
      "Points and rewards redemption system",
      "Role-based access for students, admins, and super admins",
    ],
  },
];
