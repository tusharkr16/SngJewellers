import { ArrowRight } from 'lucide-react'
import desktop2 from '../../assets/Desktop screen2.png'
import screen from '../../assets/screen.png'

const collections = [
  {
    id: 1,
    category: 'Heritage Series',
    title: 'The Emerald Queen',
    body: 'Inspired by the verdant gardens of the East, this collection features exceptional Colombian emeralds set in intricate 22k gold and diamond filigree. A testament to royal elegance and timeless poise.',
    cta: 'Explore Collection',
    image: desktop2,
    // large card — left col, full height
    large: true,
  },
  {
    id: 2,
    category: 'Bridal',
    title: 'The Bridal Suite',
    body: 'Crafted for the most significant moments. A harmonious blend of tradition and modern minimalism, designed to be passed down through generations.',
    cta: 'Discover More',
    image: screen,
    large: false,
  },
]

export default function FeaturedCollections() {
  return (
    <section className="bg-surface py-16 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16">

        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-start">

          {/* Left — large card */}
          <div className="flex flex-col">
            <img
              src={collections[0].image}
              alt={collections[0].title}
              className="w-full h-[420px] md:h-[520px] lg:h-[600px] object-cover shadow-card-md mb-7"
            />
            <p className="font-label text-[10px] tracking-[0.28em] uppercase text-primary font-semibold mb-3">
              {collections[0].category}
            </p>
            <h3 className="font-headline font-bold text-neutral-900 text-[2rem] lg:text-[2.5rem] leading-tight mb-4">
              {collections[0].title}
            </h3>
            <p className="font-body text-neutral-500 text-[1rem] leading-[1.8] mb-6 max-w-[48ch]">
              {collections[0].body}
            </p>
            <a
              href="#collection"
              className="inline-flex items-center gap-2 font-label font-semibold
                text-[11px] tracking-[0.2em] uppercase text-secondary hover:text-secondary-700
                transition-colors duration-200 group"
            >
              {collections[0].cta}
              <ArrowRight size={14} strokeWidth={2} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Right — smaller card, offset down on desktop */}
          <div className="flex flex-col md:mt-28 lg:mt-36">
            <img
              src={collections[1].image}
              alt={collections[1].title}
              className="w-full h-[300px] md:h-[380px] lg:h-[440px] object-cover shadow-card-md mb-7"
            />
            <p className="font-label text-[10px] tracking-[0.28em] uppercase text-primary font-semibold mb-3">
              {collections[1].category}
            </p>
            <h3 className="font-headline font-bold text-neutral-900 text-[1.75rem] lg:text-[2.1rem] leading-tight mb-4">
              {collections[1].title}
            </h3>
            <p className="font-body text-neutral-500 text-[0.95rem] leading-[1.8] mb-6 max-w-[38ch]">
              {collections[1].body}
            </p>
            <a
              href="#bridal"
              className="inline-flex items-center gap-2 font-label font-semibold
                text-[11px] tracking-[0.2em] uppercase text-secondary hover:text-secondary-700
                transition-colors duration-200 group"
            >
              {collections[1].cta}
              <ArrowRight size={14} strokeWidth={2} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
