import Image from "next/image"
import Link from "next/link"
import { Camera, Award, Users, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
              <p className="text-gray-600 mb-6">
                I'm a professional photographer with over 10 years of experience capturing life's most precious moments.
                My passion for photography began when I was a teenager, and it has grown into a lifelong pursuit of
                visual storytelling.
              </p>
              <p className="text-gray-600 mb-6">
                My approach combines technical expertise with an artistic vision, allowing me to create images that are
                both beautiful and meaningful. I believe that great photography is about more than just taking
                pictures—it's about capturing emotions, relationships, and moments in time.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <Link href="/portfolio">View My Work</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/RajaLand.jpeg?height=1000&width=800"
                  alt="Photographer portrait"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <p className="font-playfair text-xl font-bold">Raja Kumar</p>
                <p className="text-gray-600">Professional Photographer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Journey */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The path that led me to become the photographer I am today
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Early Beginnings</h3>
              <p className="text-gray-600 mb-4">
                My journey began with a simple point-and-shoot camera gifted by my parents. I spent countless hours
                exploring my neighborhood, documenting everything from street scenes to family gatherings.
              </p>
              <p className="text-gray-600">
                This early experimentation laid the foundation for my understanding of composition and light.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Education & Training</h3>
              <p className="text-gray-600 mb-4">
                I pursued formal education in photography at the Academy of Arts, where I honed my technical skills and
                developed my artistic voice under the guidance of industry professionals.
              </p>
              <p className="text-gray-600">
                During this time, I also assisted established photographers, gaining invaluable hands-on experience.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Professional Career</h3>
              <p className="text-gray-600 mb-4">
                After completing my education, I launched my own photography business. Over the years, I've had the
                privilege of working with diverse clients, from couples celebrating their wedding day to major brands
                seeking commercial photography.
              </p>
              <p className="text-gray-600">
                Each project has contributed to my growth as a photographer and storyteller.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <p>Years Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <p>Projects Completed</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <p>Happy Clients</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15</div>
              <p>Awards Won</p>
            </div>
          </div>
        </div>
      </section>

      {/* My Approach */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Approach</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">The philosophy and process behind my photography</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/product.jpeg?height=600&width=400"
                  alt="Photography process"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden mt-8">
                <Image
                  src="/weddingCollection.jpeg?height=600&width=400"
                  alt="Photography process"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/corporate.jpeg?height=600&width=400"
                  alt="Photography process"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden mt-8">
                <Image
                  src="/engagement.jpeg?height=600&width=400"
                  alt="Photography process"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <div className="grid gap-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Camera className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Authentic Storytelling</h3>
                    <p className="text-gray-600">
                      I believe in capturing authentic moments that tell a story. My approach is unobtrusive, allowing
                      genuine emotions and interactions to unfold naturally.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Technical Excellence</h3>
                    <p className="text-gray-600">
                      While creativity is essential, technical excellence is equally important. I continuously refine my
                      skills and invest in professional equipment to deliver the highest quality images.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Client Collaboration</h3>
                    <p className="text-gray-600">
                      I value collaboration with my clients. Understanding your vision and preferences is crucial to
                      creating photographs that exceed your expectations.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Attention to Detail</h3>
                    <p className="text-gray-600">
                      The difference between a good photograph and a great one often lies in the details. I pay
                      meticulous attention to lighting, composition, and post-processing to create polished,
                      professional images.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to work together?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Let's create beautiful photographs that tell your unique story.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Contact Me</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

