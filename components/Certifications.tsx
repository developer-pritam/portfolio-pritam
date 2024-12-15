"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { content } from '@/lib/content'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface CertificationsProps {
  limit?: number;
}

export default function Certifications({ limit }: CertificationsProps) {
  const certifications = limit ? content.certifications.slice(0, limit) : content.certifications;
  const hasMore = limit && content.certifications.length > limit;

  return (
    <section className="py-12">
      <h2 className="text-3xl font-semibold mb-8 gradient-text text-center">Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="card-animation relative overflow-hidden bg-card/50 text-card-foreground rounded-xl shadow-lg border border-slate-400/20 animated-border group cursor-pointers"
            onClick={() => window.open(cert.certificate_link, '_blank')}
          >
            <div className='p-6'>
              <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-gradient-to-r from-primary/30 to-secondary/30 blur-2xl" />
              <div className="relative h-full">
                <div className="h-20 w-20 mx-auto mb-4">
                  <Image
                    src={"/images/" + cert.logo_path}
                    alt={cert.alt_name}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-center mb-2">{cert.title}</h3>
                <p className="text-muted-foreground text-center">{cert.subtitle}</p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl cursor-pointer">
                <span className="text-white font-medium">View Certificate</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {hasMore && (
        <div className="mt-12 text-center">
          <Link href="/education">
            <Button className="rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
              View All Certifications
            </Button>
          </Link>
        </div>
      )}
    </section>
  )
}
