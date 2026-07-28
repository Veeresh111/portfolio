"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { clsx } from "clsx";

const projects = [
  {
    title: "AI-Driven Mock Interview Application",
    description: "An AI-based interview preparation tool with real-time interaction, using Gemini API, CNNs, and NLP for comprehensive feedback.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
    tags: ["React.js", "Gemini API", "CNN", "NLP"],
    category: "AI",
    github: "https://github.com/Veeresh111/AI-Driven-Mock-Interview-Simulator",
    demo: "#"
  },
  {
    title: "Enterprise Management System",
    description: "Secure collaborative task management platform using role-based access control to coordinate workflows between multiple teams.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["React", "TypeScript", "Supabase", "Vite"],
    category: "Full Stack",
    github: "https://github.com/Veeresh111/Banking-Management-System",
    demo: "#"
  },
  {
    title: "E-Commerce & Inventory Management",
    description: "Full-stack web application to manage online sales and inventory operations effectively at scale.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    tags: ["HTML", "CSS", "JavaScript", "Cloud"],
    category: "Web",
    github: "https://github.com/Veeresh111/E-Commerce-Business-Management",
    demo: "#"
  },
  {
    title: "Research Misconduct Detection",
    description: "Machine learning model to detect anomalies in research data to prevent academic and scientific misconduct.",
    image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=800&q=80",
    tags: ["Python", "Machine Learning"],
    category: "ML",
    github: "https://github.com/Veeresh111",
    demo: "#"
  },
  {
    title: "Bon Voyage Travel Assistant",
    description: "AI travel assistant for route guidance and planning using map integrations and AI.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
    tags: ["HTML/CSS", "Gemini API", "Maps API"],
    category: "AI",
    github: "https://github.com/Veeresh111",
    demo: "#"
  }
];

const categories = ["All", "AI", "Full Stack", "ML", "Web"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(p => 
    activeCategory === "All" || p.category === activeCategory
  );

  return (
    <section id="projects" className="py-24 relative bg-black/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={clsx(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  activeCategory === cat 
                    ? "bg-white text-black" 
                    : "bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="bg-white/5 border-white/10 hover:border-white/20 transition-all overflow-hidden group h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-blue-500/10 text-blue-400 hover:bg-blue-500/20">{project.category}</Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-400 transition-colors">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-3 text-muted-foreground mt-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs px-2 py-1 rounded-md bg-white/5 text-muted-foreground border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-4 pt-4 border-t border-white/5">
                  <Button variant="ghost" size="sm" asChild className="gap-2 hover:bg-white/5 hover:text-white flex-1">
                    <Link href={project.github} target="_blank">
                      <FaGithub className="w-4 h-4" /> Code
                    </Link>
                  </Button>
                  {project.demo !== "#" && project.demo !== "" && (
                    <Button variant="ghost" size="sm" asChild className="gap-2 hover:bg-white/5 hover:text-white flex-1">
                      <Link href={project.demo} target="_blank">
                        <ExternalLink className="w-4 h-4" /> Demo
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
