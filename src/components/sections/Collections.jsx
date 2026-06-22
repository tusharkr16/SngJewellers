import curated1 from '../../assets/curated1.png'
import curated2 from '../../assets/curated2.png'
import curated3 from '../../assets/curated3.png'

const items = [
  {
    id: 1,
    image: curated1,
    overline: 'Signature',
    title: 'The Royal Emeralds',
    subtitle: 'Unapologetic grandeur for the modern icon.',
    tag: null,
    cta: true,
    // spans full height on desktop (left featured card)
    featured: true,
  },
  {
    id: 2,
    image: curated2,
    overline: null,
    title: 'Ruby Reverie',
    subtitle: null,
    tag: 'New Arrival',
    cta: false,
    featured: false,
  },
  {
    id: 3,
    image: curated3,
    overline: null,
    title: null,
    subtitle: null,
    tag: 'Bridal',
    cta: false,
    featured: false,
    // mobile-only category tile
    mobileCategoryLabel: 'BRIDAL',
  },
  {
    id: 4,
    image: curated1, // reuse as placeholder for 4th tile desktop
    overline: null,
    title: null,
    subtitle: null,
    tag: null,
    cta: false,
    featured: false,
    mobileCategoryLabel: 'MINIMALIST',
    mobileOnly: false,
    desktopHide: false,
  },
]

// Mobile category tiles (bottom two on mobile)
const mobileCategories = [
  { label: 'BRIDAL',    image: curated2 },
  { label: 'MINIMALIST', image: curated3 },
]

export default function Collections() {
  return (
    <section id="collections" className="bg-surface py-14 md:py-20 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16">

        {/* ── Header row ── */}
        <div className="flex items-start justify-between mb-8 md:mb-10">
          <div>
            <p className="font-label text-[10px] md:text-[11px] tracking-[0.28em] uppercase text-primary font-semibold mb-3">
              Exquisite Selection
            </p>
            <h2 className="font-headline font-bold text-neutral-900 leading-[1.08]
              text-[2rem] md:text-[2.75rem] lg:text-[3rem]">
              Curated Collections
            </h2>
          </div>

          {/* Desktop only — View All link */}
          <a
            href="#gallery"
            className="hidden md:inline-flex items-center gap-1.5 font-label font-semibold
              text-[11px] tracking-[0.18em] uppercase text-secondary hover:text-secondary-700
              transition-colors duration-200 mt-1 border-b border-secondary/40 hover:border-secondary pb-0.5 self-end mb-2"
          >
            View All Gallery
          </a>
        </div>

        {/* ── DESKTOP GRID ── */}
        <div className="hidden md:grid grid-cols-[1fr_0.58fr_0.58fr] gap-4 h-[760px] lg:h-[820px]">

          {/* Col 1 — large featured card */}
          <div className="relative overflow-hidden group cursor-pointer">
            <img
              src={curated1}
              alt="The Royal Emeralds"
              className="absolute inset-0 w-full h-full object-cover object-top
                transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Gradient overlay bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="font-headline font-bold text-white text-[1.75rem] leading-tight mb-2">
                The Royal Emeralds
              </h3>
              <p className="font-body text-white/75 text-[0.95rem] leading-snug mb-5">
                Unapologetic grandeur for the modern icon.
              </p>
              <button className="font-label font-semibold text-white text-[10px] tracking-[0.22em]
                uppercase border border-white/80 hover:bg-white hover:text-neutral-900
                px-5 py-3 transition-all duration-200">
                Discover
              </button>
            </div>
          </div>

          {/* Col 2 — stacked: tall card + gap */}
          <div className="flex flex-col gap-4">
            {/* Ruby Reverie — full height */}
            <div className="relative overflow-hidden group cursor-pointer flex-1">
              <img
                src={curated2}
                alt="Ruby Reverie"
                className="absolute inset-0 w-full h-full object-cover object-center
                  transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-headline font-bold text-white text-[1.3rem] leading-tight mb-1">
                  Ruby Reverie
                </h3>
                <p className="font-label text-[9px] tracking-[0.22em] uppercase text-white/65 font-semibold">
                  New Arrival
                </p>
              </div>
            </div>
          </div>

          {/* Col 3 — stacked: two equal cards */}
          <div className="flex flex-col gap-4">
            <div className="relative overflow-hidden group cursor-pointer flex-1">
              <img
                src={curated3}
                alt="Gold Bangles"
                className="absolute inset-0 w-full h-full object-cover object-center
                  transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
            </div>

            <div className="relative overflow-hidden group cursor-pointer flex-1">
              <img
                src={curated2}
                alt="Luxury Timepiece"
                className="absolute inset-0 w-full h-full object-cover object-bottom
                  transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          </div>

        </div>

        {/* ── MOBILE LAYOUT ── */}
        <div className="md:hidden flex flex-col gap-4">

          {/* Featured card */}
          <div className="relative overflow-hidden rounded-none cursor-pointer h-[420px]">
            <img
              src={curated1}
              alt="The Emerald Suite"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="font-label text-[9px] tracking-[0.25em] uppercase text-white/60 font-semibold mb-1">
                Signature
              </p>
              <h3 className="font-headline font-bold text-white text-[1.4rem] italic leading-tight mb-1">
                The Emerald Suite
              </h3>
              <p className="font-body text-white/70 text-[0.82rem] leading-snug">
                Rare Colombian emeralds set in 18k white gold.
              </p>
            </div>
          </div>

          {/* Category tiles */}
          {mobileCategories.map((cat) => (
            <div
              key={cat.label}
              className="relative overflow-hidden cursor-pointer h-[340px] rounded-xl"
            >
              <img
                src={cat.image}
                alt={cat.label}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              {/* Colour-tinted overlay — matches image tone */}
              <div className="absolute inset-0 bg-black/45" />

              {/* Centred label + underline */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <span className="font-label font-bold text-white tracking-[0.35em] text-[15px] uppercase">
                  {cat.label}
                </span>
                <div className="w-12 h-px bg-white/60" />
              </div>
            </div>
          ))}

          {/* View all — mobile */}
          <a
            href="#gallery"
            className="mt-2 font-label font-semibold text-[11px] tracking-[0.2em]
              uppercase text-secondary hover:text-secondary-700 transition-colors duration-200"
          >
            View All Gallery →
          </a>
        </div>

      </div>
    </section>
  )
}
