"use client";

const researchAreas = [
  {
    title: "Artificial Intelligence",
    icon: "🧠",
    description:
      "Designing intelligent machine learning systems capable of solving real-world healthcare and vision problems.",
  },
  {
    title: "Computer Vision",
    icon: "👁️",
    description:
      "Developing vision-based algorithms for image understanding, visual cognition and intelligent perception.",
  },
  {
    title: "Healthcare AI",
    icon: "🏥",
    description:
      "Applying AI to neurological disorders, clinical decision support systems and digital healthcare.",
  },
  {
    title: "Eye Tracking",
    icon: "🎯",
    description:
      "Research on eye movement analysis, visual attention, cognition and behavioural analytics.",
  },
  {
    title: "Explainable AI",
    icon: "📊",
    description:
      "Building transparent and interpretable AI models for trustworthy clinical applications.",
  },
  {
    title: "Deep Learning",
    icon: "🤖",
    description:
      "CNNs, Vision Transformers, LSTMs and multimodal deep learning architectures for intelligent systems.",
  },
];

export default function ResearchAreas() {
  return (
    <section
      id="research"
      className="bg-[#030712] py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-300">
            RESEARCH DOMAINS
          </span>

          <h2 className="mt-8 text-5xl font-black text-white">
            Areas of Expertise
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-slate-400">
            My research integrates Artificial Intelligence,
            Computer Vision, Eye Tracking and Explainable AI
            to develop intelligent healthcare technologies
            that improve diagnosis, understanding and clinical
            decision making.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {researchAreas.map((area) => (

            <div
              key={area.title}
              className="group rounded-3xl border border-white/10 bg-slate-900/70 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_20px_50px_rgba(37,99,235,.18)]"
            >

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600/15 text-4xl">

                {area.icon}

              </div>

              <h3 className="mt-8 text-2xl font-bold text-white">

                {area.title}

              </h3>

              <p className="mt-5 leading-8 text-slate-400">

                {area.description}

              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}