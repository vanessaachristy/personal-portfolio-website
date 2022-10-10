import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Landing from "./components/landing/Landing";
import About from "./components/about/About";
import Education from "./components/education/Education";
import Work from "./components/work/Work";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="section">
        <Landing />
        <About />
        <Work />
        <Education />
        <Projects />
      </div>
    </div>
  );
}

export default App;
