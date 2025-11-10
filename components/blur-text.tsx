"use client"

import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

interface BlurTextProps {
  text: string
  className?: string
  delay?: number
}

export function BlurText({ text, className, delay = 0 }: BlurTextProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  return (
    <span
      className={cn(
        "inline-block transition-all duration-1000 ease-out",
        isVisible ? "blur-none opacity-100" : "blur-sm opacity-0",
        className,
      )}
    >
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="inline-block transition-all duration-500 ease-out"
          style={{
            transitionDelay: `${delay + index * 50}ms`,
            filter: isVisible ? "blur(0px)" : "blur(4px)",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  )
}
