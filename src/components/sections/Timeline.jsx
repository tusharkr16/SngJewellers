import header2 from '../../assets/header2.png'
import curated1 from '../../assets/curated1.png'
import desktop2 from '../../assets/Desktop screen2.png'

const milestones = [
  {
    year: '1974',
    title: 'The Foundation',
    body: 'Our first atelier opened its doors, dedicated to the philosophy that jewellery is an extension of the soul. A humble beginning that prioritized quality over quantity.',
    image: header2,
    imageAlt: 'SNG Jewellers first store',
    flip: false, // text left, image right
  },
  {
    year: '1998',
    title: 'The Signature Collection',
    body: "Introduction of our 'Timeless Heritage' bridal line, blending classical Victorian motifs with modern structural engineering. It remains our most coveted collection to date.",
    image: curated1,
    imageAlt: 'The Signature bridal collection',
    flip: true,  // image left, text right
  },
  {
    year: '2034',
    title: 'Future Heritage',
    body: 'Celebrating 50 years of excellence by integrating sustainable sourcing and innovative design technologies, ensuring the SNG legacy shines for the next generation.',
    image: desktop2,
    imageAlt: 'SNG digital future',
    flip: false,
  },
]

export default function Timeline() {
  return (
    <section className="bg-surface py-20 lg:py-28 overflow-hidden">

      {/* Heading */}
      <div className="text-center mb-16 lg:mb-24 px-5">
        <h2 className="font-headline font-bold text-neutral-900
          text-[2.25rem] md:text-[3rem] lg:text-[3.75rem] leading-tight">
          A Journey Through Time
        </h2>
        <div className="mx-auto mt-5 w-14 h-[2px] bg-primary rounded-full" />
      </div>

      {/* Timeline rows */}
      <div className="relative max-w-[1400px] mx-auto">

        {/* Centre vertical line */}
        <div className="hidden md:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-neutral-200 z-0" />

        {milestones.map((m, idx) => (
          <div key={m.year} className="relative">

            {/* ── DESKTOP row ── */}
            <div className="hidden md:grid grid-cols-2 min-h-[480px] lg:min-h-[520px]">

              {/* ── Left half ── */}
              <div className={`flex items-center ${m.flip ? 'justify-start' : 'justify-end'}`}>
                {m.flip ? (
                  /* Image fills left half */
                  <div className="w-full h-[480px] lg:h-[520px] pr-16 lg:pr-24 pl-8 lg:pl-16 flex items-center">
                    <img
                      src={m.image}
                      alt={m.imageAlt}
                      className="w-full h-[340px] lg:h-[380px] object-cover shadow-card-lg"
                    />
                  </div>
                ) : (
                  /* Text right-aligned towards centre */
                  <div className="w-full pr-16 lg:pr-24 pl-8 lg:pl-16 text-right">
                    <p className="font-headline font-bold select-none leading-none
                      text-[6rem] lg:text-[7rem] text-neutral-100 -mb-6 lg:-mb-8">
                      {m.year}
                    </p>
                    <h3 className="font-headline font-bold text-neutral-900
                      text-[1.6rem] lg:text-[1.9rem] mb-4">
                      {m.title}
                    </h3>
                    <p className="font-body text-neutral-500 text-[1rem] lg:text-[1.05rem] leading-[1.8] max-w-[36ch] ml-auto">
                      {m.body}
                    </p>
                  </div>
                )}
              </div>

              {/* Centre dot */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10
                w-3.5 h-3.5 rounded-full bg-primary ring-[5px] ring-surface shadow-sm" />

              {/* ── Right half ── */}
              <div className={`flex items-center ${m.flip ? 'justify-end' : 'justify-start'}`}>
                {m.flip ? (
                  /* Text left-aligned from centre */
                  <div className="w-full pl-16 lg:pl-24 pr-8 lg:pr-16">
                    <p className="font-headline font-bold select-none leading-none
                      text-[6rem] lg:text-[7rem] text-neutral-100 -mb-6 lg:-mb-8">
                      {m.year}
                    </p>
                    <h3 className="font-headline font-bold text-neutral-900
                      text-[1.6rem] lg:text-[1.9rem] mb-4">
                      {m.title}
                    </h3>
                    <p className="font-body text-neutral-500 text-[1rem] lg:text-[1.05rem] leading-[1.8] max-w-[36ch]">
                      {m.body}
                    </p>
                  </div>
                ) : (
                  /* Image fills right half */
                  <div className="w-full h-[480px] lg:h-[520px] pl-16 lg:pl-24 pr-8 lg:pr-16 flex items-center">
                    <img
                      src={m.image}
                      alt={m.imageAlt}
                      className="w-full h-[340px] lg:h-[380px] object-cover shadow-card-lg"
                    />
                  </div>
                )}
              </div>

            </div>

            {/* ── MOBILE row ── */}
            <div className="md:hidden flex gap-4 px-5 pb-12">
              {/* Line + dot */}
              <div className="flex flex-col items-center flex-shrink-0 pt-2">
                <div className="w-3 h-3 rounded-full bg-primary ring-4 ring-surface flex-shrink-0" />
                {idx !== milestones.length - 1 && (
                  <div className="w-px flex-1 bg-neutral-200 mt-2" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-2">
                <p className="font-headline font-bold select-none leading-none
                  text-[3.5rem] text-neutral-100 -mb-3">
                  {m.year}
                </p>
                <h3 className="font-headline font-bold text-neutral-900 text-[1.3rem] mb-2">
                  {m.title}
                </h3>
                <p className="font-body text-neutral-500 text-[0.9rem] leading-[1.8] mb-4">
                  {m.body}
                </p>
                <img
                  src={m.image}
                  alt={m.imageAlt}
                  className="w-full h-[220px] object-cover shadow-card-md"
                />
              </div>
            </div>

          </div>
        ))}

      </div>
    </section>
  )
}
