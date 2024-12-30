"use client"

import { useState, useRef, useEffect } from 'react'
import { Play, Pause, X, Music } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    audioRef.current = new Audio('/path-to-your-audio-file.mp3')
    audioRef.current.loop = true

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const closePlayer = () => {
    setIsVisible(false)
  }

  if (!isVisible) {
    return (
      <Button
        variant="outline"
        size="icon"
        className="fixed bottom-4 right-4 z-50 rounded-full [box-shadow:4px_4px_0_0_rgba(0,0,0,1)] dark:shadow-white"
        onClick={() => setIsVisible(true)}
      >
        <Music className="h-4 w-4" />
      </Button>
    )
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t-2 border-primary p-2 [box-shadow:0px_-4px_0_0_rgba(0,0,0,1)] dark:shadow-white">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="icon" onClick={togglePlay} className="rounded-full">
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </Button>
          <span className="font-mono text-sm">Now Playing: Hardcore Song.mp3</span>
        </div>
        <Button variant="ghost" size="icon" onClick={closePlayer} className="rounded-full">
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

