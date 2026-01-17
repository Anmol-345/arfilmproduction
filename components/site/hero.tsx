"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

export function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, -40])

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-20 md:pt-28">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="font-serif text-balance text-4xl leading-tight md:text-6xl"
            >
              Cinematic Events, Timeless Stories.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="mt-4 max-w-prose text-pretty text-base leading-relaxed md:text-lg"
            >
              We Craft Elegant Wedding And Event Films With A Documentary Heart And Editorial Polish.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-6 flex items-center gap-3"
            >
              <a
                href="#work"
                className="inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90"
              >
                View selected work
              </a>
              <a
                href="/about"
                className="inline-flex items-center rounded-full border border-border px-5 py-2 text-sm font-medium hover:border-primary/50 hover:text-primary"
              >
                About the studio
              </a>
            </motion.div>
          </div>

          <motion.div
            style={{ y }}
            className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-border"
          >
            <Image
              src="/media/hero-1.jpg"
              alt="Elegant event vignette"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 768px) 640px, 100vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
