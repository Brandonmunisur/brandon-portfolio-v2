import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error, info) {
    console.error('Portfolio render error:', error, info)
  }

  render() {
    if (this.state.error) {
      return (
        <main style={{ minHeight: '100vh', padding: '48px', background: '#070b14', color: '#f3f6fb', fontFamily: 'system-ui, sans-serif' }}>
          <div style={{ maxWidth: 760, margin: '0 auto', padding: 28, border: '1px solid #30384a', borderRadius: 18, background: '#0e1523' }}>
            <p style={{ color: '#62e7d7', fontWeight: 700 }}>Portfolio debugging screen</p>
            <h1 style={{ fontSize: 32, margin: '8px 0 14px' }}>The React app hit an error.</h1>
            <p style={{ color: '#b9c2d0', lineHeight: 1.7 }}>Instead of a blank page, this screen shows the message so it can be fixed quickly.</p>
            <pre style={{ whiteSpace: 'pre-wrap', overflowWrap: 'anywhere', padding: 18, borderRadius: 12, background: '#080d17', color: '#ffb4b4' }}>
              {String(this.state.error?.message || this.state.error)}
            </pre>
          </div>
        </main>
      )
    }

    return this.props.children
  }
}
