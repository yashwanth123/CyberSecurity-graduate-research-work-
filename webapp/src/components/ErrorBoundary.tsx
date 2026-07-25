import { Component, type ErrorInfo, type ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  error: Error | null
}

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null }

  static getDerivedStateFromError(error: Error): State {
    return { error }
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error('App render error:', error, info.componentStack)
  }

  render() {
    if (this.state.error) {
      return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-industrial-950 text-slate-100">
          <div className="max-w-lg rounded-lg border border-red-800/60 bg-industrial-900 p-6 space-y-3">
            <h1 className="text-lg font-semibold text-white">Something went wrong</h1>
            <p className="text-sm text-slate-300">
              The assessment app failed to load. Try a hard refresh (Ctrl+Shift+R or Cmd+Shift+R) or open
              in a private/incognito window.
            </p>
            <p className="text-xs text-slate-500 font-mono break-all">{this.state.error.message}</p>
            <button
              type="button"
              className="px-4 py-2 rounded-lg bg-industrial-600 hover:bg-industrial-500 text-sm font-medium"
              onClick={() => window.location.reload()}
            >
              Reload page
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
