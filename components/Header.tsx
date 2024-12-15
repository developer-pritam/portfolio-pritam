"use client"

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import SocialLinks from './SocialLinks'

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md transition-colors duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <span className="text-blue-600 dark:text-blue-400">Pritam</span> Kumar
        </h1>
        <nav className="flex items-center space-x-4">
          <a href="#about" className="hidden md:inline-block hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
          <a href="#experience" className="hidden md:inline-block hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Experience</a>
          <a href="#projects" className="hidden md:inline-block hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a>
          <SocialLinks variant="simple" />
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>
      </div>
    </header>
  )
}

