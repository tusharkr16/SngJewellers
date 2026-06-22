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
    // text left, image right
    flip: false,
  },
  {
    year: '1998',
    title: 'The Signature Collection',
    body: "Introduction of our 'Timeless Heritage' bridal line, blending classical Victorian motifs with modern structural engineering. It remains our most coveted collection to date.",
    image: curated1,
    imageAlt: 'The Signature bridal collection',
    // image left, text right
    flip: true,
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
    <section className="bg-surface py-20 lg:py-28">
      <div className="max-w-[1000px] mx-auto px-5 md:px-10">

        {/* Heading */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="font-headline font-bold text-neutral-900 text-[2.25rem] md:text-[3rem] lg:text-[3.5rem] leading-tight">
            A Journey Through Time
          </h2>
          {/* Red underline */}
          <div className="mx-auto mt-4 w-14 h-[2px] bg-primary rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Centre vertical line — desktop only */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-neutral-200" />

          <div className="flex flex-col gap-0">
            {milestones.map((m, idx) => (
              <div key={m.year} className="relative">

                {/* ── DESKTOP row ── */}
                <div className={`hidden md:grid grid-cols-2 gap-0 items-center min-h-[420px]
                  ${idx !== milestones.length - 1 ? 'mb-0' : ''}`}
                >
                  {/* Left cell */}
                  <div className={`flex items-center ${m.flip ? 'justify-start pl-12 lg:pl-16' : 'justify-end pr-12 lg:pr-16'}`}>
                    {m.flip ? (
                      /* Image on left */
                      <img
                        src={m.image}
                        alt={m.imageAlt}
                        className="w-[340px] lg:w-[380px] h-[240px] lg:h-[260px] object-cover shadow-card-md"
                      />
                    ) : (
                      /* Text on left */
                      <div className="max-w-[320px] text-right">
                        <p className="font-headline font-bold text-neutral-100 text-[4.5rem] leading-none select-none -mb-4">
                          {m.year}
                        </p>
                        <h3 className="font-headline font-bold text-neutral-900 text-[1.4rem] mb-3">
                          {m.title}
                        </h3>
                        <p className="font-body text-neutral-500 text-[0.9rem] leading-[1.75]">
                          {m.body}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Centre dot */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10
                    w-3 h-3 rounded-full bg-primary ring-4 ring-surface" />

                  {/* Right cell */}
                  <div className={`flex items-center ${m.flip ? 'justify-end pr-12 lg:pr-16' : 'justify-start pl-12 lg:pl-16'}`}>
                    {m.flip ? (
                      /* Text on right */
                      <div className="max-w-[320px]">
                        <p className="font-headline font-bold text-neutral-100 text-[4.5rem] leading-none select-none -mb-4">
                          {m.year}
                        </p>
                        <h3 className="font-headline font-bold text-neutral-900 text-[1.4rem] mb-3">
                          {m.title}
                        </h3>
                        <p className="font-body text-neutral-500 text-[0.9rem] leading-[1.75]">
                          {m.body}
                        </p>
                      </div>
                    ) : (
                      /* Image on right */
                      <img
                        src={m.image}
                        alt={m.imageAlt}
                        className="w-[340px] lg:w-[380px] h-[240px] lg:h-[260px] object-cover shadow-card-md"
                      />
                    )}
                  </div>
                </div>

                {/* ── MOBILE row ── */}
                <div className="md:hidden flex gap-5 pb-12">
                  {/* Left — thin line + dot */}
                  <div className="flex flex-col items-center flex-shrink-0 pt-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-surface flex-shrink-0" />
                    {idx !== milestones.length - 1 && (
                      <div className="w-px flex-1 bg-neutral-200 mt-2" />
                    )}
                  </div>

                  {/* Right — content */}
                  <div className="flex-1 pb-4">
                    <p className="font-headline font-bold text-neutral-100 text-[3rem] leading-none select-none -mb-2">
                      {m.year}
                    </p>
                    <h3 className="font-headline font-bold text-neutral-900 text-[1.25rem] mb-2">
                      {m.title}
                    </h3>
                    <p className="font-body text-neutral-500 text-[0.875rem] leading-[1.75] mb-4">
                      {m.body}
                    </p>
                    <img
                      src={m.image}
                      alt={m.imageAlt}
                      className="w-full h-[200px] object-cover shadow-card"
                    />
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
