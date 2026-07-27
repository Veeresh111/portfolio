"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-background/50 backdrop-blur-xl border-b border-white/10"
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-xl font-heading font-bold tracking-tighter flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center text-white">
            V
          </div>
          Veeresh<span className="text-muted-foreground">Mulge</span>
        </Link>
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-muted-foreground">
          <Link href="#about" className="hover:text-foreground transition-colors">About</Link>
          <Link href="#projects" className="hover:text-foreground transition-colors">Projects</Link>
          <Link href="#experience" className="hover:text-foreground transition-colors">Experience</Link>
          <Link href="#skills" className="hover:text-foreground transition-colors">Skills</Link>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="premium" className="hidden md:flex rounded-full px-6">
            Hire Me
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}
