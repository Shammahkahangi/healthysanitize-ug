import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main id="home" className="pt-20">
        <Hero />
        <About />
        <Services />
        <WhyChoose />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
