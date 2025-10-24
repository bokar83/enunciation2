import { MotivationQuote } from './MotivationQuote'

interface SpeechAnalysisProps {
  analysis: {
    pace: number
    clarity: number
    confidence: number
    feedback: string
    suggestions: string[]
  }
  transcript: string
}

export function SpeechAnalysis({ analysis, transcript }: SpeechAnalysisProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'score-excellent'
    if (score >= 60) return 'score-good'
    return 'score-needs-work'
  }

  const getScoreEmoji = (score: number) => {
    if (score >= 80) return '🎉'
    if (score >= 60) return '👍'
    return '📈'
  }

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-navy-900 text-center">
        Your Speech Analysis
      </h3>

      {/* Scores */}
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center">
          <div className={`score-circle ${getScoreColor(analysis.pace)} mx-auto mb-2`}>
            {analysis.pace}
          </div>
          <h4 className="font-semibold text-navy-900">Pace</h4>
          <p className="text-sm text-carbon-600">Words per minute</p>
        </div>
        
        <div className="text-center">
          <div className={`score-circle ${getScoreColor(analysis.clarity)} mx-auto mb-2`}>
            {analysis.clarity}
          </div>
          <h4 className="font-semibold text-navy-900">Clarity</h4>
          <p className="text-sm text-carbon-600">Pronunciation</p>
        </div>
        
        <div className="text-center">
          <div className={`score-circle ${getScoreColor(analysis.confidence)} mx-auto mb-2`}>
            {analysis.confidence}
          </div>
          <h4 className="font-semibold text-navy-900">Confidence</h4>
          <p className="text-sm text-carbon-600">Overall tone</p>
        </div>
      </div>

      {/* Transcript */}
      <div className="bg-mist-100 rounded-lg p-4">
        <h4 className="font-semibold text-navy-900 mb-2">Transcript</h4>
        <p className="text-carbon-700">{transcript}</p>
      </div>

      {/* Feedback */}
      <div className="bg-ocean-50 rounded-lg p-4">
        <h4 className="font-semibold text-navy-900 mb-2 flex items-center">
          <span className="mr-2">{getScoreEmoji(Math.round((analysis.pace + analysis.clarity + analysis.confidence) / 3))}</span>
          AI Coach Feedback
        </h4>
        <p className="text-carbon-700 mb-3">{analysis.feedback}</p>
        
        {analysis.suggestions.length > 0 && (
          <div>
            <h5 className="font-medium text-navy-900 mb-2">Suggestions for improvement:</h5>
            <ul className="list-disc list-inside text-carbon-700 space-y-1">
              {analysis.suggestions.map((suggestion, index) => (
                <li key={index}>{suggestion}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button className="btn-primary flex-1">
          🎙️ Record Again
        </button>
        <button className="btn-secondary flex-1">
          📚 Practice Exercise
        </button>
        <button className="btn-secondary flex-1">
          📊 View Progress
        </button>
      </div>

      {/* Motivation Quote */}
      <div className="mt-8">
        <MotivationQuote 
          tone="encouraging"
          className="max-w-2xl mx-auto"
        />
      </div>
    </div>
  )
}
