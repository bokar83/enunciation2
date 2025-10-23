'use client'

import { useState, useRef } from 'react'

interface AudioRecorderProps {
  isRecording: boolean
  onStart: () => void
  onStop: () => void
  onComplete: (blob: Blob) => void
}

export function AudioRecorder({ isRecording, onStart, onStop, onComplete }: AudioRecorderProps) {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null)
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const audioChunksRef = useRef<Blob[]>([])

  const requestMicrophonePermission = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      setHasPermission(true)
      stream.getTracks().forEach(track => track.stop()) // Stop the stream immediately
    } catch (error) {
      setHasPermission(false)
      console.error('Microphone permission denied:', error)
    }
  }

  const startRecording = async () => {
    if (hasPermission === null) {
      await requestMicrophonePermission()
    }

    if (!hasPermission) {
      alert('Microphone permission is required to record audio.')
      return
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const mediaRecorder = new MediaRecorder(stream)
      mediaRecorderRef.current = mediaRecorder
      audioChunksRef.current = []

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data)
        }
      }

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' })
        onComplete(audioBlob)
        
        // Stop all tracks to release microphone
        stream.getTracks().forEach(track => track.stop())
      }

      mediaRecorder.start()
      onStart()
    } catch (error) {
      console.error('Failed to start recording:', error)
      alert('Failed to start recording. Please check your microphone permissions.')
    }
  }

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop()
      onStop()
    }
  }

  if (hasPermission === false) {
    return (
      <div className="text-center">
        <p className="text-orange-600 mb-4">Microphone access is required to record audio.</p>
        <button
          onClick={requestMicrophonePermission}
          className="btn-primary"
        >
          Grant Microphone Permission
        </button>
      </div>
    )
  }

  return (
    <div className="text-center">
      {!isRecording ? (
        <button
          onClick={startRecording}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-orange-300"
        >
          🎙️ Start Recording
        </button>
      ) : (
        <button
          onClick={stopRecording}
          className="bg-carbon-600 hover:bg-carbon-700 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-carbon-300"
        >
          ⏹️ Stop Recording
        </button>
      )}
      
      {isRecording && (
        <div className="mt-4">
          <div className="inline-flex items-center text-orange-600">
            <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2 animate-pulse"></span>
            Recording in progress...
          </div>
        </div>
      )}
    </div>
  )
}
