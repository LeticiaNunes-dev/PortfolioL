import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Doceria - Gerenciamento de Pedidos",
      description: "Site para gerenciamento de pedidos de uma doceria. Projeto de conclusão de curso desenvolvido em equipe, demonstrando capacidade de colaboração e aplicação prática de conceitos.",
      tech: ["HTML", "CSS", "JavaScript", "Banco de Dados"],
      image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=800&auto=format&fit=crop",
      github: "https://github.com/LeticiaNunes-dev",
      demo: "#"
    },
    {
      title: "APIs REST com Spring Boot",
      description: "Desenvolvimento de APIs robustas e eficientes para gerenciar dados, utilizando Spring Boot e padrões de design modernos.",
      tech: ["Java", "Spring Boot", "REST API"],
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop",
      github: "https://github.com/LeticiaNunes-dev",
      demo: "#"
    },
    {
      title: "Projetos com Banco de Dados",
      description: "Design, implementação e manipulação de bancos de dados SQL. Criação de modelos de dados eficientes para aplicações dinâmicas.",
      tech: ["SQL", "MongoDB", "Design de Dados"],
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&auto=format&fit=crop",
      github: "https://github.com/LeticiaNunes-dev",
      demo: "#"
    },
    {
      title: "Websites e Jogos",
      description: "Desenvolvimento de sites com HTML e CSS, e jogos em Java, demonstrando versatilidade e aplicação de lógica de programação em diferentes contextos.",
      tech: ["HTML", "CSS", "Java", "Lógica"],
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop",
      github: "https://github.com/LeticiaNunes-dev",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Meus <span className="text-primary">Projetos</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Projetos práticos desenvolvidos durante meus estudos
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="overflow-hidden bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1 border-primary/50 hover:bg-primary/10"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                    {project.demo !== "#" && (
                      <Button 
                        size="sm"
                        className="flex-1 bg-primary hover:bg-primary/90"
                        asChild
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
