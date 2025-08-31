import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { MapPin, Calendar, Zap, Building, Bed, Bath, Square } from "lucide-react"

interface PropertyDetailsProps {
  property: {
    title: string
    location: string
    fullAddress: string
    price: number
    type: string
    bedrooms: number
    bathrooms: number
    surface: number
    description: string
    features: string[]
    yearBuilt: number
    energyClass: string
    floor: number
    totalFloors: number
  }
}

export function PropertyDetails({ property }: PropertyDetailsProps) {
  return (
    <div className="space-y-6">
      {/* Title and Price */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-3xl font-bold text-balance">{property.title}</h1>
          <Badge variant={property.type === "Vente" ? "default" : "secondary"}>{property.type}</Badge>
        </div>
        <div className="flex items-center text-muted-foreground mb-4">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{property.fullAddress}</span>
        </div>
        <div className="text-3xl font-bold text-primary">
          {property.price.toLocaleString()}€{property.type === "Location" && "/mois"}
        </div>
      </div>

      {/* Key Details */}
      <Card>
        <CardHeader>
          <CardTitle>Caractéristiques principales</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <Square className="h-5 w-5 text-primary" />
              <div>
                <div className="font-semibold">{property.surface}m²</div>
                <div className="text-sm text-muted-foreground">Surface</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Bed className="h-5 w-5 text-primary" />
              <div>
                <div className="font-semibold">{property.bedrooms}</div>
                <div className="text-sm text-muted-foreground">Chambres</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Bath className="h-5 w-5 text-primary" />
              <div>
                <div className="font-semibold">{property.bathrooms}</div>
                <div className="text-sm text-muted-foreground">Salles de bain</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Building className="h-5 w-5 text-primary" />
              <div>
                <div className="font-semibold">{property.floor}e étage</div>
                <div className="text-sm text-muted-foreground">sur {property.totalFloors}</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Description */}
      <Card>
        <CardHeader>
          <CardTitle>Description</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">{property.description}</p>
        </CardContent>
      </Card>

      {/* Features */}
      <Card>
        <CardHeader>
          <CardTitle>Équipements et services</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {property.features.map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Additional Info */}
      <Card>
        <CardHeader>
          <CardTitle>Informations complémentaires</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Année de construction</span>
            </div>
            <span className="font-medium">{property.yearBuilt}</span>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Classe énergétique</span>
            </div>
            <Badge variant="outline">{property.energyClass}</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
