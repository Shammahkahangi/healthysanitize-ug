import { Sparkles, Target, TrendingUp, CheckCircle2, Clock } from "lucide-react";

const WhyChoose = () => {
  const reasons = [
    {
      icon: Sparkles,
      title: "Healthcare Linen Expertise",
      description: "Specialized knowledge in medical-grade laundry with strict infection control protocols and industry best practices.",
    },
    {
      icon: Target,
      title: "Enhanced Infection Control",
      description: "Advanced disinfection processes and quality assurance measures that meet and exceed healthcare hygiene standards.",
    },
    {
      icon: Clock,
      title: "24/7 Operational Capacity",
      description: "Round-the-clock service ensuring linen availability whenever your hospital needs it, day or night.",
    },
    {
      icon: TrendingUp,
      title: "Improved Hospital Efficiency",
      description: "Streamlined linen management allowing your staff to focus on patient care rather than laundry logistics.",
    },
    {
      icon: CheckCircle2,
      title: "Consistency & Reliability",
      description: "Predictable, dependable service with zero-shortage assurance and quality guarantee on every delivery.",
    },
  ];

  return (
    <section id="why" className="py-20 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="text-secondary">Clinova?</span>
          </h2>
          <p className="text-lg text-primary-foreground/90">
            We deliver value that goes beyond clean linen - we provide peace of mind
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-4">
                <reason.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {reason.title}
              </h3>
              <p className="text-primary-foreground/80">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
