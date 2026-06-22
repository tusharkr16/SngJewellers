import { useState, useEffect, useCallback, useRef } from 'react'

// Desktop slides use the provided jewellery images; mobile uses same images with adjusted focal points
const slides = [
  {
    id: 1,
    overline: 'Bridal Couture',
    headline: 'Timeless Vows\nin Pure Gold',
    cta: 'Discover Bridal',
    href: '#bridal',
    desktopBg: new URL('../../assets/Desktop screen1.png', import.meta.url).href,
    mobileBg: new URL('../../assets/screen.png', import.meta.url).href,
    overlayOpacity: 60,
  },
  {
    id: 2,
    overline: 'High Jewellery',
    headline: 'Where Heritage\nMeets Brilliance',
    cta: 'Explore the Collection',
    href: '#collection',
    desktopBg: new URL('../../assets/Desktop screen2.png', import.meta.url).href,
    mobileBg: new URL('../../assets/screen 2.png', import.meta.url).href,
    overlayOpacity: 60,
  },
]

const AUTOPLAY_INTERVAL = 5000
const FADE_DURATION = 1200 // ms — matches CSS transition

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [transitioning, setTransitioning] = useState(false)
  // visibleIndex = the slide currently rendered (may lag behind `current` during fade)
  const [visible, setVisible] = useState(0)
  const timerRef = useRef(null)

  const goTo = useCallback(
    (index) => {
      if (transitioning || index === current) return
      setTransitioning(true)
      // After the fade-out half, swap the slide and fade back in
      setTimeout(() => {
        setVisible(index)
        setCurrent(index)
        setTransitioning(false)
      }, FADE_DURATION / 2)
    },
    [transitioning, current],
  )

  const next = useCallback(() => {
    goTo((current + 1) % slides.length)
  }, [current, goTo])

  // Autoplay
  useEffect(() => {
    timerRef.current = setInterval(next, AUTOPLAY_INTERVAL)
    return () => clearInterval(timerRef.current)
  }, [next])

  const resetTimer = () => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(next, AUTOPLAY_INTERVAL)
  }

  const slide = slides[visible]

  return (
    <section className="relative w-full h-[88vh] md:h-screen min-h-[560px] overflow-hidden bg-neutral-900">
      {/* ── Background images — cross-dissolve via opacity ── */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          aria-hidden={i !== current}
          className="absolute inset-0 w-full h-full"
          style={{
            transition: `opacity ${FADE_DURATION}ms cubic-bezier(0.4,0,0.2,1)`,
            opacity: i === current ? 1 : 0,
            zIndex: i === current ? 1 : 0,
          }}
        >
          {/* Desktop image — 40% opacity */}
          <img
            src={s.desktopBg}
            alt=""
            className="hidden md:block absolute inset-0 w-full h-full object-cover object-center opacity-40"
            draggable={false}
          />
          {/* Mobile image — 40% opacity */}
          <img
            src={s.mobileBg}
            alt=""
            className="md:hidden absolute inset-0 w-full h-full object-cover object-center opacity-40"
            draggable={false}
          />
        </div>
      ))}

      {/* ── Scroll hint — mobile only ── */}
      <div className="md:hidden absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="font-label text-label-sm text-white/60 tracking-[0.3em]">SCROLL</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent scroll-indicator" />
      </div>

      {/* ── Slide content ── */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
        <div
          style={{
            transition: `opacity ${FADE_DURATION}ms cubic-bezier(0.4,0,0.2,1)`,
            opacity: transitioning ? 0 : 1,
          }}
          className="flex flex-col items-center gap-5 md:gap-6"
        >
          {/* Overline */}
          <p className="font-label text-white/70 tracking-[0.3em] text-[12px] md:text-[14px] lg:text-[15px] uppercase">
            {slide.overline}
          </p>

          {/* Headline */}
          <h1
            className="font-headline font-bold text-white leading-[1.08]
              text-[3rem] sm:text-[3.5rem] md:text-[5.5rem] lg:text-[6.5rem] xl:text-[7.5rem]
              max-w-[14ch] text-balance"
            style={{ textShadow: '0 2px 40px rgba(0,0,0,0.5)' }}
          >
            {slide.headline.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i < slide.headline.split('\n').length - 1 && <br />}
              </span>
            ))}
          </h1>

          {/* CTA */}
          <a
            href={slide.href}
            className="inline-flex items-center gap-3 bg-primary hover:bg-primary-600
              text-white font-label font-semibold tracking-[0.2em] uppercase
              text-[11px] md:text-[13px] lg:text-[14px]
              px-10 py-4 md:px-14 md:py-5 lg:px-16 lg:py-6
              transition-colors duration-200 mt-2"
          >
            {slide.cta}
          </a>
        </div>
      </div>

      {/* ── Dot pagination ── */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3">
        {slides.map((s, i) => (
          <button
            key={s.id}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => {
              goTo(i)
              resetTimer()
            }}
            className="relative h-0.5 overflow-hidden rounded-full transition-all duration-300"
            style={{ width: i === current ? '36px' : '24px' }}
          >
            {/* Track */}
            <span className="absolute inset-0 bg-white/30 rounded-full" />
            {/* Fill */}
            <span
              className={`absolute inset-0 bg-white rounded-full transition-all duration-300 ${
                i === current ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  )
}
