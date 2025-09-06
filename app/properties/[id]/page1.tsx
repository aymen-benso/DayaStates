"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const properties = [
  {
    id: 1,
    title: "Appartement moderne à Paris",
    location: "Paris 16ème",
    price: "850000",
    type: "Vente",
    image: "/modern-apartment-paris.png",
    bedrooms: 2,
  },
  {
    id: 2,
    title: "Villa avec piscine à Nice",
    location: "Nice, Côte d'Azur",
    price: "1200000",
    type: "Vente",
    image: "/villa-with-pool-nice-france.png",
    bedrooms: 4,
  },
  {
    id: 3,
    title: "Appartement centre-ville Lyon",
    location: "Lyon 2ème",
    price: "2500",
    type: "Location",
    image: "/apartment-lyon-city-center.png",
    bedrooms: 1,
  },
  {
    id: 4,
    title: "Appartement centre-ville Lyon",
    location: "Lyon 2ème",
    price: "2500",
    type: "Location",
    image: "/apartment-lyon-city-center.png",
    bedrooms: 1,
  },
];

export default function PropertiesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Filters Section */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Rechercher des propriétés</h2>
          <div className="flex flex-col md:flex-row gap-4 max-w-5xl mx-auto">
            <Input
              type="text"
              placeholder="Ville ou région (ex. Paris, Lyon)"
              className="flex-1"
            />
            <Input
              type="number"
              placeholder="Prix min (€)"
              className="flex-1"
            />
            <Input
              type="number"
              placeholder="Prix max (€)"
              className="flex-1"
            />
            <Select>
              <SelectTrigger className="flex-1">
                <SelectValue placeholder="Type de propriété" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous</SelectItem>
                <SelectItem value="Vente">Vente</SelectItem>
                <SelectItem value="Location">Location</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="flex-1">
                <SelectValue placeholder="Chambres" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes</SelectItem>
                <SelectItem value="1">1 chambre</SelectItem>
                <SelectItem value="2">2 chambres</SelectItem>
                <SelectItem value="3">3 chambres</SelectItem>
                <SelectItem value="4+">4+ chambres</SelectItem>
              </SelectContent>
            </Select>
            <Button className="w-full md:w-auto">Rechercher</Button>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Nos propriétés</h2>
          <p className="text-muted-foreground text-center mb-12">
            Découvrez notre sélection de biens immobiliers
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {properties.map((property) => (
              <Link key={property.id} href={`/properties/${property.id}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow max-w-sm bg-white cursor-pointer">
                  <div className="relative p-4">
                    <Image
                      src={property.image || "/placeholder.svg"}
                      alt={property.title}
                      width={400}
                      height={350}
                      className="w-full h-72 object-cover rounded-md"
                    />
                    <Badge
                      className="absolute top-7 left-7"
                      variant={property.type === "Vente" ? "default" : "secondary"}
                    >
                      {property.type}
                    </Badge>
                  </div>
                  <CardContent>
                    <h3 className="font-semibold text-lg mb-2">{property.title}</h3>
                    <div className="flex items-center text-muted-foreground mb-3">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{property.location}</span>
                    </div>
                    <div className="text-2xl font-bold text-primary">
                      {parseInt(property.price).toLocaleString("fr-FR")}€
                      {property.type === "Location" && "/mois"}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}