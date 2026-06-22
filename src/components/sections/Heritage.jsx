import { ArrowRight } from 'lucide-react'
import header1 from '../../assets/header1.png'
import header2 from '../../assets/header2.png'
import logo from '../../assets/logo.png'

function DiamondIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-primary/50">
      <path
        d="M10 2L14 7H6L10 2Z M10 18L6 13H14L10 18Z M2 10L6 7V13L2 10Z M18 10L14 13V7L18 10Z"
        fill="currentColor"
        fillOpacity="0.6"
      />
    </svg>
  )
}

export default function Heritage() {
  return (
    <section id="heritage" className="bg-surface">

      {/* ── DESKTOP ── */}
      <div className="hidden md:block">
        <div className="max-w-[1400px] mx-auto px-10 lg:px-16 py-20 lg:py-28">
          <div className="grid grid-cols-[1fr_1.05fr] gap-14 xl:gap-20 items-start">

            {/* Left — text */}
            <div className="pt-2">
              <p className="font-label text-[11px] tracking-[0.28em] uppercase text-primary font-semibold mb-7">
                Our Story
              </p>

              <h2 className="font-headline font-bold text-neutral-900 leading-[1.08]
                text-[2.75rem] lg:text-[3.25rem] xl:text-[3.75rem] mb-9 max-w-[13ch]">
                Crafting Eternity Since 1995
              </h2>

              <p className="font-body text-[1.125rem] lg:text-[1.2rem] text-neutral-500
                leading-[1.8] max-w-[44ch] mb-11">
                For four decades, SNG Jewellers has stood as a beacon of artisanal excellence.
                Our workshop in the heart of the city breathes life into raw stones, transforming
                dreams into precious heirlooms that whisper stories of love, power, and legacy.
                Every piece is a testament to the meticulous patience of our master craftsmen.
              </p>

              <img
                src={logo}
                alt="SNG Jewellers"
                className="h-28 lg:h-36 w-auto object-contain mb-8 opacity-90"
              />

              <a
                href="/heritage"
                className="inline-flex items-center gap-2.5 font-label font-semibold
                  text-[12px] tracking-[0.22em] uppercase text-secondary hover:text-secondary-700
                  transition-colors duration-200 group"
              >
                Read Our Heritage
                <ArrowRight
                  size={15}
                  strokeWidth={2}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>
            </div>

            {/* Right — two portrait images, staggered */}
            <div className="relative flex items-start justify-end gap-5 h-[520px] lg:h-[600px] xl:h-[640px]">
              <div className="w-[49%] h-full mt-10 overflow-hidden shadow-card-lg flex-shrink-0">
                <img
                  src={header1}
                  alt="Master craftsman setting a diamond"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="w-[49%] h-[87%] overflow-hidden shadow-card-lg flex-shrink-0">
                <img
                  src={header2}
                  alt="Luxury jewellery showroom"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── MOBILE ── */}
      <div className="md:hidden px-5 pt-10 pb-14">
        <div className="flex items-center gap-3 mb-8">
          <div className="flex-1 h-px bg-primary/20" />
          <DiamondIcon />
          <div className="flex-1 h-px bg-primary/20" />
        </div>

        <h2 className="font-headline font-bold text-primary leading-[1.1] text-[2.4rem] mb-6">
          Crafting Eternity Since 1995
        </h2>

        <p className="font-body text-body-md text-neutral-700 leading-[1.8] mb-5">
          SNG Jewellers was founded on a singular vision: to translate the raw brilliance of
          nature into wearable masterpieces. Our heritage is defined by the steady hands of
          master craftsmen who see beyond the facets of a diamond to the stories they will
          carry for generations.
        </p>

        <p className="font-body text-body-md text-neutral-400 leading-[1.8] mb-10">
          Every piece in our collection is a testament to the pursuit of perfection, utilizing
          only the most ethically sourced gemstones and high-purity precious metals.
        </p>

        <div className="flex flex-col items-center mb-8">
          <img
            src={logo}
            alt="SNG Jewellers"
            className="h-24 w-auto object-contain opacity-90"
          />
        </div>

        <div className="flex justify-center">
          <a
            href="/heritage"
            className="font-label font-semibold text-[11px] tracking-[0.22em] uppercase
              text-secondary hover:text-secondary-700 transition-colors duration-200"
          >
            Discover Our Heritage
          </a>
        </div>
      </div>

    </section>
  )
}
