"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('loading')

    const formElement = e.target as HTMLFormElement
    const formData = new FormData(formElement)

    // Google Form ID from your URL
    const FORM_ID = '1FAIpQLSca8IKx3fbxF6D-dU3mfqT3MB28wax1xujn2fViw5efm5jIhw'

    try {
      await fetch(
        `https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`,
        {
          method: 'POST',
          mode: 'no-cors',
          body: new URLSearchParams({
            'entry.1003667311': formData.get('name') as string,
            'entry.1183291463': formData.get("message") as string,
            'emailAddress': formData.get('email') as string,
            'submissionTimestamp': Date.now().toString(),
          })
        }
      )

      setFormStatus('success')
      formElement.reset()
    } catch (error) {
      console.error('Error submitting form:', error)
      setFormStatus('error')
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-12"
    >
      <h2 className="text-3xl font-semibold mb-8 gradient-text text-center rounded-xl">Get in Touch</h2>
      <div className="max-w-2xl mx-auto card-animation relative overflow-hidden bg-card/50 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-slate-400/20 animated-border card-hover">
        <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-gradient-to-r from-primary/30 to-secondary/30 blur-2xl" />
        <div className="relative">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-900 dark:text-gray-100">Name</label>
              <Input
                id="name"
                name="name"
                required
                className="rounded-xl bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
              ></Input>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-900 dark:text-gray-100">Email</label>
              <Input
                type="email"
                id="email"
                name="email"
                required
                className="rounded-xl bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-900 dark:text-gray-100">Message</label>
              <Textarea
                id="message"
                name="message"
                rows={6}
                required
                className="rounded-xl bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700"
              disabled={formStatus === 'loading'}
            >
              {formStatus === 'loading' ? 'Sending...' : 'Send Message'}
            </Button>
            {formStatus === 'success' && (
              <p className="text-emerald-500 text-center font-medium rounded-lg bg-emerald-50 dark:bg-emerald-900/20 p-2">Message sent successfully!</p>
            )}
            {formStatus === 'error' && (
              <p className="text-rose-500 text-center font-medium rounded-lg bg-rose-50 dark:bg-rose-900/20 p-2">Failed to send message. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </motion.section>
  )
}

