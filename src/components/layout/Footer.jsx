import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import logo from '../../assets/logo.png'

const discover = [
  { label: 'Collections',    href: '/collections' },
  { label: 'Craftsmanship',  href: '/heritage' },
  { label: 'Store Locator',  href: '/visit' },
]

const concierge = [
  { label: 'Contact Us',        href: '/visit' },
  { label: 'Shipping & Returns', href: '/shipping' },
  { label: 'Bespoke Inquiries',  href: '/visit' },
]

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setEmail('')
  }

  return (
    <footer className="bg-[#2a2a2a]">

      {/* Main footer grid */}
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr_1.4fr] gap-10 lg:gap-16">

          {/* Col 1 — Logo + tagline */}
          <div>
            <Link to="/" className="inline-block mb-5">
              <img src={logo} alt="SNG Jewellers" className="h-16 w-auto object-contain" />
            </Link>
            <p className="font-body text-neutral-400 text-[0.9rem] leading-[1.75] max-w-[22ch]">
              Jewellers to the extraordinary since 1984. Defining elegance through generations of mastery.
            </p>
          </div>

          {/* Col 2 — Discover */}
          <div>
            <p className="font-label font-bold text-white text-[11px] tracking-[0.28em] uppercase mb-6">
              Discover
            </p>
            <ul className="flex flex-col gap-4">
              {discover.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="font-body text-neutral-400 text-[0.95rem] hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Concierge */}
          <div>
            <p className="font-label font-bold text-white text-[11px] tracking-[0.28em] uppercase mb-6">
              Concierge
            </p>
            <ul className="flex flex-col gap-4">
              {concierge.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="font-body text-neutral-400 text-[0.95rem] hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Newsletter */}
          <div>
            <p className="font-label font-bold text-white text-[11px] tracking-[0.28em] uppercase mb-6">
              Newsletter
            </p>
            <p className="font-body text-neutral-400 text-[0.9rem] leading-[1.75] mb-6">
              Sign up for exclusive previews and jewellery care advice.
            </p>
            <form onSubmit={handleSubmit} className="flex items-center border-b border-neutral-500 focus-within:border-white transition-colors duration-200">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                required
                className="flex-1 bg-transparent font-body text-white text-[0.9rem] placeholder:text-neutral-500
                  py-3 outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="text-neutral-400 hover:text-white transition-colors duration-200 pl-3"
              >
                <ArrowRight size={18} strokeWidth={1.8} />
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-700">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16 py-5
          flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-neutral-500 text-[0.8rem]">
            © 2024 SNG Jewellers. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="font-body text-neutral-500 hover:text-white text-[0.8rem] transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="font-body text-neutral-500 hover:text-white text-[0.8rem] transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

    </footer>
  )
}
