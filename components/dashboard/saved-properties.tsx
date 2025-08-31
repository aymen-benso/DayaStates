import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Bed, Bath, Square, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const savedProperties = [
  {
    id: "2",
    title: "Villa avec piscine à Nice",
    location: "Nice, Côte d'Azur",
    price: 1200000,
    type: "Vente",
    bedrooms: 4,
    bathrooms: 3,
    surface: 150,
    image: "/villa-with-pool-nice-france.png",
  },
  {
    id: "3",
    title: "Appartement centre-ville Lyon",
    location: "Lyon 2ème",
    price: 2500,
    type: "Location",
    bedrooms: 2,
    bathrooms: 1,
    surface: 65,
    image: "/apartment-lyon-city-center.png",
  },
]

export function SavedProperties() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Propriétés sauvegardées</CardTitle>
        <Button variant="outline" size="sm" asChild>
          <Link href="/dashboard/favorites">
            Voir tout
            <ExternalLink className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {savedProperties.map((property) => (
            <div key={property.id} className="flex gap-4 p-3 border rounded-lg hover:bg-accent/50 transition-colors">
              <div className="relative w-20 h-16 rounded-md overflow-hidden flex-shrink-0">
                <Image src={property.image || "/placeholder.svg"} alt={property.title} fill className="object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-1">
                  <h4 className="font-medium text-sm truncate">{property.title}</h4>
                  <Badge variant={property.type === "Vente" ? "default" : "secondary"} className="text-xs ml-2">
                    {property.type}
                  </Badge>
                </div>
                <div className="flex items-center text-muted-foreground mb-2">
                  <MapPin className="h-3 w-3 mr-1" />
                  <span className="text-xs truncate">{property.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <div className="flex items-center">
                      <Bed className="h-3 w-3 mr-1" />
                      <span>{property.bedrooms}</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-3 w-3 mr-1" />
                      <span>{property.bathrooms}</span>
                    </div>
                    <div className="flex items-center">
                      <Square className="h-3 w-3 mr-1" />
                      <span>{property.surface}m²</span>
                    </div>
                  </div>
                  <div className="text-sm font-semibold text-primary">
                    {property.price.toLocaleString()}€{property.type === "Location" && "/mois"}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
