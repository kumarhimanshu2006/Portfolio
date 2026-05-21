import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      role: "Frontend Web Development Intern",
      company: "Yhills Edutech Pvt. Ltd.",
      location: "Noida (Online)",
      period: "June 2024 - Aug 2024",
      achievements: [
        "Developed responsive websites using HTML5, CSS3, and JavaScript, enhancing user experience and adaptability across devices",
        "Built a functional To-Do List web app as a capstone project using DOM manipulation and LocalStorage for persistent task management",
        "Used Git and GitHub for version control, collaborating with peers in a team-based development workflow",
        "Created a major project titled 'Pizza Store' using React.js, featuring dynamic product listing, cart functionality, and component-based architecture",
      ],
    },
  ];

  return (
    <section id="experience" ref={ref} className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional experience and internships
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary to-transparent">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary glow-effect" />
              </div>

              <div className="glass-card p-6 md:p-8 rounded-2xl hover:scale-[1.02] transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                    <p className="text-lg text-primary font-semibold">{exp.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end gap-2 mt-2 md:mt-0">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 mt-6">
                  {exp.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex gap-3 text-muted-foreground"
                    >
                      <span className="text-primary mt-1.5">•</span>
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16 grid md:grid-cols-2 gap-8"
        >
          <div className="glass-card p-6 rounded-2xl">
            <Briefcase className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Certifications</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Frontend Web Development - Yhills (Online), Noida</li>
              <li>• UI/UX Design - Ensino Research & Development Pvt. Ltd, Dehradun</li>
            </ul>
          </div>

          <div className="glass-card p-6 rounded-2xl">
            <Briefcase className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Soft Skills</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Quick Learner</li>
              <li>• Multitasking Abilities</li>
              <li>• Adaptability and Flexibility</li>
              <li>• Team Collaboration</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
