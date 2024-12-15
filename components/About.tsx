"use client"

import { motion } from 'framer-motion'
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { content } from '@/lib/content'
import SocialLinks from '@/components/SocialLinks'



export default function About() {
  return (
    <section className='py-20'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4"
      >
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
          About Me
        </h2>
        <div className="card-animation relative overflow-hidden bg-card/50 text-card-foreground rounded-xl shadow-lg border border-slate-400/20 animated-border card-hover p-8">
          <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-gradient-to-r from-primary/30 to-secondary/30 blur-2xl" />
          <div className="relative prose dark:prose-invert max-w-none">
            <p className="text-lg mb-6">
              {content.bio}
            </p>


            <>
              <h3 className="text-2xl font-semibold mb-4 gradient-text">My Journey</h3>
              <p className="mb-6">
                Starting my career as an Android App Developer, I quickly evolved into a full-stack developer
                with a strong focus on backend technologies. I've worked with various startups and companies,
                helping them build scalable solutions and optimize their development processes.
              </p>

              <h3 className="text-2xl font-semibold mb-4 gradient-text">What I Do</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Design and develop scalable backend systems</li>
                <li>Create efficient database schemas and optimize queries</li>
                <li>Implement cloud solutions using AWS, Azure, and GCP</li>
                <li>Develop full-stack applications using modern technologies</li>
                <li>Build and maintain RESTful APIs</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4 gradient-text">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <FaEnvelope className="text-primary" />
                  <a href={`mailto:${content.email}`} target="_blank" className="hover:text-primary transition-colors">
                    {content.email}
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <FaMapMarkerAlt className="text-primary" />
                  <a href={`${content.locationUrl}`} target="_blank" className="hover:text-primary transition-colors">

                    {content.location}
                  </a>
                </div>
              </div>

              <div className="flex space-x-4 mt-8">
                <SocialLinks variant="buttons" />
              </div>
            </>

          </div>
        </div>
      </motion.div>
    </section>
  )
}

