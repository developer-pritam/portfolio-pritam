"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { content } from '@/lib/content'

export default function Skills() {
  return (
    <section id="skills" className="py-10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Technical Skills
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ duration: 0.2 }}
              viewport={{ once: true }}
              className="card-animation relative overflow-hidden rounded-xl bg-card/50 text-card-foreground shadow-lg border border-slate-400/20 animated-border card-hover p-6"
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-gradient-to-r from-primary/30 to-secondary/30 blur-2xl" />
              <div className="relative">
                {skill.icon && (
                  <Image
                    src={skill.icon}
                    alt={skill.category}
                    width={48}
                    height={48}
                    className="mb-4"
                  />
                )}
                <h3 className="text-xl font-semibold mb-2">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-sm bg-primary/10 dark:bg-white/10 rounded-full text-primary hover:bg-primary/20 dark:hover:bg-white/20 transition-colors duration-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
