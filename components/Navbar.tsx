"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Research", href: "#research" },
  { name: "Projects", href: "#projects" },
  { name: "Publications", href: "#publications" },
  { name: "Patents", href: "#patents" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-slate-950/90 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <a href="#home" className="select-none">

          <h1 className="text-2xl font-black tracking-tight">

            <span className="text-white">
              Dr.
            </span>

            <span className="text-blue-500">
              {" "}Akshay S
            </span>

          </h1>

          <p className="text-xs tracking-wider text-slate-400">
            AI in Healthcare - Research Scientist
          </p>

        </a>

        {/* Desktop */}

        <nav className="hidden items-center gap-8 lg:flex">

          {navLinks.map((item) => (

            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition hover:text-blue-400"
            >
              {item.name}
            </a>

          ))}

        </nav>

        {/* Right Side */}

        <div className="hidden lg:flex items-center gap-4">

          <a
            href="/Akshay_CV.pdf"
            className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            Download CV
          </a>

        </div>

        {/* Mobile Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white lg:hidden"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="border-t border-white/10 bg-slate-950 lg:hidden">

          <div className="flex flex-col gap-6 px-6 py-8">

            {navLinks.map((item) => (

              <a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-lg text-slate-300"
              >
                {item.name}
              </a>

            ))}

            <a
              href="/Akshay_CV.pdf"
              className="rounded-xl bg-blue-600 py-3 text-center font-semibold text-white"
            >
              Download CV
            </a>

          </div>

        </div>

      )}

    </header>
  );
}
