import About from "./component/About";
import Contact from "./component/Contact";
import Hero from "./component/Hero";
import Project from "./component/Project";

function App() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen relative overflow-hidden">
      <Hero />
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
