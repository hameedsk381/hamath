"use client"

import { cn } from "@/lib/utils"

interface InfiniteScrollProps {
  items: string[]
  direction?: "left" | "right"
  speed?: "slow" | "medium" | "fast"
  className?: string
}

export function InfiniteScroll({ items, direction = "left", speed = "medium", className }: InfiniteScrollProps) {
  const speedMap = {
    slow: "animate-scroll-slow",
    medium: "animate-scroll-medium",
    fast: "animate-scroll-fast",
  }

  return (
    <div className={cn("overflow-hidden whitespace-nowrap", className)}>
      <div
        className={cn(
          "inline-flex items-center space-x-8",
          speedMap[speed],
          direction === "right" && "animate-reverse",
        )}
      >
        {[...items, ...items].map((item, index) => (
          <span
            key={index}
            className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
