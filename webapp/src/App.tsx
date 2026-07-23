import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Compliance from './pages/Compliance'
import SLCalculator from './pages/SLCalculator'
import Zones from './pages/Zones'
import Risks from './pages/Risks'
import Standards from './pages/Standards'
import Reports from './pages/Reports'
import PrintReport from './pages/PrintReport'
import About from './pages/About'
import FrameworkMapping from './pages/FrameworkMapping'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/compliance" element={<Compliance />} />
        <Route path="/sl-calculator" element={<SLCalculator />} />
        <Route path="/zones" element={<Zones />} />
        <Route path="/risks" element={<Risks />} />
        <Route path="/standards" element={<Standards />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/print-report" element={<PrintReport />} />
        <Route path="/framework-mapping" element={<FrameworkMapping />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Layout>
  )
}
