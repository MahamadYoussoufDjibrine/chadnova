import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="portfolio">
          <div className="py-20 bg-background text-center">
            <div className="container mx-auto px-6">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our <span className="bg-gradient-primary bg-clip-text text-transparent">Portfolio</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Explore our latest projects and success stories
              </p>
              <p className="text-lg text-muted-foreground">
                Portfolio showcase coming soon. Contact us to see our work samples.
              </p>
            </div>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
