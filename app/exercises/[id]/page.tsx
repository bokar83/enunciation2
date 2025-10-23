'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'

const exercises = {
  1: {
    title: 'Slow Reading Practice',
    description: 'Read passages at a controlled pace to improve clarity',
    content: [
      'The quick brown fox jumps over the lazy dog.',
      'Practice makes perfect, so keep reading slowly and clearly.',
      'Take your time with each word to improve pronunciation.',
      'Focus on clarity over speed for better communication.'
    ],
    tips: [
      'Read at half your normal speed',
      'Pause between sentences',
      'Focus on each syllable',
      'Take deep breaths'
    ]
  },
  2: {
    title: 'Repeat After Me',
    description: 'Practice pronunciation with guided exercises',
    content: [
      'She sells seashells by the seashore.',
      'How much wood would a woodchuck chuck?',
      'Peter Piper picked a peck of pickled peppers.',
      'Red leather, yellow leather, red leather, yellow leather.'
    ],
    tips: [
      'Listen carefully to each phrase',
      'Repeat exactly as you hear it',
      'Focus on difficult sounds',
      'Practice multiple times'
    ]
  },
  3: {
    title: 'Tongue Twisters',
    description: 'Challenge your articulation with fun phrases',
    content: [
      'Unique New York, New York is unique.',
      'Toy boat, toy boat, toy boat.',
      'Six slippery snails slid slowly seaward.',
      'Fuzzy Wuzzy was a bear. Fuzzy Wuzzy had no hair.'
    ],
    tips: [
      'Start slowly and build speed',
      'Focus on clarity over speed',
      'Practice difficult sounds',
      'Have fun with it!'
    ]
  },
  4: {
    title: 'Breathing Exercises',
    description: 'Learn proper breathing for confident speaking',
    content: [
      'Breathe in for 4 counts, hold for 4, exhale for 8.',
      'Practice diaphragmatic breathing daily.',
      'Use breathing to control your pace.',
      'Take a breath before starting each sentence.'
    ],
    tips: [
      'Practice daily for 5 minutes',
      'Focus on deep belly breaths',
      'Use breathing to calm nerves',
      'Build confidence through control'
    ]
  }
}

export default function ExercisePage() {
  const params = useParams()
  const router = useRouter()
  const exerciseId = parseInt(params.id as string)
  const exercise = exercises[exerciseId as keyof typeof exercises]
  const [currentStep, setCurrentStep] = useState(0)
  const [isRecording, setIsRecording] = useState(false)

  if (!exercise) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-navy-900 mb-4">Exercise Not Found</h1>
          <button onClick={() => router.back()} className="btn-primary">
            Go Back
          </button>
        </div>
      </div>
    )
  }

  const handleNextStep = () => {
    if (currentStep < exercise.content.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      // Exercise complete
      router.push('/progress')
    }
  }

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-navy-900 mb-4">{exercise.title}</h1>
          <p className="text-lg text-carbon-600 mb-6">{exercise.description}</p>
          
          <div className="flex justify-center mb-6">
            <div className="bg-ocean-100 text-ocean-800 px-4 py-2 rounded-full text-sm font-medium">
              Step {currentStep + 1} of {exercise.content.length}
            </div>
          </div>
        </div>

        <div className="card mb-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-navy-900 mb-6">
              {exercise.content[currentStep]}
            </h2>
            
            <div className="flex justify-center space-x-4 mb-8">
              <button
                onClick={() => setIsRecording(!isRecording)}
                className={`${isRecording ? 'bg-carbon-600 hover:bg-carbon-700' : 'bg-orange-500 hover:bg-orange-600'} text-white font-bold py-3 px-6 rounded-full transition-colors duration-200`}
              >
                {isRecording ? '⏹️ Stop Recording' : '🎙️ Record Practice'}
              </button>
            </div>

            {isRecording && (
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-center">
                  <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2 animate-pulse"></span>
                  <span className="text-orange-700 font-medium">Recording your practice...</span>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="card mb-8">
          <h3 className="text-xl font-semibold text-navy-900 mb-4">Tips for Success</h3>
          <ul className="space-y-2">
            {exercise.tips.map((tip, index) => (
              <li key={index} className="flex items-start">
                <span className="text-ocean-500 mr-2">•</span>
                <span className="text-carbon-700">{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-between">
          <button
            onClick={handlePreviousStep}
            disabled={currentStep === 0}
            className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ← Previous
          </button>
          
          <button
            onClick={handleNextStep}
            className="btn-primary"
          >
            {currentStep === exercise.content.length - 1 ? 'Complete Exercise' : 'Next Step →'}
          </button>
        </div>
      </div>
    </div>
  )
}
