import { Shield, Clock, Award, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Medical-Grade Hygiene",
      description: "Specialized in healthcare linen with strict infection control protocols",
    },
    {
      icon: Clock,
      title: "24/7 Operations",
      description: "Round-the-clock service to support hospital shifts and emergency demands",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Rigorous inspection and quality control for every piece of linen",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Trained professionals dedicated to healthcare hygiene standards",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="text-primary">Clinova</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Clinova is a specialized healthcare hygiene company dedicated to providing 
            high-quality, medical-grade laundry solutions for hospitals and clinical 
            facilities. We uphold the highest standards of hygiene, safety, and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-card p-8 md:p-12 rounded-xl border border-border">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-sm font-semibold text-primary mb-2">VISION</p>
              <p className="text-foreground">
                To lead the future of medical laundry services by setting the highest 
                standards of hygiene, safety, and trust.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-secondary mb-2">MISSION</p>
              <p className="text-foreground">
                To support healthcare institutions with reliable, specialized hygiene 
                solutions that safeguard patients and elevate operational standards.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-primary mb-2">MOTTO</p>
              <p className="text-foreground font-medium">
                Setting the standard, one wash at a time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
