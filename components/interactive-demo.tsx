"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Pause, RotateCcw, CheckCircle, Clock, ArrowRight } from "lucide-react"

export function InteractiveDemo() {
  const [isRunning, setIsRunning] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [completedSteps, setCompletedSteps] = useState<number[]>([])

  const steps = [
    { title: "Project Discovery", description: "Understanding your business goals and requirements", duration: 1000 },
    {
      title: "Solution Design",
      description: "Creating tailored digital strategies for your needs",
      duration: 1500,
    },
    { title: "Development & Implementation", description: "Building and deploying your digital solutions", duration: 2000 },
    { title: "Launch & Optimization", description: "Going live and refining for optimal performance", duration: 1000 },
  ]

  const startDemo = () => {
    setIsRunning(true)
    setCurrentStep(0)
    setCompletedSteps([])

    steps.forEach((step, index) => {
      setTimeout(
        () => {
          setCurrentStep(index + 1)
          setCompletedSteps((prev) => [...prev, index])

          if (index === steps.length - 1) {
            setTimeout(() => {
              setIsRunning(false)
              setCurrentStep(0)
            }, 1000)
          }
        },
        steps.slice(0, index + 1).reduce((acc, s) => acc + s.duration, 0),
      )
    })
  }

  const resetDemo = () => {
    setIsRunning(false)
    setCurrentStep(0)
    setCompletedSteps([])
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Interactive Demo
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">See Our Process in Action</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Experience how we transform your ideas into exceptional digital products and marketing solutions
          </p>

          <div className="flex justify-center gap-4 mb-12">
            <Button onClick={startDemo} disabled={isRunning} size="lg" className="px-8">
              {isRunning ? <Pause className="mr-2 h-5 w-5" /> : <Play className="mr-2 h-5 w-5" />}
              {isRunning ? "Running Demo" : "Start Demo"}
            </Button>
            <Button onClick={resetDemo} variant="outline" size="lg" className="px-8 bg-transparent">
              <RotateCcw className="mr-2 h-5 w-5" />
              Reset
            </Button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <Card
                key={index}
                className={`transition-all duration-500 ${
                  currentStep > index
                    ? "border-accent bg-accent/5 scale-105"
                    : currentStep === index
                      ? "border-accent bg-accent/5 scale-110 shadow-lg"
                      : "border-border"
                }`}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        completedSteps.includes(index)
                          ? "bg-accent text-accent-foreground"
                          : currentStep === index
                            ? "bg-accent/20 text-accent animate-pulse"
                            : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {completedSteps.includes(index) ? (
                        <CheckCircle className="h-4 w-4" />
                      ) : currentStep === index ? (
                        <Clock className="h-4 w-4" />
                      ) : (
                        <span className="text-sm font-medium">{index + 1}</span>
                      )}
                    </div>
                    {index < steps.length - 1 && (
                      <ArrowRight
                        className={`h-4 w-4 transition-colors ${
                          completedSteps.includes(index) ? "text-accent" : "text-muted-foreground"
                        }`}
                      />
                    )}
                  </div>
                  <CardTitle
                    className={`text-lg ${
                      currentStep === index || completedSteps.includes(index) ? "text-foreground" : "text-foreground"
                    }`}
                  >
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p
                    className={`text-sm ${
                      currentStep === index || completedSteps.includes(index)
                        ? "text-foreground/80"
                        : "text-muted-foreground"
                    }`}
                  >
                    {step.description}
                  </p>
                  {currentStep === index && (
                    <div className="mt-3">
                      <div className="w-full bg-muted rounded-full h-1">
                        <div
                          className="bg-accent h-1 rounded-full transition-all duration-1000 animate-pulse"
                          style={{ width: "100%" }}
                        />
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {completedSteps.length === steps.length && (
            <div className="text-center mt-12 animate-fade-in">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-accent/10 border border-accent/20">
                <CheckCircle className="h-5 w-5 text-accent mr-2" />
                <span className="text-accent font-medium">Workflow Automation Complete!</span>
              </div>
              <p className="text-muted-foreground mt-4">
                Your business process has been successfully automated with 90% efficiency improvement
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
