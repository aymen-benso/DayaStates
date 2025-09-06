"use client";

import { PropertyCard } from "@/components/property/property-card";

const newProperties = [
  {
    id: 5,
    title: "Duplex avec terrasse à Bordeaux",
    location: "Bordeaux Centre",
    price: "420,000",
    type: "Vente",
    image: "/duplex.png",
    addedDate: "Il y a 2 jours",
    isNew: true
  },
  {
    id: 6,
    title: "Studio moderne à Marseille",
    location: "Marseille 8ème",
    price: "1,800",
    type: "Location",
    image: "/studio-modern.png",
    addedDate: "Il y a 1 jour",
    isNew: true
  },
  {
    id: 7,
    title: "Maison de ville à Toulouse",
    location: "Toulouse Centre",
    price: "680,000",
    type: "Vente",
    image: "/maison-ville.png",
    addedDate: "Il y a 3 jours",
    isNew: true
  },
  {
    id: 8,
    title: "Loft industriel à Nantes",
    location: "Nantes Centre",
    price: "3,200",
    type: "Location",
    image: "/loft-industriel.png",
    addedDate: "Il y a 1 jour",
    isNew: true
  },
];

export function NewProperties() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nouvelles Propriétés</h2>
          <p className="text-muted-foreground">Découvrez les derniers biens ajoutés à notre catalogue</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {newProperties.map((property) => (
            <PropertyCard key={property.id} property={property} currency="€" />
          ))}
        </div>
      </div>
    </section>
  );
}