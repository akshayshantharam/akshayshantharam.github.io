"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#020617] py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-10 lg:p-16">

          <div className="grid gap-16 lg:grid-cols-2">

            {/* Left */}

            <div>

              <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-300">
                CONTACT
              </span>

              <h2 className="mt-8 text-5xl font-black leading-tight text-white">
                Let's Build the
                <span className="block text-blue-500">
                  Future with AI
                </span>
              </h2>

              <p className="mt-8 text-lg leading-9 text-slate-400">
                I am always interested in research collaborations,
                industrial partnerships, funded projects,
                keynote talks, consulting opportunities and
                AI-driven healthcare innovations.
              </p>

              <div className="mt-12 space-y-8">

                <div>

                  <p className="text-sm uppercase tracking-wider text-slate-500">
                    Email
                  </p>

                  <p className="mt-2 text-xl font-semibold text-white">
                    akshay@example.com
                  </p>

                </div>

                <div>

                  <p className="text-sm uppercase tracking-wider text-slate-500">
                    Location
                  </p>

                  <p className="mt-2 text-xl font-semibold text-white">
                    Mysuru, Karnataka, India
                  </p>

                </div>

                <div>

                  <p className="text-sm uppercase tracking-wider text-slate-500">
                    Affiliation
                  </p>

                  <p className="mt-2 text-xl font-semibold text-white">
                    School of Computing,
                    Amrita Vishwa Vidyapeetham
                  </p>

                </div>

              </div>

            </div>

            {/* Right */}

            <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 backdrop-blur-xl">

              <h3 className="text-3xl font-bold text-white">
                Professional Profiles
              </h3>

              <div className="mt-10 space-y-5">

                <a
                  href="https://scholar.google.com"
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#0f172a] px-6 py-5 transition hover:border-blue-500"
                >
                  <span className="text-lg text-white">
                    Google Scholar
                  </span>

                  <span className="text-blue-400">
                    →
                  </span>
                </a>

                <a
                  href="https://www.linkedin.com"
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#0f172a] px-6 py-5 transition hover:border-blue-500"
                >
                  <span className="text-lg text-white">
                    LinkedIn
                  </span>

                  <span className="text-blue-400">
                    →
                  </span>
                </a>

                <a
                  href="https://github.com"
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#0f172a] px-6 py-5 transition hover:border-blue-500"
                >
                  <span className="text-lg text-white">
                    GitHub
                  </span>

                  <span className="text-blue-400">
                    →
                  </span>
                </a>

                <a
                  href="#"
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#0f172a] px-6 py-5 transition hover:border-blue-500"
                >
                  <span className="text-lg text-white">
                    ORCID
                  </span>

                  <span className="text-blue-400">
                    →
                  </span>
                </a>

              </div>

              <a
                href="/Akshay_CV.pdf"
                className="mt-10 inline-flex w-full items-center justify-center rounded-2xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-blue-500"
              >
                Download Resume
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}