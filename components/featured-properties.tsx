import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Bed, Bath, Square, Heart } from "lucide-react"
import Image from "next/image"

const featuredProperties = [
  {
    id: 1,
    title: "Appartement moderne à Paris",
    location: "Paris 16ème",
    price: "850,000",
    type: "Vente",
    bedrooms: 3,
    bathrooms: 2,
    surface: 85,
    image: "/modern-apartment-paris.png",
  },
  {
    id: 2,
    title: "Villa avec piscine à Nice",
    location: "Nice, Côte d'Azur",
    price: "1,200,000",
    type: "Vente",
    bedrooms: 4,
    bathrooms: 3,
    surface: 150,
    image: "/villa-with-pool-nice-france.png",
  },
  {
    id: 3,
    title: "Appartement centre-ville Lyon",
    location: "Lyon 2ème",
    price: "2,500",
    type: "Location",
    bedrooms: 2,
    bathrooms: 1,
    surface: 65,
    image: "/apartment-lyon-city-center.png",
  },
]

export function FeaturedProperties() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Propriétés en vedette</h2>
          <p className="text-muted-foreground">Découvrez notre sélection de biens d'exception</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProperties.map((property) => (
            <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <Image
                  src={property.image || "/placeholder.svg"}
                  alt={property.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-3 left-3" variant={property.type === "Vente" ? "default" : "secondary"}>
                  {property.type}
                </Badge>
                <Button size="icon" variant="ghost" className="absolute top-3 right-3 bg-white/80 hover:bg-white">
                  <Heart className="h-4 w-4" />
                </Button>
              </div>

              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2 text-balance">{property.title}</h3>
                <div className="flex items-center text-muted-foreground mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center">
                      <Bed className="h-4 w-4 mr-1" />
                      <span>{property.bedrooms}</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-4 w-4 mr-1" />
                      <span>{property.bathrooms}</span>
                    </div>
                    <div className="flex items-center">
                      <Square className="h-4 w-4 mr-1" />
                      <span>{property.surface}m²</span>
                    </div>
                  </div>
                </div>

                <div className="text-2xl font-bold text-primary">
                  {property.price}€{property.type === "Location" && "/mois"}
                </div>
              </CardContent>

              <CardFooter className="p-4 pt-0">
                <Button className="w-full">Voir les détails</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
