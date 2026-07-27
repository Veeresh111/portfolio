"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Programming",
    skills: ["C", "Java", "Python"]
  },
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "TailwindCSS", "Framer Motion", "Three.js"]
  },
  {
    title: "Backend & AI",
    skills: ["Node.js", "FastAPI", "Python", "Machine Learning", "NLP", "Computer Vision"]
  },
  {
    title: "Database & Cloud",
    skills: ["MySQL", "PostgreSQL", "Supabase", "Cloud Computing"]
  },
  {
    title: "Core & Tools",
    skills: ["Git", "GitHub", "Postman", "Computer Networking", "Operating Systems", "DevOps Tools"]
  },
  {
    title: "Soft Skills",
    skills: ["Fluent English", "Fluent Hindi", "Fluent Kannada", "Communication", "Adaptability", "Team Player"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-black/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all group"
            >
              <h3 className="text-xl font-bold mb-6 text-white group-hover:text-blue-400 transition-colors">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map(skill => (
                  <Badge 
                    key={skill} 
                    variant="outline" 
                    className="border-white/10 bg-black/30 hover:bg-white/10 text-sm py-1.5 px-3 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
