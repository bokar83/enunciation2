'use client'

interface ProgressData {
  date: string
  pace: number
  clarity: number
  confidence: number
}

interface ProgressChartProps {
  data: ProgressData[]
}

export function ProgressChart({ data }: ProgressChartProps) {
  const maxValue = Math.max(...data.flatMap(d => [d.pace, d.clarity, d.confidence]))
  const minValue = Math.min(...data.flatMap(d => [d.pace, d.clarity, d.confidence]))

  const getYPosition = (value: number) => {
    return ((maxValue - value) / (maxValue - minValue)) * 200 + 20
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    })
  }

  return (
    <div className="relative">
      <svg width="100%" height="300" className="overflow-visible">
        {/* Grid lines */}
        {[0, 25, 50, 75, 100].map(value => (
          <g key={value}>
            <line
              x1="60"
              y1={getYPosition(value)}
              x2="100%"
              y2={getYPosition(value)}
              stroke="#E3EAF1"
              strokeWidth="1"
            />
            <text
              x="50"
              y={getYPosition(value) + 5}
              textAnchor="end"
              className="text-xs fill-carbon-500"
            >
              {value}
            </text>
          </g>
        ))}

        {/* Pace line */}
        <polyline
          fill="none"
          stroke="#00B7C2"
          strokeWidth="2"
          points={data.map((d, i) => 
            `${60 + (i * (100 - 60) / (data.length - 1))},${getYPosition(d.pace)}`
          ).join(' ')}
        />

        {/* Clarity line */}
        <polyline
          fill="none"
          stroke="#B47C57"
          strokeWidth="2"
          points={data.map((d, i) => 
            `${60 + (i * (100 - 60) / (data.length - 1))},${getYPosition(d.clarity)}`
          ).join(' ')}
        />

        {/* Confidence line */}
        <polyline
          fill="none"
          stroke="#FF7A00"
          strokeWidth="2"
          points={data.map((d, i) => 
            `${60 + (i * (100 - 60) / (data.length - 1))},${getYPosition(d.confidence)}`
          ).join(' ')}
        />

        {/* Data points */}
        {data.map((d, i) => (
          <g key={i}>
            <circle
              cx={60 + (i * (100 - 60) / (data.length - 1))}
              cy={getYPosition(d.pace)}
              r="3"
              fill="#00B7C2"
            />
            <circle
              cx={60 + (i * (100 - 60) / (data.length - 1))}
              cy={getYPosition(d.clarity)}
              r="3"
              fill="#B47C57"
            />
            <circle
              cx={60 + (i * (100 - 60) / (data.length - 1))}
              cy={getYPosition(d.confidence)}
              r="3"
              fill="#FF7A00"
            />
          </g>
        ))}

        {/* X-axis labels */}
        {data.map((d, i) => (
          <text
            key={i}
            x={60 + (i * (100 - 60) / (data.length - 1))}
            y="290"
            textAnchor="middle"
            className="text-xs fill-carbon-500"
          >
            {formatDate(d.date)}
          </text>
        ))}
      </svg>

      {/* Legend */}
      <div className="flex justify-center space-x-6 mt-4">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-ocean-500 rounded-full mr-2"></div>
          <span className="text-sm text-carbon-600">Pace</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-clay-500 rounded-full mr-2"></div>
          <span className="text-sm text-carbon-600">Clarity</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
          <span className="text-sm text-carbon-600">Confidence</span>
        </div>
      </div>
    </div>
  )
}
