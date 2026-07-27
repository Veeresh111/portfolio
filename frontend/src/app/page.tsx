"use client";

import { motion } from "framer-motion";
import ThreeBackground from "@/components/ThreeBackground";
import Navbar from "@/components/Navbar";
import { TypingAnimation } from "@/components/TypingAnimation";
import { Button } from "@/components/ui/button";
import { Mail, ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden selection:bg-purple-500/30">
      <ThreeBackground />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">Available for work</span>
          </motion.div>

          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading tracking-tighter mb-6"
          >
            Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">Veeresh</span>
            <br />
            <span className="text-3xl md:text-5xl lg:text-6xl text-muted-foreground mt-4 block">
              I build <TypingAnimation texts={["Premium Web Apps", "AI Applications", "Scalable Systems", "Beautiful UIs"]} />
            </span>
          </motion.h1>

          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10"
          >
            Aspiring Software Engineer with strong CS fundamentals and hands-on experience in AI and web development. Blending performance, design, and intelligence.
          </motion.p>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button variant="premium" size="lg" className="rounded-full gap-2 group" asChild>
              <Link href="#projects">
                View Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="glass" size="lg" className="rounded-full gap-2" asChild>
              <a href="resume.txt" download="Veeresh_Mulge_Resume.txt">
                <Download className="w-4 h-4" /> Download Resume
              </a>
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-16 flex items-center gap-6"
          >
            <Link href="https://github.com/Veeresh111" target="_blank" className="text-muted-foreground hover:text-white transition-colors">
              <FaGithub className="w-6 h-6" />
            </Link>
            <Link href="https://www.linkedin.com/in/veeresh-mulge-ba6023269/" target="_blank" className="text-muted-foreground hover:text-white transition-colors">
              <FaLinkedin className="w-6 h-6" />
            </Link>
            <Link href="mailto:prakashmulge912@gmail.com" className="text-muted-foreground hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </Link>
          </motion.div>
          
        </div>

        {/* Decorative Gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-[120px] opacity-50 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[120px] opacity-50 pointer-events-none translate-x-20 translate-y-20" />
      </section>

      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      
      <footer className="py-8 text-center text-muted-foreground border-t border-white/10 mt-20">
        <p>© {new Date().getFullYear()} Veeresh Mulge. Built with Next.js & Framer Motion.</p>
      </footer>
    </main>
  );
}
