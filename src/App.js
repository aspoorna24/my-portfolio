import "./App.css";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Skill from "./components/Skills/Skill";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Project from "./components/Projects/Project";
function App() {
  return (
    <div className="App">
      <Navbar />
     <Home />
     <br></br>
    <About />
    <br></br>
    <Skill />
    <br></br>
    <Experience />
    <br></br>
    <Project />
    </div>
    
  );
}

export default App;
