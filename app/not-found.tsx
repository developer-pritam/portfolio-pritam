"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-[70vh] flex flex-col items-center justify-center px-4"
        >
            <h1 className="text-6xl md:text-8xl font-bold gradient-text mb-4">404</h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
                Oops! Page Not Found
            </h2>
            <p className="text-muted-foreground text-center mb-8 max-w-md">
                The page you're looking for doesn't exist or has been moved to another URL.
            </p>
            <Link href="/">
                <Button
                    className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700"
                >
                    Back to Home
                </Button>
            </Link>
        </motion.div>
    )
} 