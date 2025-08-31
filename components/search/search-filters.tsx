"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Separator } from "@/components/ui/separator"
import { MapPin, Euro, Bed, Bath, Square, Filter } from "lucide-react"

export function SearchFilters() {
  const [filters, setFilters] = useState({
    location: "",
    transactionType: "sale",
    propertyType: "",
    priceRange: [0, 2000000],
    surfaceRange: [0, 500],
    bedrooms: "",
    bathrooms: "",
    features: [] as string[],
  })

  const propertyFeatures = [
    "Ascenseur",
    "Balcon",
    "Terrasse",
    "Jardin",
    "Parking",
    "Cave",
    "Piscine",
    "Climatisation",
    "Cheminée",
    "Gardien",
  ]

  const handleFeatureChange = (feature: string, checked: boolean) => {
    if (checked) {
      setFilters((prev) => ({ ...prev, features: [...prev.features, feature] }))
    } else {
      setFilters((prev) => ({ ...prev, features: prev.features.filter((f) => f !== feature) }))
    }
  }

  return (
    <Card className="sticky top-24">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Filter className="h-5 w-5" />
          Filtres de recherche
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Location */}
        <div className="space-y-2">
          <Label>Localisation</Label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Ville, région, code postal..."
              className="pl-10"
              value={filters.location}
              onChange={(e) => setFilters((prev) => ({ ...prev, location: e.target.value }))}
            />
          </div>
        </div>

        {/* Transaction Type */}
        <div className="space-y-2">
          <Label>Type de transaction</Label>
          <Select
            value={filters.transactionType}
            onValueChange={(value) => setFilters((prev) => ({ ...prev, transactionType: value }))}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sale">Vente</SelectItem>
              <SelectItem value="rent">Location</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Property Type */}
        <div className="space-y-2">
          <Label>Type de propriété</Label>
          <Select
            value={filters.propertyType}
            onValueChange={(value) => setFilters((prev) => ({ ...prev, propertyType: value }))}
          >
            <SelectTrigger>
              <SelectValue placeholder="Tous les types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apartment">Appartement</SelectItem>
              <SelectItem value="villa">Villa</SelectItem>
              <SelectItem value="hotel">Hôtel</SelectItem>
              <SelectItem value="land">Terrain</SelectItem>
              <SelectItem value="office">Bureau</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Separator />

        {/* Price Range */}
        <div className="space-y-3">
          <Label className="flex items-center gap-2">
            <Euro className="h-4 w-4" />
            Prix ({filters.transactionType === "rent" ? "€/mois" : "€"})
          </Label>
          <Slider
            value={filters.priceRange}
            onValueChange={(value) => setFilters((prev) => ({ ...prev, priceRange: value }))}
            max={filters.transactionType === "rent" ? 10000 : 2000000}
            step={filters.transactionType === "rent" ? 100 : 10000}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>{filters.priceRange[0].toLocaleString()}€</span>
            <span>{filters.priceRange[1].toLocaleString()}€</span>
          </div>
        </div>

        {/* Surface Range */}
        <div className="space-y-3">
          <Label className="flex items-center gap-2">
            <Square className="h-4 w-4" />
            Surface (m²)
          </Label>
          <Slider
            value={filters.surfaceRange}
            onValueChange={(value) => setFilters((prev) => ({ ...prev, surfaceRange: value }))}
            max={500}
            step={10}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>{filters.surfaceRange[0]}m²</span>
            <span>{filters.surfaceRange[1]}m²</span>
          </div>
        </div>

        <Separator />

        {/* Bedrooms */}
        <div className="space-y-2">
          <Label className="flex items-center gap-2">
            <Bed className="h-4 w-4" />
            Chambres
          </Label>
          <Select
            value={filters.bedrooms}
            onValueChange={(value) => setFilters((prev) => ({ ...prev, bedrooms: value }))}
          >
            <SelectTrigger>
              <SelectValue placeholder="Indifférent" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1+</SelectItem>
              <SelectItem value="2">2+</SelectItem>
              <SelectItem value="3">3+</SelectItem>
              <SelectItem value="4">4+</SelectItem>
              <SelectItem value="5">5+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Bathrooms */}
        <div className="space-y-2">
          <Label className="flex items-center gap-2">
            <Bath className="h-4 w-4" />
            Salles de bain
          </Label>
          <Select
            value={filters.bathrooms}
            onValueChange={(value) => setFilters((prev) => ({ ...prev, bathrooms: value }))}
          >
            <SelectTrigger>
              <SelectValue placeholder="Indifférent" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1+</SelectItem>
              <SelectItem value="2">2+</SelectItem>
              <SelectItem value="3">3+</SelectItem>
              <SelectItem value="4">4+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Separator />

        {/* Features */}
        <div className="space-y-3">
          <Label>Équipements</Label>
          <div className="grid grid-cols-1 gap-2">
            {propertyFeatures.map((feature) => (
              <div key={feature} className="flex items-center space-x-2">
                <Checkbox
                  id={feature}
                  checked={filters.features.includes(feature)}
                  onCheckedChange={(checked) => handleFeatureChange(feature, checked as boolean)}
                />
                <Label htmlFor={feature} className="text-sm font-normal">
                  {feature}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        <div className="space-y-2">
          <Button className="w-full">Appliquer les filtres</Button>
          <Button variant="outline" className="w-full bg-transparent">
            Réinitialiser
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
