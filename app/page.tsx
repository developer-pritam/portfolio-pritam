import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Certifications from '@/components/Certifications'
// import About from '@/components/About'
// import { Button } from '@/components/ui/button'
// import Link from 'next/link'
// import { motion } from 'framer-motion'

// const shuttleVariants = {
//   initial: { y: 0 },
//   animate: {
//     y: [0, -10, 0],
//     transition: {
//       duration: 2,
//       repeat: Infinity,
//       ease: "easeInOut"
//     }
//   }
// }

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-gray-950 [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#e2e2e2_100%)] dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#1a1a1a_100%)] opacity-50"></div>
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <Skills />
        <Experience limit={2} />
        <Projects limit={2} />
        <Education limit={1} />
        <Certifications limit={3} />

      </main>
    </div>
  )
}
