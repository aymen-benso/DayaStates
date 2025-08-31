"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Check, X, Eye, MapPin, Euro, Building2 } from "lucide-react"

const pendingProperties = [
  {
    id: 1,
    title: "Appartement moderne 3 pièces",
    type: "Appartement",
    price: "450,000",
    location: "Paris 15ème",
    surface: "75 m²",
    owner: "Marie Dubois",
    ownerAvatar: "/placeholder.svg?height=32&width=32",
    submittedDate: "Il y a 2 heures",
    images: ["/modern-apartment-living.png"],
    status: "En attente",
  },
  {
    id: 2,
    title: "Villa avec piscine",
    type: "Villa",
    price: "850,000",
    location: "Cannes",
    surface: "200 m²",
    owner: "Pierre Martin",
    ownerAvatar: "/placeholder.svg?height=32&width=32",
    submittedDate: "Il y a 5 heures",
    images: ["/luxury-villa-pool.png"],
    status: "En attente",
  },
  {
    id: 3,
    title: "Studio centre-ville",
    type: "Studio",
    price: "180,000",
    location: "Lyon 2ème",
    surface: "25 m²",
    owner: "Sophie Laurent",
    ownerAvatar: "/placeholder.svg?height=32&width=32",
    submittedDate: "Il y a 1 jour",
    images: ["/city-center-studio.png"],
    status: "En attente",
  },
]

export function PropertyModeration() {
  const [properties, setProperties] = useState(pendingProperties)

  const handleApprove = (id: number) => {
    setProperties((props) => props.filter((p) => p.id !== id))
  }

  const handleReject = (id: number) => {
    setProperties((props) => props.filter((p) => p.id !== id))
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Annonces en Attente de Modération</CardTitle>
          <CardDescription>{properties.length} annonces nécessitent votre approbation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {properties.map((property) => (
              <div key={property.id} className="border rounded-lg p-6">
                <div className="flex gap-6">
                  <div className="w-48 h-32 rounded-lg overflow-hidden bg-muted">
                    <img
                      src={property.images[0] || "/placeholder.svg"}
                      alt={property.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-balance">{property.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {property.location}
                          </span>
                          <span>{property.surface}</span>
                          <Badge variant="outline">{property.type}</Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-primary flex items-center gap-1">
                          <Euro className="h-4 w-4" />
                          {property.price}
                        </div>
                        <Badge variant="secondary">{property.status}</Badge>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={property.ownerAvatar || "/placeholder.svg"} alt={property.owner} />
                          <AvatarFallback>
                            {property.owner
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-sm text-muted-foreground">
                          Par {property.owner} • {property.submittedDate}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-2" />
                          Voir détails
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleReject(property.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <X className="h-4 w-4 mr-2" />
                          Rejeter
                        </Button>
                        <Button
                          size="sm"
                          onClick={() => handleApprove(property.id)}
                          className="bg-emerald-600 hover:bg-emerald-700"
                        >
                          <Check className="h-4 w-4 mr-2" />
                          Approuver
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {properties.length === 0 && (
              <div className="text-center py-12 text-muted-foreground">
                <Building2 className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>Aucune annonce en attente de modération</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
