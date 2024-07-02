// src/components/Section.tsx
import React, { ReactNode } from 'react';

interface SectionProps {
  color: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ color, children }) => {
  return (
    <div className={`h-screen w-screen ${color} flex items-center justify-center`}>
      {children}
    </div>
  );
};

export default Section;
