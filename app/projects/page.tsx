import Projects from '@/components/Projects'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore my projects created by Pritam Kumar (Developer Pritam) as a backend engineer.',
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-gray-950 [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#4299e1_100%)] opacity-50"></div>
      <main className="container mx-auto px-4 py-16">
        <Projects />
      </main>
    </div>
  )
}

