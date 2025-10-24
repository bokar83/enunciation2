import { ProgressChart } from '@/components/ProgressChart'
import { StatsCard } from '@/components/StatsCard'
import { MotivationQuote } from '@/components/MotivationQuote'

// Mock data - in a real app, this would come from your database
const mockStats = {
  totalRecordings: 24,
  averageScore: 78,
  improvementTrend: '+12%',
  streakDays: 7
}

const mockProgressData = [
  { date: '2024-01-01', pace: 65, clarity: 70, confidence: 68 },
  { date: '2024-01-02', pace: 68, clarity: 72, confidence: 70 },
  { date: '2024-01-03', pace: 70, clarity: 75, confidence: 72 },
  { date: '2024-01-04', pace: 72, clarity: 78, confidence: 75 },
  { date: '2024-01-05', pace: 75, clarity: 80, confidence: 78 },
  { date: '2024-01-06', pace: 78, clarity: 82, confidence: 80 },
  { date: '2024-01-07', pace: 80, clarity: 85, confidence: 82 }
]

export default function ProgressPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-navy-900 mb-4">
            Your Progress
          </h1>
          <p className="text-lg text-carbon-600">
            Track your speaking improvement over time
          </p>
        </div>

        {/* Growth Motivation */}
        <div className="mb-8">
          <MotivationQuote 
            category="growth"
            autoRotate={true}
            rotationInterval={10000}
            className="max-w-3xl mx-auto"
          />
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <StatsCard
            title="Total Recordings"
            value={mockStats.totalRecordings}
            icon="🎙️"
          />
          <StatsCard
            title="Average Score"
            value={`${mockStats.averageScore}%`}
            icon="📊"
          />
          <StatsCard
            title="Improvement"
            value={mockStats.improvementTrend}
            icon="📈"
          />
          <StatsCard
            title="Streak Days"
            value={mockStats.streakDays}
            icon="🔥"
          />
        </div>
        
        {/* Progress Chart */}
        <div className="card">
          <h2 className="text-xl font-semibold text-navy-900 mb-6">
            Performance Over Time
          </h2>
          <ProgressChart data={mockProgressData} />
        </div>
      </div>
    </div>
  )
}
