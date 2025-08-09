import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const DataScienceGallery = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: "Smart Farming Insights",
      description: "AI-powered agricultural platform providing personalized crop recommendations using real-time climate analysis and satellite imagery",
      technologies: ["AI", "Machine Learning", "Climate Analysis", "Satellite Mapping", "Agricultural Tech"],
      liveUrl: "https://tinyurl.com/pwf8jyw7",
      type: "live"
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
                Data <span className="bg-gradient-primary bg-clip-text text-transparent">Science</span> Projects
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore our AI-powered solutions and machine learning applications for agricultural and business insights
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
                      {project.type === "live" && project.liveUrl && (
                        <Button
                          variant="default"
                          size="sm"
                          className="flex items-center gap-2"
                          onClick={() => window.open(project.liveUrl, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4" />
                          View Live
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DataScienceGallery;