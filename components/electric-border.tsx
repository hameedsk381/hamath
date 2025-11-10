"use client"

import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface ElectricBorderProps {
  children: ReactNode
  className?: string
  speed?: "slow" | "medium" | "fast"
  color?: string
}

export function ElectricBorder({
  children,
  className,
  speed = "medium",
  color = "oklch(0.6 0.2 270)", // indigo primary color
}: ElectricBorderProps) {
  const speedMap = {
    slow: "animate-electric-slow",
    medium: "animate-electric-medium",
    fast: "animate-electric-fast",
  }

  return (
    <div className={cn("relative overflow-hidden rounded-lg", className)}>
      <div
        className={cn("absolute inset-0 rounded-lg opacity-75", speedMap[speed])}
        style={{
          background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
          backgroundSize: "200% 100%",
        }}
      />
      <div className="relative bg-background/95 backdrop-blur-sm rounded-lg border border-border/50 h-full">
        {children}
      </div>
    </div>
  )
}
