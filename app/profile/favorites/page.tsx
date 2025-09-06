"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Home, X, Search, Heart, Building2 } from 'lucide-react';

export default function Favorites() {
  const favoriteProperties = [
    {
      id: 1,
      title: 'Appartement moderne à Djeddah',
      location: 'Quartier Al Rawdah, Djeddah',
      price: '380,000',
      type: 'Appartement',
      rooms: 3,
      area: 120,
      dateFavorited: '2024-01-12',
      image: '/api/placeholder/300/200'
    },
    {
      id: 2,
      title: 'Villa à vendre à Dammam',
      location: 'Quartier Al Faisaliah, Dammam',
      price: '720,000',
      type: 'Villa',
      rooms: 5,
      area: 300,
      dateFavorited: '2024-01-10',
      image: '/api/placeholder/300/200'
    },
    {
      id: 3,
      title: 'Studio à Khobar',
      location: 'Quartier Al Aqrabiyah, Khobar',
      price: '1,800/mois',
      type: 'Studio',
      rooms: 1,
      area: 45,
      dateFavorited: '2024-01-08',
      image: '/api/placeholder/300/200'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Propriétés favorites</h2>
          <p className="text-gray-600">Les propriétés que vous avez ajoutées à vos favoris</p>
        </div>
        <Button variant="outline" className="border-green-200 text-green-700 hover:bg-green-50">
          <Search className="h-4 w-4 ml-2" />
          Rechercher
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {favoriteProperties.map((property) => (
          <Card key={property.id} className="border-0 shadow-lg hover:shadow-xl transition-all group">
            <div className="relative">
              <div className="w-full h-48 bg-gradient-to-br from-green-100 to-emerald-100 rounded-t-xl flex items-center justify-center">
                <Building2 className="h-12 w-12 text-green-600" />
              </div>
              <button className="absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors">
                <Heart className="h-5 w-5 text-red-500 fill-current" />
              </button>
              <div className="absolute bottom-3 right-3">
                <Badge className="bg-emerald-600 text-white">{property.type}</Badge>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="space-y-3">
                <div>
                  <h4 className="font-bold text-lg text-gray-900 group-hover:text-green-700 transition-colors">{property.title}</h4>
                  <p className="text-sm text-gray-600 flex items-center mt-1">
                    <MapPin className="h-3 w-3 ml-1" />
                    {property.location}
                  </p>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                  <span className="flex items-center">
                    <Home className="h-4 w-4 ml-1" />
                    {property.rooms} pièces
                  </span>
                  <span>{property.area} m²</span>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <p className="font-bold text-xl text-emerald-600">{property.price} SAR</p>
                  <p className="text-xs text-gray-500">Ajouté le {property.dateFavorited}</p>
                </div>
                <div className="flex space-x-2 space-x-reverse pt-2">
                  <Button size="sm" className="flex-1 bg-emerald-600 hover:bg-emerald-700">Voir les détails</Button>
                  <Button size="sm" variant="outline" className="border-red-200 text-red-600 hover:bg-red-50">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}