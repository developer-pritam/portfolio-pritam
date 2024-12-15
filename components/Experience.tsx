"use client"

import { motion } from 'framer-motion'
import { content } from '@/lib/content'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface ExperienceProps {
  limit?: number;
}

export default function Experience({ limit }: ExperienceProps) {
  const experiences = limit ? content.experiences.slice(0, limit) : content.experiences;
  const hasMore = limit && content.experiences.length > limit;

  return (
    <motion.section
      id="experience"
      className="py-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Professional Experience
          </span>
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="card-animation relative overflow-hidden rounded-xl bg-card/50 text-card-foreground shadow-lg border border-slate-400/20 animated-border card-hover p-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-gradient-to-r from-primary/30 to-secondary/30 blur-2xl" />
              <div className="relative">
                <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                <p className="text-primary mb-2">{exp.company}</p>
                <p className="text-sm text-muted-foreground mb-4">{exp.period} | {exp.location}</p>
                <ul className="list-disc list-inside mb-4 space-y-2">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="text-muted-foreground">{resp}</li>
                  ))}
                </ul>
                <p><strong>Tools:</strong> <span className="text-muted-foreground">{exp.tools}</span></p>
              </div>
            </motion.div>
          ))}
        </div>

        {hasMore && (
          <div className="mt-12 text-center">
            <Link href="/experience">
              <Button className="rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
                View All Experience
              </Button>
            </Link>
          </div>
        )}
      </div>
    </motion.section>
  )
}
