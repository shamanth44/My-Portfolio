import { useRef } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Profile from "./Components/Profile";
import About from "./Components/About";
import Skills from "./Components/Skills";
import AllProjects from "./Components/AllProjects";
import Contact from "./Components/Contact";
import Copyright from "./Components/Copyright";
import Footer from "./Components/Footer";

function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Navbar
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        skillsRef={skillsRef}
        contactRef={contactRef}
      />
      <Profile />
      <div ref={aboutRef}>
        <About />
      </div>

      <div ref={projectsRef}>
        <AllProjects />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
    <div ref={contactRef}>
      <Footer/>
    </div>
    </>
  );
}

export default App;
