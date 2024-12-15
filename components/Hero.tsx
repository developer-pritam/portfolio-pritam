"use client"

import { motion } from 'framer-motion'
import { FaArrowDown } from 'react-icons/fa'
import { Link as ScrollLink } from 'react-scroll'
import SocialLinks from './SocialLinks'
import { content } from '@/lib/content'
export default function Hero() {
  return (
    <section className="min-h-[100dvh] flex flex-col justify-start items-center text-center relative overflow-hidden px-4 pt-20 pb-16 md:py-20">
      {/* Animated Background Lines */}
      <div className="absolute inset-0 -z-10">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[2px] w-[100px] md:w-[200px] bg-gradient-to-r from-primary/20 to-transparent"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
            animate={{
              x: [0, 100, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: Math.random() * 8 + 5,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 2,
            }}
          />
        ))}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i + 8}
            className="absolute h-[100px] md:h-[200px] w-[2px] bg-gradient-to-b from-primary/20 to-transparent"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
            animate={{
              y: [0, 100, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: Math.random() * 8 + 5,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="w-full max-w-3xl mx-auto flex flex-col">
        <div className="flex flex-col items-center justify-center">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl font-bold mb-2 md:mb-3 flex flex-col"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="mb-2">Hi, I'm</span>
            <span className="gradient-text mb-2">{content.name}</span>
            <motion.span
              className="text-lg sm:text-2xl md:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400 dark:from-blue-400 dark:to-cyan-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              {content.username}
            </motion.span>
          </motion.h1>
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl mb-4 md:mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Backend & Cloud Engineer
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Crafting robust backend solutions and leveraging cloud technologies to build scalable applications.
          </motion.p>

          <motion.div
            className="flex justify-center space-x-10 mb-12 md:mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <SocialLinks variant='buttons' className="scale-150" />
          </motion.div>
        </div>

        <div className="mt-8">
          <ScrollLink
            to="skills"
            smooth={true}
            duration={500}
            offset={-70}
            className="inline-block"
          >
            <motion.button
              className="animate-bounce bg-primary text-primary-foreground px-4 py-2 md:px-3 md:py-1.5 rounded-full flex items-center space-x-2 hover:bg-primary/90 transition-colors text-sm font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <span>Explore</span>
              <FaArrowDown className="text-sm" />
            </motion.button>
          </ScrollLink>
        </div>
      </div>
    </section>
  )
}
