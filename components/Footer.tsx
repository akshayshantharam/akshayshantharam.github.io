"use client";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#030712]">

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 lg:grid-cols-3">

          {/* Left */}

          <div>

            <h2 className="text-3xl font-black">

              <span className="text-white">
                Dr.
              </span>

              <span className="text-blue-500">
                {" "}Akshay S
              </span>

            </h2>

            <p className="mt-6 leading-8 text-slate-400">

              AI Research Scientist specializing in
              Artificial Intelligence,
              Computer Vision,
              Explainable AI,
              Eye Tracking
              and Intelligent Healthcare Systems.

            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-bold text-white">

              Quick Links

            </h3>

            <div className="mt-6 space-y-4">

              <a
                href="#about"
                className="block text-slate-400 transition hover:text-blue-400"
              >
                About
              </a>

              <a
                href="#research"
                className="block text-slate-400 transition hover:text-blue-400"
              >
                Research
              </a>

              <a
                href="#projects"
                className="block text-slate-400 transition hover:text-blue-400"
              >
                Projects
              </a>

              <a
                href="#publications"
                className="block text-slate-400 transition hover:text-blue-400"
              >
                Publications
              </a>

              <a
                href="#experience"
                className="block text-slate-400 transition hover:text-blue-400"
              >
                Experience
              </a>

              <a
                href="#contact"
                className="block text-slate-400 transition hover:text-blue-400"
              >
                Contact
              </a>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-bold text-white">

              Connect

            </h3>

            <div className="mt-6 space-y-4">

              <p className="text-slate-400">
                Mysuru, Karnataka, India
              </p>

              <p className="text-slate-400">
                akshay@example.com
              </p>

              <a
                href="https://www.linkedin.com"
                className="block text-slate-400 transition hover:text-blue-400"
              >
                LinkedIn
              </a>

              <a
                href="https://scholar.google.com"
                className="block text-slate-400 transition hover:text-blue-400"
              >
                Google Scholar
              </a>

              <a
                href="https://github.com"
                className="block text-slate-400 transition hover:text-blue-400"
              >
                GitHub
              </a>

            </div>

          </div>

        </div>

        <div className="mt-16 border-t border-white/10 pt-8">

          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

            <p className="text-slate-500">

              © {new Date().getFullYear()} Dr. Akshay S.
              All Rights Reserved.

            </p>

            <p className="text-slate-500">

              Designed & Developed using
              Next.js • React • Tailwind CSS

            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}