"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { events } from "@/lib/events"

export function Header() {
  const pathname = usePathname()
  const { scrollY } = useScroll()
  const bg = useTransform(scrollY, [0, 80], ["rgba(255,255,255,0)", "rgba(255,255,255,0.8)"])
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <motion.header
      style={{ backgroundColor: bg, backdropFilter: "saturate(140%) blur(8px)" }}
      className="sticky top-0 z-50 border-b border-border"
      aria-label="Site header"
    >
      <div className="mx-auto max-w-6xl px-4">
        <nav className="flex h-14 items-center justify-between">
          <Link href="/" className="font-serif text-xl tracking-tight">
            <span className="sr-only">arfilmproduction</span>
            <span aria-hidden>arfilmproduction</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-6 text-sm">
            <li>
              <Link
                href="/"
                className={cn(
                  "transition-colors hover:text-primary",
                  pathname === "/" ? "text-primary" : "text-foreground",
                )}
              >
                Work
              </Link>
            </li>

            <li className="relative group">
              <button className="flex items-center gap-1 transition-colors hover:text-primary text-foreground">
                Gallery
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                {events.map((event) => (
                  <Link
                    key={event.slug}
                    href={`/gallery/${event.slug}`}
                    className="block px-4 py-2 text-sm hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {event.name}
                  </Link>
                ))}
              </div>
            </li>

            <li>
              <Link
                href="/about"
                className={cn(
                  "transition-colors hover:text-primary",
                  pathname === "/about" ? "text-primary" : "text-foreground",
                )}
              >
                About
              </Link>
            </li>
                        <li>
              <Link
                href="/testimonials"
                className={cn(
                  "transition-colors hover:text-primary",
                  pathname === "/testimonials" ? "text-primary" : "text-foreground",
                )}
              >
                Testimonials
              </Link>
            </li>
                        <li>
              <Link
                href="/contacts"
                className={cn(
                  "transition-colors hover:text-primary",
                  pathname === "/contacts" ? "text-primary" : "text-foreground",
                )}
              >
                Contacts
              </Link>
            </li>
          </ul>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-primary/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden pb-4 border-t border-border"
          >
            <ul className="flex flex-col gap-2 text-sm py-4">
              <li>
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "block px-4 py-2 rounded-lg transition-colors hover:bg-primary/10",
                    pathname === "/" ? "text-primary bg-primary/5" : "text-foreground",
                  )}
                >
                  Work
                </Link>
              </li>

              <li>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-full text-left px-4 py-2 rounded-lg flex items-center justify-between hover:bg-primary/10 transition-colors"
                >
                  Gallery
                  <ChevronDown className={cn("w-4 h-4 transition-transform", dropdownOpen && "rotate-180")} />
                </button>
                {dropdownOpen && (
                  <div className="pl-4 space-y-1 mt-1">
                    {events.map((event) => (
                      <Link
                        key={event.slug}
                        href={`/gallery/${event.slug}`}
                        onClick={() => {
                          setMobileMenuOpen(false)
                          setDropdownOpen(false)
                        }}
                        className="block px-4 py-2 text-sm hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
                      >
                        {event.name}
                      </Link>
                    ))}
                  </div>
                )}
              </li>

              <li>
                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "block px-4 py-2 rounded-lg transition-colors hover:bg-primary/10",
                    pathname === "/about" ? "text-primary bg-primary/5" : "text-foreground",
                  )}
                >
                  About
                </Link>
              </li>
                                      <li>
              <Link
                href="/testimonials"
                className={cn(
                  "block px-4 py-2 rounded-lg transition-colors hover:bg-primary/10",
                  pathname === "/testimonials" ? "text-primary" : "text-foreground",
                )}
              >
                Testimonials
              </Link>
            </li>
                        <li>
              <Link
                href="/contacts"
                className={cn(
                  "block px-4 py-2 rounded-lg transition-colors hover:bg-primary/10",
                  pathname === "/contacts" ? "text-primary" : "text-foreground",
                )}
              >
                Contacts
              </Link>
            </li>
            </ul>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}
