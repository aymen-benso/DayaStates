"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const properties = [
  {
    id: 1,
    title: "Appartement moderne à Paris",
    location: "Paris 16ème",
    price: "850000",
    type: "Vente",
    image: "/modern-apartment-paris.png",
    bedrooms: 2,
    bathrooms: 1,
    rooms: 3,
    surfaceArea: 75,
    yearBuilt: 2015,
    condition: "Rénové",
    energyClass: "B",
    amenities: ["balcony", "elevator", "air_conditioning"],
  },
  {
    id: 2,
    title: "Villa avec piscine à Nice",
    location: "Nice, Côte d'Azur",
    price: "1200000",
    type: "Vente",
    image: "/villa-with-pool-nice-france.png",
    bedrooms: 4,
    bathrooms: 3,
    rooms: 6,
    surfaceArea: 200,
    yearBuilt: 2008,
    condition: "Neuf",
    energyClass: "A",
    amenities: ["parking", "garden", "balcony", "pool", "garage"],
  },
  {
    id: 3,
    title: "Appartement centre-ville Lyon",
    location: "Lyon 2ème",
    price: "2500",
    type: "Location",
    image: "/apartment-lyon-city-center.png",
    bedrooms: 1,
    bathrooms: 1,
    rooms: 2,
    surfaceArea: 50,
    yearBuilt: 1990,
    condition: "À rénover",
    energyClass: "D",
    amenities: ["elevator"],
  },
  {
    id: 4,
    title: "Appartement centre-ville Lyon",
    location: "Lyon 2ème",
    price: "2500",
    type: "Location",
    image: "/apartment-lyon-city-center.png",
    bedrooms: 1,
    bathrooms: 1,
    rooms: 2,
    surfaceArea: 50,
    yearBuilt: 1995,
    condition: "Rénové",
    energyClass: "C",
    amenities: ["balcony"],
  },
];

export default function PropertiesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Filters Section */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
            <div
        className="relative bg-cover bg-center h-[220px] rounded-[50px] flex items-center justify-center"
        style={{ backgroundImage: "url(/img4.png)" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-green-800 opacity-50 rounded-[50px]"></div>

          <h2 className="text-3xl font-bold mb-6 text-center text-white z-2">Rechercher des propriétés</h2>
             
          </div>
          <Card className="p-6 bg-white shadow-md rounded-lg w-[90%] mx-auto -mt-16 relative z-10">
            <div className="flex flex-col md:flex-row gap-4">
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
              <Button className="w-full md:w-auto">Rechercher</Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Main Content: Sidebar + Properties Grid */}
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-1/4">
          <Card className="p-6 bg-white shadow-md rounded-lg sticky top-4">
            <h3 className="text-xl font-semibold mb-4">Filtres avancés</h3>
            <Accordion type="single" collapsible className="space-y-2">
              {/* Rooms Group */}
              <AccordionItem value="rooms">
                <AccordionTrigger className="text-base font-medium">Pièces et chambres</AccordionTrigger>
                <AccordionContent className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium">Chambres</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Nombre de chambres" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Toutes</SelectItem>
                        <SelectItem value="1">1 chambre</SelectItem>
                        <SelectItem value="2">2 chambres</SelectItem>
                        <SelectItem value="3">3 chambres</SelectItem>
                        <SelectItem value="4+">4+ chambres</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Salles de bain</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Nombre de salles de bain" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Toutes</SelectItem>
                        <SelectItem value="1">1 salle de bain</SelectItem>
                        <SelectItem value="2">2 salles de bain</SelectItem>
                        <SelectItem value="3+">3+ salles de bain</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Pièces totales</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Nombre de pièces" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Toutes</SelectItem>
                        <SelectItem value="1">1 pièce</SelectItem>
                        <SelectItem value="2">2 pièces</SelectItem>
                        <SelectItem value="3">3 pièces</SelectItem>
                        <SelectItem value="4+">4+ pièces</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Size Group */}
              <AccordionItem value="size">
                <AccordionTrigger className="text-base font-medium">Taille et surface</AccordionTrigger>
                <AccordionContent className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium">Surface (m²)</Label>
                    <div className="flex gap-4">
                      <Input type="number" placeholder="Min m²" />
                      <Input type="number" placeholder="Max m²" />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Amenities Group */}
              <AccordionItem value="amenities">
                <AccordionTrigger className="text-base font-medium">Commodités</AccordionTrigger>
                <AccordionContent className="space-y-2">
                  <div className="flex items-center">
                    <Checkbox id="parking" />
                    <Label htmlFor="parking" className="ml-2 text-sm">Parking</Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="garden" />
                    <Label htmlFor="garden" className="ml-2 text-sm">Jardin</Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="balcony" />
                    <Label htmlFor="balcony" className="ml-2 text-sm">Balcon</Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="pool" />
                    <Label htmlFor="pool" className="ml-2 text-sm">Piscine</Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="garage" />
                    <Label htmlFor="garage" className="ml-2 text-sm">Garage</Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="elevator" />
                    <Label htmlFor="elevator" className="ml-2 text-sm">Ascenseur</Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="air_conditioning" />
                    <Label htmlFor="air_conditioning" className="ml-2 text-sm">Climatisation</Label>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Other Group */}
              <AccordionItem value="other">
                <AccordionTrigger className="text-base font-medium">Autres critères</AccordionTrigger>
                <AccordionContent className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium">Année de construction</Label>
                    <div className="flex gap-4">
                      <Input type="number" placeholder="Année min" />
                      <Input type="number" placeholder="Année max" />
                    </div>
                  </div>
                  <div>
                    <Label className="text-sm font-medium">État du bien</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="État" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Tous</SelectItem>
                        <SelectItem value="neuf">Neuf</SelectItem>
                        <SelectItem value="renove">Rénové</SelectItem>
                        <SelectItem value="a_renover">À rénover</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Classe énergétique</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Classe" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Toutes</SelectItem>
                        <SelectItem value="A">A</SelectItem>
                        <SelectItem value="B">B</SelectItem>
                        <SelectItem value="C">C</SelectItem>
                        <SelectItem value="D">D</SelectItem>
                        <SelectItem value="E">E</SelectItem>
                        <SelectItem value="F">F</SelectItem>
                        <SelectItem value="G">G</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Button className="w-full mt-6">Appliquer les filtres</Button>
          </Card>
        </aside>

        {/* Properties Grid */}
        <section className="w-full md:w-3/4">
          <h2 className="text-3xl font-bold mb-4 text-center">Nos propriétés</h2>
          <p className="text-muted-foreground text-center mb-12">
            Découvrez notre sélection de biens immobiliers
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        </section>
      </div>
    </div>
  );
}
