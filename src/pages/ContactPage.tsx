import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";
import { MAPS_EMBED_SRC, SITE_ADDRESS, SITE_URL } from "@/lib/site";

const ContactPage = () => {
  return (
    <Layout>
      <Seo
        title="Request a hospital laundry quote | Clinova Kampala"
        description="Contact Clinova in Kampala for a hospital laundry quote. Plot 2D/2E Nakasero Hill Road. Call +256 785 609 370. 24/7 medical-grade linen service."
        path="/contact"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Clinova",
          url: `${SITE_URL}/contact`,
          description: `Hospital laundry quotes and partnership enquiries. ${SITE_ADDRESS}.`,
        }}
      />
      <main>
        <PageHero
          kicker="Contact"
          title="Request a hospital laundry quote"
          subtitle="Tell us your facility, bed count, and whether you need wash-only or full linen management. We operate 24/7 from Nakasero, Kampala."
        />
        <Contact showHeader={false} />
        <section className="pb-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-2xl font-bold text-foreground mb-4">Find us in Kampala</h2>
            <p className="text-muted-foreground mb-6">{SITE_ADDRESS}</p>
            <div className="overflow-hidden rounded-xl border border-border">
              <iframe
                title="Clinova on Nakasero Hill Road, Kampala"
                src={MAPS_EMBED_SRC}
                className="w-full h-80"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default ContactPage;
