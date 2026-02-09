'use client'

import { Header } from '@/components/site/header'
import { Footer } from '@/components/site/footer'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

const stats = [
  { label: 'Events Completed', value: 450, suffix: '+' },
  { label: 'Satisfied Customers', value: 500, suffix: '+' },
  { label: 'Years of Experience', value: 8, suffix: '+' },
]

function CountingStatCard({ stat, index }: { stat: (typeof stats)[0]; index: number }) {
  const [displayValue, setDisplayValue] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasStarted = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true
          let currentValue = 0
          const increment = Math.ceil(stat.value / 50)
          const interval = setInterval(() => {
            currentValue += increment
            if (currentValue >= stat.value) {
              setDisplayValue(stat.value)
              clearInterval(interval)
            } else {
              setDisplayValue(currentValue)
            }
          }, 20)
          return () => clearInterval(interval)
        }
      },
      { threshold: 0.3 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [stat.value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="text-5xl md:text-6xl font-serif font-bold text-primary mb-3">
        {displayValue}
        {stat.suffix}
      </div>
      <p className="text-lg text-muted-foreground">{stat.label}</p>
    </motion.div>
  )
}

const testimonials = [
  {
    name: 'Priya & Arjun',
    event: 'Wedding',
    content:
      "arfilmproduction captured our wedding day with such elegance and emotion. Every moment felt like a scene from a movie. The team was professional, creative, and made us feel so comfortable throughout the entire process.",
    rating: 5,
  },
  {
    name: 'Rajesh Sharma',
    event: 'Corporate Event',
    content:
      'We hired them for our company summit and they delivered exceptional results. The cinematography was top-notch and they understood our brand vision perfectly.',
    rating: 5,
  },
  {
    name: 'Neha Kapoor',
    event: 'Engagement Party',
    content:
      "The highlight reel from our engagement party brought tears to our parents' eyes. The emotions, the timing, the music—everything was perfect. Highly recommended!",
    rating: 5,
  },
  {
    name: 'Amit & Deepika',
    event: 'Wedding Reception',
    content:
      'From the mehendi to the reception, every event was documented beautifully. We love rewatching our videos; they feel timeless and cinematic.',
    rating: 5,
  },
  {
    name: 'Vivek Malhotra',
    event: 'Festival Event',
    content:
      'They captured the vibrant energy and joy of our family festival gathering. Their attention to detail and storytelling is unmatched in the industry.',
    rating: 5,
  },
  {
    name: 'Anjali Desai',
    event: 'Anniversary Celebration',
    content:
      'Our 25th anniversary celebration felt special because of how beautifully arfilmproduction captured our love story. The production quality is absolutely premium.',
    rating: 5,
  },
  {
    name: 'Rohit Gupta',
    event: 'Birthday Bash',
    content:
      'A small surprise birthday party turned into an elaborate cinematic experience thanks to their creative direction. My family was blown away!',
    rating: 5,
  },
  {
    name: 'Shalini & Karan',
    event: 'Wedding',
    content:
      'Best decision we made was choosing arfilmproduction. The team delivered a 30-minute highlight that tells our complete love story beautifully.',
    rating: 5,
  },
]

export default function TestimonialsPage() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="mx-auto max-w-4xl w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight mb-6">
              Voices of <span className="text-primary">Our Clients</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Real stories from real couples and clients who trusted us to capture their most precious moments
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 py-16 md:py-24 bg-muted/30">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <CountingStatCard key={stat.label} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Read the heartfelt reviews from the couples and clients we've had the honor to work with
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={`${testimonial.name}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index % 2) * 0.2 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-primary text-primary"
                      aria-label="star"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-foreground mb-6 leading-relaxed">{testimonial.content}</p>

                {/* Author Info */}
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-primary font-medium">{testimonial.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 md:py-24 bg-foreground text-background">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight mb-6">
              Ready to Create Your Story?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who've trusted arfilmproduction to capture their most
              important moments
            </p>
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
              <Link href = "/contacts" >Get in Touch</Link>
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
