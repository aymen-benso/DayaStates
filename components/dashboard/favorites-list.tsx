"use client"

import { useState } from "react"
import { PropertyCard } from "@/components/property/property-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Filter } from "lucide-react"

// Mock favorites data
const favoriteProperties = [
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
    features: ["Piscine", "Jardin", "Garage"],
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
    features: ["Ascenseur", "Balcon"],
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
    features: ["Jardin", "Garage", "Cave"],
  },
  {
    id: "5",
    title: "Studio étudiant Toulouse",
    location: "Toulouse Capitole",
    price: 800,
    type: "Location",
    bedrooms: 1,
    bathrooms: 1,
    surface: 25,
    image: "/studio-moderne-toulouse.png",
    features: ["Meublé", "Ascenseur"],
  },
]

export function FavoritesList() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState("all")
  const [sortBy, setSortBy] = useState("recent")

  const filteredProperties = favoriteProperties.filter((property) => {
    const matchesSearch =
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter =
      filterType === "all" ||
      (filterType === "sale" && property.type === "Vente") ||
      (filterType === "rent" && property.type === "Location")

    return matchesSearch && matchesFilter
  })

  return (
    <div className="space-y-6">
      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Rechercher dans mes favoris..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-48">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les types</SelectItem>
                <SelectItem value="sale">Vente</SelectItem>
                <SelectItem value="rent">Location</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Plus récent</SelectItem>
                <SelectItem value="price-asc">Prix croissant</SelectItem>
                <SelectItem value="price-desc">Prix décroissant</SelectItem>
                <SelectItem value="surface">Surface</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">
            {filteredProperties.length} propriété{filteredProperties.length > 1 ? "s" : ""} sauvegardée
            {filteredProperties.length > 1 ? "s" : ""}
          </h2>
        </div>

        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="p-8 text-center">
              <p className="text-muted-foreground">Aucune propriété trouvée avec ces critères.</p>
              <Button
                variant="outline"
                className="mt-4 bg-transparent"
                onClick={() => {
                  setSearchTerm("")
                  setFilterType("all")
                }}
              >
                Réinitialiser les filtres
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
