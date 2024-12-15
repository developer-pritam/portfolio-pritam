"use client"

import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaCode } from 'react-icons/fa'
import { content } from '@/lib/content'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface ProjectsProps {
  limit?: number;
}

export default function Projects({ limit }: ProjectsProps) {
  const projects = limit ? content.projects.slice(0, limit) : content.projects;
  const hasMore = limit && content.projects.length > limit;

  return (
    <motion.section
      id="projects"
      className="py-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="card-animation relative overflow-hidden bg-card/50 text-card-foreground shadow-lg rounded-xl border border-slate-400/20 animated-border card-hover"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-gradient-to-r from-primary/30 to-secondary/30 blur-2xl" />
              <div className="relative p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <p className="mb-4"><strong>Tools:</strong> {project.tools}</p>
                <div className="flex space-x-4">
                  <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <Button className="flex items-center rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      <FaExternalLinkAlt className="mr-2" /> Live Preview
                    </Button>
                  </Link>
                  <Link href={project.codeLink} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="flex items-center rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-primary/10">
                      <FaCode className="mr-2" /> Code
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {hasMore && (
          <div className="mt-12 text-center">
            <Link href="/projects">
              <Button className="rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
                View All Projects
              </Button>
            </Link>
          </div>
        )}
      </div>
    </motion.section>
  )
}
