"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { events } from "@/lib/events"
import Link from "next/link"

export function EventsGallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="bg-background py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-foreground text-center text-balance">Our Work</h2>

          {/* 3x3 Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Link href={`/gallery/${event.slug}`}>
                  <div
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
                  >
                    <Image
                      src={event.images[0] || "/placeholder.svg"}
                      alt={event.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div
                      className={`absolute inset-0 transition-colors duration-300 hidden md:block ${hoveredIndex === index ? "bg-black/40" : "bg-black/0"}`}
                    />
                    <div className="absolute inset-0 flex md:hidden items-center justify-center pointer-events-none">
                      <h3 className="text-4xl md:text-3xl font-serif text-white text-center px-4 text-balance font-bold">
                        {event.name}
                      </h3>
                    </div>
                    <motion.div
                      animate={hoveredIndex === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 hidden md:flex items-center justify-center pointer-events-none"
                    >
                      <h3 className="text-xl md:text-2xl group-hover:text-3xl md:group-hover:text-5xl font-serif text-white text-center px-4 text-balance font-bold transition-all duration-300">
                        {event.name}
                      </h3>
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
