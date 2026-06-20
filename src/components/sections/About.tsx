"use client";

import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Code2, Bug, LineChart } from "lucide-react";
import { myInterestSkills } from "@/lib/data/projects";

export default function About() {
  const getCurrentYearExperience = new Date().getFullYear() - 2018;

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          {/* Who am I */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 relative inline-block left-1/2 -translate-x-1/2">
              Who the am I ?
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-brand-primary rounded-full" />
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 text-base md:text-lg text-text-secondary font-display text-justify">
              <p>
                I am a results-oriented engineer with <strong className="text-text-primary font-bold">{getCurrentYearExperience} years</strong> of experience building cutting-edge solutions across product-based applications. My journey blends deep frontend expertise with a growing focus on AI-powered development, enabling me to deliver smarter, faster, and more scalable web applications.
              </p>
              <p>
                As a highly skilled JavaScript developer, I specialize in creating dynamic, user-centric experiences using <strong className="text-text-primary font-bold">JavaScript, HTML, CSS,</strong> and modern frameworks like <strong className="text-text-primary font-bold">React, Angular, and Vue.js</strong>. Beyond traditional frontend work, I actively explore AI integration in web workflows — from intelligent UI personalization to agent-driven automation — ensuring that my solutions stay ahead of the curve.
              </p>
              <div className="space-y-3 text-left">
                <p className="font-bold text-text-primary">Throughout my career, I’ve:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Engineered complex web applications with cross-functional teams.</li>
                  <li>
                    Leveraged AI tools (<strong className="text-text-primary font-bold">Copilot, Claude, DeepSeek</strong>) to accelerate coding, testing, and optimization.
                  </li>
                  <li>Applied data-driven insights to enhance user experience and performance.</li>
                  <li>Delivered projects on time and within budget, while continuously innovating with emerging technologies.</li>
                </ul>
              </div>
              <p>
                What sets me apart is not just technical skill, but a strategic mindset: I see technology as a bridge between business goals and user delight. Whether it’s scaling a frontend system, embedding AI into workflows, or mentoring teams, I thrive on solving problems creatively and driving measurable impact.
              </p>
              <p>
                In short: I am a <strong className="text-brand-primary font-bold">JavaScript + AI innovator</strong>, passionate about building high-quality, future-ready solutions that empower organizations and delight end-users.
              </p>
            </div>
          </div>

          {/* What I can do */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 relative inline-block left-1/2 -translate-x-1/2">
              What I can do for you ?
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-brand-primary rounded-full" />
            </h2>
            <div className="max-w-4xl mx-auto text-base md:text-lg text-text-secondary font-display text-center space-y-4">
              <p>
                I work as a Senior Software Engineer at <a href="https://www.ltm.com/" target="_blank" rel="noreferrer" className="text-[#dc3535] font-bold hover:underline">LTM</a>. Beyond my professional role, I enjoy freelancing, contributing to open-source, and continuously learning new things.
              </p>
              <p>
                I am also passionate about teaching and have been training students at a local institution for the past year.
              </p>
            </div>
          </motion.div>

          {/* Skills & Interests */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 relative inline-block left-1/2 -translate-x-1/2">
              My current skills and interest that I am working on
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1/4 h-1 bg-brand-primary rounded-full" />
            </h2>
            <div className="max-w-4xl mx-auto">
              <ul className="space-y-3 text-base md:text-lg text-text-secondary font-display mb-8">
                {myInterestSkills.map((ele) => (
                  <motion.li
                    key={ele.id}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-2 bg-bg-card p-4 rounded-xl shadow-sm border border-border hover:border-brand-primary/50 transition-colors"
                  >
                    <span className="shrink-0 text-xl">👉</span>
                    <span>{ele.description}</span>
                  </motion.li>
                ))}
              </ul>
              <p className="text-base md:text-lg text-text-secondary font-display text-center italic">
                Lastly I believe in upgrading your skills and gaining knowledge and hands-on the projects gives you more experience and expertise to deal with real world problems. I know this would be tough but I believe your passion is your success, and My passion is learning new things.
              </p>
            </div>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {[
              { icon: <Code2 className="w-10 h-10 text-brand-primary mb-4" />, count: 30000 + new Date().getDate() * new Date().getMinutes() * new Date().getSeconds(), label: "Code Written", suffix: "+" },
              { icon: <Bug className="w-10 h-10 text-brand-secondary mb-4" />, count: 500 + new Date().getDate() * new Date().getMinutes() * new Date().getSeconds(), label: "Bugs Fixed", suffix: "+" },
              { icon: <LineChart className="w-10 h-10 text-brand-accent mb-4" />, count: 50 + new Date().getDate() * new Date().getMinutes() * new Date().getSeconds(), label: "Projects Completed", suffix: "+" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-8 bg-bg-card rounded-2xl shadow-sm border border-border hover:shadow-md hover:border-brand-primary/50 transition-all group">
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-text-primary mb-2 font-display">
                  <CountUp end={stat.count} duration={2.5} enableScrollSpy scrollSpyOnce suffix={stat.suffix} />
                </div>
                <span className="text-sm font-medium text-text-secondary uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
