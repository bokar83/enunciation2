import Link from 'next/link'
import { RecordButton } from '@/components/RecordButton'
import { FeatureCard } from '@/components/FeatureCard'
import { MotivationQuote } from '@/components/MotivationQuote'

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl hiring:text-5xl font-bold text-navy-900 mb-4">
          🗣️ Enunciation Coach
        </h1>
        <p className="text-xl text-carbon-600 mb-8">
          Improve your speech clarity, pacing, and confidence with AI-powered feedback
        </p>
        <RecordButton />
      </header>

      {/* Motivation Quote */}
      <section className="mb-12">
        <MotivationQuote 
          tone="inspiring"
          className="max-w-3xl mx-auto"
        />
      </section>

      {/* Features Grid */}
      <section className="grid md:grid-cols-3 gap-6 mb-12">
        <FeatureCard
          icon="🎙️"
          title="Record & Analyze"
          description="Record your speech and get instant AI feedback on clarity and pacing"
        />
        <FeatureCard
          icon="🧠"
          title="Smart Coaching"
          description="Personalized tips and exercises to improve your speaking skills"
        />
        <FeatureCard
          icon="📊"
          title="Track Progress"
          description="Monitor your improvement over time with detailed analytics"
        />
      </section>

      {/* Quick Actions */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold text-navy-900 mb-6">
          Ready to improve your speech?
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/record" className="btn-primary">
            Start Recording
          </Link>
          <Link href="/exercises" className="btn-secondary">
            Practice Exercises
          </Link>
          <Link href="/progress" className="btn-secondary">
            View Progress
          </Link>
        </div>
      </section>
    </div>
  )
}
