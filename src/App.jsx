import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Navbar from './components/layout/Navbar'
import HomePage from './pages/HomePage'
import HeritagePage from './pages/HeritagePage'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-neutral-900 font-body">
        <Navbar />
        <Routes>
          <Route path="/"         element={<HomePage />} />
          <Route path="/heritage" element={<HeritagePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
