"use client";

const leadership = [
  {
    title: "IEEE Senior Member",
    organization: "IEEE",
    description:
      "Recognized as an IEEE Senior Member for significant professional contributions in Artificial Intelligence, Computer Vision and Engineering Education.",
  },
  {
    title: "Treasurer",
    organization: "IEEE VTS Bangalore Chapter",
    description:
      "Managing chapter finances, conference budgets, reimbursements and IEEE Bangalore Section financial coordination.",
  },
  {
    title: "Research TAG Head",
    organization: "AI in Healthcare & Forensics",
    description:
      "Leading research initiatives, collaborations and technical activities in Artificial Intelligence for Healthcare and Digital Forensics.",
  },
  {
    title: "EXECOM Member",
    organization: "IEEE Bangalore Section",
    description:
      "Contributing to strategic planning, technical programs, workshops and professional activities across multiple IEEE societies.",
  },
  {
    title: "Conference Leadership",
    organization: "International Conferences",
    description:
      "Serving as Conference Chair, Session Chair, Technical Committee Member, Reviewer and Organizing Committee Member for international conferences.",
  },
  {
    title: "Academic Leadership",
    organization: "Amrita Vishwa Vidyapeetham",
    description:
      "Vice Chairperson (UG Programs), Placement Coordinator, Academic Programme Coordinator, Project Coordinator and Board of Studies Member.",
  },
];

export default function Leadership() {
  return (
    <section
      id="leadership"
      className="bg-[#030712] py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-300">
            LEADERSHIP & SERVICE
          </span>

          <h2 className="mt-8 text-5xl font-black text-white">
            Professional Leadership
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-slate-400">
            Leadership roles spanning IEEE, academic administration,
            research management and international conference organization.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {leadership.map((item) => (

            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-[0_20px_60px_rgba(37,99,235,.18)]"
            >

              <div className="flex items-center justify-between">

                <h3 className="text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <div className="h-3 w-3 rounded-full bg-blue-500"></div>

              </div>

              <p className="mt-3 text-blue-400 font-medium">
                {item.organization}
              </p>

              <p className="mt-6 leading-8 text-slate-400">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}