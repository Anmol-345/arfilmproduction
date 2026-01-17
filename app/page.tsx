import { Header } from "@/components/site/header"
import { Hero } from "@/components/site/hero"
import { EventsGallery } from "@/components/site/events-gallery"
import { Footer } from "@/components/site/footer"

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <EventsGallery />
      <Footer />
    </main>
  )
}
