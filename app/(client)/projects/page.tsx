"use client";

import Container from "@/components/Container";
import Projects from "@/components/Projects";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import React from "react";

const ProjectsPage = () => {
 
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects-section");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <section className="py-20 md:py-32 bg-gradient-to-r from-darkOrange to-darkBlue text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Discover My Best Work
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Here are some of my most exciting projects, showcasing my expertise in 
              full-stack development. From innovative web applications to scalable solutions, 
              each project reflects my dedication to quality and performance.
            </p>
            <Button size="lg" variant="secondary" onClick={scrollToProjects}>
              Explore Projects
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </Container>
      </section>

      
      <div id="projects-section">
        <Projects />
      </div>
    </div>
  );
};

export default ProjectsPage;
