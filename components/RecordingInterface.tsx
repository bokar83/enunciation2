'use client'

import { useState, useRef, useEffect } from 'react'
import { AudioRecorder } from './AudioRecorder'
import { AudioPlayer } from './AudioPlayer'
import { SpeechAnalysis } from './SpeechAnalysis'

interface RecordingInterfaceProps {
  onAnalysisComplete?: (analysis: any) => void
}

export function RecordingInterface({ onAnalysisComplete }: RecordingInterfaceProps) {
  const [isRecording, setIsRecording] = useState(false)
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null)
  const [transcript, setTranscript] = useState<string>('')
  const [analysis, setAnalysis] = useState<any>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const handleRecordingComplete = async (blob: Blob) => {
    setAudioBlob(blob)
    setIsAnalyzing(true)
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    try {
      // Check if API key is available
      const hasApiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY || process.env.OPENAI_API_KEY
      
      if (hasApiKey) {
        const formData = new FormData()
        formData.append('audio', blob, 'recording.wav')
        
        const response = await fetch('/api/analyze', {
          method: 'POST',
          body: formData,
        })
        
        if (!response.ok) {
          throw new Error('Analysis failed')
        }
        
        const result = await response.json()
        setAnalysis(result)
        setTranscript(result.transcript)
        onAnalysisComplete?.(result)
      } else {
        // Demo mode - generate realistic mock analysis
        const mockAnalyses = [
          {
            pace: 82,
            clarity: 76,
            confidence: 85,
            feedback: "Excellent work! Your pace is well-controlled and your confidence really shines through. Your clarity could use a bit more attention - try to articulate each word more distinctly.",
            suggestions: [
              "Slow down slightly to improve word clarity",
              "Practice tongue twisters to strengthen articulation",
              "Take deeper breaths to maintain steady pace"
            ],
            transcript: "This is a sample recording for demonstration purposes. The enunciation coach app is working perfectly in demo mode."
          },
          {
            pace: 95,
            clarity: 88,
            confidence: 78,
            feedback: "Great clarity and articulation! You're speaking at a good pace, though you might benefit from slowing down just a touch to sound more confident.",
            suggestions: [
              "Reduce speaking speed by 10-15%",
              "Add more pauses between sentences",
              "Practice confident breathing techniques"
            ],
            transcript: "Hello, this is a demonstration of the speech analysis feature. The app provides detailed feedback on your speaking skills."
          },
          {
            pace: 68,
            clarity: 92,
            confidence: 91,
            feedback: "Outstanding confidence and crystal-clear articulation! Your pace is perfect for clear communication. This is exactly how confident speaking should sound.",
            suggestions: [
              "Maintain this excellent pace and clarity",
              "Share your speaking techniques with others",
              "Continue practicing to build consistency"
            ],
            transcript: "Welcome to the enunciation coach application. This tool helps improve speech clarity, pacing, and overall confidence in communication."
          }
        ]
        
        const randomAnalysis = mockAnalyses[Math.floor(Math.random() * mockAnalyses.length)]
        setAnalysis(randomAnalysis)
        setTranscript(randomAnalysis.transcript)
        onAnalysisComplete?.(randomAnalysis)
      }
    } catch (error) {
      console.error('Analysis failed:', error)
      // Fallback analysis
      setAnalysis({
        pace: 75,
        clarity: 78,
        confidence: 72,
        feedback: "Great job on your recording! Keep practicing to improve your speech clarity and confidence.",
        suggestions: [
          "Try speaking a bit slower to improve clarity",
          "Take deep breaths before speaking to boost confidence",
          "Practice tongue twisters to improve articulation"
        ],
        transcript: "Sample transcript - analysis service temporarily unavailable"
      })
      setTranscript("Sample transcript - analysis service temporarily unavailable")
    } finally {
      setIsAnalyzing(false)
    }
  }

  const handleStartRecording = () => {
    setIsRecording(true)
    setAudioBlob(null)
    setAnalysis(null)
    setTranscript('')
  }

  const handleStopRecording = () => {
    setIsRecording(false)
  }

  return (
    <div className="card max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-navy-900 mb-6 text-center">
        Record Your Speech
      </h2>
      
      {/* Demo Mode Indicator */}
      {!(process.env.NEXT_PUBLIC_OPENAI_API_KEY || process.env.OPENAI_API_KEY) && (
        <div className="bg-ocean-50 border border-ocean-200 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-center">
            <span className="text-ocean-600 font-medium">🎭 Demo Mode</span>
            <span className="text-ocean-600 ml-2 text-sm">- Using mock analysis for testing</span>
          </div>
        </div>
      )}
      
      <div className="text-center mb-6">
        <AudioRecorder
          isRecording={isRecording}
          onStart={handleStartRecording}
          onStop={handleStopRecording}
          onComplete={handleRecordingComplete}
        />
      </div>

      {audioBlob && (
        <div className="mb-6">
          <AudioPlayer audioBlob={audioBlob} />
        </div>
      )}

      {isAnalyzing && (
        <div className="text-center py-8">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-ocean-500"></div>
          <p className="mt-2 text-carbon-600">Analyzing your speech...</p>
        </div>
      )}

      {analysis && (
        <SpeechAnalysis analysis={analysis} transcript={transcript} />
      )}
    </div>
  )
}
