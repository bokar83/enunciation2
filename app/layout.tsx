import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navigation } from '@/components/Navigation'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { ThemeToggle } from '@/components/ThemeToggle'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Enunciation Coach',
  description: 'Improve your speech clarity, pacing, and confidence with AI-powered feedback',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <div className="min-h-screen bg-mist-300 dark:bg-carbon-900 transition-colors duration-200">
            <Navigation />
            <ThemeToggle />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
