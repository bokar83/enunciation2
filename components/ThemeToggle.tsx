'use client'

import { useTheme } from '@/contexts/ThemeContext'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 bg-white dark:bg-carbon-900 border border-mist-300 dark:border-carbon-700 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ocean-400"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <span className="text-2xl">🌙</span>
      ) : (
        <span className="text-2xl">☀️</span>
      )}
    </button>
  )
}
