import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional photography services tailored to your needs. From portraits to events, I provide high-quality
            photography with a personal touch.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/portrateSerise.jpeg?height=1000&width=800"
                alt="Portrait photography"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Portrait Photography</h2>
              <p className="text-gray-600 mb-6">
                Capture your personality and essence with professional portrait photography. Whether you need headshots
                for your business, family portraits, or personal branding images, I create photographs that showcase
                your authentic self.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Individual and group portraits</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Professional headshots and corporate portraits</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Family and generational portraits</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Personal branding photography</span>
                </li>
              </ul>
              <Button asChild>
                <Link href="/contact">Book a Session</Link>
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16 md:flex-row-reverse">
            <div className="order-1 md:order-2">
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/weddingCollection.jpeg?height=1000&width=800"
                  alt="Wedding photography"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6">Wedding Photography</h2>
              <p className="text-gray-600 mb-6">
                Your wedding day is one of the most important days of your life. I capture the emotions, details, and
                moments that make your celebration unique, creating a visual story that you'll treasure for years to
                come.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Full-day wedding coverage</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Engagement sessions</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Bridal portraits</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Custom wedding albums</span>
                </li>
              </ul>
              <Button asChild>
                <Link href="/contact">Book a Consultation</Link>
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/product.jpeg?height=1000&width=800"
                alt="Commercial photography"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Commercial Photography</h2>
              <p className="text-gray-600 mb-6">
                Elevate your brand with professional commercial photography. From product photography to corporate
                events, I create images that showcase your business in the best light and help you connect with your
                audience.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Product photography</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Corporate events and conferences</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Architectural and interior photography</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Lifestyle and branding photography</span>
                </li>
              </ul>
              <Button asChild>
                <Link href="/contact">Request a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing Packages</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Transparent pricing options designed to meet different needs and budgets
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Basic</CardTitle>
                <CardDescription>Perfect for individuals and small projects</CardDescription>
                <div className="mt-4 text-4xl font-bold">$299</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>1-hour photo session</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>10 digital images</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Basic retouching</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Online gallery</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="/contact">Book Now</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-primary">
              <CardHeader>
                <div className="py-1 px-3 bg-primary text-white text-sm rounded-full w-fit mb-4">Most Popular</div>
                <CardTitle>Premium</CardTitle>
                <CardDescription>Ideal for couples and families</CardDescription>
                <div className="mt-4 text-4xl font-bold">$599</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>2-hour photo session</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>25 digital images</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Advanced retouching</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Online gallery</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>One 8x10 print</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="/contact">Book Now</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Professional</CardTitle>
                <CardDescription>Comprehensive package for special events</CardDescription>
                <div className="mt-4 text-4xl font-bold">$999</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>4-hour photo session</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>50 digital images</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Premium retouching</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Online gallery</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Custom photo album</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Two 8x10 prints</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="/contact">Book Now</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Need a custom package? Contact me for a personalized quote tailored to your specific requirements.
            </p>
            <Button variant="outline" asChild>
              <Link href="/contact">Request Custom Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Booking Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Simple steps to book your photography session</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Initial Consultation</h3>
              <p className="text-gray-600">
                Contact me to discuss your photography needs and vision. We'll determine the best package for you.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Booking & Planning</h3>
              <p className="text-gray-600">
                Secure your date with a deposit and sign the contract. We'll plan the details of your session.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Photo Session</h3>
              <p className="text-gray-600">
                Enjoy your photography session! I'll guide you through the process to capture the best images.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Delivery</h3>
              <p className="text-gray-600">
                Receive your professionally edited images through an online gallery. Select prints and products if
                desired.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to book your session?</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Contact me today to discuss your photography needs and secure your date.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Book Now</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

