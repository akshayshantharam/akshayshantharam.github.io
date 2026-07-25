"use client";

const projects = [
  {
    title: "EyePD",
    year: "2025",
    description:
      "A deep learning framework for identifying Parkinson's Disease cognitive subtypes using eye movement patterns captured during visual search tasks.",

    tech: [
      "PyTorch",
      "CNN",
      "Vision AI",
      "Eye Tracking",
      "Healthcare AI",
    ],

    color: "from-blue-600 to-cyan-500",
  },

  {
    title: "EyeMap",
    year: "2025",
    description:
      "AI-powered visualization framework integrating heatmaps, scanpaths and Areas of Interest to analyze visual cognition and clinical behaviour.",

    tech: [
      "Heatmaps",
      "AOI",
      "Computer Vision",
      "Deep Learning",
    ],

    color: "from-purple-600 to-blue-600",
  },

  {
    title: "EyeHelp",
    year: "2024",
    description:
      "Low-cost webcam based eye tracking framework for healthcare applications using computer vision without dedicated eye-tracking hardware.",

    tech: [
      "OpenCV",
      "MediaPipe",
      "Python",
      "Healthcare",
    ],

    color: "from-emerald-600 to-cyan-500",
  },

  {
    title: "PDEMI",
    year: "2025",
    description:
      "Parkinson's Disease Eye Movement Index for quantifying cognitive impairment through explainable eye movement analytics.",

    tech: [
      "Explainable AI",
      "Machine Learning",
      "Clinical AI",
      "Analytics",
    ],

    color: "from-orange-500 to-red-500",
  },
];

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="bg-[#020617] py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-300">
            FEATURED PROJECTS
          </span>

          <h2 className="mt-8 text-5xl font-black text-white">
            AI Research Projects
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-slate-400">
            Selected research projects demonstrating the application of
            Artificial Intelligence, Computer Vision and Explainable AI
            for solving real-world healthcare challenges.
          </p>

        </div>

        <div className="mt-20 space-y-8">

          {projects.map((project) => (

            <div
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/40 hover:shadow-[0_20px_60px_rgba(37,99,235,.20)]"
            >

              <div className="grid lg:grid-cols-5">

                {/* Left */}

                <div
                  className={`bg-gradient-to-br ${project.color} flex flex-col items-center justify-center p-10`}
                >
                  <h2 className="text-6xl font-black text-white">
                    {project.title}
                  </h2>

                  <p className="mt-4 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white">
                    {project.year}
                  </p>
                </div>

                {/* Right */}

                <div className="lg:col-span-4 p-10">

                  <h3 className="text-3xl font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="mt-6 text-lg leading-9 text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">

                    {project.tech.map((item) => (

                      <span
                        key={item}
                        className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300"
                      >
                        {item}
                      </span>

                    ))}

                  </div>

                  <div className="mt-10 flex gap-5">

                    <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500">
                      View Project
                    </button>

                    <button className="rounded-xl border border-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/5">
                      Publication
                    </button>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}