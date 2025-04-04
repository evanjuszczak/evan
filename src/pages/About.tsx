import React from 'react';
import { FadeIn } from '../components/FadeIn';

export function About() {
  return (
    <div className="max-w-2xl mx-auto px-6 pt-24">
      <FadeIn>
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
      </FadeIn>

      <div className="space-y-8">
        <FadeIn delay={100}>
          <div>
            <h2 className="text-xl font-semibold mb-4">Background</h2>
            <p className="text-gray-700 leading-relaxed">
              With over 3 years coding, I've developed a deep passion for creating elegant solutions to complex problems. My journey began with a fascination for technology and has evolved into a career focused on building modern, user-centric applications.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div>
            <h2 className="text-xl font-semibold mb-4">Philosophy</h2>
            <p className="text-gray-700 leading-relaxed">
              I believe in writing clean, maintainable code that solves real problems. My approach combines technical excellence with a strong focus on user experience, ensuring that every project I work on delivers both functionality and value.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={300}>
          <div>
            <h2 className="text-xl font-semibold mb-4">Interests</h2>
            <p className="text-gray-700 leading-relaxed">
              Outside of coding, I'm passionate about open source contribution, mentoring other developers, and staying current with emerging technologies. Excited for any opportunities in my way! 
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}