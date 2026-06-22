import desktop3 from '../../assets/Desktop screen3.png'

export default function LegacySection() {
  return (
    <section className="relative overflow-hidden bg-surface">

      {/* ── DESKTOP ── */}
      <div className="hidden md:grid grid-cols-2 min-h-[680px] lg:min-h-[780px]">

        {/* Left — text panel */}
        <div className="flex flex-col justify-center px-12 lg:px-20 xl:px-28 py-20">
          <p className="font-label text-[11px] tracking-[0.28em] uppercase text-primary font-semibold mb-8">
            Est. 1974
          </p>

          <h2 className="font-headline font-bold text-neutral-900 leading-[1.08]
            text-[3rem] lg:text-[3.75rem] xl:text-[4.25rem] mb-8">
            A Legacy Carved in{' '}
            <em className="text-primary not-italic">Gold.</em>
          </h2>

          <p className="font-body text-[1.05rem] lg:text-[1.15rem] text-neutral-500
            leading-[1.85] max-w-[42ch] mb-12">
            For half a century, SNG Jewellers has been the silent custodian of
            life's most precious moments. Our heritage is not just in the metal
            we shape, but in the generations of families who have trusted our
            master artisans to tell their stories through exquisite craftsmanship.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#archives"
              className="inline-flex items-center justify-center
                bg-primary hover:bg-primary-600 text-white
                font-label font-semibold tracking-[0.2em] uppercase text-[11px]
                px-8 py-4 transition-colors duration-200"
            >
              Explore Archives
            </a>
            <a
              href="#craft"
              className="inline-flex items-center justify-center
                border border-neutral-300 hover:border-secondary text-neutral-700 hover:text-secondary
                font-label font-semibold tracking-[0.2em] uppercase text-[11px]
                px-8 py-4 transition-colors duration-200"
            >
              Watch the Craft
            </a>
          </div>
        </div>

        {/* Right — image with floating card */}
        <div className="relative">
          <img
            src={desktop3}
            alt="Master goldsmith at work"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface/60 via-transparent to-transparent" />

          {/* Floating caption card */}
          <div className="absolute bottom-10 left-0 -translate-x-[30%] w-[280px] lg:w-[320px]
            bg-surface/95 backdrop-blur-sm shadow-card-lg p-6 lg:p-8">
            <h3 className="font-headline font-bold text-neutral-900 text-[1.2rem] lg:text-[1.35rem] mb-2">
              The Master's Hand
            </h3>
            <p className="font-body text-neutral-500 text-[0.875rem] lg:text-[0.95rem] leading-[1.7]">
              Each SNG piece undergoes 120 hours of hand-refinement under the precise
              eye of a master goldsmith.
            </p>
          </div>
        </div>

      </div>

      {/* ── MOBILE ── */}
      <div className="md:hidden">
        <div className="relative h-[85vh] min-h-[560px]">
          <img
            src={desktop3}
            alt="Master goldsmith at work"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-10">
            <p className="font-label text-[10px] tracking-[0.3em] uppercase text-primary/80 font-semibold mb-3 text-center">
              Established 1924
            </p>
            <h2 className="font-headline font-bold text-primary leading-[1.1] text-[2.4rem] text-center">
              Crafting Legacies of<br />Pure Brilliance
            </h2>
          </div>
        </div>
      </div>

    </section>
  )
}
