import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Showcase from './pages/Showcase'
import Courses from './pages/Courses'
import Community from './pages/Community'
import Tools from './pages/Tools'
import Career from './pages/Career'
import Growth from './pages/Growth'
import Events from './pages/Events'
import Certification from './pages/Certification'
import Mall from './pages/Mall'
import Charity from './pages/Charity'
import Materials from './pages/Materials'
import Study from './pages/Study'
import Profile from './pages/Profile'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/showcase" element={<Showcase />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/community" element={<Community />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/career" element={<Career />} />
        <Route path="/growth" element={<Growth />} />
        <Route path="/events" element={<Events />} />
        <Route path="/cert" element={<Certification />} />
        <Route path="/mall" element={<Mall />} />
        <Route path="/charity" element={<Charity />} />
        <Route path="/materials" element={<Materials />} />
        <Route path="/study" element={<Study />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Layout>
  )
}
