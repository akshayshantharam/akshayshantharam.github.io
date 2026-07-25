import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ResearchDashboard from "@/components/ResearchDashboard";
import About from "@/components/About";
import ResearchAreas from "@/components/ResearchAreas";
import FeaturedProjects from "@/components/FeaturedProjects";
import Publications from "@/components/Publications";
import Experience from "@/components/Experience";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#030712] text-white overflow-x-hidden">

      <Navbar />

      <Hero />

      <ResearchDashboard />

      <About />

      <ResearchAreas />

      <FeaturedProjects />

      <Publications />

      <Experience />

      <Leadership />

      <Contact />

      <Footer />

    </main>
  );
}