import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cleaning.jpg";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/70 to-primary/50" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Medical-Grade
              <br />
              <span className="text-secondary">Hygiene Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 font-medium">
              Setting the standard, one wash at a time
            </p>
            <p className="text-lg text-primary-foreground/80 max-w-2xl">
              Specialized healthcare laundry services for hospitals across Uganda. 
              24/7 operations, medical-grade cleaning, and zero-shortage assurance.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <a href="#contact">
              <Button size="lg" variant="secondary" className="text-lg group">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <a href="#services">
              <Button size="lg" className="text-lg border-2 border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Our Services
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
