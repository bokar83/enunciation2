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
            // Demo mode - generate realistic mock analysis with tough coaching
            const mockAnalyses = [
              {
                pace: 45,
                clarity: 62,
                confidence: 78,
                feedback: "Look, you're speaking WAY too fast and slurring your words. This isn't going to cut it if you want to communicate like Obama or Churchill. You're at 180+ words per minute when you should be at 140-160. Your clarity is suffering because you're rushing through words instead of articulating them properly.",
                suggestions: [
                  "SLOW DOWN. Practice reading at 140 words per minute - use a metronome app",
                  "Record yourself reading the Gettysburg Address slowly and clearly",
                  "Practice the 'Power Pause' - take 2 seconds between sentences",
                  "Do daily tongue twister exercises to strengthen articulation",
                  "Practice the 'Churchill Method' - speak each word as if it costs money"
                ],
                transcript: "This is a sample recording for demonstration purposes. The enunciation coach app is working perfectly in demo mode and I need to slow down my speech to be more like the great orators."
              },
              {
                pace: 52,
                clarity: 58,
                confidence: 82,
                feedback: "You're still rushing and mumbling. Your confidence is good, but confidence without clarity is just noise. You're speaking at 200+ words per minute - that's not communication, that's verbal diarrhea. Great speakers like Reagan and Jobs spoke slowly and deliberately.",
                suggestions: [
                  "Practice the 'Obama Pause' - pause for 3 seconds before important points",
                  "Read aloud for 10 minutes daily at 130 words per minute maximum",
                  "Practice the 'Jobs Method' - repeat key phrases three times slowly",
                  "Record yourself and count how many words you speak per minute",
                  "Use the 'Churchill Technique' - speak as if addressing a large hall"
                ],
                transcript: "Hello, this is a demonstration of the speech analysis feature. The app provides detailed feedback on your speaking skills and I really need to work on slowing down and enunciating clearly like the great communicators."
              },
              {
                pace: 38,
                clarity: 89,
                confidence: 94,
                feedback: "NOW we're talking! This is the pace and clarity of a true communicator. You're speaking at 150 words per minute with excellent articulation. This is how Churchill delivered his speeches - slow, deliberate, and powerful. Keep this up and you'll command attention like the greats.",
                suggestions: [
                  "Maintain this excellent pace - you've found your rhythm",
                  "Practice this pace with longer speeches (5+ minutes)",
                  "Record yourself giving a 3-minute presentation at this pace",
                  "Practice the 'Reagan Method' - vary your pace for emphasis",
                  "Share your speaking techniques with others - you're on the right track"
                ],
                transcript: "Welcome to the enunciation coach application. This tool helps improve speech clarity, pacing, and overall confidence in communication. I am speaking slowly and clearly, enunciating each word properly like the great orators of history."
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
