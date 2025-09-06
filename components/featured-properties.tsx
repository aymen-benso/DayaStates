"use client";

import { PropertyCard } from "@/components/property/property-card";

const featuredProperties = [
  {
    id: 1,
    title: "Appartement moderne à Paris",
    location: "Paris 16ème",
    price: "850,000",
    type: "Vente",
    image: "/modern-apartment-paris.png",
  },
  {
    id: 2,
    title: "Villa avec piscine à Nice",
    location: "Nice, Côte d'Azur",
    price: "1,200,000",
    type: "Vente",
    image: "/villa-with-pool-nice-france.png",
  },
  {
    id: 3,
    title: "Appartement centre-ville Lyon",
    location: "Lyon 2ème",
    price: "2,500",
    type: "Location",
    image: "/apartment-lyon-city-center.png",
  },
  {
    id: 4,
    title: "Appartement centre-ville Lyon",
    location: "Lyon 2ème",
    price: "2,500",
    type: "Location",
    image: "/apartment-lyon-city-center.png",
  },
];

export function FeaturedProperties() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Propriétés en vedette</h2>
          <p className="text-muted-foreground">Découvrez notre sélection de biens d'exception</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} currency="€" />
          ))}
        </div>
      </div>
    </section>
  );
}