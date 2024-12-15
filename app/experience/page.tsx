import Experience from '@/components/Experience'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Experience',
  description: 'Professional experience and career highlights of Pritam Kumar, a backend engineer specializing in cloud technologies.',
}

export default function ExperiencePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <main className="container mx-auto px-4 py-16">
        <Experience />
      </main>
    </div>
  )
}

