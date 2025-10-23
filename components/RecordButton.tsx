'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export function RecordButton() {
  const [isRecording, setIsRecording] = useState(false)
  const router = useRouter()

  const handleStartRecording = () => {
    router.push('/record')
  }

  return (
    <button
      onClick={handleStartRecording}
      className="bg-ocean-500 hover:bg-ocean-600 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-ocean-300"
    >
      {isRecording ? (
        <>
          <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2 animate-pulse"></span>
          Recording...
        </>
      ) : (
        <>
          🎙️ Start Recording
        </>
      )}
    </button>
  )
}
