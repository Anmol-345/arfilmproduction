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
      <main className="flex flex-col min-h-[calc(100vh-80px)]">
        {/* Full Page Content */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
          <div className="w-full max-w-4xl">
            {/* Hero Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8"
            >
              <h1 className="font-serif text-3xl md:text-4xl font-bold mb-3 text-balance">
                Get in <span className="text-primary">Touch</span>
              </h1>
              <p className="text-sm md:text-base text-muted-foreground text-pretty">
                Ready to make your event unforgettable? Reach out to us today.
              </p>
            </motion.div>

            {/* Contact Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex justify-center mb-2">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-sm mb-1">{info.label}</h3>
                    {info.label === 'Location' ? (
                      <p className="text-xs text-muted-foreground">{info.value}</p>
                    ) : (
                      <a
                        href={info.href}
                        className="text-primary hover:underline transition-colors text-xs"
                      >
                        {info.value}
                      </a>
                    )}
                  </motion.div>
                )
              })}
            </div>

            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-3">
                Chat on WhatsApp
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                Have questions? Start a quick conversation with us.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA58] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </a>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}