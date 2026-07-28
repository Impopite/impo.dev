import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-secondary, #9896a8)', fontFamily: 'var(--font-mono, monospace)' }}>
          <p>Something went wrong.</p>
          <button
            style={{ marginTop: '1rem', padding: '8px 16px', background: 'var(--accent, #a78bfa)', color: '#000', border: 0, borderRadius: 6, cursor: 'pointer' }}
            onClick={() => window.location.reload()}
            type="button"
          >
            Reload page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
