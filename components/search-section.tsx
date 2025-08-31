"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Search, MapPin, Euro } from "lucide-react"

export function SearchSection() {
  const [searchData, setSearchData] = useState({
    location: "",
    propertyType: "",
    priceMin: "",
    priceMax: "",
    transactionType: "sale",
  })

  return (
    <section className="py-16 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Recherche avancée</h2>
          <p className="text-muted-foreground">Utilisez nos filtres pour trouver exactement ce que vous cherchez</p>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {/* Transaction Type */}
              <Select
                value={searchData.transactionType}
                onValueChange={(value) => setSearchData({ ...searchData, transactionType: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Type de transaction" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sale">Vente</SelectItem>
                  <SelectItem value="rent">Location</SelectItem>
                </SelectContent>
              </Select>

              {/* Property Type */}
              <Select
                value={searchData.propertyType}
                onValueChange={(value) => setSearchData({ ...searchData, propertyType: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Type de propriété" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apartment">Appartement</SelectItem>
                  <SelectItem value="villa">Villa</SelectItem>
                  <SelectItem value="hotel">Hôtel</SelectItem>
                  <SelectItem value="land">Terrain</SelectItem>
                  <SelectItem value="office">Bureau</SelectItem>
                </SelectContent>
              </Select>

              {/* Location */}
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Ville, région..."
                  className="pl-10"
                  value={searchData.location}
                  onChange={(e) => setSearchData({ ...searchData, location: e.target.value })}
                />
              </div>

              {/* Price Min */}
              <div className="relative">
                <Euro className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Prix minimum"
                  type="number"
                  className="pl-10"
                  value={searchData.priceMin}
                  onChange={(e) => setSearchData({ ...searchData, priceMin: e.target.value })}
                />
              </div>

              {/* Price Max */}
              <div className="relative">
                <Euro className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Prix maximum"
                  type="number"
                  className="pl-10"
                  value={searchData.priceMax}
                  onChange={(e) => setSearchData({ ...searchData, priceMax: e.target.value })}
                />
              </div>

              {/* Search Button */}
              <Button className="flex items-center gap-2">
                <Search className="h-4 w-4" />
                Rechercher
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
