'use client'

import { useState } from 'react'
import { getRandomQuote, getQuoteByCategory, MotivationQuote } from '@/utils/motivationQuotes'

interface MotivationQuoteProps {
  category?: 'speaking' | 'confidence' | 'communication' | 'leadership' | 'growth' | 'tough_love'
  tone?: 'encouraging' | 'challenging' | 'inspiring' | 'direct'
  showAuthor?: boolean
  className?: string
}

export function MotivationQuote({
  category,
  tone,
  showAuthor = true,
  className = ''
}: MotivationQuoteProps) {
  // Get quote once on component mount - no rotation
  const [currentQuote] = useState<MotivationQuote>(() => {
    if (category) {
      return getQuoteByCategory(category)
    } else if (tone) {
      return getQuoteByTone(tone)
    } else {
      return getRandomQuote()
    }
  })

  const getQuoteStyle = () => {
    switch (currentQuote.tone) {
      case 'tough_love':
        return 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800 text-orange-800 dark:text-orange-200'
      case 'challenging':
        return 'bg-clay-50 dark:bg-clay-900/20 border-clay-200 dark:border-clay-800 text-clay-800 dark:text-clay-200'
      case 'inspiring':
        return 'bg-ocean-50 dark:bg-ocean-900/20 border-ocean-200 dark:border-ocean-800 text-ocean-800 dark:text-ocean-200'
      case 'direct':
        return 'bg-carbon-50 dark:bg-carbon-800 border-carbon-200 dark:border-carbon-600 text-carbon-800 dark:text-carbon-200'
      default:
        return 'bg-mist-50 dark:bg-mist-900/20 border-mist-200 dark:border-mist-700 text-carbon-700 dark:text-mist-200'
    }
  }

  const getIcon = () => {
    switch (currentQuote.type) {
      case 'tip':
        return '💡'
      case 'wisdom':
        return '✨'
      default:
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
  }

  return (
    <div className={className}>
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
      className={className}
    />
  )
}

export function EncouragingMotivation({ className = '' }: { className?: string }) {
  return (
    <MotivationQuote
      tone="encouraging"
      className={className}
    />
  )
}

export function SpeakingMotivation({ className = '' }: { className?: string }) {
  return (
    <MotivationQuote
      category="speaking"
      className={className}
    />
  )
}
