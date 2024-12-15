"use client"

import { motion } from 'framer-motion'
import { content } from '@/lib/content'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface EducationProps {
  limit?: number;
}

export default function Education({ limit }: EducationProps) {
  const educationItems = limit ? content.education.slice(0, limit) : content.education;
  const hasMore = limit && content.education.length > limit;

  return (
    <motion.section
      className="py-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Education
          </span>
        </h2>
        <div className="space-y-8">
          {educationItems.map((edu, index) => (
            <motion.div
              key={index}
              className="card-animation relative overflow-hidden bg-card/50 text-card-foreground shadow-lg rounded-xl border border-slate-400/20 animated-border card-hover p-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-gradient-to-r from-primary/30 to-secondary/30 blur-2xl" />
              <div className="relative">
                <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                <p className="text-primary mb-2">{edu.institution}</p>
                <p className="text-sm text-muted-foreground">{edu.period} | {edu.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {hasMore && (
          <div className="mt-12 text-center">
            <Link href="/education">
              <Button className="rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
                View All Education
              </Button>
            </Link>
          </div>
        )}
      </div>
    </motion.section>
  )
}

