import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Dashboard' },
  { to: '/compliance', label: 'Compliance' },
  { to: '/sl-calculator', label: 'SL Calculator' },
  { to: '/zones', label: 'Zones & Conduits' },
  { to: '/risks', label: 'Risk Register' },
  { to: '/standards', label: 'Standards' },
  { to: '/reports', label: 'Reports' },
  { to: '/framework-mapping', label: 'NIST CSF Map' },
  { to: '/about', label: 'About & Review Guide' },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-industrial-900 border-r border-industrial-800 flex flex-col shrink-0 print:hidden">
        <div className="p-5 border-b border-industrial-800">
          <h1 className="text-lg font-bold text-white leading-tight">IEC 62443</h1>
          <p className="text-xs text-slate-400 mt-1">IACS Assessment Platform</p>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `block px-3 py-2.5 rounded-lg text-sm transition-colors ${
                  isActive
                    ? 'bg-industrial-600 text-white font-medium'
                    : 'text-slate-300 hover:bg-industrial-800 hover:text-white'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="p-4 border-t border-industrial-800 text-xs text-slate-500">
          <NavLink to="/about" className="hover:text-industrial-400">Cite this work ?</NavLink>
        </div>
      </aside>
      <main className="flex-1 overflow-auto">
        <div className="max-w-6xl mx-auto p-6 md:p-8">{children}</div>
      </main>
    </div>
  )
}
