import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import Banner from "./components/Banner/Banner";
import SkillsSlider from "./components/SkillsSlider/SkillsSlider";
import ExperienceTimeline from "./components/ExperienceTimeline/ExperienceTimeline";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <SkillsSlider />
      <ExperienceTimeline />
      <Projects />
    </>
  );
}

export default App;
