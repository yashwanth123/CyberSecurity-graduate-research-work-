interface CardProps {
  title?: string
  children: React.ReactNode
  className?: string
  action?: React.ReactNode
}

export function Card({ title, children, className = '', action }: CardProps) {
  return (
    <div className={`bg-industrial-900 border border-industrial-800 rounded-xl p-5 ${className}`}>
      {(title || action) && (
        <div className="flex items-center justify-between mb-4">
          {title && <h2 className="text-lg font-semibold text-white">{title}</h2>}
          {action}
        </div>
      )}
      {children}
    </div>
  )
}

export function StatCard({
  label,
  value,
  sub,
  color = 'blue',
}: {
  label: string
  value: string | number
  sub?: string
  color?: 'blue' | 'amber' | 'green' | 'red'
}) {
  const colors = {
    blue: 'border-industrial-600 bg-industrial-800/50',
    amber: 'border-amber-600/50 bg-amber-950/30',
    green: 'border-green-600/50 bg-green-950/30',
    red: 'border-red-600/50 bg-red-950/30',
  }
  return (
    <div className={`rounded-xl border p-4 ${colors[color]}`}>
      <p className="text-xs uppercase tracking-wide text-slate-400">{label}</p>
      <p className="text-3xl font-bold text-white mt-1">{value}</p>
      {sub && <p className="text-sm text-slate-400 mt-1">{sub}</p>}
    </div>
  )
}

export function Badge({
  children,
  variant = 'default',
}: {
  children: React.ReactNode
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info'
}) {
  const styles = {
    default: 'bg-industrial-800 text-slate-300',
    success: 'bg-green-900/60 text-green-300',
    warning: 'bg-amber-900/60 text-amber-300',
    danger: 'bg-red-900/60 text-red-300',
    info: 'bg-blue-900/60 text-blue-300',
  }
  return (
    <span className={`inline-flex px-2 py-0.5 rounded text-xs font-medium ${styles[variant]}`}>
      {children}
    </span>
  )
}

export function ProgressBar({ value, label }: { value: number; label?: string }) {
  const color = value >= 75 ? 'bg-green-500' : value >= 50 ? 'bg-amber-500' : 'bg-red-500'
  return (
    <div>
      {label && (
        <div className="flex justify-between text-sm mb-1">
          <span className="text-slate-300">{label}</span>
          <span className="text-slate-400">{value}%</span>
        </div>
      )}
      <div className="h-2 bg-industrial-800 rounded-full overflow-hidden">
        <div className={`h-full ${color} transition-all duration-500`} style={{ width: `${value}%` }} />
      </div>
    </div>
  )
}
