interface StatsCardProps {
  title: string
  value: string | number
  icon: string
}

export function StatsCard({ title, value, icon }: StatsCardProps) {
  return (
    <div className="card text-center">
      <div className="text-3xl mb-2">{icon}</div>
      <div className="text-2xl font-bold text-navy-900 mb-1">{value}</div>
      <div className="text-sm text-carbon-600">{title}</div>
    </div>
  )
}
