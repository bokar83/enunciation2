'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Navigation() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <nav className="bg-white shadow-sm border-b border-mist-400">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl">🗣️</span>
            <span className="text-xl font-bold text-navy-900">Enunciation Coach</span>
          </Link>
          
          <div className="flex space-x-6">
            <Link
              href="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                isActive('/') 
                  ? 'text-ocean-600 bg-ocean-50' 
                  : 'text-carbon-600 hover:text-ocean-600 hover:bg-ocean-50'
              }`}
            >
              Home
            </Link>
            <Link
              href="/record"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                isActive('/record') 
                  ? 'text-ocean-600 bg-ocean-50' 
                  : 'text-carbon-600 hover:text-ocean-600 hover:bg-ocean-50'
              }`}
            >
              Record
            </Link>
            <Link
              href="/exercises"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                isActive('/exercises') 
                  ? 'text-ocean-600 bg-ocean-50' 
                  : 'text-carbon-600 hover:text-ocean-600 hover:bg-ocean-50'
              }`}
            >
              Exercises
            </Link>
            <Link
              href="/progress"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                isActive('/progress') 
                  ? 'text-ocean-600 bg-ocean-50' 
                  : 'text-carbon-600 hover:text-ocean-600 hover:bg-ocean-50'
              }`}
            >
              Progress
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
