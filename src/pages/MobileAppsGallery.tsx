import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useTranslation } from "react-i18next";

const MobileAppsGallery = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const projects = [
    {
      title: t('projects.mobileComingSoon.title'),
      description: t('projects.mobileComingSoon.description'),
      technologies: ["React Native", "Mobile Development", "Cross-Platform"],
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
                {t('gallery.backToPortfolio')}
              </Button>
            </div>

            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {t('gallery.mobileApps.title').split(' ')[0]} <span className="bg-gradient-primary bg-clip-text text-transparent">{t('gallery.mobileApps.title').split(' ').slice(1).join(' ')}</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t('gallery.mobileApps.subtitle')}
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
                        {t('gallery.comingSoon')}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-16">
              <div className="bg-gradient-hero p-8 rounded-2xl text-primary-foreground max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">{t('gallery.mobileApps.ctaTitle')}</h3>
                <p className="text-lg leading-relaxed mb-6">
                  {t('gallery.mobileApps.ctaDescription')}
                </p>
                <Button 
                  variant="secondary" 
                  size="lg"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {t('gallery.mobileApps.ctaButton')}
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

export default MobileAppsGallery;