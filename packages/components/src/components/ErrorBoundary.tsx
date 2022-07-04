import * as React from 'react';

interface ErrorBoundaryState {
  hasError?: boolean;
  error?: any;
}

class ErrorBoundary extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    // eslint-disable-next-line no-console
    console.log(error);
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
    // eslint-disable-next-line no-console
    console.log(error, errorInfo);
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { children }: any = this.props;
    const { hasError, error }: ErrorBoundaryState = this.state;
    if (hasError) {
      // You can render any custom fallback UI
      return (
        <section>
          <h1>Something went wrong.</h1>
          {error && <p>Error message: {error}</p>}
        </section>
      );
    }

    return children;
  }
}

// @ts-ignore
ErrorBoundary.displayName = 'ErrorBoundary';
export default ErrorBoundary;
