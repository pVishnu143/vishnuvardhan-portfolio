import Section from "@/components/Section";
import { CheckCircle } from "lucide-react";

const About = () => {
  const skills = [
    "Front-end Development (HTML, CSS, JavaScript, React)",
    "Back-end Development (Node.js, Express.js)",
    "Database Management (MongoDB, SQL)",
    "Responsive Design",
    "UI/UX Design Principles",
    "Version Control (Git)",
    "Problem Solving",
    "Project Management"
  ];

  return (
    <>
      <Section 
        title="About Me"
        subtitle="Learn more about my background, education and skills"
        className="bg-background"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
            <p className="text-muted-foreground mb-6">
              Hi, I'm Vishnu Vardhan Reddy — a web developer passionate about building fast, responsive, 
              and user-friendly web applications. I love turning ideas into smart, interactive websites 
              that make a real impact.
            </p>
            <p className="text-muted-foreground mb-6">
              With strong skills across both frontend and backend technologies, I combine creativity 
              with technical precision to deliver solutions that don't just meet client needs — they 
              raise the bar.
            </p>
            <p className="text-muted-foreground">
              When I'm not coding, you'll find me solving tricky problems, diving into new tech trends, 
              and always pushing my limits as a developer.
            </p>
          </div>
          
          <div className="animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
            <div className="bg-secondary/50 dark:bg-secondary/20 rounded-xl p-6 h-full hover-glow">
              <h3 className="text-2xl font-bold mb-4">Education & Achievements</h3>
              
              <div className="mb-6">
                <h4 className="font-semibold">B.Tech in Computer Science Engineering</h4>
                <p className="text-muted-foreground">CGPA: 7.10</p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold">Achievements</h4>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Solved 450+ coding problems across platforms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Developed multiple full-stack web applications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Participated in coding competitions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section 
        title="Skills & Expertise" 
        className="bg-primary/5 dark:bg-primary/10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="flex items-start gap-3 p-4 bg-background rounded-lg border border-border hover-lift hover-glow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default About;
