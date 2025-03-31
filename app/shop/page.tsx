import Image from "next/image"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ShopPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Photography Shop</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore and purchase prints, presets, and digital products to enhance your photography journey.
          </p>
        </div>
      </section>

      {/* Shop Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="prints" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid grid-cols-3 w-full max-w-md">
                <TabsTrigger value="prints">Prints</TabsTrigger>
                <TabsTrigger value="presets">Presets</TabsTrigger>
                <TabsTrigger value="ebooks">E-Books</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="prints" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {prints.map((product, index) => (
                  <ProductCard key={index} product={product} type="print" />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="presets" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {presets.map((product, index) => (
                  <ProductCard key={index} product={product} type="preset" />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="ebooks" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {ebooks.map((product, index) => (
                  <ProductCard key={index} product={product} type="ebook" />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Collection</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Limited edition prints from my award-winning landscape series
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=400"
                  alt="Featured collection"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden mt-8">
                <Image
                  src="/placeholder.svg?height=600&width=400"
                  alt="Featured collection"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=400"
                  alt="Featured collection"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden mt-8">
                <Image
                  src="/placeholder.svg?height=600&width=400"
                  alt="Featured collection"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Mountain Majesty Collection</h3>
              <p className="text-gray-600 mb-6">
                This exclusive collection features breathtaking mountain landscapes captured during golden hour. Each
                print is carefully produced on museum-quality paper and available in limited quantities.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  <span>Limited edition of 25 prints per photograph</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  <span>Archival-quality giclée prints</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  <span>Signed and numbered by the photographer</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  <span>Certificate of authenticity included</span>
                </li>
              </ul>
              <Button asChild>
                <Link href="/shop/collections/mountain-majesty">View Collection</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Customer Reviews</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">What customers are saying about their purchases</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {shopTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.product}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Common questions about ordering, shipping, and products</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to enhance your photography?</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Browse our collection of prints, presets, and educational resources to take your photography to the next
            level.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/shop">Shop Now</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

function ProductCard({ product, type }: { product: any; type: string }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-64">
        <Image src={product.image || "/placeholder.svg"} alt={product.title} fill className="object-cover" />
      </div>
      <CardHeader>
        <CardTitle>{product.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="text-2xl font-bold">${product.price}</div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" asChild>
          <Link href={`/shop/${type}/${product.slug}`}>
            <ShoppingCart className="w-4 h-4 mr-2" /> Add to Cart
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

// Sample data
const prints = [
  {
    title: "Mountain Sunrise",
    description: "Limited edition print of a breathtaking mountain sunrise.",
    price: 149,
    image: "/placeholder.svg?height=600&width=800",
    slug: "mountain-sunrise",
  },
  {
    title: "Ocean Waves",
    description: "Stunning capture of ocean waves at sunset.",
    price: 129,
    image: "/placeholder.svg?height=600&width=800",
    slug: "ocean-waves",
  },
  {
    title: "Forest Mist",
    description: "Ethereal forest scene with morning mist.",
    price: 139,
    image: "/placeholder.svg?height=600&width=800",
    slug: "forest-mist",
  },
  {
    title: "Desert Dunes",
    description: "Minimalist desert landscape with golden dunes.",
    price: 159,
    image: "/placeholder.svg?height=600&width=800",
    slug: "desert-dunes",
  },
  {
    title: "Urban Night",
    description: "Vibrant cityscape captured at night.",
    price: 169,
    image: "/placeholder.svg?height=600&width=800",
    slug: "urban-night",
  },
  {
    title: "Autumn Colors",
    description: "Vivid autumn landscape with rich fall colors.",
    price: 149,
    image: "/placeholder.svg?height=600&width=800",
    slug: "autumn-colors",
  },
]

const presets = [
  {
    title: "Portrait Collection",
    description: "10 professional Lightroom presets for portrait photography.",
    price: 49,
    image: "/placeholder.svg?height=600&width=800",
    slug: "portrait-collection",
  },
  {
    title: "Landscape Essentials",
    description: "8 Lightroom presets to enhance landscape photography.",
    price: 39,
    image: "/placeholder.svg?height=600&width=800",
    slug: "landscape-essentials",
  },
  {
    title: "Film Emulation",
    description: "12 presets that recreate classic film looks.",
    price: 59,
    image: "/placeholder.svg?height=600&width=800",
    slug: "film-emulation",
  },
]

const ebooks = [
  {
    title: "Mastering Natural Light",
    description: "Comprehensive guide to working with natural light in any condition.",
    price: 29,
    image: "/placeholder.svg?height=600&width=800",
    slug: "mastering-natural-light",
  },
  {
    title: "Advanced Composition",
    description: "Learn to create compelling compositions that tell a story.",
    price: 24,
    image: "/placeholder.svg?height=600&width=800",
    slug: "advanced-composition",
  },
  {
    title: "The Business of Photography",
    description: "Essential guide to building a successful photography business.",
    price: 39,
    image: "/placeholder.svg?height=600&width=800",
    slug: "business-of-photography",
  },
]

const shopTestimonials = [
  {
    name: "Michael Chen",
    quote:
      "The print quality is exceptional. The colors are vibrant and true to the digital preview. Couldn't be happier with my purchase.",
    avatar: "/placeholder.svg?height=100&width=100",
    product: "Mountain Sunrise Print",
  },
  {
    name: "Sarah Johnson",
    quote:
      "The portrait presets have saved me so much time in my workflow. They provide a perfect starting point that I can then fine-tune to my liking.",
    avatar: "/placeholder.svg?height=100&width=100",
    product: "Portrait Collection Presets",
  },
  {
    name: "David Rodriguez",
    quote:
      "The e-book on natural light photography has transformed how I approach outdoor shoots. The techniques are explained clearly with helpful examples.",
    avatar: "/placeholder.svg?height=100&width=100",
    product: "Mastering Natural Light E-Book",
  },
]

const faqs = [
  {
    question: "How are prints shipped and packaged?",
    answer:
      "Prints are carefully packaged in acid-free materials and shipped in sturdy tubes or flat packages depending on size. All prints are insured during shipping.",
  },
  {
    question: "What file formats are included with presets?",
    answer:
      "Presets are available for Adobe Lightroom Classic, Lightroom CC, and Lightroom Mobile. Files include .xmp and .lrtemplate formats with installation instructions.",
  },
  {
    question: "Can I get a custom print size?",
    answer:
      "Yes, custom print sizes are available upon request. Please contact us with your specific requirements for a quote.",
  },
  {
    question: "How do I download my digital products?",
    answer:
      "After purchase, you'll receive an email with download links for your digital products. Links remain active for 30 days, and products can be downloaded up to 5 times.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship prints worldwide. International shipping rates are calculated at checkout based on destination and package size.",
  },
  {
    question: "What is your return policy?",
    answer:
      "Physical products can be returned within 14 days if in original condition. Digital products cannot be returned due to their nature, but we offer support if you encounter any issues.",
  },
]

