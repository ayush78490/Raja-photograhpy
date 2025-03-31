import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Camera, MessageSquare, ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 z-0">
          <Image
            src="/RajaLand.jpeg?height=1080&width=1920"
            alt="Featured photograph"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-start">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            Capturing Moments,
            <br />
            Creating Memories
          </h1>
          <p className="text-xl text-white/90 max-w-xl mb-8">
            Hii I'm Raja a Professional photographer, that tells your story through a unique artistic lens.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="/portfolio">View Portfolio</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-black border-white hover:bg-white/10" asChild>
              <Link href="/contact">Book a Session</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Featured Work</h2>
              <p className="text-gray-600 mt-2">A selection of my best photography projects</p>
            </div>
            <Button variant="ghost" className="mt-4 md:mt-0" asChild>
              <Link href="/portfolio" className="flex items-center">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <Link key={index} href={`/portfolio/${project.slug}`} className="group">
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover w-full aspect-[4/3] transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                      <p className="text-white/80 mt-2">{project.category}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Services</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Professional photography services tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-8 transition-all hover:shadow-md">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Button variant="outline" asChild>
                  <Link href="/services">Learn More</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Client Testimonials</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">What my clients are saying about their experience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
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
                    <p className="text-gray-600 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">From the Blog</h2>
              <p className="text-gray-600 mt-2">Photography tips, insights, and stories</p>
            </div>
            <Button variant="ghost" className="mt-4 md:mt-0" asChild>
              <Link href="/blog" className="flex items-center">
                View All Posts <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link key={index} href={`/blog/${post.slug}`} className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm transition-all hover:shadow-md">
                  <div className="relative h-60">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <p className="text-primary text-sm font-medium mb-2">{post.category}</p>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center">
                      <p className="text-gray-500 text-sm">{post.date}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to capture your special moments?</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Let's work together to create stunning photographs that you'll cherish for a lifetime.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Book a Session Now</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

// Sample data
const featuredProjects = [
  {
    title: "Urban Landscapes",
    category: "Cityscape",
    image: "/urbanLandscap.jpeg?height=600&width=800",
    slug: "urban-landscapes",
  },
  {
    title: "Wedding Collection",
    category: "Wedding",
    image: "/weddingCollection.jpeg?height=600&width=800",
    slug: "wedding-collection",
  },
  {
    title: "Portrait Series",
    category: "Portrait",
    image: "/portrateSerise.jpeg?height=600&width=800",
    slug: "portrait-series",
  },
  {
    title: "Nature Escapes",
    category: "Landscape",
    image: "/Nature.jpeg?height=600&width=800",
    slug: "nature-escapes",
  },
  {
    title: "Fashion Editorial",
    category: "Fashion",
    image: "/fashion.jpeg?height=600&width=800",
    slug: "fashion-editorial",
  },
  {
    title: "Corporate Events",
    category: "Event",
    image: "/corporate.jpeg?height=600&width=800",
    slug: "corporate-events",
  },
]

const services = [
  {
    title: "Portrait Photography",
    description: "Professional portrait sessions for individuals, families, and corporate headshots.",
    icon: Camera,
  },
  {
    title: "Wedding Photography",
    description: "Comprehensive wedding photography packages to capture your special day.",
    icon: Camera,
  },
  {
    title: "Commercial Photography",
    description: "High-quality product and brand photography for businesses and marketing.",
    icon: ShoppingBag,
  },
  {
    title: "Event Coverage",
    description: "Full coverage of corporate events, parties, and special occasions.",
    icon: Camera,
  },
  {
    title: "Photography Workshops",
    description: "Learn photography techniques and skills through hands-on workshops.",
    icon: MessageSquare,
  },
  {
    title: "Photo Editing Services",
    description: "Professional photo editing and retouching for your existing photographs.",
    icon: Camera,
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "Wedding Client",
    quote:
      "Working with this photographer was the best decision we made for our wedding. The photos captured every emotion and special moment perfectly.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Michael Chen",
    title: "Corporate Client",
    quote:
      "The corporate headshots and event coverage exceeded our expectations. Very professional and delivered on time.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Emily Rodriguez",
    title: "Portrait Client",
    quote:
      "I've never felt more comfortable during a photoshoot. The results were stunning and really captured my personality.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

const blogPosts = [
  {
    title: "5 Tips for Better Portrait Photography",
    excerpt: "Learn how to capture stunning portraits with these simple but effective techniques.",
    image: "/portrateSerise.jpeg?height=400&width=600",
    category: "Photography Tips",
    date: "June 15, 2023",
    slug: "portrait-photography-tips",
  },
  {
    title: "The Best Camera Gear for Beginners",
    excerpt: "Starting your photography journey? Here's the essential gear you need without breaking the bank.",
    image: "/product.jpeg?height=400&width=600",
    category: "Gear",
    date: "May 28, 2023",
    slug: "camera-gear-beginners",
  },
  {
    title: "Behind the Scenes: Mountain Landscape Shoot",
    excerpt: "Join me on an adventure to capture breathtaking mountain landscapes at sunrise.",
    image: "/Nature.jpeg?height=400&width=600",
    category: "Behind the Scenes",
    date: "April 10, 2023",
    slug: "mountain-landscape-shoot",
  },
]

