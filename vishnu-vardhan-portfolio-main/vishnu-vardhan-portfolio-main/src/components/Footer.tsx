
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary/5 dark:bg-primary/10 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="text-xl font-poppins font-bold text-foreground">
              Vishnu<span className="text-accent">.</span>
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md">
              Web Developer turning ideas into interactive, high-impact websites with modern technologies.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-accent transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-accent transition-colors">About</Link>
              </li>
              <li>
                <Link to="/projects" className="text-muted-foreground hover:text-accent transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/certificates" className="text-muted-foreground hover:text-accent transition-colors">Certificates</Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-accent transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:p.vishnuavardhanreddy.2005@gmail.com" 
                  className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
                >
                  <Mail size={16} />
                  <span>p.vishnuavardhanreddy.2005@gmail.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+917793921655" 
                  className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
                >
                  <Phone size={16} />
                  <span>+91 7793921655</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/pVishnu143" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
                >
                  <Github size={16} />
                  <span>github.com/pVishnu143</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com/in/vishnu-vardhan-reddy-p" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
                >
                  <Linkedin size={16} />
                  <span>linkedin.com/in/vishnu-vardhan-reddy-p</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Vishnu Vardhan Reddy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
