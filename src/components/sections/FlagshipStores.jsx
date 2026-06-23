import { ArrowRight, MapPin, Clock } from 'lucide-react'
import header2 from '../../assets/header2.png'
import header1 from '../../assets/header1.png'

const stores = [
  {
    id: 1,
    name: 'London Flagship',
    address: '178 New Bond Street, Mayfair,\nLondon W1S 4RH, United Kingdom',
    hours: 'Monday - Saturday: 10:00 - 18:30\nSunday: 12:00 - 17:00 (By Appointment)',
    image: header2,
    flip: false, // image left, text right
  },
  {
    id: 2,
    name: 'New York Atelier',
    address: '730 Fifth Avenue, Crown Building,\nNew York, NY 10019, USA',
    hours: 'Monday - Friday: 09:00 - 19:00\nSaturday: 11:00 - 18:00',
    image: header1,
    flip: true,  // text left, image right
  },
]

export default function FlagshipStores() {
  return (
    <section className="bg-surface py-16 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16">

        {stores.map((store) => (
          <div
            key={store.id}
            className={`flex flex-col md:flex-row ${store.flip ? 'md:flex-row-reverse' : ''}
              items-center gap-10 lg:gap-16 mb-20 lg:mb-28 last:mb-0`}
          >
            {/* Image */}
            <div className="w-full md:w-[52%] flex-shrink-0">
              <img
                src={store.image}
                alt={store.name}
                className="w-full h-[280px] md:h-[340px] lg:h-[380px] object-cover shadow-card-md"
              />
            </div>

            {/* Text */}
            <div className={`w-full md:w-[48%] ${store.flip ? 'md:text-right md:items-end flex flex-col' : ''}`}>
              <h3 className="font-headline font-bold text-neutral-900 text-[2rem] lg:text-[2.5rem] leading-tight mb-4">
                {store.name}
              </h3>

              {/* Red divider */}
              <div className={`w-10 h-[2px] bg-primary mb-7 ${store.flip ? 'ml-auto' : ''}`} />

              {/* Address */}
              <div className={`flex gap-3 mb-4 ${store.flip ? 'flex-row-reverse' : ''}`}>
                <MapPin size={16} className="text-primary flex-shrink-0 mt-0.5" strokeWidth={1.8} />
                <p className="font-body text-neutral-600 text-[0.9rem] leading-[1.7] whitespace-pre-line">
                  {store.address}
                </p>
              </div>

              {/* Hours */}
              <div className={`flex gap-3 mb-8 ${store.flip ? 'flex-row-reverse' : ''}`}>
                <Clock size={16} className="text-primary flex-shrink-0 mt-0.5" strokeWidth={1.8} />
                <p className="font-body text-neutral-600 text-[0.9rem] leading-[1.7] whitespace-pre-line">
                  {store.hours}
                </p>
              </div>

              {/* CTA */}
              <a
                href="#map"
                className={`inline-flex items-center gap-2 font-label font-semibold
                  text-[11px] tracking-[0.2em] uppercase text-secondary hover:text-secondary-700
                  transition-colors duration-200 group ${store.flip ? 'flex-row-reverse' : ''}`}
              >
                Explore Location
                <ArrowRight
                  size={14}
                  strokeWidth={2}
                  className={`transition-transform duration-200 ${store.flip ? 'group-hover:-translate-x-1 rotate-180' : 'group-hover:translate-x-1'}`}
                />
              </a>
            </div>
          </div>
        ))}

      </div>
    </section>
  )
}
