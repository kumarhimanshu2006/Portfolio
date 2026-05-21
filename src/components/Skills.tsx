import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: "HTML5", level: 95, category: "Frontend" },
    { name: "CSS3", level: 90, category: "Frontend" },
    { name: "JavaScript", level: 85, category: "Frontend" },
    { name: "React", level: 80, category: "Frontend" },
    { name: "UI/UX Design", level: 80, category: "Design" },
    { name: "Git & GitHub", level: 85, category: "Tools" },
    { name: "Python", level: 60, category: "Programming" },
     {name: "Java", level: 85, category: "Programming" },
    { name: "C", level: 75, category: "Programming" },
    { name: "Kali Linux", level: 70, category: "Cybersecurity" },
    { name: "Shell Scripting", level: 70, category: "Tools" },
  ];

  const categories = Array.from(new Set(skills.map((s) => s.category)));

  return (
    <section id="skills" ref={ref} className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technical skills and tools I work with
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: catIndex * 0.1 }}
              className="glass-card p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-gradient">{category}</h3>
              <div className="space-y-6">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, index) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={catIndex * 0.1 + index * 0.05}
                      isInView={isInView}
                    />
                  ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        >
          {[
            "Computer Skills",
            "Quick Learner",
            "Multitasking",
            "Adaptability",
            "MS Office",
            "Java",
            "Team Collaboration",
            "Problem Solving",
          ].map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.7 + index * 0.05 }}
              className="glass-card px-4 py-3 rounded-xl text-center hover:scale-105 transition-transform duration-300 border border-primary/20"
            >
              <span className="text-sm font-medium">{skill}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const SkillBar = ({
  name,
  level,
  delay,
  isInView,
}: {
  name: string;
  level: number;
  delay: number;
  isInView: boolean;
}) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isInView) {
      setTimeout(() => setWidth(level), delay * 1000);
    }
  }, [isInView, level, delay]);

  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="font-medium">{name}</span>
        <span className="text-primary font-semibold">{level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-primary to-primary-glow rounded-full"
        />
      </div>
    </div>
  );
};

export default Skills;
