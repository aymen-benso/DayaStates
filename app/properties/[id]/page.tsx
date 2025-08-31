import { PropertyDetails } from "@/components/property/property-details"
import { PropertyGallery } from "@/components/property/property-gallery"
import { PropertyContact } from "@/components/property/property-contact"
import { SimilarProperties } from "@/components/property/similar-properties"
import { Header } from "@/components/header"
import { notFound } from "next/navigation"

// Mock property data - in real app, this would come from database
const getProperty = (id: string) => {
  const properties = [
    {
      id: "1",
      title: "Appartement moderne à Paris",
      location: "Paris 16ème",
      fullAddress: "123 Avenue Foch, 75016 Paris",
      price: 850000,
      type: "Vente",
      bedrooms: 3,
      bathrooms: 2,
      surface: 85,
      description:
        "Magnifique appartement moderne situé dans le prestigieux 16ème arrondissement de Paris. Entièrement rénové avec des matériaux de qualité, il offre une vue imprenable sur les jardins du Trocadéro. L'appartement dispose d'un salon spacieux, d'une cuisine équipée, de trois chambres dont une suite parentale, et de deux salles de bains.",
      features: ["Ascenseur", "Balcon", "Parking", "Cave", "Gardien", "Climatisation"],
      images: ["/modern-apartment-paris.png", "/modern-apartment-paris.png", "/modern-apartment-paris.png"],
      agent: {
        name: "Marie Dubois",
        phone: "+33 1 42 34 56 78",
        email: "marie.dubois@immofrance.fr",
        agency: "ImmoFrance Paris",
      },
      yearBuilt: 2020,
      energyClass: "A",
      floor: 4,
      totalFloors: 6,
    },
  ]

  return properties.find((p) => p.id === id)
}

export default function PropertyPage({ params }: { params: { id: string } }) {
  const property = getProperty(params.id)

  if (!property) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <PropertyGallery images={property.images} title={property.title} />
            <PropertyDetails property={property} />
          </div>
          <div className="lg:col-span-1">
            <PropertyContact property={property} />
          </div>
        </div>
        <div className="mt-16">
          <SimilarProperties currentPropertyId={property.id} />
        </div>
      </main>
    </div>
  )
}
