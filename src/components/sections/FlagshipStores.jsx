import { ArrowRight, MapPin, Clock, Phone } from 'lucide-react'
import header2 from '../../assets/header2.png'
import header1 from '../../assets/header1.png'

const stores = [
  {
    id: 1,
    name: 'SNG Jewellers — Dilshad Garden',
    address: 'Shop No. 3 & 4, Vardhman Dilshad Plaza,\nLocal Shopping Complex, Opp. Mukherji School,\nPocket O Road, Block O, Dilshad Garden,\nDelhi – 110095',
    hours: 'Monday - Saturday: 10:00 - 20:00\nSunday: 11:00 - 19:00',
    phone: '+91 98102 26537',
    image: header2,
    flip: false,
  },
  {
    id: 2,
    name: 'Book a Private Viewing',
    address: 'Visit us at our flagship store in Dilshad Garden\nfor an exclusive one-on-one consultation\nwith our master craftsmen.',
    hours: 'By Appointment Only\nCall us to schedule your session',
    phone: '+91 98102 26537',
    image: header1,
    flip: true,
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
              <div className={`flex gap-3 mb-4 ${store.flip ? 'flex-row-reverse' : ''}`}>
                <Clock size={16} className="text-primary flex-shrink-0 mt-0.5" strokeWidth={1.8} />
                <p className="font-body text-neutral-600 text-[0.9rem] leading-[1.7] whitespace-pre-line">
                  {store.hours}
                </p>
              </div>

              {/* Phone */}
              <div className={`flex gap-3 mb-8 ${store.flip ? 'flex-row-reverse' : ''}`}>
                <Phone size={16} className="text-primary flex-shrink-0 mt-0.5" strokeWidth={1.8} />
                <a
                  href={`tel:${store.phone.replace(/\s/g, '')}`}
                  className="font-body text-neutral-600 hover:text-primary text-[0.9rem] leading-[1.7] transition-colors duration-200"
                >
                  {store.phone}
                </a>
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
