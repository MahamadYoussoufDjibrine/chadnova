import { Code2, Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Code2 className="w-8 h-8" />
              <span className="text-2xl font-bold">TchadNova</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Transforming Chad through technology and innovation. 
              Building the future, one solution at a time.
            </p>
            <div className="flex space-x-4">
              <div className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors cursor-pointer">
                <Linkedin className="w-5 h-5" />
              </div>
              <div className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors cursor-pointer">
                <Twitter className="w-5 h-5" />
              </div>
              <div className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors cursor-pointer">
                <Github className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li className="hover:text-primary-foreground transition-colors cursor-pointer">Web Development</li>
              <li className="hover:text-primary-foreground transition-colors cursor-pointer">Mobile Apps</li>
              <li className="hover:text-primary-foreground transition-colors cursor-pointer">Data Science</li>
              <li className="hover:text-primary-foreground transition-colors cursor-pointer">Training Programs</li>
              <li className="hover:text-primary-foreground transition-colors cursor-pointer">Digital Transformation</li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li className="hover:text-primary-foreground transition-colors cursor-pointer">About Us</li>
              <li className="hover:text-primary-foreground transition-colors cursor-pointer">Our Team</li>
              <li className="hover:text-primary-foreground transition-colors cursor-pointer">Portfolio</li>
              <li className="hover:text-primary-foreground transition-colors cursor-pointer">Careers</li>
              <li className="hover:text-primary-foreground transition-colors cursor-pointer">Blog</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4" />
                <span>contact@tchadnova.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4" />
                <span>+235 XX XX XX XX</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4" />
                <span>N'Djamena, Chad</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 mt-12 text-center text-primary-foreground/60">
          <p>&copy; 2024 TchadNova. All rights reserved. Built with ❤️ in Chad.</p>
        </div>
      </div>
    </footer>
  );
};