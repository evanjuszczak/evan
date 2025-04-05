import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FadeIn } from '../components/FadeIn';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

// Define the project data interface
interface Project {
  title: string;
  date: string;
  description: string;
  longDescription: string;
  technologies: string[];
  websiteUrl: string;
  githubUrl: string;
  color: 'pink' | 'purple' | 'blue';
  abbreviation: string;
  images: string[];
}

// This is our project data - in a real app, you might fetch this from an API
const projectsData: Record<string, Project> = {
  'locationlock': {
    title: 'LocationLock | Geography Game',
    date: 'Apr 2025',
    description: 'A modern geography game that tests your knowledge in a fun, interactive way. Features real-world locations, interactive map exploration, and scoring based on proximity to the target.',
    longDescription: 'LocationLock challenges players to identify locations around the world based on street view imagery. The closer your guess to the actual location, the more points you earn. With multiple game modes, difficulty levels, and a global leaderboard, it\'s both educational and competitive.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Leaflet', 'Mapillary API'],
    websiteUrl: 'https://locationlock.vercel.app',
    githubUrl: 'https://github.com/evanjuszczak/locationlock',
    color: 'pink',
    abbreviation: 'LL',
    images: [
      '/images/locationlock_picture.png',
      '/images/locationlock_picture2.png'
    ]
  },
  'flashbear': {
    title: 'Flashbear | Digital Study Tool',
    date: 'Feb 2025',
    description: 'Built with an intuitive interface for rapid card creation, smart import, and real-time progress tracking.',
    longDescription: 'Flashbear is a comprehensive digital study tool designed to help students master subjects faster. It features customizable flashcards, spaced repetition algorithms, and progress tracking to optimize learning. Users can create their own cards or import existing sets to build a personalized study experience.',
    technologies: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Chart.js'],
    websiteUrl: 'https://flashbear.vercel.app',
    githubUrl: 'https://github.com/evanjuszczak/flashbear',
    color: 'purple',
    abbreviation: 'F',
    images: [
      '/images/flashbear_picture.png',
      '/images/flashbear_picture2.png'
    ]
  },
  'lmfree': {
    title: 'LMFree | Logo Maker',
    date: 'Dec 2024',
    description: 'A free, no-frills logo maker for quick, custom designs—no experience needed.',
    longDescription: 'LMFree is a straightforward, browser-based logo maker that allows users to create professional logos without design knowledge. The intuitive interface provides essential tools for customizing text, shapes, and colors. Export options include high-resolution PNG, JPG, and vector SVG formats.',
    technologies: ['React', 'JavaScript', 'Canvas API', 'CSS3'],
    websiteUrl: 'https://lmfree.vercel.app',
    githubUrl: 'https://github.com/evanjuszczak/lmfree',
    color: 'blue',
    abbreviation: 'LMF',
    images: [
      '/images/lmfree_pic.png',
      '/images/lmfree_pic2.png'
    ]
  }
};

export function ProjectDetail() {
  const { projectId } = useParams();
  const project = projectId ? projectsData[projectId as keyof typeof projectsData] : null;
  
  if (!project) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
        <p className="mb-6">The project you're looking for doesn't exist or has been removed.</p>
        <Link to="/" className="text-blue-600 hover:underline flex items-center justify-center gap-2">
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>
    );
  }

  const colorClasses = {
    pink: 'bg-pink-50 text-pink-300 dark:bg-pink-900/20 dark:text-pink-200',
    purple: 'bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-300',
    blue: 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-300'
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link to="/" className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 mb-8">
        <ArrowLeft size={16} className="mr-2" /> Back to all projects
      </Link>
      
      <FadeIn>
        <div className="flex items-center gap-3 mb-3">
          <div className={`w-12 h-12 ${colorClasses[project.color as keyof typeof colorClasses]} rounded-xl flex items-center justify-center shrink-0`}>
            <span className="text-sm font-medium">{project.abbreviation}</span>
          </div>
          <h1 className="text-2xl font-bold dark:text-white">{project.title}</h1>
        </div>
      </FadeIn>
      
      <FadeIn delay={100}>
        <p className="text-gray-500 dark:text-gray-400 mb-6">{project.date}</p>
      </FadeIn>
      
      {project.images && project.images.length > 0 && (
        <FadeIn delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {project.images.map((imageUrl, index) => (
              <div key={index} className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
                <img 
                  src={imageUrl} 
                  alt={`${project.title} - Preview ${index + 1}`} 
                  className="w-full h-auto object-cover"
                  style={{ aspectRatio: '16/9' }}
                />
              </div>
            ))}
          </div>
        </FadeIn>
      )}
      
      <FadeIn delay={300}>
        <div className="prose max-w-none mb-8">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            {project.longDescription}
          </p>
        </div>
      </FadeIn>
      
      <FadeIn delay={400}>
        <h2 className="text-xl font-semibold mb-3 dark:text-white">Technologies</h2>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((tech) => (
            <span key={tech} className="bg-gray-50 dark:bg-gray-800 px-3 py-1 rounded-md text-sm text-gray-700 dark:text-gray-300">
              {tech}
            </span>
          ))}
        </div>
      </FadeIn>
      
      <FadeIn delay={500}>
        <div className="flex flex-wrap gap-4">
          {project.websiteUrl && (
            <a 
              href={project.websiteUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-md hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            >
              Visit Website <ExternalLink size={16} />
            </a>
          )}
          
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              View Code <Github size={16} />
            </a>
          )}
        </div>
      </FadeIn>
    </div>
  );
} 