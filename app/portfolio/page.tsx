import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Portfolio</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore my collection of photography work across various genres and styles. Each project tells a unique
            story captured through my lens.
          </p>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid grid-cols-2 md:grid-cols-6 gap-2">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="portrait">Portrait</TabsTrigger>
                <TabsTrigger value="wedding">Wedding</TabsTrigger>
                <TabsTrigger value="landscape">Landscape</TabsTrigger>
                <TabsTrigger value="commercial">Commercial</TabsTrigger>
                <TabsTrigger value="event">Event</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioItems.map((item, index) => (
                  <PortfolioItem key={index} item={item} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="portrait" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioItems
                  .filter((item) => item.category === "Portrait")
                  .map((item, index) => (
                    <PortfolioItem key={index} item={item} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="wedding" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioItems
                  .filter((item) => item.category === "Wedding")
                  .map((item, index) => (
                    <PortfolioItem key={index} item={item} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="landscape" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioItems
                  .filter((item) => item.category === "Landscape")
                  .map((item, index) => (
                    <PortfolioItem key={index} item={item} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="commercial" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioItems
                  .filter((item) => item.category === "Commercial")
                  .map((item, index) => (
                    <PortfolioItem key={index} item={item} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="event" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioItems
                  .filter((item) => item.category === "Event")
                  .map((item, index) => (
                    <PortfolioItem key={index} item={item} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's create something amazing together</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Interested in working with me? Let's discuss your project and bring your vision to life.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

function PortfolioItem({ item }: { item: PortfolioItemType }) {
  return (
    <Link href={`/portfolio/${item.slug}`} className="group">
      <div className="relative overflow-hidden rounded-lg">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.title}
          width={600}
          height={800}
          className="object-cover w-full aspect-[3/4] transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-6">
            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            <p className="text-white/80 mt-2">{item.category}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

// Sample data
type PortfolioItemType = {
  title: string
  category: string
  image: string
  slug: string
}

const portfolioItems: PortfolioItemType[] = [
  {
    title: "Urban Landscapes",
    category: "Landscape",
    image: "/urbanLandscap.jpeg?height=800&width=600",
    slug: "urban-landscapes",
  },
  {
    title: "Wedding Collection",
    category: "Wedding",
    image: "/weddingCollection.jpeg?height=800&width=600",
    slug: "wedding-collection",
  },
  {
    title: "Portrait Series",
    category: "Portrait",
    image: "/portrateSerise.jpeg?height=800&width=600",
    slug: "portrait-series",
  },
  {
    title: "Nature Escapes",
    category: "Landscape",
    image: "/Nature.jpeg?height=800&width=600",
    slug: "nature-escapes",
  },
  {
    title: "Fashion Editorial",
    category: "Commercial",
    image: "/fashion.jpeg?height=800&width=600",
    slug: "fashion-editorial",
  },
  {
    title: "Corporate Events",
    category: "Event",
    image: "/corporate.jpeg?height=800&width=600",
    slug: "corporate-events",
  },
  {
    title: "Product Photography",
    category: "Commercial",
    image: "/product.jpeg?height=800&width=600",
    slug: "product-photography",
  },
  {
    title: "Family Portraits",
    category: "Portrait",
    image: "/family.jpeg?height=800&width=600",
    slug: "family-portraits",
  },
  {
    title: "Engagement Session",
    category: "Wedding",
    image: "/engagement.jpeg?height=800&width=600",
    slug: "engagement-session",
  },
]

