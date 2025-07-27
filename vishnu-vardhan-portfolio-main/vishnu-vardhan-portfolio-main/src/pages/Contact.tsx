import { useState } from "react";
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <Section
      title="Contact Me"
      subtitle="Get in touch for collaboration or to discuss your project"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
          <p className="text-muted-foreground mb-8">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision. Feel free to reach out through the contact form or via my contact information.
          </p>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-1">Email</h4>
              <a 
                href="mailto:p.vishnuavardhanreddy.2005@gmail.com" 
                className="flex items-center gap-2 text-accent hover:underline"
              >
                <Mail className="h-5 w-5" />
                <span>p.vishnuavardhanreddy.2005@gmail.com</span>
              </a>
            </div>
            
            <div>
              <h4 className="font-semibold mb-1">Phone</h4>
              <a 
                href="tel:+917793921655" 
                className="flex items-center gap-2 text-accent hover:underline"
              >
                <Phone className="h-5 w-5" />
                <span>+91 7793921655</span>
              </a>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Social Media</h4>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/pVishnu143" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center h-12 w-12 rounded-full bg-secondary hover:bg-primary/10 transition-colors"
                >
                  <Github className="h-6 w-6" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a 
                  href="https://linkedin.com/in/vishnu-vardhan-reddy-p" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center h-12 w-12 rounded-full bg-secondary hover:bg-primary/10 transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a 
                  href="mailto:p.vishnuavardhanreddy.2005@gmail.com" 
                  className="flex items-center justify-center h-12 w-12 rounded-full bg-secondary hover:bg-primary/10 transition-colors"
                >
                  <Mail className="h-6 w-6" />
                  <span className="sr-only">Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
          <div className="bg-background border border-border rounded-xl p-6 md:p-8 shadow-sm hover-glow">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Your Email</Label>
                <Input 
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Your Message</Label>
                <Textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  rows={6}
                  required
                />
              </div>
              
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>Processing...</>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
