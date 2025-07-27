import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export const Portfolio = () => {
  const portfolioCategories = [
    {
      title: "Data Science",
      projects: [
        {
          title: "Coming Soon",
          description: "Advanced data analytics and visualization projects showcasing machine learning capabilities",
          technologies: ["Python", "Machine Learning", "Data Analytics", "Visualization"],
          type: "placeholder"
        }
      ]
    },
    {
      title: "Software Development",
      projects: [
        {
          title: "Developer Portfolio",
          description: "Comprehensive portfolio showcasing full-stack development skills and projects",
          technologies: ["React", "JavaScript", "Web Development", "UI/UX"],
          liveUrl: "https://moussassoss.github.io/portfolio/",
          type: "live"
        }
      ]
    },
    {
      title: "Mobile Applications",
      projects: [
        {
          title: "Coming Soon",
          description: "Innovative mobile solutions for farmers and traders in Chad",
          technologies: ["React Native", "Mobile Development", "Cross-Platform"],
          type: "placeholder"
        }
      ]
    },
    {
      title: "E-commerce Solutions",
      projects: [
        {
          title: "Coming Soon",
          description: "Digital marketplace solutions for local businesses and traders",
          technologies: ["E-commerce", "Payment Integration", "Inventory Management"],
          type: "placeholder"
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our latest projects and success stories across different technology domains
          </p>
        </div>

        <div className="space-y-16">
          {portfolioCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                {category.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.projects.map((project, projectIndex) => (
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
                        
                        {project.type === "github" && project.githubUrl && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex items-center gap-2"
                            onClick={() => window.open(project.githubUrl, '_blank')}
                          >
                            <Github className="w-4 h-4" />
                            GitHub
                          </Button>
                        )}
                        
                        {project.type === "placeholder" && (
                          <Button variant="secondary" size="sm" disabled>
                            Coming Soon
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-gradient-hero p-8 rounded-2xl text-primary-foreground">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto mb-6">
              Contact us to discuss how we can bring your ideas to life with cutting-edge technology solutions.
            </p>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};