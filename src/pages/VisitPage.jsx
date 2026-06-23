import { ArrowRight, MapPin, Phone, Clock, Navigation } from 'lucide-react'
import FlagshipStores from '../components/sections/FlagshipStores'
import header2 from '../assets/header2.png'

const MAP_SRC = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.3511128278775!2d77.31157407550466!3d28.679758775644543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd668958b6c5%3A0x6c5e3cde9b9af139!2sVardhman%20Dilshad%20Plaza!5e0!3m2!1sen!2sin!4v1718000000000!5m2!1sen!2sin"
const MAPS_URL = "https://maps.app.goo.gl/XPidNYSPejZheHyLA"

function MapSection({ mobile = false }) {
  return (
    <section className={`bg-surface ${mobile ? 'px-5 py-8' : 'px-10 lg:px-16 py-16 lg:py-20'}`}>
      <div className={`${mobile ? '' : 'max-w-[1400px] mx-auto'}`}>

        {/* Section label */}
        <div className={`flex items-center justify-between mb-6 ${mobile ? '' : 'mb-8'}`}>
          <div>
            <p className="font-label text-[9px] tracking-[0.3em] uppercase text-primary font-semibold mb-1">
              Find Us
            </p>
            <h3 className={`font-headline font-bold text-neutral-900 leading-tight ${mobile ? 'text-[1.4rem]' : 'text-[2rem] lg:text-[2.5rem]'}`}>
              Visit Our Atelier
            </h3>
          </div>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-neutral-300 hover:border-primary
              text-neutral-600 hover:text-primary px-4 py-2.5 transition-all duration-200
              font-label text-[10px] tracking-[0.18em] uppercase"
          >
            <Navigation size={12} strokeWidth={2} />
            Directions
          </a>
        </div>

        {/* Map frame with inner border glow */}
        <div className="relative rounded-none overflow-hidden ring-1 ring-white/10 shadow-2xl">
          <iframe
            title="SNG Jewellers Location"
            src={MAP_SRC}
            width="100%"
            height={mobile ? 300 : 500}
            style={{ border: 0, display: 'block', filter: 'grayscale(15%) contrast(1.05)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Floating address card over the map */}
          <div className="absolute bottom-4 left-4 right-4 md:left-6 md:bottom-6 md:right-auto md:max-w-xs
            bg-white/95 backdrop-blur-sm border border-neutral-200 p-4 md:p-5 shadow-xl">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-primary/10 flex items-center justify-center mt-0.5">
                <MapPin size={14} className="text-primary" strokeWidth={2} />
              </div>
              <div>
                <p className="font-label text-[9px] tracking-[0.22em] uppercase text-neutral-400 font-semibold mb-1">
                  SNG Jewellers
                </p>
                <p className="font-body text-neutral-800 text-[0.82rem] leading-[1.6]">
                  Shop No. 3 & 4, Vardhman Dilshad Plaza,<br />
                  Dilshad Garden, Delhi – 110095
                </p>
                <a
                  href="tel:+919810226537"
                  className="font-label text-[10px] tracking-[0.1em] text-primary hover:text-neutral-900 mt-2 block transition-colors duration-200"
                >
                  +91 98102 26537
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom "Open in Maps" link */}
        <div className="mt-4 text-center">
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-label text-[9px] tracking-[0.22em] uppercase text-neutral-400 hover:text-neutral-700 transition-colors duration-200"
          >
            View on Google Maps ↗
          </a>
        </div>

      </div>
    </section>
  )
}

export default function VisitPage() {
  return (
    <main>

      {/* ── DESKTOP hero header ── */}
      <div className="hidden md:block bg-neutral-900 pt-28 pb-16 px-10 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-label text-[10px] tracking-[0.3em] uppercase text-primary font-semibold mb-5">
            The Global Presence
          </p>
          <h1 className="font-headline font-bold text-white text-[3.25rem] lg:text-[4rem] leading-[1.08] mb-6 max-w-[14ch]">
            Our Flagship Destinations
          </h1>
          <p className="font-body text-white/60 text-[1.1rem] leading-[1.8] max-w-[52ch]">
            Experience the world of SNG Jewellers in person. Discover our curated collections
            in settings designed for timeless luxury.
          </p>
        </div>
      </div>

      {/* ── MOBILE layout ── */}
      <div className="md:hidden">

        {/* Full-bleed hero image with overlay */}
        <div className="relative h-[55vh] min-h-[320px]">
          <img
            src={header2}
            alt="SNG Jewellers Atelier"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />

          {/* Text overlay */}
          <div className="absolute inset-0 flex flex-col justify-end px-6 pb-8">
            <p className="font-label text-[9px] tracking-[0.3em] uppercase text-tertiary font-semibold mb-2">
              Experience Heritage
            </p>
            <h1 className="font-headline font-bold text-white text-[2.6rem] leading-[1.0] uppercase">
              Visit Our<br />Atelier
            </h1>
          </div>
        </div>

        {/* Details card */}
        <div className="bg-surface px-5 pt-8 pb-4">

          {/* Heading */}
          <h2 className="font-headline font-bold text-primary text-[1.6rem] leading-tight mb-3">
            The Flagship
          </h2>
          <p className="font-body text-neutral-600 text-[0.9rem] leading-[1.75] mb-8">
            Step into a realm of timeless elegance. Our flagship atelier in the heart of
            Delhi offers a curated experience where legacy meets modern craftsmanship.
          </p>

          {/* Info rows */}
          <div className="flex flex-col gap-0 divide-y divide-neutral-100">

            {/* Location */}
            <div className="flex gap-4 py-5">
              <div className="flex-shrink-0 w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center">
                <MapPin size={15} className="text-primary" strokeWidth={1.8} />
              </div>
              <div>
                <p className="font-label text-[9px] tracking-[0.22em] uppercase text-neutral-400 font-semibold mb-1">
                  Location
                </p>
                <p className="font-headline font-bold text-neutral-900 text-[1.05rem] leading-[1.4]">
                  Shop No. 3 & 4, Vardhman Dilshad Plaza,<br />
                  Dilshad Garden, Delhi – 110095
                </p>
              </div>
            </div>

            {/* Connect */}
            <div className="flex gap-4 py-5">
              <div className="flex-shrink-0 w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center">
                <Phone size={15} className="text-primary" strokeWidth={1.8} />
              </div>
              <div>
                <p className="font-label text-[9px] tracking-[0.22em] uppercase text-neutral-400 font-semibold mb-1">
                  Connect
                </p>
                <a
                  href="tel:+919810226537"
                  className="font-body text-neutral-800 text-[1rem] font-semibold block hover:text-primary transition-colors"
                >
                  +91 98102 26537
                </a>
                <a
                  href="mailto:contact@sngjewellers.com"
                  className="font-body text-neutral-500 text-[0.875rem] hover:text-primary transition-colors"
                >
                  contact@sngjewellers.com
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4 py-5">
              <div className="flex-shrink-0 w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center">
                <Clock size={15} className="text-primary" strokeWidth={1.8} />
              </div>
              <div className="w-full">
                <p className="font-label text-[9px] tracking-[0.22em] uppercase text-neutral-400 font-semibold mb-2">
                  Atelier Hours
                </p>
                <div className="flex justify-between items-center mb-1">
                  <span className="font-body text-neutral-600 text-[0.875rem]">Mon – Sat</span>
                  <span className="font-body font-semibold text-neutral-900 text-[0.875rem]">10:00 AM – 8:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-body text-neutral-600 text-[0.875rem]">Sunday</span>
                  <span className="font-body font-semibold text-primary text-[0.875rem]">By Appointment</span>
                </div>
              </div>
            </div>

          </div>

          {/* CTA button */}
          <div className="mt-8 mb-4">
            <a
              href="tel:+919810226537"
              className="flex items-center justify-between w-full border border-primary
                px-6 py-4 font-label font-semibold text-[11px] tracking-[0.2em] uppercase
                text-primary hover:bg-primary hover:text-white transition-all duration-200 group"
            >
              Book a Private Consultation
              <ArrowRight size={15} strokeWidth={2} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>

          <p className="font-body text-neutral-400 text-[0.75rem] text-center pb-6">
            Experience personalized service in our private VIP suite.
          </p>
        </div>

        {/* Map — mobile */}
        <MapSection mobile />

      </div>

      {/* Desktop stores section + map */}
      <div className="hidden md:block">
        <FlagshipStores />
        <MapSection />
      </div>

    </main>
  )
}
