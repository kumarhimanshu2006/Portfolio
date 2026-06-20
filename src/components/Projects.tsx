import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import github from "../assets/github.png";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Github Profile Viewer ",
      description:
        "A dynamic and responsive GitHub Profile Viewer that fetches and displays real-time GitHub user data using APIs. Built with HTML5, CSS3, and JavaScript, featuring clean UI design, smooth interactions, and optimized performance across all devices.",
      tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      image: github,
      liveLink: "https://yourprofileviewer.netlify.app/",
      repoLink: "https://github.com/kumarhimanshu2006/Github-Profile-Viewer",
    },
     
   {
  title: "Personal Portfolio",
  description:
    "A modern and responsive personal portfolio website designed to showcase my projects, technical skills, achievements, and contact information. It features smooth navigation, interactive UI components, project highlights with GitHub links, and a fully responsive design to provide an optimal viewing experience across all devices.",
  tech: ["React.js", "Vite", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  liveLink: "https://himanshukr.netlify.app/",
  repoLink: "https://github.com/kumarhimanshu2006/Portfolio.git",
  },
  {
  title: "WanderLuxe",
  description:
    "A full-stack Airbnb-inspired web application that allows users to browse, create, edit, and manage property listings. Features secure authentication, image-based listings, interactive property details, and responsive design. Built using the MERN stack with server-side rendering and database integration for a seamless booking and hosting experience.",
    tech: ["Node.js", "Express.js", "MongoDB", "Mongoose", "EJS", "Bootstrap"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
   liveLink: "#",
   repoLink: "https://github.com/kumarhimanshu2006/Wander-Luxe.git",
  },
  {
      title: "Pizza Store",
      description:
        "A fully functional e-commerce web application built with React.js featuring dynamic product listing, shopping cart functionality, and component-based architecture. Implements state management, routing, and responsive design for seamless user experience across devices.",
      tech: ["React.js", "JavaScript", "CSS3", "Component Architecture"],
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=600&fit=crop",
      liveLink: "#",
      repoLink: "https://github.com/kumarhimanshu2006",
    },
    {
      title: "To-Do List App",
      description:
        "An interactive task management application built with vanilla JavaScript featuring DOM manipulation and LocalStorage for persistent data. Users can add, edit, delete, and mark tasks as complete with data persisting across browser sessions.",
      tech: ["HTML5", "CSS3", "JavaScript", "LocalStorage", "DOM Manipulation"],
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
      liveLink: "#",
      repoLink: "https://github.com/kumarhimanshu2006",
    }, 
    
  ];

  return (
    <section id="projects" ref={ref} className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of my recent work and personal projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="group glass-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300"
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-gradient transition-all">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:scale-105 transition-all duration-300 text-sm font-medium"
                  >
                    <ExternalLink className="h-4 w-4" />
                    View Live
                  </a>
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 glass-card border border-border rounded-lg hover:scale-105 hover:border-primary transition-all duration-300 text-sm font-medium"
                  >
                    <Github className="h-4 w-4" />
                    Source
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
