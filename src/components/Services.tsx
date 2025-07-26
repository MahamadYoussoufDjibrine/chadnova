import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, GraduationCap, Shield, Smartphone, Globe } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description: "Modern, responsive web applications built with cutting-edge technologies",
      technologies: ["React", "Node.js", "TypeScript", "Tailwind CSS"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile solutions for iOS and Android",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Science",
      description: "Transform raw data into actionable insights and intelligent solutions",
      technologies: ["Python", "Machine Learning", "AI", "Analytics"]
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Software Engineering Training",
      description: "Comprehensive training programs to build the next generation of developers",
      technologies: ["Bootcamps", "Workshops", "Mentorship", "Certification"]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Digital Transformation",
      description: "Modernize traditional systems with digital solutions for agriculture and trade",
      technologies: ["IoT", "Automation", "Cloud", "Integration"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security Solutions",
      description: "Robust security systems to protect digital infrastructure and data",
      technologies: ["Cybersecurity", "Encryption", "Compliance", "Monitoring"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions designed to drive innovation across Chad and Africa
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <div className="mb-4 text-primary group-hover:text-secondary transition-colors duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};