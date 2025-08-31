"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MapPin, Bed, Bath, Square, Edit, Eye, MoreHorizontal, Plus, Search, Filter } from "lucide-react"
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
    createdAt: "2024-01-15",
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
    createdAt: "2024-01-10",
  },
  {
    id: "7",
    title: "Studio moderne Marseille",
    location: "Marseille Vieux-Port",
    price: 1200,
    type: "Location",
    bedrooms: 1,
    bathrooms: 1,
    surface: 35,
    image: "/studio-moderne-toulouse.png",
    status: "active",
    views: 156,
    inquiries: 8,
    createdAt: "2024-01-08",
  },
]

export function MyListingsManager() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")

  const filteredListings = myListings.filter((listing) => {
    const matchesSearch =
      listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || listing.status === statusFilter
    const matchesType =
      typeFilter === "all" ||
      (typeFilter === "sale" && listing.type === "Vente") ||
      (typeFilter === "rent" && listing.type === "Location")

    return matchesSearch && matchesStatus && matchesType
  })

  return (
    <div className="space-y-6">
      {/* Header with Add Button */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Gestion des annonces</h2>
          <p className="text-muted-foreground">Créez et gérez vos annonces immobilières</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Nouvelle annonce
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Rechercher dans mes annonces..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-48">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les statuts</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="pending">En attente</SelectItem>
                <SelectItem value="sold">Vendu/Loué</SelectItem>
              </SelectContent>
            </Select>

            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les types</SelectItem>
                <SelectItem value="sale">Vente</SelectItem>
                <SelectItem value="rent">Location</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-primary">{myListings.length}</div>
            <p className="text-sm text-muted-foreground">Total annonces</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-green-600">
              {myListings.filter((l) => l.status === "active").length}
            </div>
            <p className="text-sm text-muted-foreground">Actives</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-blue-600">{myListings.reduce((sum, l) => sum + l.views, 0)}</div>
            <p className="text-sm text-muted-foreground">Vues totales</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-orange-600">
              {myListings.reduce((sum, l) => sum + l.inquiries, 0)}
            </div>
            <p className="text-sm text-muted-foreground">Demandes reçues</p>
          </CardContent>
        </Card>
      </div>

      {/* Listings */}
      <div className="space-y-4">
        {filteredListings.map((listing) => (
          <Card key={listing.id}>
            <CardContent className="p-6">
              <div className="flex gap-6">
                <div className="relative w-32 h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <Image src={listing.image || "/placeholder.svg"} alt={listing.title} fill className="object-cover" />
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-lg text-balance">{listing.title}</h3>
                      <div className="flex items-center text-muted-foreground mt-1">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="text-sm">{listing.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={listing.status === "active" ? "default" : "secondary"}>
                        {listing.status === "active" ? "Active" : "En attente"}
                      </Badge>
                      <Badge variant={listing.type === "Vente" ? "default" : "secondary"}>{listing.type}</Badge>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Edit className="h-4 w-4 mr-2" />
                            Modifier
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href={`/properties/${listing.id}`}>
                              <Eye className="h-4 w-4 mr-2" />
                              Voir l'annonce
                            </Link>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Bed className="h-4 w-4 mr-1" />
                        <span>{listing.bedrooms}</span>
                      </div>
                      <div className="flex items-center">
                        <Bath className="h-4 w-4 mr-1" />
                        <span>{listing.bathrooms}</span>
                      </div>
                      <div className="flex items-center">
                        <Square className="h-4 w-4 mr-1" />
                        <span>{listing.surface}m²</span>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-xl font-bold text-primary">
                        {listing.price.toLocaleString()}€{listing.type === "Location" && "/mois"}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {listing.views} vues • {listing.inquiries} demandes
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredListings.length === 0 && (
        <Card>
          <CardContent className="p-8 text-center">
            <p className="text-muted-foreground mb-4">Aucune annonce trouvée avec ces critères.</p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("")
                setStatusFilter("all")
                setTypeFilter("all")
              }}
            >
              Réinitialiser les filtres
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
