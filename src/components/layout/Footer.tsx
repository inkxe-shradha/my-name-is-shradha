"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Twitter, Heart } from "lucide-react";
import { personalInfo } from "@/lib/data/personal";

export default function Footer() {
  return (
    <footer className="bg-bg-secondary py-12 mt-20 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          
          <div className="space-y-2">
            <h5 className="font-bold text-lg text-text-primary">No &copy; copyright issue</h5>
            <p className="text-sm text-text-secondary">
              Here is the{" "}
              <a
                href={personalInfo.sourceCodeUrl}
                target="_blank"
                rel="noreferrer"
                className="font-bold text-brand-primary hover:underline"
              >
                source code
              </a>
              . Helping each other will be the way of solving most of the problems.
            </p>
          </div>

          <div className="text-center space-y-2">
            <h5 className="font-display font-bold text-2xl text-brand-secondary">{personalInfo.fullName}</h5>
            <div className="flex items-center justify-center gap-1 text-sm text-text-secondary">
              Made with <Heart className="w-4 h-4 text-orange-500 fill-orange-500" /> in India
            </div>
          </div>

          <div className="space-y-4 md:text-right flex flex-col items-center md:items-end">
            <p className="text-text-primary font-medium">Where you can find me?</p>
            <div className="flex items-center gap-4">
              <a
                href={personalInfo.socialLinks.twitter}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border-2 border-[#1da1f2] text-[#1da1f2] flex items-center justify-center hover:bg-[#1da1f2] hover:text-white transition-all hover:scale-110"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border-2 border-[#0077b5] text-[#0077b5] flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-all hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border-2 border-text-primary text-text-primary flex items-center justify-center hover:bg-text-primary hover:text-bg-primary transition-all hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

        <div className="mt-12 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-accent via-brand-secondary to-brand-primary rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
            <Image
              src="/assets/images/jagannath-temple.png"
              alt="Jagannath Temple"
              width={400}
              height={253}
              className="relative rounded-2xl object-contain max-h-[253px] w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
