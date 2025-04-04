import React from 'react';
import { useInView } from '../hooks/useInView';

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function FadeIn({ children, className = '', delay = 0 }: FadeInProps) {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref}
      className={`opacity-0 translate-y-8 ${
        isInView ? 'animate-fade-in' : ''
      } ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}