import { Github } from "lucide-react";
import { ExternalLink } from "lucide-react";
import { ArrowRight } from "lucide-react";


const projects =[
    {
        id: 1,
        title: "RectPokedex",
        description: "A responsive Pokédex built with React and CSS that fetches Pokémon data from the PokéAPI and presents it as clean, card‑based listings.",
        image: "/projects/pokemon.png",
        tags: ["React", "CSS", "PokeApi"],
        demoUrl: "https://pokemon-data-project.netlify.app/",
        gitHubUrl: "https://github.com/Tarunthakurexe/pokemon",
    },
     {
        id: 2,
        title: "Portfolio",
        description: "A personal portfolio built with React, Tailwind CSS, and React Router that showcases projects, skills, and contact flows in a lightweight, accessible UI",
        image: "/projects/portfolio.png",
        tags: ["React", "Tailwind", "Rect Router"],
        demoUrl: "https://portfolionew-gblw.vercel.app/",
        gitHubUrl: "https://github.com/Tarunthakurexe/portfolionew",
    },
     {
        id: 3,
        title: "placeholder",
        description: "A reserved slot for the next featured app—replace with a short problem statement, the approach, and the key tech used",
        image: "/projects/placeholder-project.png",
        tags: ["tag1", "tag2", "tag3"],
        demoUrl: "#",
        gitHubUrl: "#",
    },
];

export const Projects = () => {
    return <section id= "projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 texct-center">
                 Featured <span className="text-primary"> Projects </span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Here are some of my projects. Each project was carefully crafted with attention
                to detail, performance and user experience.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key)=> (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                        </div>
                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag)=>(
                                    <span className="border px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                                      {tag}  
                                    </span>
                                ))}
                            </div>
                        
                        <h3 className="text-xl font-semibold mb-1">
                           {project.title} 
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                        <div className="flex justify-between items-center">
                            <div className="flex space-x-3">
                                <a href={project.demoUrl}
                                target="_blank" //will open in a new page
                                className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                    <ExternalLink size={20}/>
                                </a>
                                <a href={project.gitHubUrl}
                                target="_blank" //to open link in a new page 
                                className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                    <Github size={20}/>
                                </a>
                            </div>
                        </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a href="https://github.com/Tarunthakurexe"
                target="_blank"
                className="cosmic-button w-fit flex items-center mx-auto gap-2">
                    Check My Github <ArrowRight size={16}/>
                </a>
            </div>
        </div>
    </section>
};