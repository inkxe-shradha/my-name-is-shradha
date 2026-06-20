"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { myProjectData } from "@/lib/data/projects";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextProject = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === myProjectData.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? myProjectData.length - 1 : prev - 1));
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
  };

  const currentProject = myProjectData[currentIndex];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold inline-block relative">
            Major Projects
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-brand-primary rounded-full" />
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto h-[600px] md:h-[500px]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute inset-0 w-full h-full"
            >
              <div className="w-full h-full bg-bg-card border border-border rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row group">
                
                {/* Image Section */}
                <div className="w-full md:w-1/2 h-64 md:h-full relative overflow-hidden bg-bg-secondary flex items-center justify-center p-8">
                  <motion.div 
                    whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative w-full max-w-[360px] h-full max-h-[300px]"
                  >
                    <Image
                      src={currentProject.image}
                      alt={currentProject.name}
                      fill
                      className="object-contain drop-shadow-2xl"
                    />
                  </motion.div>
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 font-display">
                    {currentProject.name}
                  </h3>
                  <div className="w-12 h-1 bg-brand-primary mb-6 rounded-full" />
                  
                  <p className="text-text-secondary mb-6 line-clamp-4 md:line-clamp-none">
                    {currentProject.description}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-text-primary mb-3 uppercase tracking-wider">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {currentProject.techStack.split(',').map((tech) => (
                        <Badge key={tech} variant="secondary" className="font-medium">
                          {tech.trim()}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto pt-4">
                    <a
                      href={currentProject.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold hover:shadow-lg hover:shadow-brand-primary/30 transition-all hover:-translate-y-1"
                    >
                      A Quick Demo ? <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6 z-10">
            <button
              onClick={prevProject}
              className="w-12 h-12 rounded-full bg-bg-card border border-border shadow-lg flex items-center justify-center text-text-primary hover:text-brand-primary hover:border-brand-primary transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6 z-10">
            <button
              onClick={nextProject}
              className="w-12 h-12 rounded-full bg-bg-card border border-border shadow-lg flex items-center justify-center text-text-primary hover:text-brand-primary hover:border-brand-primary transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          
          {/* Indicators */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {myProjectData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`w-3 h-3 rounded-full transition-all ${idx === currentIndex ? 'bg-brand-primary w-8' : 'bg-border hover:bg-text-secondary'}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
