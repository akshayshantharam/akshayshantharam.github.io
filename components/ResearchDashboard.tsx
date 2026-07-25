"use client";

const stats = [
    {
    value: "Ph.D.",
    title: "Computer Science",
    desc: "Artificial Intelligence, Computer Vision and Healthcare AI",
  },
  {
    value: "70+",
    title: "Research Publications",
    desc: "International journals, conferences and book chapters",
  },
  {
    value: "500+",
    title: "Citations",
    desc: "Google Scholar citations across AI and Healthcare research",
  },
  {
    value: "7",
    title: "Springer Book Chapters",
    desc: "Published in Springer Nature edited volumes",
  },
      {
    value: "5",
    title: "Patents",
    desc: "Published",
  },
      {
    value: "15+",
    title: "Years Experience",
    desc: "Teaching, research, mentoring and academic leadership",
  },
  {
    value: "IEEE",
    title: "Senior Member",
    desc: "Active leadership across multiple IEEE societies",
  },


];

export default function ResearchDashboard() {
  return (
    <section
      className="relative bg-[#030712] py-24"
      id="dashboard"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-16 text-center">

          <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-300">
            RESEARCH IMPACT
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
            Research at a Glance
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            My research focuses on Artificial Intelligence,
            Computer Vision, Eye Tracking and Explainable AI
            for solving real-world healthcare challenges through
            interdisciplinary collaborations.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {stats.map((item) => (

            <div
              key={item.title}
              className="group rounded-3xl border border-white/10 bg-slate-900/70 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-[0_20px_60px_rgba(37,99,235,.20)]"
            >

              <h3 className="text-5xl font-black text-blue-400">
                {item.value}
              </h3>

              <h4 className="mt-6 text-2xl font-bold text-white">
                {item.title}
              </h4>

              <p className="mt-4 leading-8 text-slate-400">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}