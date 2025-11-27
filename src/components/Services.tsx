import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import linenImage from "@/assets/linen-folding.jpg";
import facilityImage from "@/assets/laundry-facility.jpg";

const Services = () => {
  const optionOne = [
    "Scheduled collection & sorting from hospital points",
    "Medical-grade cleaning with calibrated industrial machines",
    "Hospital-approved detergents and disinfectants",
    "Quality assurance and inspection after each cycle",
    "Professional finishing, ironing, and folding",
    "Hygienic sealed packaging",
    "Timely delivery according to hospital schedule",
  ];

  const optionTwo = [
    "Supply of high-quality, branded hospital linen",
    "Complete inventory management and tracking",
    "Automatic replacement of damaged linen",
    "Daily or scheduled pick-ups",
    "Medical-grade disinfection and processing",
    "Zero-shortage assurance",
    "Custom-branded linen reflecting hospital identity",
    "Lifecycle management of all linen",
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-secondary">Partnership Models</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the service model that best fits your hospital's needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Option One */}
          <Card className="overflow-hidden hover:shadow-xl transition-shadow">
            <div 
              className="h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${linenImage})` }}
            />
            <div className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Option One
              </h3>
              <p className="text-primary font-semibold mb-6">
                Hospital-Provided Linen
              </p>
              <p className="text-muted-foreground mb-6">
                You retain ownership of your linen inventory while we provide expert 
                medical-grade laundering services.
              </p>
              <ul className="space-y-3">
                {optionOne.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>

          {/* Option Two */}
          <Card className="overflow-hidden hover:shadow-xl transition-shadow border-2 border-secondary">
            <div className="bg-secondary text-white py-2 px-4 text-sm font-semibold text-center">
              RECOMMENDED
            </div>
            <div 
              className="h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${facilityImage})` }}
            />
            <div className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Option Two
              </h3>
              <p className="text-secondary font-semibold mb-6">
                Clinova-Provided Linen & Full Management
              </p>
              <p className="text-muted-foreground mb-6">
                Our premium comprehensive solution with complete linen lifecycle management.
              </p>
              <ul className="space-y-3">
                {optionTwo.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
