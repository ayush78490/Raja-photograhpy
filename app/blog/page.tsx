import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Photography Blog</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tips, insights, and stories from my photography journey. Learn techniques, get inspired, and stay updated
            with the latest trends.
          </p>
          <div className="mt-8 max-w-md mx-auto">
            <div className="flex gap-2">
              <Input placeholder="Search articles..." className="bg-white" />
              <Button type="submit">Search</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/Nature.jpeg?height=800&width=1200"
                alt="Featured blog post"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <Badge className="mb-4">Featured</Badge>
              <h2 className="text-3xl font-bold mb-4">
                <Link href="/blog/mastering-natural-light" className="hover:text-primary transition-colors">
                  Mastering Natural Light: The Key to Stunning Outdoor Photography
                </Link>
              </h2>
              <p className="text-gray-600 mb-6">
                Natural light is one of the most powerful tools in a photographer's arsenal. In this comprehensive
                guide, I share my techniques for harnessing natural light to create breathtaking outdoor photographs in
                any condition, from golden hour to overcast days.
              </p>
              <div className="flex items-center mb-6">
                <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                  <Image src="/portrateSerise.jpeg?height=100&width=100" alt="Author" fill className="object-cover" />
                </div>
                <div>
                  <p className="font-medium">Raja kumar</p>
                  <p className="text-gray-500 text-sm">June 15, 2023 · 10 min read</p>
                </div>
              </div>
              <Button asChild>
                <Link href="/blog/mastering-natural-light">Read Article</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Latest Articles</h2>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Button variant="outline" size="sm">
                All
              </Button>
              <Button variant="outline" size="sm">
                Photography Tips
              </Button>
              <Button variant="outline" size="sm">
                Gear Reviews
              </Button>
              <Button variant="outline" size="sm">
                Behind the Scenes
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link key={index} href={`/blog/${post.slug}`} className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm transition-all hover:shadow-md">
                  <div className="relative h-60">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <Badge className="mb-2">{post.category}</Badge>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-gray-500 text-sm">{post.date}</p>
                      <p className="text-gray-500 text-sm">{post.readTime} read</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button variant="outline">Load More Articles</Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-primary text-white rounded-lg p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Subscribe to the Newsletter</h2>
                <p className="text-white/90 mb-6">
                  Get photography tips, behind-the-scenes content, and exclusive offers delivered straight to your
                  inbox.
                </p>
              </div>
              <div>
                <form className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  />
                  <Button type="submit" variant="secondary" className="w-full">
                    Subscribe
                  </Button>
                </form>
                <p className="text-white/70 text-sm mt-4">I respect your privacy. Unsubscribe at any time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Sample data
const blogPosts = [
  {
    title: "5 Tips for Better Portrait Photography",
    excerpt: "Learn how to capture stunning portraits with these simple but effective techniques.",
    image: "/portrateSerise.jpeg?height=400&width=600",
    category: "Photography Tips",
    date: "June 15, 2023",
    readTime: "8 min",
    slug: "portrait-photography-tips",
  },
  {
    title: "The Best Camera Gear for Beginners",
    excerpt: "Starting your photography journey? Here's the essential gear you need without breaking the bank.",
    image: "/product.jpeg?height=400&width=600",
    category: "Gear Reviews",
    date: "May 28, 2023",
    readTime: "12 min",
    slug: "camera-gear-beginners",
  },
  {
    title: "Behind the Scenes: Mountain Landscape Shoot",
    excerpt: "Join me on an adventure to capture breathtaking mountain landscapes at sunrise.",
    image: "/Nature.jpeg?height=400&width=600",
    category: "Behind the Scenes",
    date: "April 10, 2023",
    readTime: "10 min",
    slug: "mountain-landscape-shoot",
  },
  {
    title: "Understanding Composition in Photography",
    excerpt: "Master the rules of composition to create more impactful and visually appealing photographs.",
    image: "/fashion.jpeg?height=400&width=600",
    category: "Photography Tips",
    date: "March 22, 2023",
    readTime: "15 min",
    slug: "understanding-composition",
  },
  {
    title: "How to Edit Photos Like a Professional",
    excerpt: "Learn the post-processing techniques I use to enhance my photographs without overdoing it.",
    image: "/urbanLandscap.jpeg?height=400&width=600",
    category: "Photography Tips",
    date: "February 18, 2023",
    readTime: "18 min",
    slug: "professional-photo-editing",
  },
  {
    title: "My Favorite Lenses for Portrait Photography",
    excerpt: "Discover the lenses I rely on for creating stunning portrait photographs in various settings.",
    image: "/corporate.jpeg?height=400&width=600",
    category: "Gear Reviews",
    date: "January 30, 2023",
    readTime: "9 min",
    slug: "portrait-photography-lenses",
  },
]

