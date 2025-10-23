import Link from 'next/link'

interface Exercise {
  id: number
  title: string
  description: string
  icon: string
  difficulty: string
  duration: string
}

interface ExerciseCardProps {
  exercise: Exercise
}

export function ExerciseCard({ exercise }: ExerciseCardProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-ocean-100 text-ocean-800'
      case 'Intermediate':
        return 'bg-clay-100 text-clay-800'
      case 'Advanced':
        return 'bg-orange-100 text-orange-800'
      default:
        return 'bg-mist-100 text-carbon-800'
    }
  }

  return (
    <div className="card hover:shadow-lg transition-shadow duration-200">
      <div className="text-4xl mb-4">{exercise.icon}</div>
      <h3 className="text-xl font-semibold text-navy-900 mb-2">{exercise.title}</h3>
      <p className="text-carbon-600 mb-4">{exercise.description}</p>
      
      <div className="flex justify-between items-center mb-4">
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(exercise.difficulty)}`}>
          {exercise.difficulty}
        </span>
        <span className="text-sm text-carbon-500">{exercise.duration}</span>
      </div>
      
      <Link
        href={`/exercises/${exercise.id}`}
        className="btn-primary w-full text-center block"
      >
        Start Exercise
      </Link>
    </div>
  )
}
