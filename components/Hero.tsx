"use client";

import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#030712] pt-36 pb-24"
    >
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute right-[-120px] top-[-120px] h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[160px]" />
        <div className="absolute left-[-150px] bottom-[-150px] h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[170px]" />
    </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

        {/* LEFT */}

        <div>

          <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-300">

            Healthcare AI • Eye Tracking • Computer Vision • Nuerology 

          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-6xl xl:text-7xl">

            Developing

            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              AI Solutions
            </span>

            <span className="block">
              for Healthcare
            </span>

          </h1>

          <p className="mt-8 max-w-xl text-lg leading-9 text-slate-300">

            Hi, I'm

            <span className="font-semibold text-white">
              {" "}Dr. Akshay S
            </span>

            , an AI Research Scientist focused on Computer Vision,
            Eye Tracking, Deep Learning and Explainable AI.
            I develop intelligent systems that bridge cutting-edge
            research and real-world healthcare applications.

          </p>

          {/* BUTTONS */}

          <div className="mt-12 flex flex-wrap gap-5">

            <a
              href="#projects"
              className="inline-flex items-center gap-3 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-500"
            >
              View Research

              <ArrowRight size={18} />

            </a>

            <a
              href="/Akshay_CV.pdf"
              className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-lg transition hover:bg-white/10"
            >

              <Download size={18} />

              Download CV

            </a>

          </div>

          {/* TAGS */}

          <div className="mt-12 flex flex-wrap gap-3">

            {[
              "Artificial Intelligence",
              "Computer Vision",
              "Healthcare AI",
              "Eye Tracking",
              "Deep Learning",
              "Explainable AI",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-slate-900 px-4 py-2 text-sm text-slate-300"
              >
                {tag}
              </span>
            ))}

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative flex justify-center">

          {/* Glow */}

          <div className="absolute h-[520px] w-[520px] rounded-full bg-blue-600/20 blur-[140px]" />

          {/* Image */}

          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-900 p-3 shadow-[0_30px_80px_rgba(37,99,235,.25)]">

            <Image
              src="/images/profile.JPG"
              alt="Dr. Akshay S"
              width={520}
              height={650}
              priority
              className="rounded-[24px] object-cover"
            />

          </div>

        </div>

      </div>
    </section>
  );
}
