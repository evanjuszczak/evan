import React from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';

export function Home() {
  return (
    <>
      {/* Header/Hero Section */}
      <header className="max-w-2xl mx-auto px-6 pt-16 pb-12">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
          <FadeIn>
            <div className="flex-shrink-0">
              <img 
                src="/images/face.jpg" 
                alt="Evan Juszczak" 
                className="w-24 h-24 rounded-full object-cover border-2 border-gray-200"
              />
            </div>
          </FadeIn>
          
          <div>
            <FadeIn>
              <h1 className="text-4xl font-bold mb-2">Evan Juszczak</h1>
            </FadeIn>
            <FadeIn delay={100}>
              <h2 className="text-xl text-gray-600">Studying Software Engineer</h2>
            </FadeIn>
          </div>
        </div>

        <FadeIn delay={200}>
          <p className="text-base text-gray-700 leading-relaxed">
            I'm a freshman in college studying software engineering with 3+ years of experience, specializing in building web applications. 
            Currently focused on React, HTML, Javascript, TypeScript, and Python.
          </p>
        </FadeIn>
        <FadeIn delay={300}>
          <div className="flex gap-5 mt-6">
            <a target="_blank" href="https://github.com/evanjuszczak" className="text-gray-500 hover:text-black transition-colors duration-300">
              <Github size={20} />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/evan-juszczak-3b3812332" className="text-gray-500 hover:text-black transition-colors duration-300">
              <Linkedin size={20} />
            </a>
            <a target="_blank" href="mailto:juszczakevan@gmail.com" className="text-gray-500 hover:text-black transition-colors duration-300">
              <Mail size={20} />
            </a>
          </div>
        </FadeIn>
      </header>

      {/* Projects Section */}
      <section className="max-w-2xl mx-auto px-6 py-14 border-t border-gray-100">
        <FadeIn>
          <h3 className="text-lg font-semibold mb-10">Projects</h3>
        </FadeIn>
        
        <div className="space-y-12">
          <FadeIn delay={100}>
            <div className="group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center shrink-0">
                  <span className="text-sm font-medium text-purple-600">F</span>
                </div>
                <div className="flex-1 pt-1">
                  <div className="flex items-baseline gap-2 mb-1">
                    <h4 className="text-base font-medium"> Flashbear | Digital Study Tool </h4>
                    <span className="text-sm text-gray-500">Feb 2025 — Present</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2 leading-relaxed">
                  Built with an intuitive interface for rapid card creation, smart import, and real-time progress tracking.
                  Focused on efficiency and motivation to help users master subjects faster through practice, quizes, and games. 
                    Built with React, Typescript and Supabase, featuring sign ups, user profiles, and interactive visualizations.
                  </p>
                  <a target="_blank" href="https://flashbear.vercel.app " className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300 underline-offset-4 hover:underline">
                    flashbear.vercel.app <ExternalLink className="inline ml-1" size={12} />
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                  <span className="text-sm font-medium text-blue-600">L</span>
                </div>
                <div className="flex-1 pt-1">
                  <div className="flex items-baseline gap-2 mb-1">
                    <h4 className="text-base font-medium"> LMFree | Logo Maker </h4>
                    <span className="text-sm text-gray-500">Dec 2024</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2 leading-relaxed">
                  A free, no-frills logo maker for quick, custom designs—no experience needed.
                  Features a live editor for tweaking colors, icons, and sizes with instant previews.
                  Save logos to an account or export effortlessly in PNG, JPG, or SVG for any use case.
                  </p>
                  <a target="_blank" href="https://lmfree.vercel.app " className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300 underline-offset-4 hover:underline">
                    lmfree.vercel.app <ExternalLink className="inline ml-1" size={12} />
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-2xl mx-auto px-6 py-14 border-t border-gray-100">
        <FadeIn>
          <h3 className="text-lg font-semibold mb-8">Skills</h3>
        </FadeIn>
        
        <FadeIn delay={100}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              'JavaScript', 'TypeScript', 'React', 'Node.js', 
              'Supabase', 'Git'
            ].map((skill) => (
              <div key={skill} className="bg-gray-50 px-3 py-2 rounded-md text-sm text-gray-700">
                {skill}
              </div>
            ))}
          </div>
        </FadeIn>
      </section>
    </>
  );
}