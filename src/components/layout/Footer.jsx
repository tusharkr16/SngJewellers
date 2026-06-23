import { Link } from 'react-router-dom'
import { MapPin, Phone } from 'lucide-react'
import logo from '../../assets/logo.png'

const discover = [
  { label: 'Collections',   href: '/collections' },
  { label: 'Craftsmanship', href: '/heritage' },
  { label: 'Visit Us',      href: '/visit' },
]

export default function Footer() {
  return (
    <footer className="bg-[#2a2a2a]">

      <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1.4fr] gap-10 lg:gap-20">

          {/* Col 1 — Logo + tagline */}
          <div>
            <Link to="/" className="inline-block mb-5">
              <img src={logo} alt="SNG Jewellers" className="h-16 w-auto object-contain" />
            </Link>
            <p className="font-body text-neutral-400 text-[0.9rem] leading-[1.75] max-w-[26ch]">
              Jewellers to the extraordinary since 1995. Defining elegance through generations of mastery.
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

          {/* Col 3 — Address */}
          <div>
            <p className="font-label font-bold text-white text-[11px] tracking-[0.28em] uppercase mb-6">
              Visit Us
            </p>
            <div className="flex gap-3 mb-5">
              <MapPin size={15} className="text-primary flex-shrink-0 mt-0.5" strokeWidth={1.8} />
              <p className="font-body text-neutral-400 text-[0.9rem] leading-[1.75]">
                Shop No. 3 &amp; 4, Vardhman Dilshad Plaza,<br />
                Local Shopping Complex,<br />
                Opp. Mukherji School, Pocket O Road,<br />
                Block O, Dilshad Garden,<br />
                Delhi – 110095
              </p>
            </div>
            <div className="flex gap-3">
              <Phone size={15} className="text-primary flex-shrink-0 mt-0.5" strokeWidth={1.8} />
              <a
                href="tel:+919810226537"
                className="font-body text-neutral-400 text-[0.9rem] hover:text-white transition-colors duration-200"
              >
                +91 98102 26537
              </a>
            </div>
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
