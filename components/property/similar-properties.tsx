import { PropertyCard } from "./property-card"

// Mock similar properties
const similarProperties = [
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
]

interface SimilarPropertiesProps {
  currentPropertyId: string
}

export function SimilarProperties({ currentPropertyId }: SimilarPropertiesProps) {
  const filteredProperties = similarProperties.filter((p) => p.id !== currentPropertyId)

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Propriétés similaires</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  )
}
