import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import Contact from "@/components/Contact";
import { SITE_URL } from "@/lib/site";

const Index = () => {
  return (
    <Layout>
      <Seo
        title="Clinova | Hospital laundry & linen services, Kampala"
        description="Clinova provides medical-grade hospital laundry and linen management in Kampala, Uganda. 24/7 operations, infection control, and zero-shortage assurance."
        path="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Clinova",
          url: `${SITE_URL}/`,
        }}
      />
      <main id="home">
        <Hero />
        <About moreHref="/about" />
        <Services moreHref="/services" />
        <WhyChoose />
        <Contact />
      </main>
    </Layout>
  );
};

export default Index;
