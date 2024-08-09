import React from "react";
import "./App.css";
import { Contacts, Home, Navbar, Projects, Skills } from "./components";
const App = () => {
  return (
    <main>
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Contacts/>
    </main>
  );
};

export default App;
