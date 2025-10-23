import { ExerciseCard } from '@/components/ExerciseCard'

const exercises = [
  {
    id: 1,
    title: 'Slow Reading Practice',
    description: 'Read passages at a controlled pace to improve clarity',
    icon: '📖',
    difficulty: 'Beginner',
    duration: '5 minutes'
  },
  {
    id: 2,
    title: 'Repeat After Me',
    description: 'Practice pronunciation with guided exercises',
    icon: '🔄',
    difficulty: 'Intermediate',
    duration: '10 minutes'
  },
  {
    id: 3,
    title: 'Tongue Twisters',
    description: 'Challenge your articulation with fun phrases',
    icon: '🗣️',
    difficulty: 'Advanced',
    duration: '15 minutes'
  },
  {
    id: 4,
    title: 'Breathing Exercises',
    description: 'Learn proper breathing for confident speaking',
    icon: '🫁',
    difficulty: 'Beginner',
    duration: '8 minutes'
  }
]

export default function ExercisesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-navy-900 mb-4">
            Practice Exercises
          </h1>
          <p className="text-lg text-carbon-600">
            Choose an exercise to improve your speaking skills
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {exercises.map((exercise) => (
            <ExerciseCard key={exercise.id} exercise={exercise} />
          ))}
        </div>
      </div>
    </div>
  )
}
