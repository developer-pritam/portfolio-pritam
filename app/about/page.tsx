import About from '@/components/About'
import Contact from '@/components/Contact'

export const metadata = {
  title: 'About',
  description: 'Learn more about Pritam Kumar, a backend engineer with expertise in cloud technologies and full-stack development.',
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <About />
      <Contact />
    </div>
  )
}

