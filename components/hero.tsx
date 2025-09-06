import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-primary/10 to-secondary/10 py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text Content Div */}
          <div className="text-center lg:text-left mt-16">
            <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
              Trouvez votre <span className="text-primary">propriété idéale</span> en France
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty mb-8 max-w-2xl">
              Découvrez des milliers d'appartements, villas, hôtels et terrains à vendre ou à louer dans toute la France
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" asChild>
                <Link href="/search" className="flex items-center gap-2">
                  <Search className="h-5 w-5" />
                  Commencer la recherche
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/sell">Vendre ma propriété</Link>
              </Button>
            </div>
          </div>

          {/* Image Div */}
          <div className="relative">
            <div className="relative aspect-[9/10] lg:aspect-[9/10] rounded-lg overflow-hidden shadow-2xl rounded-bl-[220px]">
              <Image
                src="/hero.png"
                alt="Propriété idéale en France"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}