import { Code2, Palette, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Código Limpo",
      description: "Escrevo código mantível, escalável e bem documentado"
    },
    {
      icon: Palette,
      title: "Design & UX",
      description: "Foco em criar interfaces intuitivas e visualmente atraentes"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Otimização constante para garantir a melhor experiência"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Sobre <span className="text-primary">Mim</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Sou uma Programadora Full-Stack em formação com forte preferência e dedicação ao desenvolvimento Backend. 
              Busco ativamente uma alocação profissional para aplicar meus conhecimentos em lógica de programação, 
              banco de dados e segurança. Tenho ênfase na construção de APIs, microsserviços e sistemas robustos 
              e escaláveis. Estou pronta para transformar desafios em soluções eficientes e de alto impacto.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
              >
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
