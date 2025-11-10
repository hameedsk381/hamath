"use client"

import { useEffect, useState } from "react"
import { AnimatedCounter } from "./animated-counter"
import { Card, CardContent } from "@/components/ui/card"

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("commitment-section")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const stats = [
    { value: 1, suffix: "", label: "Vision", description: "To empower businesses through digital innovation" },
    { value: 5, suffix: "+", label: "Core Services", description: "Comprehensive digital solutions" },
    { value: 10, suffix: "+", label: "Technologies", description: "Cutting-edge tools we leverage" },
    { value: 100, suffix: "%", label: "Commitment", description: "Dedicated to your success" },
  ]

  return (
    <section id="commitment-section" className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Building Digital Excellence</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're committed to delivering exceptional digital solutions that drive growth for businesses of all sizes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-accent/30"
            >
              <CardContent className="p-0">
                <div className="mb-4">
                  {isVisible && <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2000 + index * 200} />}
                </div>
                <h3 className="text-lg font-semibold mb-2">{stat.label}</h3>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
