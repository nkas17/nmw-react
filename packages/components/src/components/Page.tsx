import * as React from 'react';
import ErrorBoundary from './ErrorBoundary';

export interface PageProps {
  children: React.ReactNode;
}
function Page({ children }: PageProps) {
  return (
    <ErrorBoundary>
      <main>{children}</main>
    </ErrorBoundary>
  );
}

Page.displayName = 'Page';
export default Page;
