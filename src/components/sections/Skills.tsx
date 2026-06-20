"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { skills } from "@/lib/data/skills";

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section id="skills" className="py-24 relative overflow-hidden" ref={containerRef}>
      <div className="absolute inset-0 bg-bg-secondary/50 -skew-y-3 origin-top-left z-0" />
      
      <div className="container mx-auto px-4 relative z-10 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Sticky Left Section */}
          <div className="lg:col-span-4 relative">
            <div className="sticky top-32">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
                  Skills I <span className="text-brand-primary">Earned</span>
                </h2>
                <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                  I've spent years learning and mastering a wide variety of tools and technologies. Here is the tech stack I use to bring ideas to life.
                </p>
                
                {/* AI Design Pattern: Glowing Node Network Visual */}
                <div className="relative w-full h-48 rounded-2xl bg-bg-card border border-border overflow-hidden flex items-center justify-center shadow-inner hidden lg:flex">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10" />
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="relative w-32 h-32 border border-brand-primary/20 rounded-full flex items-center justify-center"
                  >
                    <div className="w-16 h-16 border border-brand-secondary/30 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-brand-primary rounded-full shadow-[0_0_15px_rgba(101,0,255,0.8)] animate-pulse" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Section: Scrolling Tech Stack */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
              
              {/* Column 1 */}
              <motion.div style={{ y: y1 }} className="space-y-6">
                {skills.filter((_, i) => i % 2 === 0).map((skill, index) => (
                  <SkillCard key={skill.type} skill={skill} index={index} />
                ))}
              </motion.div>

              {/* Column 2 */}
              <motion.div style={{ y: y2 }} className="space-y-6 mt-12 md:mt-0 pb-12">
                {skills.filter((_, i) => i % 2 !== 0).map((skill, index) => (
                  <SkillCard key={skill.type} skill={skill} index={index + 20} />
                ))}
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill, index }: { skill: { type: string, level: number }, index: number }) {
  // Generate a color based on index to keep the colorful aesthetic of the original
  const hue = (index * 15) % 360;
  const color = `hsl(${hue}, 70%, 50%)`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: (index % 10) * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="bg-bg-card border border-border p-5 rounded-2xl shadow-sm relative overflow-hidden group"
    >
      <div 
        className="absolute top-0 left-0 h-1 w-full opacity-50 group-hover:opacity-100 transition-opacity"
        style={{ backgroundColor: color }}
      />
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-bold text-text-primary text-lg">{skill.type}</h4>
        <span className="text-sm font-bold bg-bg-secondary px-2 py-1 rounded-md text-text-secondary">
          {skill.level}%
        </span>
      </div>
      
      <div className="w-full bg-bg-secondary h-2.5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 + (index % 5) * 0.1, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
        />
      </div>
    </motion.div>
  );
}
