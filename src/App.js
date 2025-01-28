import "./App.css";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Skill from "./components/Skills/Skill";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";

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
    </div>
    
  );
}

export default App;
