"use client"

import { useEffect } from 'react'

interface CalComEmbedProps {
  calLink: string
  className?: string
}

export function CalComEmbed({ calLink, className }: CalComEmbedProps) {
  useEffect(() => {
    // Load Cal.com script
    const script = document.createElement('script')
    script.src = 'https://cal.com/embed.js'
    script.async = true
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return (
    <div 
      className={className}
      data-cal-link={calLink}
      data-cal-namespace={calLink}
      data-cal-config='{"layout":"month_view"}'
    />
  )
}