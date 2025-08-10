import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";
import { Code, Database, GraduationCap, Shield, Smartphone, Globe, ShoppingCart } from "lucide-react";

export const Services = () => {
  const { t } = useTranslation();
  
  const services = [
    {
      icon: <Database className="w-8 h-8" />,
      title: t('services.dataScience.title'),
      description: t('services.dataScience.description'),
      technologies: ["Python", "Machine Learning", "AI", "Analytics"]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: t('services.softwareDev.title'),
      description: t('services.softwareDev.description'),
      technologies: ["React", "Node.js", "TypeScript", "Tailwind CSS"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: t('services.digitalGov.title'),
      description: t('services.digitalGov.description'),
      technologies: ["E-Government", "Digital Services", "Integration", "Security"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: t('services.cloudSolutions.title'),
      description: t('services.cloudSolutions.description'),
      technologies: ["AWS", "Azure", "Cloud Infrastructure", "Scalability"]
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: t('services.cybersecurity.title'),
      description: t('services.cybersecurity.description'),
      technologies: ["Cybersecurity", "Encryption", "Compliance", "Monitoring"]
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: t('services.consulting.title'),
      description: t('services.consulting.description'),
      technologies: ["Strategy", "Digital Transformation", "Innovation", "Leadership"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('services.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('services.subtitle')}
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