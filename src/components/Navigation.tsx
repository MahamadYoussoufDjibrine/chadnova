
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { GetStartedDialog } from "@/components/GetStartedDialog";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useTranslation } from "react-i18next";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const navItems = [
    { label: t('nav.home'), href: "#home" },
    { label: t('nav.services'), href: "#services" },
    { label: t('nav.about'), href: "#about" },
    { label: t('nav.portfolio'), href: "#portfolio" },
    { label: t('nav.contact'), href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-800/90 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/787774af-8c7e-48b9-8103-f9daa7a10cf4.png" 
              alt="ChadNova Logo" 
              className="w-16 h-16 rounded-full object-cover aspect-square"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                ChadNova
              </span>
              <span className="text-xs text-white font-medium">
                {t('footer.slogan')}
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                size="sm"
                asChild
                className="text-white hover:text-primary hover:bg-primary/10 transition-all duration-300 font-medium"
              >
                <a href={item.href}>
                  {item.label}
                </a>
              </Button>
            ))}
            <LanguageSwitcher />
            <GetStartedDialog>
              <Button variant="hero" size="sm">
                {t('nav.getStarted')}
              </Button>
            </GetStartedDialog>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  variant="ghost"
                  size="sm"
                  asChild
                  className="text-white hover:text-primary hover:bg-primary/10 transition-all duration-300 font-medium justify-start"
                  onClick={() => setIsOpen(false)}
                >
                  <a href={item.href}>
                    {item.label}
                  </a>
                </Button>
              ))}
              <LanguageSwitcher />
              <GetStartedDialog>
                <Button variant="hero" size="sm" className="w-fit mt-2">
                  {t('nav.getStarted')}
                </Button>
              </GetStartedDialog>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
