import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function BlogComingSoon() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary flex flex-col items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[20%] w-72 h-72 bg-brand-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[20%] w-96 h-96 bg-brand-secondary/20 rounded-full blur-[120px]" />
      </div>
      
      <div className="relative z-10 max-w-3xl w-full space-y-8 text-center">
        <h1 className="text-5xl md:text-7xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-accent via-brand-secondary to-brand-primary animate-pulse">
          Coming Soon
        </h1>
        
        <p className="text-xl md:text-2xl text-text-secondary">
          I'm currently working on bringing my thoughts, tutorials, and experiences to this space. 
          Stay tuned for articles on Web Development, AI, and Career growth!
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {["Web Dev", "AI & ML", "Career", "Tutorials"].map((category) => (
            <div key={category} className="p-6 rounded-2xl bg-bg-secondary/50 backdrop-blur-sm border border-border/50 hover:border-brand-primary transition-colors cursor-default">
              <h3 className="font-semibold text-lg">{category}</h3>
            </div>
          ))}
        </div>

        <div className="pt-12">
          <Link href="/" className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-border hover:bg-bg-secondary transition-colors group">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
