"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";

import { personalInfo } from "@/lib/data/personal";

export default function Hero() {
  const myAge = new Date().getFullYear() - personalInfo.birthYear - 1;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="home" className="min-h-screen pt-20 flex items-center relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-bg-primary via-bg-primary to-bg-secondary" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-primary/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-secondary/20 rounded-full blur-[100px]"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 max-w-2xl text-center md:text-left"
          >
            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-brand-primary">{personalInfo.name}</span>
            </motion.h1>

            <motion.h2 variants={itemVariants} className="text-xl md:text-2xl font-display text-brand-secondary mb-6 h-8">
              I'm a {personalInfo.role}
            </motion.h2>

            <motion.p variants={itemVariants} className="text-base md:text-lg text-text-secondary font-display mb-8 leading-relaxed">
              Hey! I am {personalInfo.fullName}, a {myAge} year old Full Stack Web Developer, AI Engineer, teacher, Freelancer and Gamer(Life needs to be enjoyed.. Right?) living in {personalInfo.location}. I am currently working as Senior Software Engineer at{" "}
              <a href={personalInfo.company.url} target="_blank" rel="noreferrer" className="text-[#dc3535] font-bold hover:underline">
                {personalInfo.company.name}
              </a>.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start">
              <ScrollLink
                to="contact-us-form"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="group relative inline-flex items-center justify-center px-8 py-3 font-bold text-white bg-transparent border-2 border-brand-primary rounded-xl overflow-hidden cursor-pointer"
              >
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black" />
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out bg-brand-primary group-hover:bg-brand-secondary" />
                <span className="relative flex items-center gap-2">
                  Contact Me <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </ScrollLink>

              <div className="flex items-center gap-4">
                <a href={personalInfo.socialLinks.twitter} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border-2 border-[#1da1f2] text-[#1da1f2] flex items-center justify-center hover:bg-[#1da1f2] hover:text-white transition-all hover:scale-110">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href={personalInfo.socialLinks.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border-2 border-[#0077b5] text-[#0077b5] flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-all hover:scale-110">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href={personalInfo.socialLinks.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border-2 border-text-primary text-text-primary flex items-center justify-center hover:bg-text-primary hover:text-bg-primary transition-all hover:scale-110">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 flex justify-center md:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 group">
              {/* Animated gradient border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#4fcf70] via-[#a767e5] to-[#12bcfe] opacity-75 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-1 rounded-full bg-bg-primary" />
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/assets/images/profile.jpg"
                  alt={personalInfo.fullName}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  priority
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
