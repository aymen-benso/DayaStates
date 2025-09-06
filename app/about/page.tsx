import { About } from "@/components/About"
import { OurNumbers } from "@/components/OurNumbers"
import { Services } from "@/components/Services"
import { TestimonialsSection } from "@/components/TestimonialsSection"
import { Categories } from "@/components/Categories"

export default function AboutPage() {
  return (
    <div>
      <About />
      <OurNumbers />
      <Categories />
      <Services />
      <TestimonialsSection />
    </div>
  )
}