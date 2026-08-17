"use client";

type Patent = {
  title: string;
  applicationNumber: string;
  publicationNumber?: string;
  filingDate: string;
  publicationDate: string;
  applicant: string;
  inventors: string[];
  status: string;
};

const patents: Patent[] = [
  {
    title:
      "A SYSTEM, APPARATUS, AND METHODS FOR PROCESSING AND ANALYSIS OF RADIOGRAPHIC IMAGE DATA",
    applicationNumber: "202641057735",
    filingDate: "06/05/2026",
    publicationDate: "15/05/2026",
    applicant: "Amrita Vishwa Vidyapeetham",
    inventors: [],
    status: "Published Patent Application",
  },

  {
    title: "OPHTHALMIC IMAGE ANALYSIS SYSTEM",
    applicationNumber: "202641090432",
    publicationNumber: "31/2026",
    filingDate: "24/07/2026",
    publicationDate: "31/07/2026",
    applicant: "Amrita Vishwa Vidyapeetham",
    inventors: [
      "S, Akshay",
      "PATTATKKA, Kavya Bijith",
      "SANKARANARAYANAN, Swarnalatha",
      "VENKATECHALAM, Sneha",
    ],
    status: "Published Patent Application",
  },

  {
    title:
      "A SYSTEM AND METHOD FOR NUTRITIONAL ANALYSIS AND HARMFULNESS ASSESSMENT OF PACKAGED FOOD PRODUCTS",
    applicationNumber: "202641081285 A",
    filingDate: "01/07/2026",
    publicationDate: "03/07/2026",
    applicant: "Amrita Vishwa Vidyapeetham",
    inventors: [
      "Akshay S",
      "AMRUTHALURI, Yuvadeep",
      "MYSORE KUMARASWAMY, Shreevatsa",
      "BOLLERA MONNAPPA, Laveen",
      "SHASHIDHAR, Hemanth Bharadwaj",
    ],
    status: "Published Patent Application",
  },
];

export default function PatentsPage() {
  return (
    <main className="min-h-screen bg-[#030712] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">

        {/* Back to Home */}
        <div className="text-center">
          <a
            href="/"
            className="text-sm font-medium text-blue-300 transition hover:text-blue-200"
          >
            ← Back to Home
          </a>

          {/* Label */}
          <span className="mx-auto mt-8 block w-fit rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-300">
            PATENTS
          </span>

          {/* Heading */}
          <h1 className="mt-8 text-5xl font-black">
            Published Patents
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-slate-400">
            Published patent applications reflecting research and innovation
            in Artificial Intelligence, Healthcare, Computer Vision and
            related technologies.
          </p>
        </div>

        {/* Patent Cards */}
        <div className="mt-16 grid gap-8">

          {patents.map((patent, index) => (
            <article
              key={index}
              className="group rounded-3xl border border-white/10 bg-slate-900/70 p-8 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/40 hover:shadow-[0_20px_60px_rgba(37,99,235,.15)]"
            >

              {/* Top Row */}
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

                <div className="min-w-0">

                  {/* Status */}
                  <div className="mb-5 inline-flex rounded-full bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
                    {patent.status}
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-bold leading-9 text-white">
                    {patent.title}
                  </h2>

                  {/* Application Number */}
                  <p className="mt-5 text-sm text-slate-400">
                    <span className="font-semibold text-slate-300">
                      Application No.:
                    </span>{" "}
                    {patent.applicationNumber}
                  </p>

                  {/* Publication Number */}
                  {patent.publicationNumber && (
                    <p className="mt-2 text-sm text-slate-400">
                      <span className="font-semibold text-slate-300">
                        Publication No.:
                      </span>{" "}
                      {patent.publicationNumber}
                    </p>
                  )}

                </div>

                {/* Publication Date */}
                <div className="shrink-0 text-left lg:text-right">
                  <p className="text-sm text-slate-500">
                    Publication Date
                  </p>

                  <p className="mt-1 text-2xl font-black text-blue-400">
                    {patent.publicationDate}
                  </p>
                </div>

              </div>

              {/* Details */}
              <div className="mt-8 grid gap-6 border-t border-white/10 pt-8 md:grid-cols-2">

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                    Applicant
                  </p>

                  <p className="mt-2 text-slate-300">
                    {patent.applicant}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                    Filing Date
                  </p>

                  <p className="mt-2 text-slate-300">
                    {patent.filingDate}
                  </p>
                </div>

              </div>

              {/* Inventors */}
              <div className="mt-8 border-t border-white/10 pt-8">

                <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                  Inventors
                </p>

                {patent.inventors.length > 0 ? (
                  <div className="mt-4 grid gap-3 md:grid-cols-2">

                    {patent.inventors.map((inventor, inventorIndex) => (
                      <div
                        key={inventorIndex}
                        className="rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3 text-slate-300"
                      >
                        {inventor}
                      </div>
                    ))}

                  </div>
                ) : (
                  <p className="mt-4 text-slate-500">
                    Inventor details are not specified in the provided
                    publication proof.
                  </p>
                )}

              </div>

            </article>
          ))}

        </div>

        {/* Footer Count */}
        <p className="mt-12 text-center text-sm text-slate-500">
          {patents.length} published patent applications
        </p>

      </div>
    </main>
  );
}
