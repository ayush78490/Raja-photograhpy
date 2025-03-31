import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

// This is a dynamic page that will display details for a specific portfolio item
export default function PortfolioDetailPage({ params }: { params: { slug: string } }) {
  // Find the portfolio item based on the slug
  const portfolioItem = portfolioItems.find((item) => item.slug === params.slug)

  // If no item is found, show a message
  if (!portfolioItem) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Portfolio Item Not Found</h1>
          <p className="text-gray-600 mb-6">The portfolio item you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/portfolio">Back to Portfolio</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <Link href="/portfolio" className="inline-flex items-center text-primary hover:text-primary/80 mb-4">
                <ChevronLeft className="h-4 w-4 mr-1" /> Back to Portfolio
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold font-display mb-2">{portfolioItem.title}</h1>
              <Badge variant="outline" className="font-medium">
                {portfolioItem.category}
              </Badge>
            </div>
            <div className="mt-4 md:mt-0">
              <Button asChild>
                <Link href="/contact">Book This Service</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Carousel */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {portfolioItem.gallery.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-[60vh] rounded-lg overflow-hidden">
                    <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>

          <div className="grid grid-cols-4 gap-4 mt-6 max-w-5xl mx-auto">
            {portfolioItem.gallery.slice(0, 4).map((image, index) => (
              <div key={index} className="relative h-24 rounded-md overflow-hidden cursor-pointer">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover hover:opacity-80 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold font-display mb-6">About This Service</h2>
              <div className="prose prose-lg max-w-none">
                <p>{portfolioItem.description}</p>
                <p>{portfolioItem.longDescription}</p>
              </div>

              <h3 className="text-xl font-bold mt-8 mb-4">What's Included</h3>
              <ul className="space-y-3">
                {portfolioItem.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold font-display mb-6">Client Testimonial</h2>
              <div className="bg-white rounded-lg p-8 shadow-sm border border-neutral-100">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{portfolioItem.testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={portfolioItem.testimonial.avatar || "/placeholder.svg"}
                      alt={portfolioItem.testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{portfolioItem.testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{portfolioItem.testimonial.title}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Pricing Options</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the package that best fits your needs for {portfolioItem.title.toLowerCase()}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {portfolioItem.pricing.map((price, index) => (
              <Card key={index} className={index === 1 ? "border-primary relative" : ""}>
                {index === 1 && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Badge className="bg-primary text-white">Most Popular</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-xl">{price.name}</CardTitle>
                  <div className="mt-4 text-3xl font-bold">${price.price}</div>
                  <p className="text-sm text-gray-500">{price.duration}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {price.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" variant={index === 1 ? "default" : "outline"} asChild>
                    <Link href="/contact">Book Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Related Work */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-display mb-4">Related Work</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Explore more projects similar to {portfolioItem.title}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {portfolioItems
              .filter((item) => item.category === portfolioItem.category && item.slug !== portfolioItem.slug)
              .slice(0, 3)
              .map((item, index) => (
                <Link key={index} href={`/portfolio/${item.slug}`} className="group">
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
              ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link href="/portfolio">View All Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Ready to book your {portfolioItem.category.toLowerCase()} session?
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Let's work together to create stunning photographs that capture your special moments.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

// Sample data for portfolio items with detailed information
const portfolioItems = [
  {
    title: "Wedding Photography",
    category: "Wedding",
    image: "/placeholder.svg?height=800&width=600",
    slug: "wedding-photography",
    description:
      "Capturing the magic and emotion of your special day with a blend of candid moments and artistic portraits.",
    longDescription:
      "My approach to wedding photography focuses on telling the complete story of your day, from the nervous anticipation of getting ready to the joyful celebration on the dance floor. I work unobtrusively to document genuine emotions and interactions, while also creating stunning portraits that you'll treasure for a lifetime.",
    features: [
      "Full-day coverage (up to 10 hours)",
      "Second photographer included",
      "Engagement session",
      "Online gallery with high-resolution images",
      "Custom wedding album options",
      "Pre-wedding consultation and planning",
      "Edited digital images delivered within 4-6 weeks",
    ],
    gallery: [
      { src: "/placeholder.svg?height=800&width=1200", alt: "Bride and groom at sunset" },
      { src: "/placeholder.svg?height=800&width=1200", alt: "Wedding ceremony" },
      { src: "/placeholder.svg?height=800&width=1200", alt: "First dance" },
      { src: "/placeholder.svg?height=800&width=1200", alt: "Wedding details" },
      { src: "/placeholder.svg?height=800&width=1200", alt: "Bridal party" },
      { src: "/placeholder.svg?height=800&width=1200", alt: "Wedding reception" },
    ],
    testimonial: {
      quote:
        "Working with this photographer was the best decision we made for our wedding. They captured every special moment and emotion perfectly, and the photos exceeded our expectations. We'll cherish these memories forever.",
      name: "Sarah & Michael Johnson",
      title: "Married June 2023",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    pricing: [
      {
        name: "Essential",
        price: 2499,
        duration: "Up to 8 hours",
        features: ["Single photographer", "Digital delivery of edited images", "Online gallery", "Print release"],
      },
      {
        name: "Premium",
        price: 3499,
        duration: "Up to 10 hours",
        features: [
          "Lead photographer + second shooter",
          "Engagement session included",
          "Digital delivery of edited images",
          "Online gallery",
          "Print release",
          "10x10 wedding album",
        ],
      },
      {
        name: "Luxury",
        price: 4999,
        duration: "Full weekend coverage",
        features: [
          "Lead photographer + second shooter",
          "Rehearsal dinner coverage",
          "Engagement session included",
          "Digital delivery of edited images",
          "Online gallery",
          "Print release",
          "12x12 premium wedding album",
          "Parent albums included",
        ],
      },
    ],
  },
  {
    title: "Corporate Events",
    category: "Event",
    image: "/placeholder.svg?height=800&width=600",
    slug: "corporate-events",
    description:
      "Professional event photography that captures the essence and key moments of your corporate gatherings.",
    longDescription:
      "From conferences and product launches to team-building events and galas, I provide comprehensive coverage that highlights the important moments and atmosphere of your corporate events. My discreet approach ensures I capture authentic interactions without disrupting the flow of your event.",
    features: [
      "Full event coverage",
      "Quick turnaround time",
      "Professional editing",
      "Online gallery for easy sharing",
      "Corporate branding integration",
      "High-resolution images for marketing use",
      "Option for on-site printing",
    ],
    gallery: [
      { src: "/placeholder.svg?height=800&width=1200", alt: "Conference keynote speaker" },
      { src: "/placeholder.svg?height=800&width=1200", alt: "Networking session" },
      { src: "/placeholder.svg?height=800&width=1200", alt: "Award ceremony" },
      { src: "/placeholder.svg?height=800&width=1200", alt: "Product launch" },
      { src: "/placeholder.svg?height=800&width=1200", alt: "Team building activity" },
      { src: "/placeholder.svg?height=800&width=1200", alt: "Corporate gala" },
    ],
    testimonial: {
      quote:
        "The photographer was incredibly professional and delivered exceptional photos of our annual conference. They captured the energy of the event perfectly, and the images have been invaluable for our marketing materials.",
      name: "Jennifer Smith",
      title: "Event Director, Tech Innovations Inc.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    pricing: [
      {
        name: "Half Day",
        price: 999,
        duration: "Up to 4 hours",
        features: [
          "Single photographer",
          "Digital delivery within 5 business days",
          "Online gallery",
          "Commercial usage rights",
        ],
      },
      {
        name: "Full Day",
        price: 1799,
        duration: "Up to 8 hours",
        features: [
          "Single photographer",
          "Digital delivery within 5 business days",
          "Online gallery",
          "Commercial usage rights",
          "Express editing for key images",
        ],
      },
      {
        name: "Multi-Day",
        price: 3499,
        duration: "Up to 3 days",
        features: [
          "Lead photographer + assistant",
          "Digital delivery within 5 business days",
          "Online gallery",
          "Commercial usage rights",
          "Express editing for key images",
          "On-site preview station",
          "Custom branding options",
        ],
      },
    ],
  },
  {
    title: "Portrait Sessions",
    category: "Portrait",
    image: "/placeholder.svg?height=800&width=600",
    slug: "portrait-sessions",
    description:
      "Personalized portrait photography that captures your authentic self in a relaxed and enjoyable environment.",
    longDescription:
      "My portrait sessions are designed to create a comfortable experience where your true personality can shine through. Whether for professional headshots, family portraits, or personal branding, I take the time to understand your vision and create images that reflect who you are.",
    features: [
      "Pre-session consultation",
      "Wardrobe and location guidance",
      "Relaxed shooting environment",
      "Professional retouching",
      "Online gallery for selection",
      "Digital files and print options",
      "Quick turnaround time",
    ],
    gallery: [
      { src: "/placeholder.svg?height=800&width=1200", alt: "Professional headshot" },
      { src: "/placeholder.svg?height=800&width=1200", alt: "Family portrait" },
      { src: "/placeholder.svg?height=800&width=1200", alt: "Personal branding" },
      { src: "/placeholder.svg?height=800&width=1200", alt: "Lifestyle portrait" },
      { src: "/placeholder.svg?height=800&width=1200", alt: "Environmental portrait" },
      { src: "/placeholder.svg?height=800&width=1200", alt: "Studio portrait" },
    ],
    testimonial: {
      quote:
        "I've never felt more comfortable during a photoshoot. The photographer made the experience enjoyable and the results were stunning. The photos truly captured my personality in a way I didn't think was possible.",
      name: "David Rodriguez",
      title: "Portrait Client",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    pricing: [
      {
        name: "Basic",
        price: 299,
        duration: "1 hour session",
        features: ["One location", "10 digital images", "Online gallery", "Basic retouching"],
      },
      {
        name: "Standard",
        price: 499,
        duration: "2 hour session",
        features: [
          "Up to two locations",
          "20 digital images",
          "Online gallery",
          "Advanced retouching",
          "One 8x10 print",
        ],
      },
      {
        name: "Premium",
        price: 799,
        duration: "3 hour session",
        features: [
          "Multiple locations",
          "All digital images",
          "Online gallery",
          "Premium retouching",
          "Three 8x10 prints",
          "Mobile app with your images",
        ],
      },
    ],
  },
  {
    title: "Fashion Photography",
    category: "Commercial",
    image: "/placeholder.svg?height=800&width=600",
    slug: "fashion-photography",
    description: "Creative fashion photography that showcases clothing, accessories, and style with artistic vision.",
    longDescription:
      "My fashion photography combines technical expertise with creative direction to highlight your products in their best light. Whether for lookbooks, campaigns, or editorial work, I create images that tell a story and engage your audience while staying true to your brand identity.",
    features: [
      "Creative concept development",
      "Professional styling consultation",
      "Studio or location shooting",
      "Model direction",
      "High-end retouching",
      "Commercial usage rights",
      "Quick turnaround for marketing needs",
    ],
    gallery: [
      { src: "/placeholder.svg?height=800&width=1200", alt: "Fashion editorial" },
      { src: "/placeholder.svg?height=800&width=1200", alt: "Lookbook" },
      { src: "/placeholder.svg?height=800&width=1200", alt: "Campaign shoot" },
      { src: "/placeholder.svg?height=800&width=1200", alt: "Accessory detail" },
      { src: "/placeholder.svg?height=800&width=1200", alt: "Street style" },
      { src: "/placeholder.svg?height=800&width=1200", alt: "Studio fashion" },
    ],
    testimonial: {
      quote:
        "The photographer brought our clothing line to life with their creative vision. The images perfectly captured the mood and style we wanted to convey, and they've significantly boosted our online engagement and sales.",
      name: "Emma Chen",
      title: "Creative Director, Style Collective",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    pricing: [
      {
        name: "Lookbook",
        price: 1499,
        duration: "Half-day shoot",
        features: [
          "Up to 10 looks",
          "Studio location",
          "Digital delivery",
          "Commercial usage rights",
          "Basic retouching",
        ],
      },
      {
        name: "Campaign",
        price: 2999,
        duration: "Full-day shoot",
        features: [
          "Up to 20 looks",
          "Studio or single location",
          "Digital delivery",
          "Commercial usage rights",
          "Advanced retouching",
          "Creative direction",
        ],
      },
      {
        name: "Editorial",
        price: 4999,
        duration: "Multi-day production",
        features: [
          "Concept development",
          "Multiple locations",
          "Digital delivery",
          "Commercial usage rights",
          "Premium retouching",
          "Full creative team",
          "Behind-the-scenes content",
        ],
      },
    ],
  },
  {
    title: "Landscape Photography",
    category: "Landscape",
    image: "/placeholder.svg?height=800&width=600",
    slug: "landscape-photography",
    description: "Breathtaking landscape photography that captures the beauty and majesty of natural environments.",
    longDescription:
      "My landscape photography is driven by a passion for the natural world and a desire to capture its ever-changing moods and moments. I specialize in creating immersive images that convey the feeling of being in these magnificent locations, from dramatic mountain vistas to serene coastal scenes.",
    features: [
      "Fine art quality prints",
      "Limited edition series",
      "Various print sizes available",
      "Museum-quality materials",
      "Signed and numbered prints",
      "Certificate of authenticity",
      "Custom framing options",
    ],
    gallery: [
      { src: "/placeholder.svg?height=800&width=1200", alt: "Mountain vista" },
      { src: "/placeholder.svg?height=800&width=1200", alt: "Coastal sunset" },
      { src: "/placeholder.svg?height=800&width=1200", alt: "Forest scene" },
      { src: "/placeholder.svg?height=800&width=1200", alt: "Desert landscape" },
      { src: "/placeholder.svg?height=800&width=1200", alt: "Waterfall long exposure" },
      { src: "/placeholder.svg?height=800&width=1200", alt: "Winter landscape" },
    ],
    testimonial: {
      quote:
        "The landscape prints I purchased are absolutely stunning. The attention to detail and quality is exceptional, and they've become the focal point of our living room. True works of art.",
      name: "Robert & Lisa Thompson",
      title: "Art Collectors",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    pricing: [
      {
        name: "Open Edition",
        price: 199,
        duration: "Standard print",
        features: ["Multiple sizes available", "Archival paper", "Signed by artist", "Ships within 7 days", "Unframed"],
      },
      {
        name: "Limited Edition",
        price: 499,
        duration: "Edition of 25",
        features: [
          "Multiple sizes available",
          "Museum-quality giclée print",
          "Signed and numbered",
          "Certificate of authenticity",
          "Ships within 14 days",
          "Framing available",
        ],
      },
      {
        name: "Collector's Edition",
        price: 1299,
        duration: "Edition of 10",
        features: [
          "Large format print",
          "Highest quality materials",
          "Signed and numbered",
          "Certificate of authenticity",
          "Artist statement included",
          "Custom framing included",
          "White glove delivery",
        ],
      },
    ],
  },
]

