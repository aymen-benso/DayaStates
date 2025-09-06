import { Hero } from "@/components/hero"
import { WhyChooseUs } from "@/components/WhyChooseUs"
import { OurValue } from "@/components/OurValue"
import { FeaturedProperties } from "@/components/featured-properties"
import { NewProperties } from "@/components/NewProperties"
import { CTASection } from "@/components/CTASection"
import { Categories } from "@/components/Categories"

export default function HomePage() {
 return (
   <div className="min-h-screen bg-background">
     <main>
       <Hero />
       <WhyChooseUs />
       <OurValue />
       <Categories />
       <FeaturedProperties />
       <NewProperties />
       <CTASection />
     </main>
   </div>
 )
}
