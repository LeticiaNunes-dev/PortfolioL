import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Linguagens de Programação",
      skills: ["Java", "JavaScript", "Python (básico)"]
    },
    {
      title: "Linguagens de Marcação e Estilo",
      skills: ["HTML5", "CSS3"]
    },
    {
      title: "Backend & Frameworks",
      skills: ["Spring Boot", "APIs REST", "POO", "Node.js (básico)"]
    },
    {
      title: "Banco de Dados",
      skills: ["NoSQL (MongoDB)", "MySQL", "PostgreSQL"]
    },
    {
      title: "Ferramentas de Desenvolvimento",
      skills: ["VS Code", "Eclipse", "IntelliJ IDEA", "Git", "GitHub", "Postman", "Maven"]
    },
    {
      title: "Metodologias & Conceitos",
      skills: ["Lógica de Programação", "Scrum", "MVC", "Clean Code", "Testes Unitários"]
    },
    {
      title: "Outras Tecnologias",
      skills: ["Bootstrap", "Tailwind CSS", "JSON", "REST", "Figma"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Minhas <span className="text-primary">Skills</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Tecnologias e ferramentas que domino
            </p>
          </div>

          <div className="space-y-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-2xl font-semibold text-primary">{category.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="px-4 py-2 text-sm bg-card hover:bg-card/80 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
