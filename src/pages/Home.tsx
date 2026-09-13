import Hero from "../components/hero/Hero";

import About from "./About";
import Skills from "./Skills";

import ProjectsPreview from "./Projects";

import Experience from "./Experience";

import VisualWork from "./VisualWork";

import CTASection from "../components/cta/CTASection";

export default function Home() {
  return (
    <>
      <Hero />

      <About />

      <Skills />

      <ProjectsPreview />

      <Experience />

      <VisualWork />

      <CTASection />
    </>
  );
}