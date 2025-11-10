"use client"

import { useEffect, useState } from "react"
import { Bot, Cloud, Workflow, Zap, Database, Cpu } from "lucide-react"

const icons = [Bot, Cloud, Workflow, Zap, Database, Cpu]

export function FloatingElements() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((Icon, index) => (
        <div
          key={index}
          className="absolute animate-float opacity-10"
          style={{
            left: `${10 + index * 15}%`,
            top: `${20 + index * 10}%`,
            animationDelay: `${index * 0.5}s`,
            animationDuration: `${4 + index * 0.5}s`,
          }}
        >
          <Icon className="h-8 w-8 text-primary" />
        </div>
      ))}
    </div>
  )
}
