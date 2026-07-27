"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

const experiences = [
  {
    company: "InnerCircle Softech Pvt. Ltd.",
    role: "Full Stack Software Engineer Intern",
    date: "2023 - Present",
    type: "Internship",
    description: "Developing full stack web applications with frontend, backend, database, and authentication. Building and integrating CRUD applications with REST APIs.",
    tech: ["React.js", "FastAPI", "REST APIs", "Cloud"]
  },
  {
    company: "InternPe",
    role: "AI/ML Intern",
    date: "2023",
    type: "Internship",
    description: "Worked on machine learning models and AI-based tasks, gaining hands-on experience in data processing and model development.",
    tech: ["Python", "Machine Learning", "Data Processing"]
  },
  {
    company: "Zetheta Algorithms Private Limited",
    role: "Software Engineer Intern",
    date: "2022",
    type: "Part-time",
    description: "Selected for the Circa Internship Programme to work on remote software engineering projects in a professional development environment.",
    tech: ["Software Engineering", "Agile"]
  },
  {
    company: "BrightCHAMPS",
    role: "Coding Educator",
    date: "2021 - 2022",
    type: "Freelance",
    description: "Conduct coding sessions for Grade 1-10 students, teaching programming fundamentals, logic building, and problem-solving.",
    tech: ["Teaching", "Logic Building", "Fundamentals"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:space-y-12 space-y-8">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-5 md:gap-8 items-start">
                {/* Timeline dot */}
                <div className="absolute left-[-5px] md:left-1/2 md:-ml-[5px] top-1 md:top-2 w-3 h-3 rounded-full bg-blue-500 ring-4 ring-background" />

                {/* Left side (Date & Role for Desktop) */}
                <div className="hidden md:block col-span-2 text-right pr-8 pt-1">
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <div className="flex items-center justify-end gap-2 text-muted-foreground mt-2">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.date}</span>
                  </div>
                  <span className="inline-block px-3 py-1 mt-3 bg-white/5 border border-white/10 rounded-full text-xs text-white">
                    {exp.type}
                  </span>
                </div>

                {/* Right side (Company & Desc) */}
                <div className="md:col-span-3 md:pl-8">
                  {/* Mobile Date & Role */}
                  <div className="md:hidden mb-2">
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground mt-1 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.date}</span>
                    </div>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <Briefcase className="w-5 h-5 text-blue-400" />
                      </div>
                      <h4 className="text-lg font-semibold text-white">{exp.company}</h4>
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm md:text-base">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map(t => (
                        <span key={t} className="text-xs px-2 py-1 bg-black/30 rounded-md text-muted-foreground">
                          {t}
                        </span>
                      ))}
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
}
