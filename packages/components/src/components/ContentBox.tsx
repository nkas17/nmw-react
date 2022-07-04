import * as React from 'react';

export interface ContentBoxProps {
  type?: 'elevated' | 'filled' | 'outlined' | undefined;
  children: React.ReactNode;
  className?: string;
}

function ContentBox({ children, type = 'elevated', className = '' }: ContentBoxProps) {
  let cssClasses = type ? `nmw-content-box nmw-content-box-${type}` : 'nmw-content-box';
  if (className) {
    cssClasses = `${cssClasses} ${className}`;
  }
  return <section className={cssClasses}>{children}</section>;
}

ContentBox.displayName = 'ContentBox';
export default ContentBox;
