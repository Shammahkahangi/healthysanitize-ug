import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import PageHero from "@/components/PageHero";
import Services from "@/components/Services";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SITE_URL } from "@/lib/site";

const steps = [
  { title: "Collection & sorting", detail: "Scheduled pick-up from hospital points, then sort by soil level and textile type." },
  { title: "Medical-grade wash", detail: "Calibrated industrial machines with hospital-approved detergents." },
  { title: "Disinfection", detail: "Infection-control cycles designed for healthcare linen, not domestic loads." },
  { title: "Inspection", detail: "Quality check after each cycle; damaged items flagged for repair or replacement." },
  { title: "Finishing", detail: "Ironing, folding, and presentation to ward-ready standard." },
  { title: "Sealed packaging", detail: "Hygienic packs that stay clean until they reach the ward or theatre." },
  { title: "Delivery", detail: "Return on your hospital timetable, including 24/7 demand." },
];

const faqs = [
  {
    question: "How is hospital laundry different from ordinary laundry?",
    answer:
      "Healthcare linen carries infection-control requirements: validated wash programmes, hospital-approved chemistry, inspection, and sealed packaging. Clinova is set up for that workflow, not for walk-in consumer laundry.",
  },
  {
    question: "Can our hospital keep its own linen?",
    answer:
      "Yes. Option One is hospital-provided linen: we collect, process, and deliver your inventory. Option Two is Clinova-supplied branded linen with inventory tracking, replacement, and zero-shortage assurance.",
  },
  {
    question: "What does zero-shortage assurance mean?",
    answer:
      "Under full management we plan stock so wards are not left without usable linen. Damaged items are replaced and inventory is tracked through the lifecycle.",
  },
  {
    question: "Do you operate at night and on weekends?",
    answer:
      "Yes. Clinova runs 24/7 to match hospital shifts and emergency demand, not office hours.",
  },
  {
    question: "Where do you collect from?",
    answer:
      "We are based in Kampala and serve hospitals and clinical facilities across Uganda on agreed collection and delivery schedules.",
  },
];

const ServicesPage = () => {
  return (
    <Layout>
      <Seo
        title="Hospital linen services | Wash or full management | Clinova"
        description="Hospital linen collection, medical-grade disinfection, and full inventory management in Kampala. Keep your own linen or switch to Clinova-supplied stock with zero-shortage assurance."
        path="/services"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Hospital linen laundry and management",
            provider: { "@type": "Organization", name: "Clinova" },
            areaServed: "Uganda",
            url: `${SITE_URL}/services`,
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          },
        ]}
      />
      <main>
        <PageHero
          kicker="Services"
          title="Hospital linen services: wash-only or full management"
          subtitle="Two partnership models for Ugandan hospitals — process the linen you already own, or let Clinova supply, track, and replace it."
        />

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-3xl">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Most facilities start by outsourcing the wash. Others want the linen itself off their
              books — branded stock, automatic replacement, and no shortage on the ward. Both are
              medical-grade programmes with collection, disinfection, inspection, and sealed return.
            </p>
          </div>
        </section>

        <Services />

        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              How a cycle runs
            </h2>
            <ol className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {steps.map((step, index) => (
                <li key={step.title} className="bg-card border border-border rounded-lg p-6">
                  <p className="text-sm font-semibold text-secondary mb-2">Step {index + 1}</p>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Hospital laundry questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="text-center mt-12">
              <Link to="/contact">
                <Button size="lg">Request a quote</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default ServicesPage;
