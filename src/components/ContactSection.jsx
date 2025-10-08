import { Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react"
import { cn } from "./lib/utils"
import { useToast } from "../hooks/use-toast"
import {useState} from "react"




export const ContactSection = () => {
    const {toast} = useToast();
    const [isSubmitting, setisSubmitting] = useState(false)

    const handleSubmit = (e) => {

        e.preventDefault();
        setisSubmitting(true);
        setTimeout(()=>{
            toast({
                title:"Message sent",
                description: "Thank you for your message. I'll get back to you soon.",
            });
            setisSubmitting(false);
            e.target.reset();
        },1500)
    }


    return <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Get In <span className="text-primary">Touch</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                I'm always open to discussing new opportunities, collaborations, or technical challenges. 
                Whether you have a project in mind or just want to connect, feel free to reach out via email or the form below—I'll 
                get back to you within 24 hours.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6">
                        Contact Information
                    </h3>
                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10 ">
                                    <Mail className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <a href="mailto:tarunthakur.exe@gmail.com" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                                        tarunthakur.exe@gmail.com
                                        </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10 ">
                                    <Phone className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium">Phone</h4>
                                    <a href="tel:+919773947031" className="text-muted-foreground hover:text-primary transition-colors">
                                        +91 977 394 7031</a>
                                </div>
                            </div>

                                <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10 ">
                                    <MapPin className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium">Location</h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors">
                                        Ghaziabad, UP, India
                                        </a>
                                </div>
                            </div>


                        </div>
                    

                </div>
                
                <div className="bg-card rounded-lg shadow-xs" onSubmit={handleSubmit}>
                    <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                    <form action="" className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                            <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline:hidden focus:ring-primary" 
                            placeholder="Enter your name"
                            />
                        </div>

                         <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                            <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline:hidden focus:ring-primary" 
                            placeholder="abc@email.com"
                            />
                        </div>

                         <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">Message</label>
                            <textarea id="message" name="message" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline:hidden focus:ring-primary resize-none" 
                            placeholder="Write to me..."
                            />
                        </div>

                        <button type="submit" 
                        disabled= {isSubmitting}
                        className={cn("cosmic-button w-full flex items-center justify-center gap-2",
                            
                        )}>{isSubmitting?"Sending...": "Send Message"} <Send size={16}/></button>
                    </form>
                </div>

            </div>
            <div className="pt-8">
                        <h4 className = "font-medium mb-4 ">Connect With Me</h4>
                        <div className="flex space-x-4 justify-center">
                            <a href="https://www.linkedin.com/in/tarunthakurexe/" target="_blank">
                                <Linkedin/>
                            </a>
                            <a href="https://www.instagram.com/solusinteromnes?igsh=dXl3eXlrYXZia2g5" target="_blank">
                                <Instagram/>
                            </a>
                            
                        </div>
            </div>
        </div>
    </section>
}