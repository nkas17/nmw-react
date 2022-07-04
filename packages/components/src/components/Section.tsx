import * as React from 'react';

export interface SectionProps {
  children: React.ReactNode | React.ReactElement;
  className?: string;
  type?: 'page' | undefined;
}

function Section({ children, className = '', type }: SectionProps) {
  let cssClasses = 'nmw-section';
  if (type) {
    cssClasses = `nmw-${type}-section`;
  }
  if (className) {
    cssClasses = `${cssClasses} ${className}`;
  }
  return <section className={cssClasses}>{children}</section>;
}

Section.displayName = 'Section';
export default Section;
