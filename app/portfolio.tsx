"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Globe, Code, Palette, Smartphone } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

// Project data
const projects = [
  {
    id: 1,
    title: "Fossap",
    description: "Complete website development and digital marketing solution for Fossap",
    url: "https://fossap.in",
    category: "Website Development",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    image: "/placeholder-1.jpg",
    featured: true
  },
  {
    id: 2,
    title: "Yesj",
    description: "Modern web application development with responsive design",
    url: "https://yesj.in",
    category: "Web Application",
    technologies: ["React", "Node.js", "MongoDB"],
    image: "/placeholder-2.jpg",
    featured: true
  },
  {
    id: 3,
    title: "Mohuna Media",
    description: "Digital media platform with content management system",
    url: "https://mohuna.media",
    category: "Media Platform",
    technologies: ["WordPress", "PHP", "MySQL"],
    image: "/placeholder-3.jpg",
    featured: false
  },
  {
    id: 4,
    title: "Uppraisal Consultant",
    description: "Professional consulting website with lead generation features",
    url: "https://uppraisalconsultant.in",
    category: "Business Website",
    technologies: ["React", "Next.js", "Firebase"],
    image: "/placeholder-4.jpg",
    featured: false
  },
  {
    id: 5,
    title: "St. Peter's Lutheran Church",
    description: "Religious organization website with event management",
    url: "https://stpeterslutheranchurchvja.in/",
    category: "Non-Profit Website",
    technologies: ["WordPress", "Custom Theme", "SEO"],
    image: "/placeholder-5.jpg",
    featured: false
  },
  {
    id: 6,
    title: "Christ the King Vijayawada",
    description: "Church website with multimedia integration and community features",
    url: "https://christhekingvijayawada.com/",
    category: "Religious Website",
    technologies: ["React", "Next.js", "Strapi CMS"],
    image: "/placeholder-6.jpg",
    featured: true
  },
  {
    id: 7,
    title: "Adarsh EMS School",
    description: "Educational institution website with student management system",
    url: "https://adarshemschool.in",
    category: "Educational Website",
    technologies: ["React", "Next.js", "MongoDB"],
    image: "/placeholder-7.jpg",
    featured: true
  }
]

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All")
  
  const categories = ["All", "Website Development", "Web Application", "Media Platform", "Business Website", "Non-Profit Website", "Religious Website", "Educational Website"]
  
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-title font-bold text-foreground">hamath</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link href="/#services" className="text-muted-foreground hover:text-foreground transition-colors">
                Services
              </Link>
              <Link href="/#about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/portfolio" className="text-foreground font-medium transition-colors">
                Portfolio
              </Link>
              <Link href="/#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Our Work
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-8">
              Project <span className="text-primary">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-pretty mb-12 max-w-3xl mx-auto">
              Explore our successful projects across various industries and technologies. 
              Each project represents our commitment to excellence and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="relative h-48 bg-muted">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                    <Globe className="h-16 w-16 text-primary/30" />
                  </div>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                      <Badge variant="secondary">{project.category}</Badge>
                    </div>
                    <Link href={project.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
                    </Link>
                  </div>
                  <CardDescription className="mt-4">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href={project.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Visit Project
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss how we can transform your ideas into reality with our digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90" asChild>
              <Link href="/#contact">
                Get in Touch
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-white text-white hover:bg-white/10 bg-transparent"
              asChild
            >
              <Link href="/">
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-card border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl font-title font-bold">hamath</span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Leading provider of digital development and marketing solutions. Transforming businesses with innovative
                website development, mobile apps, and strategic digital marketing.
              </p>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  <strong>Headquarters:</strong> Vijayawada, India
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Founded by:</strong> Hameedullah Shaik
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Website Development</li>
                <li>App Development</li>
                <li>Mobile App Development</li>
                <li>Digital Marketing</li>
                <li>Brand Identity</li>
                <li>UI/UX Design</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/#about" className="hover:text-foreground transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="hover:text-foreground transition-colors">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="hover:text-foreground transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 hamath. All rights reserved. Leading Digital Development & Marketing Solutions.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}