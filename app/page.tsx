import Navbar from "../components/Navbar";
import Hero from "../components/Hero"
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About/>
      <Experience/>
      <Skills/>
      <Projects/>
       <Stats/>
       <Contact/>
    </main>
  );
}