import React from "react";
import Header from "./scences/Header";
import AboutSection from "./scences/AboutSection";
import ContactSection from "./scences/ContactSection";
import HomeSection from "./scences/HomeSection";
import ProjectsSection from "./scences/ProjectsSection";
import SkillSection from "./scences/SkillSection";
import Layout from "./components/Layout";
import Footer from './scences/Footer'

const App = () => {
  return (
    <Layout>
      <Header />
      <HomeSection />
      <AboutSection />
      <SkillSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </Layout>
  );
};

export default App;
