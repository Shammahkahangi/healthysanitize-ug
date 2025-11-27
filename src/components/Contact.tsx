import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to elevate your hospital's hygiene standards? Contact us today
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Address</p>
                    <p className="text-muted-foreground">
                      Plot 2D/2E Nakasero Hill Road<br />
                      P.O Box 148467<br />
                      Kampala, Uganda
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Phone</p>
                    <p className="text-muted-foreground">
                      (+256) 785 609 370<br />
                      (+256) 767 937 832
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Email</p>
                    <p className="text-muted-foreground">
                      contact.us@Clinova.africa
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h4 className="font-semibold text-foreground mb-3">Operating Hours</h4>
              <p className="text-muted-foreground">
                <span className="font-semibold text-secondary">24/7 Operations</span><br />
                Round-the-clock service to support your hospital needs
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-xl border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Request a Quote
            </h3>
            <form className="space-y-6">
              <div>
                <Input 
                  placeholder="Hospital/Facility Name" 
                  className="w-full"
                />
              </div>
              <div>
                <Input 
                  placeholder="Contact Person" 
                  className="w-full"
                />
              </div>
              <div>
                <Input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full"
                />
              </div>
              <div>
                <Input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full"
                />
              </div>
              <div>
                <Textarea 
                  placeholder="Tell us about your requirements..." 
                  className="w-full min-h-[120px]"
                />
              </div>
              <Button className="w-full" size="lg">
                Submit Request
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
