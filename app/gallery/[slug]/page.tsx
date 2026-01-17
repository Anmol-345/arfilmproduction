"use client"

import { useState, useRef } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { events } from "@/lib/events"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function GalleryPage() {
  const params = useParams()
  const slug = params.slug as string
  const event = events.find((e) => e.slug === slug)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [displayCount, setDisplayCount] = useState(16)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  if (!event) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif mb-4">Gallery not found</h1>
          <Link href="/" className="text-primary hover:underline">
            Back to home
          </Link>
        </div>
      </div>
    )
  }

  const displayedImages = event.images.slice(0, displayCount)
  const hasMore = displayCount < event.images.length

  return (
    <main className="min-h-screen bg-background pt-20 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back
          </Link>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground">{event.name}</h1>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {displayedImages.map((img, imgIndex) => (
            <motion.button
              key={imgIndex}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedImage(img)}
              className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
            >
              <Image
                src={img || "/placeholder.svg"}
                alt={`${event.name} photo ${imgIndex + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </motion.button>
          ))}
        </motion.div>

        {hasMore && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex justify-center mt-12"
          >
            <button
              onClick={() => setDisplayCount((prev) => prev + 16)}
              className="px-8 py-3 bg-primary text-background font-serif rounded-lg hover:bg-primary/90 transition-colors duration-300"
            >
              Load More
            </button>
          </motion.div>
        )}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden p-0 bg-background border-foreground/20">
          {selectedImage && (
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt="Selected work"
                width={1200}
                height={800}
                className="w-full h-full object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </main>
  )
}
