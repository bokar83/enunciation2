import { RecordingInterface } from '@/components/RecordingInterface'

export default function RecordPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-navy-900 mb-4">
            Record Your Speech
          </h1>
          <p className="text-lg text-carbon-600">
            Speak clearly and confidently. We'll analyze your pace, clarity, and confidence.
          </p>
        </div>
        
        <RecordingInterface />
      </div>
    </div>
  )
}
