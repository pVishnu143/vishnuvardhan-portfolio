import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import Section from "@/components/Section";
import ScrollReveal from "@/components/ScrollReveal";

const Home = () => {
  const skills = [
    "HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"
  ];

  const handleDownloadResume = () => {
    window.open('https://drive.google.com/file/d/1N_rEBs7q2vsRaLhSlUQkgFYO31M2RmGU/view?usp=sharing', '_blank', 'noopener,noreferrer');
  };
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-repeat opacity-5"></div>
        <div className="container mx-auto px-4 md:px-6 z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <ScrollReveal>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gradient animate-slide-up" style={{ animationDelay: '0.4s' }}>
                  Vishnu Vardhan Reddy
                </h1>
                <h2 className="text-xl md:text-2xl text-muted-foreground mb-6 animate-slide-up" style={{ animationDelay: '0.6s' }}>
                  Web Developer
                </h2>
                <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-lg animate-slide-up" style={{ animationDelay: '0.8s' }}>
                  Turning Ideas into Interactive, High-Impact Websites.
                </p>
                <div className="flex gap-4 flex-wrap animate-slide-up" style={{ animationDelay: '1s' }}>
                  <Button asChild size="lg" className="hover-lift hover-glow">
                    <Link to="/projects">
                      View Projects
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" onClick={handleDownloadResume} className="hover-lift">
                    Download Resume
                    <Download className="ml-2 h-4 w-4" />
                  </Button>
                  <Button asChild variant="outline" size="lg" className="hover-lift">
                    <Link to="/contact">Contact Me</Link>
                  </Button>
                </div>
              </ScrollReveal>
            </div>
            
            <div className="md:w-1/2 flex justify-center animate-slide-in-right" style={{ animationDelay: '1.2s' }}>
              <ScrollReveal delay={300}>
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                  <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 absolute -top-10 -left-10 animate-pulse"></div>
                  
                  <div className="w-72 h-72 md:w-96 md:h-96 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                    <div className="absolute inset-[3px] bg-background rounded-2xl"></div>
                    <div className="relative h-full w-full bg-foreground/5 backdrop-blur-sm border border-foreground/10 rounded-2xl shadow-xl p-4 overflow-hidden hover:scale-[1.02] transition-transform duration-500">
                      <img 
                        src="/lovable-uploads/c73e5b4f-c1de-4c2b-9cb1-188b02719f36.png"
                        alt="Vishnu Vardhan Reddy"
                        className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <Section
        title="My Skills"
        subtitle="Technologies and tools I work with"
        className="bg-secondary/50 dark:bg-secondary/20"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {skills.map((skill, index) => (
            <div 
              key={skill}
              className="flex items-center justify-center p-6 bg-background rounded-xl border border-border hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 hover-lift hover-glow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="font-medium">{skill}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild variant="outline" className="hover-lift hover-glow">
            <Link to="/about">Learn more about me</Link>
          </Button>
        </div>
      </Section>
    </>
  );
};

export default Home;
