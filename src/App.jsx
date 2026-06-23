import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import HeritagePage from './pages/HeritagePage'
import VisitPage from './pages/VisitPage'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-neutral-900 font-body flex flex-col">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/"         element={<HomePage />} />
            <Route path="/heritage" element={<HeritagePage />} />
            <Route path="/visit"    element={<VisitPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
