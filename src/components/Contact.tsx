import { Button } from "@/components/ui/button";
import { Mail, MapPin, Github } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "lelelilivivi2000@gmail.com",
      href: "mailto:lelelilivivi2000@gmail.com"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "LeticiaNunes-dev",
      href: "https://github.com/LeticiaNunes-dev"
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "Gama-DF, Brasil",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Entre em <span className="text-primary">Contato</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                className="p-6 rounded-lg bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group text-center"
              >
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <info.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{info.label}</h3>
                <p className="text-muted-foreground text-sm">{info.value}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
