import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"
import Image from "next/image"


export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-16 md:py-24">
        <h1 className="font-serif text-balance text-4xl md:text-5xl">About arfilmproduction</h1>
        <p className="mt-6 leading-relaxed">
          We are an event and wedding film studio capturing the soul of your celebration with a cinematic eye. Our
          approach blends documentary authenticity with art‑direction, ensuring your story feels as refined as it is
          real.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border p-5">
            <h2 className="font-serif text-xl">Services</h2>
            <ul className="mt-2 list-disc pl-5 text-sm leading-6">
              <li>Event management and decoration</li>
              <li>Modeling shows</li>
              <li>Training programes</li>
              <li>Photo video shoots</li>
              <li>Portfolio shoots</li>
              <li>Webseries shoot</li>
              <li>Wedding and Pre-wedding shoots</li>
              <li>Maternity and Birthday shoots</li>
              <li>E-commerce shoots</li>
              <li>Corporate shoots</li>
            </ul>
          </div>
          <div className="rounded-lg border border-border p-5">
            <h2 className="font-serif text-xl">Contact</h2>
            <p className="mt-2 text-sm">
              For bookings and inquiries, email{" "}
              <a className="underline hover:text-primary" href="mailto:Aremotions005@gmail.com">
                Aremotions005@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
        {/* Founder Section */}
        <section className="mt-16 md:mt-24 border-t border-border pt-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">Meet Our Founder</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <Image
                src="/media/founder.jpg"
                alt="Founder of arfilmproduction"
                width={400}
                height={500}
                className="rounded-lg object-cover w-full"
              />
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-serif text-2xl font-bold text-primary">Tariq Anwar</h3>
                <p className="text-muted-foreground">Business development manager</p>
              </div>
              <p className="leading-relaxed">
A driven business leader with over eight years of experience in the wedding, branding, advertising, décor, and event management industries. Founded AR Film Production, now one of Delhi’s fastest-growing production houses, securing over 300 high-ticket client projects across weddings, brand shoots, event management, and commercial advertising.
              </p>
              <p className="leading-relaxed">
Built AR Film Production into a premier brand in Delhi, transforming it from an initial concept into a recognized industry name. Successfully delivered projects for over 300 clients across weddings, fashion, and brand campaigns.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
