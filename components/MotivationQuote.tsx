'use client'

import { useState, useEffect } from 'react'
import { getRandomQuote, getQuoteByCategory, MotivationQuote } from '@/utils/motivationQuotes'

interface MotivationQuoteProps {
  category?: 'speaking' | 'confidence' | 'communication' | 'leadership' | 'growth' | 'tough_love'
  tone?: 'encouraging' | 'challenging' | 'inspiring' | 'direct'
  autoRotate?: boolean
  rotationInterval?: number
  showAuthor?: boolean
  className?: string
}

export function MotivationQuote({
  category,
  tone,
  autoRotate = true,
  rotationInterval = 8000,
  showAuthor = true,
  className = ''
}: MotivationQuoteProps) {
  const [currentQuote, setCurrentQuote] = useState<MotivationQuote>(getRandomQuote())
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (!autoRotate) return

    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        let newQuote: MotivationQuote
        if (category) {
          newQuote = getQuoteByCategory(category)
        } else if (tone) {
          newQuote = getQuoteByTone(tone)
        } else {
          newQuote = getRandomQuote()
        }
        setCurrentQuote(newQuote)
        setIsVisible(true)
      }, 300)
    }, rotationInterval)

    return () => clearInterval(interval)
  }, [autoRotate, rotationInterval, category, tone])

  const getQuoteStyle = () => {
    switch (currentQuote.tone) {
      case 'tough_love':
        return 'bg-orange-50 border-orange-200 text-orange-800'
      case 'challenging':
        return 'bg-clay-50 border-clay-200 text-clay-800'
      case 'inspiring':
        return 'bg-ocean-50 border-ocean-200 text-ocean-800'
      case 'direct':
        return 'bg-carbon-50 border-carbon-200 text-carbon-800'
      default:
        return 'bg-mist-50 border-mist-200 text-carbon-700'
    }
  }

  const getIcon = () => {
    switch (currentQuote.category) {
      case 'speaking':
        return '🗣️'
      case 'confidence':
        return '💪'
      case 'communication':
        return '💬'
      case 'leadership':
        return '👑'
      case 'growth':
        return '🌱'
      case 'tough_love':
        return '⚡'
      default:
        return '💡'
    }
  }

  return (
    <div className={`transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'} ${className}`}>
      <div className={`rounded-lg border-2 p-4 ${getQuoteStyle()}`}>
        <div className="flex items-start space-x-3">
          <div className="text-2xl">{getIcon()}</div>
          <div className="flex-1">
            <blockquote className="text-lg font-medium leading-relaxed">
              "{currentQuote.text}"
            </blockquote>
            {showAuthor && (
              <cite className="mt-2 block text-sm opacity-75">
                — {currentQuote.author}
              </cite>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// Specialized components for different contexts
export function CoachMotivation({ className = '' }: { className?: string }) {
  return (
    <MotivationQuote
      tone="tough_love"
      autoRotate={true}
      rotationInterval={6000}
      className={className}
    />
  )
}

export function EncouragingMotivation({ className = '' }: { className?: string }) {
  return (
    <MotivationQuote
      tone="encouraging"
      autoRotate={true}
      rotationInterval={10000}
      className={className}
    />
  )
}

export function SpeakingMotivation({ className = '' }: { className?: string }) {
  return (
    <MotivationQuote
      category="speaking"
      autoRotate={true}
      rotationInterval={8000}
      className={className}
    />
  )
}
