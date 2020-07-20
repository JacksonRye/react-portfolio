import React from "react";
import "./scss/App.css";
import About from "./components/About";
import Skills from "./components/Skills";
import Hobbies from "./components/Hobbies";
import Blog from "./components/Blog";
import Experiences from "./components/Experiences";

function App() {
  return (
    <div className="App">
      <About />

      <main>
        <div className="left">
          <Skills />

          <Hobbies />
        </div>

        <div className="right">
          <Blog />
          <Experiences />
        </div>
      </main>
    </div>
  );
}

export default App;
