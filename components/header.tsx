"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-5 left-10 right-10 z-50 rounded-xl transition-all duration-300",
        isScrolled ? "bg-white/45 backdrop-blur-sm shadow-sm" : "bg-transparent border-radius-10",
      )}
    >
      <div className="container mx-auto px-4 bg-white/35 rounded-xl">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className={cn(
              "font-display text-2xl font-bold transition-colors",
              isScrolled ? "text-gray-900" : "text-black",
            )}
          >
            RJ SHOOT
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "font-medium transition-colors hover:text-primary",
                  isScrolled ? "text-gray-700" : "text-black",
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild>
              <Link href="/contact">Contact</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={cn("md:hidden p-2 rounded-md", isScrolled ? "text-gray-900" : "text-white")}
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 md:hidden">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-20">
              <Link href="/" className="font-display text-2xl font-bold text-white">
                RJ SHOOT
              </Link>
              <button className="p-2 rounded-md text-gray-900" onClick={() => setIsMenuOpen(false)}>
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex flex-col space-y-6 py-8">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-xl font-medium text-gray-900 hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="w-full mt-4">
                <Link href="/contact">Contact</Link>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

const navItems = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Shop", href: "/shop" },
]

