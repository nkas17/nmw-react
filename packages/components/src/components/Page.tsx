import * as React from 'react';
import ErrorBoundary from './ErrorBoundary';

export interface PageProps {
  children: React.ReactNode;
  className?: string;
}
function Page({ children, className = '' }: PageProps) {
  return (
    <ErrorBoundary>
      <main className={className}>{children}</main>
    </ErrorBoundary>
  );
}

Page.displayName = 'Page';
export default Page;
