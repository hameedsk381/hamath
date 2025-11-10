"use client"

import { useEffect, useRef } from "react"

export function LiquidEtherBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const animate = () => {
      time += 0.01

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create liquid ether effect
      const gradient = ctx.createRadialGradient(
        canvas.width / 2 + Math.sin(time) * 100,
        canvas.height / 2 + Math.cos(time * 0.8) * 80,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height) / 2,
      )

      gradient.addColorStop(0, "rgba(34, 197, 94, 0.1)")
      gradient.addColorStop(0.3, "rgba(59, 130, 246, 0.05)")
      gradient.addColorStop(0.6, "rgba(168, 85, 247, 0.03)")
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Add floating particles
      for (let i = 0; i < 5; i++) {
        const x = canvas.width / 2 + Math.sin(time + i) * (200 + i * 50)
        const y = canvas.height / 2 + Math.cos(time * 0.7 + i) * (150 + i * 30)
        const radius = 2 + Math.sin(time * 2 + i) * 1

        ctx.beginPath()
        ctx.arc(x, y, radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(34, 197, 94, ${0.3 + Math.sin(time + i) * 0.2})`
        ctx.fill()
      }

      animationId = requestAnimationFrame(animate)
    }

    resize()
    animate()
    window.addEventListener("resize", resize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ mixBlendMode: "multiply" }} />
  )
}
