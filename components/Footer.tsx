import SocialLinks from './SocialLinks'
import { content } from '@/lib/content'

export default function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t border-border">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-muted-foreground">&copy; {new Date().getFullYear()} {content.name}. All rights reserved.</p>
          </div>
          <SocialLinks variant="simple" />
        </div>
      </div>
    </footer>
  )
}

