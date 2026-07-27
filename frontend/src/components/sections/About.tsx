"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Brain, Database, Cloud } from "lucide-react";

const stats = [
  { label: "Years Coding", value: "3+" },
  { label: "Projects Completed", value: "10+" },
  { label: "Internships", value: "3" },
  { label: "Certifications", value: "6" },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I am Veeresh Mulge, I have already graduated in my bachelors degree of Computer Science and Engineering at Guru Nanak Dev Engineering College. With a stellar CGPA of 8.24, I have a strong foundation in CS fundamentals and a passion for building intelligent systems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              My journey spans across Full Stack Web Development and Artificial Intelligence. I believe in blending performance, elegant design, and cutting-edge machine learning models to solve real-world problems.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="space-y-2">
                  <h4 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                    {stat.value}
                  </h4>
                  <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/20 transition-colors">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="font-semibold">Full Stack</h3>
                <p className="text-sm text-muted-foreground">React, Next.js, Node.js, FastAPI</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/20 transition-colors translate-y-8">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="font-semibold">AI / ML</h3>
                <p className="text-sm text-muted-foreground">Python, NLP, Computer Vision</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/20 transition-colors">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center">
                  <Database className="w-6 h-6 text-pink-400" />
                </div>
                <h3 className="font-semibold">Databases</h3>
                <p className="text-sm text-muted-foreground">PostgreSQL, Supabase, MySQL</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/20 transition-colors translate-y-8">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Cloud className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="font-semibold">DevOps</h3>
                <p className="text-sm text-muted-foreground">Git, CI/CD, Cloud Platforms</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
