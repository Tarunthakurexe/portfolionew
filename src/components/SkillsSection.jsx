import { useState } from "react";
import { cn } from "./lib/utils";

 const skills = [
    {name: "HTML/CSS", level: 95, category: "frontend" },
    {name: "JavaScript", level: 90, category: "frontend" },
    {name: "React", level: 80, category: "frontend" },
    {name: "Tailwind CSS", level: 85, category: "frontend" },

    {name: "AWS Infrastructure", level: 95, category: "tools" },

    {name: "Git/GitHub", level: 80, category: "tools" },
    {name: "VsCode", level: 95, category: "tools" },
    {name: "PostMan", level: 85, category: "tools" },
    {name: "MS Office", level: 95, category: "tools" },

    {name: "Spring Boot MVC", level: 60, category: "backend" },
    {name: "Hibernate", level: 75, category: "backend" },
    {name: "REST API", level: 70, category: "backend" },
    {name: "Java", level: 85, category: "backend" },
    {name: "PostgreSQL", level: 85, category: "backend" },

    {name: "Adobe Photoshop", level: 95, category: "design" },
    {name: "Adobe Illustrator", level: 90, category: "design" },
    {name: "Adobe XD", level: 70, category: "design" }
 ];
 const catagories = ["all", "frontend", "backend", "tools", "design"];


export const SkillsSection = () =>{
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter((skill)=> activeCategory === "all"|| skill.category === activeCategory);

    return (<section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary">Skills</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 ">
                {catagories.map((category, key)=>(
                    <button key={key} className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                        activeCategory === category? "bg-primary text-primary-foreground":"bg-secondary/70 text-foreground hover:bg-secondary"
                    )}
                    onClick={()=> setActiveCategory(category)}
                    >{category}</button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 mb-12">
                {filteredSkills.map((skill, key)=> (
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg">{skill.name}</h3>
                        </div>
                        <div className="w-full bg-secondary/50 h-2 rounded-null overflow-hidden">
                            <div className="bg-primary h-2 rounded-full origin-left animate-grow_1.5s._ease-out"
                            style={{width: skill.level + "%"}}>

                            </div>
                        </div>

                        <div className="text-right mt-1">
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    </section>);
};