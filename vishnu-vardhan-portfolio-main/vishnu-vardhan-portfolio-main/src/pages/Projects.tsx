
import { useState } from "react";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ScrollReveal from "@/components/ScrollReveal";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Athidhi Restaurant Table Reservation System",
      description: "A full-stack web application for restaurant table reservations. Users can browse available tables, make reservations, and receive email confirmations. Admin dashboard for restaurant staff to manage bookings and table availability.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      technologies: ["Node.js", "MongoDB", "Express", "SMTP Integration", "HTML/CSS", "JavaScript"],
      link: "https://athidhi-restaurant.vercel.app",
      github: "https://github.com/pVishnu143/athidhi-restaurant"
    },
    {
      id: 2,
      title: "Expense Tracker Application",
      description: "A comprehensive expense tracking application that helps users monitor their spending habits. Features include expense categorization, budget setting, graphical reports, and custom dashboards for financial insights.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXhwZW5zZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      technologies: ["Node.js", "MongoDB", "React", "Express", "JWT Authentication", "Chart.js"],
      link: "https://expense-tracker-vishnu.vercel.app",
      github: "https://github.com/pVishnu143/expense-tracker"
    }
  ];

  return (
    <Section
      title="My Projects"
      subtitle="Explore some of my recent work and personal projects"
    >
      <div className="space-y-16">
        {projects.map((project, index) => (
          <ScrollReveal key={project.id} delay={index * 200}>
            <div
              className={`grid grid-cols-1 ${
                index % 2 === 0 ? "md:grid-cols-[1fr_1.2fr]" : "md:grid-cols-[1.2fr_1fr]"
              } gap-8 items-center`}
            >
              <div
                className={`order-1 ${
                  index % 2 === 0 ? "md:order-1" : "md:order-2"
                }`}
              >
                <div className="relative group overflow-hidden rounded-xl transition-all duration-300 hover:shadow-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="p-6 w-full h-full flex items-end">
                      <div className="flex gap-4 justify-end w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                        <Button asChild size="sm" variant="outline" className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30">
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </a>
                        </Button>
                        <Button asChild size="sm" className="bg-accent hover:bg-accent/80 text-white">
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Demo
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div
                className={`order-2 ${
                  index % 2 === 0 ? "md:order-2" : "md:order-1"
                }`}
              >
                <div className="space-y-4 transform transition-all duration-300 hover:translate-x-2">
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-muted-foreground mb-6">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm uppercase text-muted-foreground tracking-wider mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary"
                          className="transition-all duration-300 hover:bg-accent hover:text-white"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Button asChild variant="outline" size="sm" className="transition-all duration-300 hover:-translate-y-1">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                    <Button asChild size="sm" className="transition-all duration-300 hover:-translate-y-1">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        View Project
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
};

export default Projects;

