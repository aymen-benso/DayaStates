import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Bed, Bath, Square, Heart, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Property {
  id: string
  title: string
  location: string
  price: number
  type: string
  bedrooms: number
  bathrooms: number
  surface: number
  image: string
  features?: string[]
}

interface PropertyCardProps {
  property: Property
  viewMode?: "grid" | "list"
}

export function PropertyCard({ property, viewMode = "grid" }: PropertyCardProps) {
  if (viewMode === "list") {
    return (
      <Card className="overflow-hidden hover:shadow-lg transition-shadow">
        <div className="flex flex-col md:flex-row">
          <div className="relative md:w-80 h-48 md:h-auto">
            <Image src={property.image || "/placeholder.svg"} alt={property.title} fill className="object-cover" />
            <Badge className="absolute top-3 left-3" variant={property.type === "Vente" ? "default" : "secondary"}>
              {property.type}
            </Badge>
            <Button size="icon" variant="ghost" className="absolute top-3 right-3 bg-white/80 hover:bg-white">
              <Heart className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex-1 p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-semibold text-xl mb-2 text-balance">{property.title}</h3>
                <div className="flex items-center text-muted-foreground mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-primary">
                  {property.price.toLocaleString()}€{property.type === "Location" && "/mois"}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
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

              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Eye className="h-4 w-4 mr-2" />
                  Voir
                </Button>
                <Button size="sm" asChild>
                  <Link href={`/properties/${property.id}`}>Détails</Link>
                </Button>
              </div>
            </div>

            {property.features && property.features.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {property.features.slice(0, 3).map((feature) => (
                  <Badge key={feature} variant="outline" className="text-xs">
                    {feature}
                  </Badge>
                ))}
                {property.features.length > 3 && (
                  <Badge variant="outline" className="text-xs">
                    +{property.features.length - 3} autres
                  </Badge>
                )}
              </div>
            )}
          </div>
        </div>
      </Card>
    )
  }

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
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

        <div className="text-2xl font-bold text-primary mb-4">
          {property.price.toLocaleString()}€{property.type === "Location" && "/mois"}
        </div>

        {property.features && property.features.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {property.features.slice(0, 2).map((feature) => (
              <Badge key={feature} variant="outline" className="text-xs">
                {feature}
              </Badge>
            ))}
            {property.features.length > 2 && (
              <Badge variant="outline" className="text-xs">
                +{property.features.length - 2}
              </Badge>
            )}
          </div>
        )}
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button className="w-full" asChild>
          <Link href={`/properties/${property.id}`}>Voir les détails</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
