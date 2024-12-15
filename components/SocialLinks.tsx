import { FaGithub, FaLinkedin, FaTwitter, FaCode } from 'react-icons/fa'
import { content } from '@/lib/content'
import { Button } from './ui/button'

interface SocialLinksProps {
    variant?: 'default' | 'buttons' | 'simple'
    className?: string
}

export default function SocialLinks({ variant = 'default', className = '' }: SocialLinksProps) {
    if (variant === 'buttons') {
        return (
            <div className={`flex space-x-4 ${className}`}>
                <a href={content.socialLinks.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon" className="rounded-full">
                        <FaGithub className="h-5 w-5" />
                    </Button>
                </a>
                <a href={content.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon" className="rounded-full">
                        <FaLinkedin className="h-5 w-5" />
                    </Button>
                </a>
                <a href={content.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon" className="rounded-full">
                        <FaTwitter className="h-5 w-5" />
                    </Button>
                </a>
            </div>
        )
    }

    if (variant === 'simple') {
        return (
            <div className={`flex space-x-6 ${className}`}>
                <a
                    href={content.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                >
                    <FaGithub className="h-6 w-6" />
                </a>
                <a
                    href={content.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                >
                    <FaLinkedin className="h-6 w-6" />
                </a>
                <a
                    href={content.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                >
                    <FaTwitter className="h-6 w-6" />
                </a>
            </div>
        )
    }

    // Default variant
    return (
        <div className={`flex justify-center space-x-6 ${className}`}>
            <a
                href={content.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
            >
                <FaGithub size={24} />
            </a>
            <a
                href={content.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
            >
                <FaLinkedin size={24} />
            </a>
            <a
                href={content.socialLinks.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
            >
                <FaCode size={24} />
            </a>
        </div>
    )
}
