import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/kumarhimanshu2006",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/kumarhimanshu2006",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:himanshu.089kr@gmail.com",
    },
  ];

  return (
    <footer className="relative py-12 px-4 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-gradient mb-2">Himanshu Kumar</h3>
            <p className="text-muted-foreground">
              Fullstack Developer 
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-xl glass-card border border-border flex items-center justify-center hover:border-primary transition-all duration-300 group"
                aria-label={link.name}
              >
                <link.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} Himanshu Kumar. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="px-4 py-2 glass-card border border-border rounded-lg hover:border-primary transition-all duration-300 flex items-center gap-2 group"
            aria-label="Back to top"
          >
            <span className="text-sm font-medium">Back to top</span>
            <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
