import Link from "next/link"
import { Mail, Phone, MapPin, Clock, Instagram, Facebook, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a question or want to book a session? I'd love to hear from you. Fill out the form below or use the
            contact information provided.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" placeholder="your Name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" placeholder="Last Name" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="yourmail@example.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone (optional)</Label>
                  <Input id="phone" type="tel" placeholder="+91 (234) 567-890" />
                </div>

                <div className="space-y-2">
                  <Label>Inquiry Type</Label>
                  <RadioGroup defaultValue="session" className="flex flex-col space-y-1">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="session" id="session" />
                      <Label htmlFor="session" className="cursor-pointer">
                        Book a Session
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="pricing" id="pricing" />
                      <Label htmlFor="pricing" className="cursor-pointer">
                        Pricing Information
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="collaboration" id="collaboration" />
                      <Label htmlFor="collaboration" className="cursor-pointer">
                        Collaboration
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="other" />
                      <Label htmlFor="other" className="cursor-pointer">
                        Other
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Interested In</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="portrait">Portrait Photography</SelectItem>
                      <SelectItem value="wedding">Wedding Photography</SelectItem>
                      <SelectItem value="commercial">Commercial Photography</SelectItem>
                      <SelectItem value="event">Event Coverage</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell me about your project or inquiry..." rows={5} required />
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="bg-gray-50 rounded-lg p-8 mb-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-primary mr-4 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a
                        href="mailto:contact@lensphotography.com"
                        className="text-gray-600 hover:text-primary transition-colors"
                      >
                        rajaphotography@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-primary mr-4 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <a href="tel:+1234567890" className="text-gray-600 hover:text-primary transition-colors">
                        +91 9608795131
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-primary mr-4 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">Studio Address</h3>
                      <address className="text-gray-600 not-italic">
                        123 Photography Lane
                        <br />
                        Naugachia, Bhagalpur 853204
                        <br />
                        Bihar India
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-primary mr-4 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9am - 6pm
                        <br />
                        Saturday: 10am - 4pm
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4">Connect on Social Media</h3>
              <div className="flex space-x-4">
                <Link href="https://instagram.com" className="text-gray-600 hover:text-primary transition-colors">
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link href="https://facebook.com" className="text-gray-600 hover:text-primary transition-colors">
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link href="https://twitter.com" className="text-gray-600 hover:text-primary transition-colors">
                  <Twitter className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Visit the Studio</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Located in the heart of the city, my studio is easily accessible by public transportation.
            </p>
          </div>

          <div className="bg-gray-300 h-96 rounded-lg overflow-hidden">
            {/* This would be replaced with an actual map component */}
            <div className="h-full w-full flex items-center justify-center">
              <p className="text-gray-600">Interactive Map Would Be Displayed Here</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Common questions about booking and sessions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {contactFaqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to capture your special moments?</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Let's work together to create stunning photographs that you'll cherish for a lifetime.
          </p>
          <Button size="lg" variant="secondary">
            Book a Session Now
          </Button>
        </div>
      </section>
    </div>
  )
}

// Sample data
const contactFaqs = [
  {
    question: "How far in advance should I book a session?",
    answer:
      "For portrait sessions, 2-3 weeks in advance is recommended. For weddings and events, booking 6-12 months ahead is advised to secure your date, especially during peak seasons.",
  },
  {
    question: "What should I wear for my portrait session?",
    answer:
      "Choose clothing that makes you feel comfortable and confident. Solid colors work well, and it's best to avoid busy patterns or logos. I'll provide a detailed style guide after booking.",
  },
  {
    question: "How long until I receive my photos?",
    answer:
      "Portrait sessions are typically delivered within 2 weeks. Weddings and larger events take 4-6 weeks. You'll receive a sneak peek of select images within a few days after your session.",
  },
  {
    question: "Do you travel for photo shoots?",
    answer:
      "Yes, I'm available for travel both domestically and internationally. Travel fees may apply depending on the location. Please inquire for a custom quote.",
  },
]

