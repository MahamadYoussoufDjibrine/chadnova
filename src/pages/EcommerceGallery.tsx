import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const EcommerceGallery = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: "Coming Soon",
      description: "Digital marketplace solutions for local businesses and traders",
      technologies: ["E-commerce", "Payment Integration", "Inventory Management"],
      type: "placeholder"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="mb-8">
              <Button
                variant="ghost"
                onClick={() => navigate('/')}
                className="mb-4 text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Portfolio
              </Button>
            </div>

            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                E-commerce <span className="bg-gradient-primary bg-clip-text text-transparent">Solutions</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Digital marketplace solutions for local businesses and online commerce
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, projectIndex) => (
                <Card key={projectIndex} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border/50">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <Button variant="secondary" size="sm" disabled>
                        Coming Soon
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-16">
              <div className="bg-gradient-hero p-8 rounded-2xl text-primary-foreground max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">E-commerce Platforms Coming Soon</h3>
                <p className="text-lg leading-relaxed mb-6">
                  We're developing comprehensive e-commerce solutions to empower local businesses and create digital marketplaces for Chad's economy.
                </p>
                <Button 
                  variant="secondary" 
                  size="lg"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Join Waitlist
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EcommerceGallery;