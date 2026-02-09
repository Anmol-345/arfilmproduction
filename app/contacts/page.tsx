'use client'

import { Header } from '@/components/site/header'
import { Footer } from '@/components/site/footer'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'

export default function ContactPage() {
  const whatsappNumber = '+919315984655'
  const whatsappMessage = "Hi! I'm interested in learning more about your event production services."
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9315984655',
      href: 'tel:+919315984655',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'Aremotions005@gmail.com',
      href: 'mailto:Aremotions005@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India',
      href: '#',
    },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                Get in <span className="text-primary">Touch</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty">
                Ready to make your event unforgettable? Reach out to us and let's discuss your vision for the perfect celebration.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="px-4 py-16 md:py-24 bg-muted/30">
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{info.label}</h3>
                    {info.label === 'Location' ? (
                      <p className="text-muted-foreground">{info.value}</p>
                    ) : (
                      <a
                        href={info.href}
                        className="text-primary hover:underline transition-colors"
                      >
                        {info.value}
                      </a>
                    )}
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* WhatsApp CTA Section */}
        <section className="px-4 py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                Quick Chat on WhatsApp
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Have questions? Start a quick conversation with us on WhatsApp and get instant responses.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20BA58] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </motion.div>
          </div>
        </section>


      </main>
      <Footer />
    </>
  )
}
