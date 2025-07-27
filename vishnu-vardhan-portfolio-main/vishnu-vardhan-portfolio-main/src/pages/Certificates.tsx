
import { useState } from "react";
import { Calendar, FileText, Link } from "lucide-react";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: "Front-End Web Development",
      issuer: "Udemy",
      date: "December 2022",
      description: "Comprehensive course covering HTML, CSS, JavaScript, and React framework for building modern web applications.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80"
    },
    {
      id: 2,
      title: "C++ and Data Structures",
      issuer: "Coursera",
      date: "May 2022",
      description: "Advanced course on C++ programming and implementation of data structures for efficient algorithm design.",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    },
    {
      id: 3,
      title: "Android UI Design",
      issuer: "Google",
      date: "August 2023",
      description: "Course focused on creating intuitive and visually appealing interfaces for Android applications.",
      image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    },
    {
      id: 4,
      title: "Computer Architecture",
      issuer: "edX",
      date: "January 2023",
      description: "Detailed exploration of computer architecture principles, processor design, and system organization.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    }
  ];

  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const handleViewCertificate = (certificateId: number) => {
    window.open('https://drive.google.com/drive/folders/1lAOiuWwol48msLscTg8hLBlh7FuiKYvQ', '_blank', 'noopener,noreferrer');
  };

  return (
    <Section
      title="Certificates & Achievements"
      subtitle="My educational qualifications and professional certifications"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certificates.map((certificate) => (
          <div
            key={certificate.id}
            className="bg-background border border-border rounded-xl overflow-hidden shadow-sm transition-all hover:shadow-md hover:border-accent/30"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4">
                  <h3 className="text-white text-lg font-bold">{certificate.title}</h3>
                  <p className="text-white/80 text-sm">{certificate.issuer}</p>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center text-sm text-muted-foreground mb-4">
                <Calendar className="mr-2 h-4 w-4" />
                {certificate.date}
              </div>
              
              <p className="text-muted-foreground mb-6 line-clamp-3">
                {certificate.description}
              </p>
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    variant="outline" 
                    className="w-full" 
                    onClick={() => setSelectedCertificate(certificate)}
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    View Certificate
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle>{selectedCertificate?.title}</DialogTitle>
                    <DialogDescription>
                      {selectedCertificate?.issuer} - {selectedCertificate?.date}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="mt-4">
                    <div className="rounded-lg overflow-hidden mb-4">
                      <img 
                        src={selectedCertificate?.image} 
                        alt={selectedCertificate?.title}
                        className="w-full h-auto"
                      />
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {selectedCertificate?.description}
                    </p>
                    <Button 
                      onClick={() => handleViewCertificate(selectedCertificate?.id)}
                      className="w-full"
                    >
                      <Link className="mr-2 h-4 w-4" />
                      Open Certificates Folder
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Certificates;

