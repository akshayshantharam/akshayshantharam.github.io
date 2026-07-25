"use client";

const experience = [
  {
    period: "2024 - Present",
    role: "Vice Chairperson (UG Programs)",
    organization: "School of Computing, Amrita Vishwa Vidyapeetham",
    description:
      "Leading academic planning, curriculum implementation, quality assurance and undergraduate program development while mentoring students and faculty.",
  },
  {
    period: "2012 - Present",
    role: "Assistant Professor",
    organization: "Amrita Vishwa Vidyapeetham",
    description:
      "Teaching Computer Science, Artificial Intelligence, Data Structures, Java, Computer Vision and mentoring undergraduate and postgraduate research.",
  },
  {
    period: "2022 - Present",
    role: "Research Lead",
    organization: "AI • Computer Vision • Healthcare",
    description:
      "Leading interdisciplinary research on Explainable AI, Eye Tracking, Computer Vision and Intelligent Healthcare Systems with clinical collaborations.",
  },
  {
    period: "2021 - Present",
    role: "IEEE Senior Member & Leadership",
    organization: "IEEE Bangalore Section",
    description:
      "Serving in multiple IEEE leadership positions including Treasurer, TAG Head, EXECOM Member, Conference Organizer and Reviewer.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#020617] py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-300">
            EXPERIENCE
          </span>

          <h2 className="mt-8 text-5xl font-black text-white">
            Professional Journey
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-slate-400">
            More than thirteen years of academic, research,
            leadership and professional experience in Artificial
            Intelligence, Computer Vision and Higher Education.
          </p>

        </div>

        <div className="relative mt-20">

          {/* Timeline */}

          <div className="absolute left-6 top-0 hidden h-full w-[2px] bg-blue-500/30 md:block"></div>

          <div className="space-y-10">

            {experience.map((item, index) => (

              <div
                key={index}
                className="relative md:pl-20"
              >

                {/* Timeline Dot */}

                <div className="absolute left-[15px] top-8 hidden h-6 w-6 rounded-full border-4 border-[#020617] bg-blue-500 md:block"></div>

                <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 backdrop-blur-xl transition duration-300 hover:border-blue-500/40 hover:shadow-[0_20px_60px_rgba(37,99,235,.18)]">

                  <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                    <div>

                      <span className="inline-flex rounded-full bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">

                        {item.period}

                      </span>

                      <h3 className="mt-6 text-3xl font-bold text-white">

                        {item.role}

                      </h3>

                      <h4 className="mt-2 text-lg font-medium text-blue-400">

                        {item.organization}

                      </h4>

                    </div>

                  </div>

                  <p className="mt-8 text-lg leading-9 text-slate-400">

                    {item.description}

                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}