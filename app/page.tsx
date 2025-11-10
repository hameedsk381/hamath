import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Bot,
  Cloud,
  Workflow,
  Zap,
  Users,
  Building,
  Globe,
  Cpu,
  Database,
  Shield,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"
import { FloatingElements } from "@/components/floating-elements"
import { StatsSection } from "@/components/stats-section"
import { InteractiveDemo } from "@/components/interactive-demo"
import { ElectricBorder } from "@/components/electric-border"
import { BlurText } from "@/components/blur-text"
import { CardSwap } from "@/components/card-swap"
import { InfiniteScroll } from "@/components/infinite-scroll"
import { ThemeToggle } from "@/components/theme-toggle"

export default function HomePage() {
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
              <Link href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                Services
              </Link>
              <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="#solutions" className="text-muted-foreground hover:text-foreground transition-colors">
                Solutions
              </Link>
              <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
              <ThemeToggle />
              <Button>Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <FloatingElements />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Digital Solutions & Development Experts
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-8">
              <BlurText text="Building Digital " delay={0} />
              <span className="text-primary">
                <BlurText text="Experiences" delay={500} />
              </span>
              <BlurText text=" That Drive Growth" delay={1000} />
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-pretty mb-12 max-w-3xl mx-auto">
              Transform your business with our comprehensive digital solutions. We specialize in website development, 
              mobile applications, and strategic digital marketing that help brands stand out and achieve measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-muted/20 border-y">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-muted-foreground mb-4">Trusted by leading enterprises worldwide</p>
          <InfiniteScroll
            items={[
              "Website Development",
              "Mobile Apps",
              "Web Applications",
              "Digital Marketing",
              "Brand Identity",
              "UI/UX Design",
              "E-commerce Solutions",
              "SEO Optimization",
            ]}
            speed="medium"
            className="py-4"
          />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-background to-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Digital Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              End-to-end services covering website development, app creation, mobile solutions, and digital marketing strategies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ElectricBorder speed="slow" className="group">
              <Card className="h-full border-0 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Globe className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Website Development</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    Custom websites and web applications built with modern technologies. From responsive designs to 
                    complex web platforms, we create digital experiences that engage and convert.
                  </CardDescription>
                </CardHeader>
              </Card>
            </ElectricBorder>

            <ElectricBorder speed="medium" className="group">
              <Card className="h-full border-0 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Cpu className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">App Development</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    Full-stack application development with scalable architectures. We build robust, secure, and 
                    high-performance applications tailored to your business requirements.
                  </CardDescription>
                </CardHeader>
              </Card>
            </ElectricBorder>

            <ElectricBorder speed="fast" className="group">
              <Card className="h-full border-0 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Workflow className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Mobile App Development</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    Native and cross-platform mobile applications for iOS and Android. Our mobile solutions deliver 
                    exceptional user experiences with intuitive interfaces and powerful functionality.
                  </CardDescription>
                </CardHeader>
              </Card>
            </ElectricBorder>

            <ElectricBorder speed="medium" className="group">
              <Card className="h-full border-0 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Digital Marketing & Branding</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    Strategic digital marketing campaigns and brand identity solutions. We help you reach your target 
                    audience, build brand awareness, and drive conversions through data-driven approaches.
                  </CardDescription>
                </CardHeader>
              </Card>
            </ElectricBorder>
          </div>
        </div>
      </section>

      <StatsSection />

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="outline" className="mb-6">
                Founded in Vijayawada
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Leading the Future of <span className="text-primary">Digital Innovation</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Founded by <strong>Hameedullah Shaik</strong> in Vijayawada, hamath specializes in creating 
                cutting-edge digital solutions. Our vision is to empower businesses through innovative website development, 
                mobile applications, and strategic digital marketing that drives growth and engagement.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-1 rounded-full bg-primary/20">
                    <Zap className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground">Innovative Digital Solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-1 rounded-full bg-primary/20">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground">Client-Centric Approach</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-1 rounded-full bg-primary/20">
                    <Shield className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground">Quality & Performance Focused</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <CardSwap
                className="aspect-square"
                frontCard={{
                  title: "Our Mission",
                  description: "Creating exceptional digital experiences",
                  content: (
                    <div className="text-center">
                      <Building className="h-16 w-16 text-primary mx-auto mb-4" />
                      <h3 className="text-2xl font-bold mb-2">Headquarters</h3>
                      <p className="text-muted-foreground">Vijayawada, India</p>
                    </div>
                  ),
                }}
                backCard={{
                  title: "Our Vision",
                  description: "Leading the future of digital innovation",
                  content: (
                    <div className="text-center space-y-4">
                      <Globe className="h-16 w-16 text-primary mx-auto" />
                      <div>
                        <h3 className="text-xl font-bold mb-2">Founded by</h3>
                        <p className="text-muted-foreground">Hameedullah Shaik</p>
                      </div>
                      <p className="text-sm text-muted-foreground">Click to flip back</p>
                    </div>
                  ),
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <InteractiveDemo />

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-gradient-to-br from-muted/50 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cutting-Edge Technology Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We leverage the latest technologies to build high-performance digital products and marketing solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8 border-2 hover:border-primary/20 transition-all duration-300">
              <CardHeader className="p-0 mb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Cpu className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl">Development Technologies</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Modern frameworks and tools for building exceptional digital products
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 rounded-lg bg-muted/50">
                    <div className="font-semibold">Frontend</div>
                    <div className="text-sm text-muted-foreground">React, Vue, Angular</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-muted/50">
                    <div className="font-semibold">Mobile</div>
                    <div className="text-sm text-muted-foreground">React Native, Flutter</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-muted/50">
                    <div className="font-semibold">Backend</div>
                    <div className="text-sm text-muted-foreground">Node.js, Python, PHP</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-muted/50">
                    <div className="font-semibold">Database</div>
                    <div className="text-sm text-muted-foreground">MySQL, MongoDB, PostgreSQL</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 hover:border-primary/20 transition-all duration-300">
              <CardHeader className="p-0 mb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <TrendingUp className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl">Digital Marketing Tools</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Comprehensive platforms and strategies for effective online presence
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                    <span className="font-medium">SEO & Analytics</span>
                    <Badge variant="secondary">Organic Growth</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                    <span className="font-medium">Social Media Marketing</span>
                    <Badge variant="outline">Brand Awareness</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                    <span className="font-medium">PPC & Retargeting</span>
                    <Badge variant="outline">Targeted Ads</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="text-lg px-8 py-6">
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join businesses who trust hamath for their digital development and marketing needs. Let's discuss how we can
            create exceptional digital experiences for your brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90">
              Get Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-white text-white hover:bg-white/10 bg-transparent"
            >
              View Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-16 bg-card border-t">
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
                  <Link href="#about" className="hover:text-foreground transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-foreground transition-colors">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link href="#solutions" className="hover:text-foreground transition-colors">
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-foreground transition-colors">
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
