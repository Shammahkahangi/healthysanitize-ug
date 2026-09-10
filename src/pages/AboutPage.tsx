import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import PageHero from "@/components/PageHero";
import About from "@/components/About";
import WhyChoose from "@/components/WhyChoose";
import { Button } from "@/components/ui/button";
import { SITE_ADDRESS, SITE_URL } from "@/lib/site";

const AboutPage = () => {
  return (
    <Layout>
      <Seo
        title="About Clinova | Medical-grade laundry, Uganda"
        description="Clinova, operated by M&T Cleaners Limited, is a Kampala hospital laundry partner. Medical-grade hygiene, 24/7 operations, and infection control for Ugandan healthcare facilities."
        path="/about"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About Clinova",
          url: `${SITE_URL}/about`,
          mainEntity: {
            "@type": "Organization",
            name: "Clinova",
            legalName: "M&T Cleaners Limited",
            address: SITE_ADDRESS,
          },
        }}
      />
      <main>
        <PageHero
          kicker="About"
          title="Clinova is built for hospital linen, not high-street laundry"
          subtitle="Operated by M&T Cleaners Limited from Nakasero Hill Road, Kampala. We exist so Ugandan hospitals can keep linen in circulation without compromising infection control."
        />

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-3xl space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Clinova is the healthcare laundry arm of M&amp;T Cleaners Limited. We process
              bed linen, theatre textiles, staff uniforms, and patient clothing to medical-grade
              standards, then return them on a hospital schedule — including nights, weekends,
              and surge demand.
            </p>
            <p>
              Our plant at {SITE_ADDRESS} is set up for calibrated industrial machines,
              hospital-approved detergents and disinfectants, inspection after every cycle, and
              hygienic sealed packaging. That is a different workflow from commercial or domestic
              laundry, and it is the only work we take on.
            </p>
            <p>
              Hospitals may keep ownership of their inventory, or switch to Clinova-supplied
              branded linen with tracking and zero-shortage assurance. Either model is designed
              so clinical teams spend time on patients, not on chasing missing sheets.
            </p>
          </div>
        </section>

        <About showIntro={false} />
        <WhyChoose />

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to talk through a partnership?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Tell us your bed count, current linen pain points, and whether you want wash-only or full management.
            </p>
            <Link to="/contact">
              <Button size="lg">Request a quote</Button>
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default AboutPage;
