import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      specialization: "Specialization in Web Development",
      institution: "JB Institute of Technology",
      location: "Dehradun, Uttarakhand",
      period: "Aug 2023 - Present",
      icon: GraduationCap,
    },
    {
      degree: "Class 12th in PCM",
      institution: "+2 High School Konandpur",
      location: "Bihar",
      period: "May 2022 - Feb 2023",
      icon: GraduationCap,
    },
    {
      degree: "Class 10th",
      institution: "Vivekanand Public School ,Warisaliganj",
      location: "Bihar",
      period: "May 2020 - Feb 2021",
      icon: GraduationCap,
    },
  ];

  return (
    <section id="education" ref={ref} className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My academic journey and qualifications
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="glass-card p-6 md:p-8 rounded-2xl hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <edu.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{edu.degree}</h3>
                  {edu.specialization && (
                    <p className="text-primary font-semibold mb-2">{edu.specialization}</p>
                  )}
                  <p className="text-lg font-semibold text-muted-foreground mb-3">
                    {edu.institution}
                  </p>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
