import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Shield, Zap } from "lucide-react";
import profile from "../assets/profile.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Building responsive websites with modern frameworks and best practices",
    },
    {
      icon: Zap,
      title: "Quick Learner",
      description: "Adapting quickly to new technologies and challenges in fast-paced environments",
    },
  ];

  return (
    <section id="about" ref={ref} className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate developer with a strong foundation in web technologies and DevOps.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-2xl" />
              <img
                src={profile}
                alt="Himanshu Kumar"
                className="relative w-full max-w-md rounded-2xl glass-card p-2 shadow-2xl "
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-foreground leading-relaxed">
                Dynamic intern at Yhills with a proven ability to enhance team productivity
                through effective collaboration and problem-solving. I gained hands-on experience
                in web development and software proficiency, while adapting quickly to new
                challenges.
              </p>
             
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300 group"
                >
                  <item.icon className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
