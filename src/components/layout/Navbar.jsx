import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ShoppingBag, User, Menu, X } from 'lucide-react'
import logo from '../../assets/logo.png'

const navLinks = [
  { label: 'Home',         href: '/' },
  { label: 'Our Heritage', href: '/heritage' },
  { label: 'Collections',  href: '/collections' },
  { label: 'Visit Us',     href: '/visit' },
]

// Pages with a white/light background — navbar text must be dark
const LIGHT_BG_ROUTES = ['/heritage']

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  const isLight = LIGHT_BG_ROUTES.includes(pathname)

  const textColor      = isLight ? 'text-neutral-800/90 hover:text-neutral-900' : 'text-white/90 hover:text-white'
  const iconColor      = isLight ? 'text-neutral-600 hover:text-neutral-900'    : 'text-white/80 hover:text-white'
  const underlineColor = isLight ? 'bg-primary'                                  : 'bg-white'

  const isActive = (href) => pathname === href

  return (
    <header className="absolute top-0 inset-x-0 z-50">

      {/* ── Desktop nav ── */}
      <div className="hidden md:flex items-center justify-between px-8 lg:px-16 h-[72px]">
        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="SNG Jewellers" className="h-14 w-auto object-contain" />
        </Link>

        <nav className="flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`relative font-label text-label-lg tracking-wider transition-colors duration-200 ${textColor}`}
            >
              {link.label}
              {isActive(link.href) && (
                <span className={`absolute -bottom-1 left-0 right-0 h-[2px] ${underlineColor} rounded-full`} />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to="/visit"
            className="btn btn-md bg-primary text-white hover:bg-primary-600 text-xs tracking-widest px-5 py-2.5"
          >
            Book Appointment
          </Link>
          <button aria-label="Cart" className={`${iconColor} transition-colors`}>
            <ShoppingBag size={20} strokeWidth={1.5} />
          </button>
          <button aria-label="Account" className={`${iconColor} transition-colors`}>
            <User size={20} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* ── Mobile nav ── */}
      <div className="md:hidden grid grid-cols-3 items-center px-4 h-[68px]">
        <div className="flex items-center">
          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
            className={`${iconColor} transition-colors`}
          >
            {menuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        </div>

        <div className="flex items-center justify-center">
          <Link to="/">
            <img src={logo} alt="SNG Jewellers" className="h-14 w-auto object-contain" />
          </Link>
        </div>

        <div className="flex items-center justify-end">
          <Link
            to="/visit"
            className={`font-label font-semibold text-[10px] tracking-widest uppercase text-right leading-tight ${textColor}`}
          >
            Book<br />Appointment
          </Link>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
        } bg-neutral-900/95 backdrop-blur-sm`}
      >
        <nav className="flex flex-col px-6 pb-6 pt-2 gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-label text-label-lg tracking-wider text-white/90 hover:text-white border-b border-white/10 pb-4 last:border-0 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

    </header>
  )
}
