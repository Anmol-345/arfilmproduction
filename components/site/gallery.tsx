"use client"

import type React from "react"

import Image from "next/image"
import { motion } from "framer-motion"
import { useState, useCallback } from "react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"

const works = [
  { src: "/media/work-1.jpg", title: "Sangeet soirée" },
  { src: "/media/work-2.jpg", title: "The vows" },
  { src: "/media/work-3.jpg", title: "First dance" },
  { src: "/media/work-4.jpg", title: "Detail & decor" },
  { src: "/media/work-5.jpg", title: "Reception glow" },
  { src: "/media/work-6.jpg", title: "Haldi ceremony" },
  { src: "/media/work-7.jpg", title: "Baraat energy" },
  { src: "/media/work-8.jpg", title: "Family moments" },
]

export function Gallery() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<{ src: string; title: string } | null>(null)

  const handleOpen = useCallback((w: { src: string; title: string }) => {
    setActive(w)
    setOpen(true)
  }, [])

  const handleKey = useCallback(
    (e: React.KeyboardEvent, w: { src: string; title: string }) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault()
        handleOpen(w)
      }
    },
    [handleOpen],
  )

  return (
    <section id="work" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <div className="mb-6 flex items-end justify-between">
        <h2 className="font-serif text-2xl md:text-3xl">Selected work</h2>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {works.map((w, i) => (
          <motion.figure
            key={w.src}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2, once: true }}
            transition={{ delay: (i % 3) * 0.06, duration: 0.5 }}
            className="group relative overflow-hidden rounded-lg border border-border cursor-zoom-in"
            role="button"
            tabIndex={0}
            aria-label={`Open full image: ${w.title}`}
            onClick={() => handleOpen(w)}
            onKeyDown={(e) => handleKey(e, w)}
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={w.src || "/placeholder.svg"}
                alt={w.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
            </div>
            <figcaption className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-background/60 to-transparent p-3 text-sm opacity-0 transition-opacity group-hover:opacity-100">
              {w.title}
            </figcaption>
          </motion.figure>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="w-[92vw] sm:max-w-6xl max-h-[85vh] overflow-hidden border-border bg-background/95 p-2 sm:p-4">
          <DialogTitle className="sr-only">{active?.title ?? "Selected work image"}</DialogTitle>
          <div className="relative mx-auto h-[70vh] w-full max-w-5xl rounded-md overflow-hidden">
            {active ? (
              <Image
                src={active.src || "/placeholder.svg?height=800&width=1200&query=full%20image%20preview"}
                alt={active.title}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            ) : null}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
