import Link from "next/link"
import { Instagram, Facebook, Twitter, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-4">RJ SHOOT</h3>
            <p className="text-gray-400 mb-6">
              Professional photography services capturing life's most precious moments with artistic vision and
              technical excellence.
            </p>
            <div className="flex space-x-4">
              <Link href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://facebook.com" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2" />
                <a href="mailto:contact@lensphotography.com" className="hover:text-white transition-colors">
                  rajaphotography@gmail.com
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2" />
                <a href="tel:+1234567890" className="hover:text-white transition-colors">
                  +91 9608795131
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to receive updates on new projects and photography tips.</p>
            <form className="space-y-2">
              <Input type="email" placeholder="Your email address" className="bg-gray-800 border-gray-700 text-white" />
              <Button type="submit" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} RJ SHOOT Photography. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Shop", href: "/shop" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
]

