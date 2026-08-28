import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import ProjectsPreview from "./pages/ProjectsPreview";
import Experience from "./pages/Experience";
import VisualWork from "./pages/VisualWork";
import Contact from "./pages/Contact";


export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<ProjectsPreview />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/visual-work" element={<VisualWork />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}