import { motion } from "framer-motion";
import { Download, Mail, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import profile from "../assets/profile.jpg";

const Hero = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const technologies = ["Web Developer", "UI/UX Designer"];

  useEffect(() => {
    const text = technologies[currentIndex];
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (charIndex <= text.length) {
        setCurrentText(text.substring(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % technologies.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentIndex]);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/src/assets/resume.pdf";
    link.download = "Himanshu_Kumar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4"
            >
              <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium text-primary border border-primary/20">
                Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4"
            >
              Himanshu Kumar
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl sm:text-2xl lg:text-3xl mb-6 min-h-[2.5rem]"
            >
              <span className="text-muted-foreground">I am a </span>
              <span className="text-gradient font-semibold">{currentText}</span>
              <span className="animate-pulse">|</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Full-Stack Developer passionate about building scalable web applications and solving complex problems through Data Structures & Algorithms. Currently pursuing B.Tech in Computer Science with specialization in Cyber Security, while exploring DevOps, cloud technologies, and modern development workflows.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={handleDownloadCV}
                className="group px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium hover:scale-105 transition-all duration-300 glow-effect flex items-center gap-2"
              >
                <Download className="h-5 w-5 group-hover:animate-bounce" />
                Download CV
              </button>
              <button
                onClick={scrollToContact}
                className="px-8 py-4 glass-card border border-border rounded-xl font-medium hover:scale-105 transition-all duration-300 flex items-center gap-2 hover:border-primary"
              >
                <Mail className="h-5 w-5" />
                Contact Me
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary/30 rounded-full blur-3xl" />
              <img
                src={profile}
                alt="Himanshu kumar - Fullstack Developer"
                className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px] rounded-full object-cover border-4 border-primary/20 shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="h-8 w-8 text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
