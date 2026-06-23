import screen from '../../assets/screen.png'

export default function BespokeExperience() {
  return (
    <section className="bg-surface py-10 lg:py-16 px-5 md:px-10 lg:px-16">
      <div className="max-w-[1400px] mx-auto">

        {/* Outer bordered card */}
        <div className="border border-neutral-200 p-8 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left — text */}
            <div>
              <p className="font-label text-[10px] tracking-[0.3em] uppercase text-secondary font-semibold mb-5">
                Exclusive Concierge
              </p>

              <h2 className="font-headline font-bold text-neutral-900 leading-[1.08]
                text-[2.25rem] lg:text-[3rem] xl:text-[3.25rem] mb-7 max-w-[12ch]">
                The Bespoke Experience
              </h2>

              <p className="font-body text-neutral-500 text-[1rem] lg:text-[1.05rem] leading-[1.85] max-w-[44ch] mb-10">
                For those who seek something truly unique, we offer private viewing sessions.
                Collaborate with our master craftsmen to design a piece that is uniquely yours,
                from gemstone selection to the final polish.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/visit"
                  className="inline-flex items-center justify-center
                    bg-primary hover:bg-primary-600 text-white
                    font-label font-semibold tracking-[0.2em] uppercase text-[11px]
                    px-8 py-4 transition-colors duration-200"
                >
                  Book Private Viewing
                </a>
                <a
                  href="/visit"
                  className="inline-flex items-center justify-center
                    border border-neutral-300 hover:border-secondary text-neutral-700 hover:text-secondary
                    font-label font-semibold tracking-[0.2em] uppercase text-[11px]
                    px-8 py-4 transition-colors duration-200"
                >
                  Virtual Consultation
                </a>
              </div>
            </div>

            {/* Right — image + floating quote card */}
            <div className="relative">
              {/* Main image — offset up slightly */}
              <div className="relative z-10 ml-8 md:ml-12">
                <img
                  src={screen}
                  alt="Bespoke jewellery craftsmanship"
                  className="w-full h-[340px] md:h-[380px] lg:h-[420px] object-cover shadow-card-lg"
                />
              </div>

              {/* Floating quote card — overlaps bottom-left of image */}
              <div className="absolute bottom-0 left-0 z-20
                w-[78%] sm:w-[68%] md:w-[80%] lg:w-[72%]
                bg-white shadow-card-lg p-6 lg:p-8
                translate-y-6">
                <blockquote className="font-headline font-bold text-neutral-900
                  text-[1.1rem] lg:text-[1.25rem] leading-[1.45] italic">
                  "Craftsmanship is the language of love."
                </blockquote>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
