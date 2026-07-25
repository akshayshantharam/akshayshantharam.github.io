"use client";

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-[#020617] py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-20 lg:grid-cols-2 items-center">

          {/* LEFT */}

          <div>

            <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-300">
              ABOUT ME
            </span>

            <h2 className="mt-8 text-5xl font-black leading-tight text-white">

              Building AI Solutions
              <br />

              <span className="text-blue-500">
                That Create Real Impact
              </span>

            </h2>

            <p className="mt-8 text-lg leading-9 text-slate-400">

              I am <span className="font-semibold text-white">
              Dr. Akshay S</span>,
              an AI Research Scientist and Assistant Professor with over
              thirteen years of academic and research experience.
              My work focuses on developing intelligent systems that
              combine Artificial Intelligence, Computer Vision,
              Eye Tracking and Explainable AI to solve healthcare
              challenges.

            </p>

            <p className="mt-6 text-lg leading-9 text-slate-400">

              My research has resulted in international publications,
              Springer book chapters, AI frameworks, healthcare datasets,
              and collaborations with clinicians and researchers working
              on neurological disorders, human behaviour and intelligent
              decision support systems.

            </p>

          </div>

          {/* RIGHT */}

          <div className="grid gap-6">

            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 backdrop-blur-xl transition hover:border-blue-500/40">

              <h3 className="text-2xl font-bold text-white">
                🎯 Research Vision
              </h3>

              <p className="mt-5 leading-8 text-slate-400">

                Develop trustworthy AI systems that assist clinicians,
                improve healthcare accessibility and transform research
                into real-world intelligent applications.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 backdrop-blur-xl transition hover:border-blue-500/40">

              <h3 className="text-2xl font-bold text-white">
                🔬 Current Interests
              </h3>

              <p className="mt-5 leading-8 text-slate-400">

                Artificial Intelligence • Computer Vision • Eye Tracking •
                Deep Learning • Explainable AI • Multimodal Learning •
                Healthcare AI • Human Behaviour Analysis

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 backdrop-blur-xl transition hover:border-blue-500/40">

              <h3 className="text-2xl font-bold text-white">
                🌍 Research Goal
              </h3>

              <p className="mt-5 leading-8 text-slate-400">

                Bridge the gap between academic research and deployable
                AI technologies that positively impact healthcare,
                education and society.

              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}