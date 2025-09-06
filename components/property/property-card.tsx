"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  type: "Vente" | "Location";
  image: string;
  addedDate?: string;
  isNew?: boolean;
}

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Link href={`/properties/${property.id}`}>
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
          {property.isNew && (
            <Badge className="absolute top-7 right-7 bg-green-500 hover:bg-green-600">
              Nouveau
            </Badge>
          )}
        </div>
        <CardContent className="">
          <h3 className="font-semibold text-lg mb-2">{property.title}</h3>
          <div className="flex items-center text-muted-foreground mb-3">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">{property.location}</span>
          </div>
          {property.addedDate && (
            <div className="flex items-center text-muted-foreground mb-3">
              <Clock className="h-4 w-4 mr-1" />
              <span className="text-sm">{property.addedDate}</span>
            </div>
          )}
          <div className="text-2xl font-bold text-primary">
            {property.price}€{property.type === "Location" && "/mois"}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}