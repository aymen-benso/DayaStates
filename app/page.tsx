import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { FeaturedProperties } from "@/components/featured-properties"
import { SearchSection } from "@/components/search-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <SearchSection />
        <FeaturedProperties />
      </main>
    </div>
  )
}
