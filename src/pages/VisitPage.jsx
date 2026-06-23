import FlagshipStores from '../components/sections/FlagshipStores'

export default function VisitPage() {
  return (
    <main>
      {/* Dark hero header */}
      <div className="bg-neutral-900 pt-28 pb-16 px-5 md:px-10 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-label text-[10px] tracking-[0.3em] uppercase text-primary font-semibold mb-5">
            The Global Presence
          </p>
          <h1 className="font-headline font-bold text-white text-[2.5rem] md:text-[3.25rem] lg:text-[4rem] leading-[1.08] mb-6 max-w-[14ch]">
            Our Flagship Destinations
          </h1>
          <p className="font-body text-white/60 text-[1rem] md:text-[1.1rem] leading-[1.8] max-w-[52ch]">
            Experience the world of SNG Jewellers in person. From the historic streets of London
            to the pulse of New York and the vibrant spirit of Mumbai, discover our curated
            collections in settings designed for timeless luxury.
          </p>
        </div>
      </div>

      <FlagshipStores />
    </main>
  )
}
