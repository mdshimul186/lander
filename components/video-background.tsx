"use client"

import { useEffect, useRef } from "react"

interface VideoBackgroundProps {
  src: string
  className?: string
}

export function VideoBackground({ src, className }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1
    }
  }, [])

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <video ref={videoRef} autoPlay muted loop playsInline className="h-full w-full object-cover">
        <source src="/placeholder.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-background/80" />
    </div>
  )
}

