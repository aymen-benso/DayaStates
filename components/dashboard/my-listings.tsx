import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Bed, Bath, Square, ExternalLink, Edit, Eye, MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from "next/image"
import Link from "next/link"

const myListings = [
  {
    id: "1",
    title: "Appartement moderne à Paris",
    location: "Paris 16ème",
    price: 850000,
    type: "Vente",
    bedrooms: 3,
    bathrooms: 2,
    surface: 85,
    image: "/modern-apartment-paris.png",
    status: "active",
    views: 247,
    inquiries: 12,
  },
  {
    id: "4",
    title: "Maison familiale Bordeaux",
    location: "Bordeaux Centre",
    price: 650000,
    type: "Vente",
    bedrooms: 4,
    bathrooms: 2,
    surface: 120,
    image: "/maison-familiale-bordeaux.png",
    status: "pending",
    views: 89,
    inquiries: 5,
  },
]

export function MyListings() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Mes annonces récentes</CardTitle>
        <Button variant="outline" size="sm" asChild>
          <Link href="/dashboard/listings">
            Gérer toutes mes annonces
            <ExternalLink className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {myListings.map((listing) => (
            <div key={listing.id} className="flex gap-4 p-4 border rounded-lg">
              <div className="relative w-24 h-20 rounded-md overflow-hidden flex-shrink-0">
                <Image src={listing.image || "/placeholder.svg"} alt={listing.title} fill className="object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-medium text-balance">{listing.title}</h4>
                    <div className="flex items-center text-muted-foreground mt-1">
                      <MapPin className="h-3 w-3 mr-1" />
                      <span className="text-sm">{listing.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={listing.status === "active" ? "default" : "secondary"}>
                      {listing.status === "active" ? "Active" : "En attente"}
                    </Badge>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Edit className="h-4 w-4 mr-2" />
                          Modifier
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Eye className="h-4 w-4 mr-2" />
                          Voir l'annonce
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Bed className="h-3 w-3 mr-1" />
                      <span>{listing.bedrooms}</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-3 w-3 mr-1" />
                      <span>{listing.bathrooms}</span>
                    </div>
                    <div className="flex items-center">
                      <Square className="h-3 w-3 mr-1" />
                      <span>{listing.surface}m²</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-primary">
                      {listing.price.toLocaleString()}€{listing.type === "Location" && "/mois"}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {listing.views} vues • {listing.inquiries} demandes
                    </div>
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
