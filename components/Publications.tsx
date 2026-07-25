"use client";

const publications = [
  {
    title:
      "EyeMap: A Deep Learning Framework for Parkinson's Disease Visual Cognition Analysis",
    venue: "MethodsX • Elsevier",
    year: "2025",
    type: "Journal",
  },
  {
    title:
      "EyeHelp: Low-Cost Webcam Based Eye Tracking for Healthcare Applications",
    venue: "Procedia Computer Science",
    year: "2025",
    type: "Conference",
  },
  {
    title:
      "EyePD: Deep Learning Framework for Parkinson's Disease Classification using Eye Tracking",
    venue: "International Journal",
    year: "2025",
    type: "Journal",
  },
  {
    title:
      "iAOI: Intelligent Areas of Interest Detection using Eye Tracking",
    venue: "Springer LNCS",
    year: "2023",
    type: "Book Chapter",
  },
  {
    title:
      "iSTIMULI: AI Framework for Cognitive Assessment using Eye Movements",
    venue: "Springer LNCS",
    year: "2023",
    type: "Book Chapter",
  },
  {
    title:
      "Explainable AI for Healthcare using Visual Behaviour Analytics",
    venue: "Research Work",
    year: "2026",
    type: "Ongoing",
  },
];

export default function Publications() {
  return (
    <section
      id="publications"
      className="bg-[#030712] py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-300">
            PUBLICATIONS
          </span>

          <h2 className="mt-8 text-5xl font-black text-white">
            Selected Publications
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-slate-400">
            A selection of research publications highlighting my
            contributions to Artificial Intelligence,
            Computer Vision, Eye Tracking and Healthcare AI.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8">

          {publications.map((paper, index) => (

            <div
              key={index}
              className="group rounded-3xl border border-white/10 bg-slate-900/70 p-8 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/40 hover:shadow-[0_20px_60px_rgba(37,99,235,.15)]"
            >

              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                <div>

                  <div className="mb-4 inline-flex rounded-full bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">

                    {paper.type}

                  </div>

                  <h3 className="text-2xl font-bold leading-9 text-white">

                    {paper.title}

                  </h3>

                  <p className="mt-4 text-lg text-slate-400">

                    {paper.venue}

                  </p>

                </div>

                <div className="text-center lg:text-right">

                  <h2 className="text-5xl font-black text-blue-400">

                    {paper.year}

                  </h2>

                  <button className="mt-6 rounded-xl border border-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/5">

                    View Publication

                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

        <div className="mt-16 text-center">

          <a
            href="#"
            className="inline-flex rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-500"
          >
            View All Publications
          </a>

        </div>

      </div>
    </section>
  );
}