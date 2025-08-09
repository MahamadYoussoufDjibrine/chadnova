import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Database, Code2, Smartphone, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Portfolio = () => {
  const navigate = useNavigate();

  const portfolioCategories = [
    {
      title: "Data Science",
      description: "AI-powered solutions and machine learning applications for agricultural and business insights",
      icon: Database,
      path: "/portfolio/data-science",
      count: "1 Project"
    },
    {
      title: "Software Development",
      description: "Modern web applications and digital platforms for government and business solutions",
      icon: Code2,
      path: "/portfolio/software-development",
      count: "3 Projects"
    },
    {
      title: "Mobile Applications",
      description: "Cross-platform mobile solutions for farmers and traders in Chad",
      icon: Smartphone,
      path: "/portfolio/mobile-apps",
      count: "Coming Soon"
    },
    {
      title: "E-commerce Solutions",
      description: "Digital marketplace solutions for local businesses and online commerce",
      icon: ShoppingCart,
      path: "/portfolio/e-commerce",
      count: "Coming Soon"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={categoryIndex} 
                className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border/50 cursor-pointer"
                onClick={() => navigate(category.path)}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-4">
                    <span className="text-sm font-medium text-primary">{category.count}</span>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  >
                    View Gallery
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
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