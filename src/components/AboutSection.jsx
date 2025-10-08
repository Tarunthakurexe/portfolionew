import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () =>{
    return <section
     id = "about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary">Me </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">
                        Web Developer
                    </h3>
                    <p className="text-muted-foreground">
                        I build fast, accessible web apps with React/Next.js and clean, reusable components.
                        I care about performance on real devices and use CI checks and tests so releases stay smooth.
                    </p>
                    <p className="text-muted-foreground">
                        I like turning repetitive work into small tools that save time, inspired by my hands‑on maker mindset.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">Get In Touch</a>
                        <a href="" className="px-6 py-2 rounded-full border border-primary tect-primary hover:bg-primary/30 transition-colors duration-300">Download CV</a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/15">
                                <Code className="h-6 w-6 text-primary"/>
                            </div>
                            
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Web Development</h4>
                                <p className="text-muted-foreground">I design and code responsive frontends, connect clear APIs, and keep pages lightweight as features grow.</p>
                            </div>

                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/15">
                                <User className="h-6 w-6 text-primary"/>
                            </div>
                            
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                <p className="text-muted-foreground">I focus on simple, consistent interfaces that are easy to use and accessible to everyone.
                                    I ship the first useful version, gather feedback, and improve quickly without slowing down.</p>
                            </div>

                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/15">
                                <Briefcase className="h-6 w-6 text-primary"/>
                            </div>
                            
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Project Management</h4>
                                <p className="text-muted-foreground">I plan around clear outcomes, use feature flags to de‑risk launches, and document decisions for smooth handovers.</p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
};