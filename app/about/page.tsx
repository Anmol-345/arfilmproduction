import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"

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
      </main>
      <Footer />
    </>
  )
}
