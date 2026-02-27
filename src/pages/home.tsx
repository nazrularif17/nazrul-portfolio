import { projects } from "../data/projects";
import { FaReact, FaGithub, FaGit } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { SiVite, SiTailwindcss, SiFirebase, SiDjango } from "react-icons/si";

export default function Home() {
  return (
    <div>
      <section
        id="home"
        className="scroll-mt-20 w-full py-6"
      >
        <div className="grid gap-4 md:grid-cols-[1.3fr_1fr] md:items-center px-4 sm:px-10 md:px-20">
          {/* Left Side - Intro */}
          <div className="max-w-6xl mx-auto w-full flex flex-col items-center text-center md:items-start md:text-left">
            <h1 className="text-center md:text-left md:mt-10 text-4xl md:text-6xl font-semibold tracking-tight">
              Hi, I’m Nazrul
            </h1>
            <h1 className="text-center md:text-left mt-4 md:mt-10 text-5xl font-extrabold tracking-tight">
              Software Engineering Student
            </h1>

            <div className="mt-8 md:mt-10 flex flex-wrap gap-3 justify-center md:justify-start">
              <a
                href="#projects"
                className="rounded-xl border border-slate-300 bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-white hover:text-slate-900 dark:hover:bg-white"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold dark:text-slate-900 dark:bg-slate-100 hover:text-slate-100 transition hover:bg-slate-900"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-8 md:mt-10 flex flex-wrap gap-3 justify-center md:justify-start">
              {[
                { name: "Flutter", icon: <FaFlutter className="text-xl" /> },
                { name: "Firebase", icon: <SiFirebase className="text-xl" /> },
                { name: "Django", icon: <SiDjango className="text-xl" /> },
                { name: "React", icon: <FaReact className="text-xl" /> },
                { name: "Vite", icon: <SiVite className="text-xl" /> },
                { name: "Tailwind", icon: <SiTailwindcss className="text-xl" /> },
                { name: "Git", icon: <FaGit className="text-xl" /> },
                { name: "Github", icon: <FaGithub className="text-xl" /> },
              ].map((t) => (
                <div
                  key={t.name}
                  className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm"
                  title={t.name}
                >
                  {t.icon}
                  <span>{t.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="mt-1 flex justify-center md:justify-end md:pr-0">
            {/* Profile Image */}
            <img
              src="/nazrul.png"
              alt="Nazrul Arif"
              className="h-[300px] md:h-[500px] object-contain drop-shadow-[0_0_10px_rgba(0,0,0,0.7)] dark:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
            />
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-20 md:mt-20 px-4 md:py-12 py-6 w-full flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">About</h1>
        <p className="mt-4 px-6 max-w-5xl leading-7 md:text-3xl tracking-light md:leading-12">
          I am a final-year Software Engineering student with a strong passion for building practical and user-focused software solutions. I have hands-on experience in developing web and mobile applications using modern technologies such as Django, Flutter, and Firebase. Currently, I am undertaking my final-semester internship at <a className="font-bold" href="https://nearbiz.tech" target="_blank" rel="noopener noreferrer">Nearbiz Tech</a>, where I continue to enhance my technical and problem-solving skills through real-world development experience.
        </p>
      </section>

      <section
        id="projects"
        className="scroll-mt-10 px-4 py-6 mx-auto max-w-6xl"
      >
        <div className="md:flex items-center text-center md:items-start md:text-start">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Projects</h1>
            <p className="mt-3">
              A few things I’ve built and worked on.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <h2 className="text-lg font-bold text-slate-900">{p.title}</h2>
              <p className="mt-2 leading-7 text-slate-900">{p.desc}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-10 mx-auto max-w-6xl px-4 py-12"
      >
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Contact</h1>
        <p className="mt-3">
          Want to collaborate or discuss opportunities? Reach me here:
        </p>

        <div className="mt-6 grid gap-3 max-w-xl">
          <a
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
            href="mailto:nazrularif.na@gmail.com"
          >
            <p className="text-sm text-slate-500">Email</p>
            <p className="mt-1 font-semibold text-slate-900">
              nazrularif.na@gmail.com
            </p>
          </a>

          <a
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
            href="https://github.com/nazrularif17"
            target="_blank"
            rel="noreferrer"
          >
            <p className="text-sm text-slate-500">GitHub</p>
            <p className="mt-1 font-semibold text-slate-900">
              github.com/nazrularif17
            </p>
          </a>

          <a
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
            href="https://linkedin.com/in/nazrul-arif"
            target="_blank"
            rel="noreferrer"
          >
            <p className="text-sm text-slate-500">LinkedIn</p>
            <p className="mt-1 font-semibold text-slate-900">
              linkedin.com/in/nazrul-arif
            </p>
          </a>
        </div>
      </section>
    </div>
  );
}
