import HeroCarousel from '../components/sections/HeroCarousel'
import Heritage from '../components/sections/Heritage'
import Collections from '../components/sections/Collections'
import FeaturedCollections from '../components/sections/FeaturedCollections'
import BespokeExperience from '../components/sections/BespokeExperience'

export default function HomePage() {
  return (
    <main>
      <HeroCarousel />
      <Heritage />
      <Collections />
      <FeaturedCollections />
      <BespokeExperience />
    </main>
  )
}
