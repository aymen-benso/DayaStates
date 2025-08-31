"use client"

import { useState } from "react"
import { PropertyCard } from "@/components/property/property-card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Grid, List, SlidersHorizontal } from "lucide-react"

// Mock data - in real app, this would come from API
const mockProperties = [
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
    features: ["Ascenseur", "Balcon", "Parking"],
  },
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
  {
    id: "6",
    title: "Penthouse Cannes",
    location: "Cannes La Croisette",
    price: 2800000,
    type: "Vente",
    bedrooms: 3,
    bathrooms: 3,
    surface: 140,
    image: "/penthouse-luxe-cannes.png",
    features: ["Terrasse", "Vue mer", "Parking", "Concierge"],
  },
]

export function SearchResults() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("price-asc")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  const totalPages = Math.ceil(mockProperties.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentProperties = mockProperties.slice(startIndex, startIndex + itemsPerPage)

  return (
    <div className="space-y-6">
      {/* Results Header */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h2 className="text-lg font-semibold">{mockProperties.length} propriétés trouvées</h2>
              <p className="text-sm text-muted-foreground">Résultats de votre recherche</p>
            </div>

            <div className="flex items-center gap-4">
              {/* Sort */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price-asc">Prix croissant</SelectItem>
                  <SelectItem value="price-desc">Prix décroissant</SelectItem>
                  <SelectItem value="surface-desc">Surface décroissante</SelectItem>
                  <SelectItem value="recent">Plus récent</SelectItem>
                </SelectContent>
              </Select>

              {/* View Mode */}
              <div className="flex border rounded-md">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="rounded-r-none"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="rounded-l-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results Grid/List */}
      <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" : "space-y-4"}>
        {currentProperties.map((property) => (
          <PropertyCard key={property.id} property={property} viewMode={viewMode} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2">
          <Button
            variant="outline"
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
          >
            Précédent
          </Button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? "default" : "outline"}
              size="sm"
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </Button>
          ))}

          <Button
            variant="outline"
            onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
          >
            Suivant
          </Button>
        </div>
      )}
    </div>
  )
}
