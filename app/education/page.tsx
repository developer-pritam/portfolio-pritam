import Certifications from '@/components/Certifications'
import Education from '@/components/Education'
import SocialLinks from '@/components/SocialLinks'

export const metadata = {
  title: 'Education',
  description: 'Educational background and professional certifications of Pritam Kumar, a backend engineer specializing in cloud technologies.',
}

export default function EducationPage() {

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center mt-16 gradient-text">
        Education & Certifications
      </h1>
      <SocialLinks variant='buttons' className="flex justify-center mt-8 scale-125" />
      <Education />
      <Certifications />
    </div>
  )
}

