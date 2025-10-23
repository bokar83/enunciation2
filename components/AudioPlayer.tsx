'use client'

import { useState, useRef, useEffect } from 'react'

interface AudioPlayerProps {
  audioBlob: Blob
}

export function AudioPlayer({ audioBlob }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioBlob && audioRef.current) {
      const audioUrl = URL.createObjectURL(audioBlob)
      audioRef.current.src = audioUrl
      
      audioRef.current.addEventListener('loadedmetadata', () => {
        setDuration(audioRef.current?.duration || 0)
      })

      audioRef.current.addEventListener('timeupdate', () => {
        setCurrentTime(audioRef.current?.currentTime || 0)
      })

      audioRef.current.addEventListener('ended', () => {
        setIsPlaying(false)
        setCurrentTime(0)
      })

      return () => {
        URL.revokeObjectURL(audioUrl)
      }
    }
  }, [audioBlob])

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <div className="bg-mist-100 rounded-lg p-4">
      <h3 className="text-lg font-semibold text-navy-900 mb-4">Your Recording</h3>
      
      <audio ref={audioRef} />
      
      <div className="flex items-center justify-center space-x-4 mb-4">
        <button
          onClick={togglePlayPause}
          className="bg-ocean-500 hover:bg-ocean-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-ocean-400"
        >
          {isPlaying ? '⏸️' : '▶️'}
        </button>
        
        <div className="text-sm text-carbon-600">
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>
      </div>

      <div className="w-full bg-mist-300 rounded-full h-2">
        <div
          className="bg-ocean-500 h-2 rounded-full transition-all duration-100"
          style={{ width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` }}
        />
      </div>
    </div>
  )
}
