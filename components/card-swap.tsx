"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface CardSwapProps {
  frontCard: {
    title: string
    description: string
    content: React.ReactNode
  }
  backCard: {
    title: string
    description: string
    content: React.ReactNode
  }
  className?: string
}

export function CardSwap({ frontCard, backCard, className }: CardSwapProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div className={cn("relative w-full h-64 cursor-pointer", className)} onClick={() => setIsFlipped(!isFlipped)}>
      <div
        className={cn(
          "absolute inset-0 w-full h-full transition-transform duration-700 transform-style-preserve-3d",
          isFlipped ? "rotate-y-180" : "",
        )}
      >
        {/* Front Card */}
        <Card className="absolute inset-0 w-full h-full backface-hidden">
          <CardHeader>
            <CardTitle>{frontCard.title}</CardTitle>
            <CardDescription>{frontCard.description}</CardDescription>
          </CardHeader>
          <CardContent>{frontCard.content}</CardContent>
        </Card>

        {/* Back Card */}
        <Card className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
          <CardHeader>
            <CardTitle>{backCard.title}</CardTitle>
            <CardDescription>{backCard.description}</CardDescription>
          </CardHeader>
          <CardContent>{backCard.content}</CardContent>
        </Card>
      </div>
    </div>
  )
}
