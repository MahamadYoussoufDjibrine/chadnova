import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Twitter, Mail } from "lucide-react";

export const About = () => {
  const founders = [
    {
      name: "Moussa Mahamat Nassour",
      role: "CEO & Co-Founder",
      expertise: "Business Strategy & Web Development",
      background: "Experienced entrepreneur with a passion for digital transformation in Africa. Leads strategic initiatives and business development.",
      skills: ["Leadership", "Strategy", "Full-Stack Development", "Business Development"]
    },
    {
      name: "Mahamat Youssouf Djibrine",
      role: "CTO & Co-Founder",
      expertise: "Software Engineering & Data Science",
      background: "Technical visionary specializing in scalable software solutions and data analytics. Drives innovation and technical excellence.",
      skills: ["Software Architecture", "Data Science", "Machine Learning", "Cloud Computing"]
    },
    {
      name: "Daoud Abdelkerim Adam",
      role: "Head of Training & Co-Founder",
      expertise: "Education & Skill Development",
      background: "Passionate educator focused on building technical capacity across Chad. Designs and delivers comprehensive training programs.",
      skills: ["Training Design", "Curriculum Development", "Mentorship", "Technical Education", "Data Science", "Machine Learning", "Cloud Computing"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Meet Our <span className="bg-gradient-primary bg-clip-text text-transparent">Founders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three visionary leaders united by a common goal: transforming Chad through technology and innovation
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {founders.map((founder, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border/50">
              <CardHeader className="text-center pb-4">
                <div className="w-32 h-32 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center text-4xl font-bold text-primary-foreground">
                  {founder.name.split(' ').map(n => n[0]).join('')}
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                  {founder.name}
                </CardTitle>
                <CardDescription className="text-primary font-medium">
                  {founder.role}
                </CardDescription>
                <Badge variant="secondary" className="mx-auto">
                  {founder.expertise}
                </Badge>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {founder.background}
                </p>
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {founder.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-center space-x-3">
                  <div className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-pointer">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-pointer">
                    <Twitter className="w-4 h-4" />
                  </div>
                  <div className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-pointer">
                    <Mail className="w-4 h-4" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-gradient-hero p-8 rounded-2xl text-center text-primary-foreground">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h3>
          <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
            To bridge the digital divide in Chad and across Africa by providing world-class technology solutions, 
            training the next generation of developers, and empowering businesses with innovative digital tools.
          </p>
        </div>
      </div>
    </section>
  );
};