import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import ProjectList from './components/ProjectList/ProjectList';
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";
import { LanguageProvider } from './LanguageContext';


const App = () => {
  return (
    <LanguageProvider>
      <Navbar />
      <div className="container">
        <Hero />
        <Skills />
        <WorkExperience />
        <ProjectList />
        <ContactMe />
      </div>
      <Footer />
    </LanguageProvider>
  );
};

export default App;
