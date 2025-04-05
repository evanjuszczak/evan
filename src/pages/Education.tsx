import React, { useState } from 'react';
import { FadeIn } from '../components/FadeIn';

export function Education() {
  const education = [
    {
      degree: "Bachelor of Software Engineering",
      school: "University of Wisconsin-Green Bay",
      schoolLogo: "/images/phoenix_logo.png",
      schoolWebsite: "https://www.uwgb.edu/",
      period: "2024 - Present",
      description: "Interested in Full-Stack Software Engineering, Application Development, and Cloud Computing.",
      achievements: [
        "Built Personal Projects Developing Websites and Tools",
        "Fund for Wisconsin Scholars Grant Recipient",
        "4.0 GPA"
      ]
    },
    {
      degree: "High School Diploma",
      school: "Franklin High School",
      schoolLogo: "/images/franklin_highschool_logo.jpeg",
      schoolWebsite: "https://www.franklin.k12.wi.us/",
      period: "2020 - 2024",
      description: "",
      achievements: [
        "Microsoft Office Specialist Certifications in Word, PowerPoint, and Excel (Earned 2023)"
      ]
    }
  ];

  // State to track which logo is being hovered
  const [hoveredLogo, setHoveredLogo] = useState<string | null>(null);

  return (
    <div className="max-w-2xl mx-auto px-6 pt-24">
      <FadeIn>
        <h1 className="text-4xl font-bold mb-8 dark:text-white">Education</h1>
      </FadeIn>

      <div className="space-y-12">
        {education.map((edu, index) => (
          <FadeIn key={edu.degree} delay={index * 100}>
            <div>
              <div className="mb-4">
                <h2 className="text-xl font-semibold dark:text-white">{edu.degree}</h2>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-gray-600 dark:text-gray-300">{edu.school}</span>
                  {edu.schoolLogo && edu.schoolWebsite && (
                    <a 
                      href={edu.schoolWebsite} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      title={`Visit ${edu.school} website`}
                      onMouseEnter={() => setHoveredLogo(edu.school)}
                      onMouseLeave={() => setHoveredLogo(null)}
                      className="bg-white dark:bg-gray-800 rounded overflow-hidden"
                    >
                      <img 
                        src={edu.schoolLogo} 
                        alt={`${edu.school} logo`} 
                        className="object-contain" 
                        style={{ 
                          height: hoveredLogo === edu.school ? '32px' : '24px', 
                          width: hoveredLogo === edu.school ? '32px' : '24px',
                          transition: 'height 0.2s, width 0.2s'
                        }}
                      />
                    </a>
                  )}
                  <span className="text-gray-400 dark:text-gray-500">•</span>
                  <span className="text-gray-500 dark:text-gray-400">{edu.period}</span>
                </div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                {edu.description}
              </p>

              <ul className="space-y-2">
                {edu.achievements.map((achievement) => (
                  <li key={achievement} className="text-gray-600 dark:text-gray-400 text-sm">
                    • {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}