"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Eye, Heart, Calendar, Edit, TrendingUp, Filter, PlusCircle } from 'lucide-react';

export default function Published() {
  const publishedProperties = [
    {
      id: 1,
      title: 'Appartement de luxe à Riyad',
      location: 'Quartier Al Olaya, Riyad',
      price: '450,000',
      status: 'Actif',
      type: 'Appartement',
      views: 145,
      favorites: 23,
      datePublished: '2024-01-10',
      image: '/api/placeholder/300/200'
    },
    {
      id: 2,
      title: 'Villa avec jardin',
      location: 'Quartier Al Narjis, Riyad',
      price: '850,000',
      status: 'Actif',
      type: 'Villa',
      views: 232,
      favorites: 18,
      datePublished: '2024-01-08',
      image: '/api/placeholder/300/200'
    },
    {
      id: 3,
      title: 'Bureau commercial',
      location: 'Quartier Al Malik Fahd, Riyad',
      price: '5,000/mois',
      status: 'Loué',
      type: 'Bureau',
      views: 98,
      favorites: 7,
      datePublished: '2023-12-15',
      image: '/api/placeholder/300/200'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Mes annonces publiées</h2>
          <p className="text-gray-500 text-sm mt-1">Gérez et mettez à jour toutes vos annonces immobilières</p>
        </div>
        <div className="flex space-x-4 space-x-reverse">
          <Button 
            variant="outline" 
            className="px-4 py-2 rounded-full border-2 border-emerald-300 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-400 transition-all duration-200"
          >
            <Filter className="h-5 w-5 mr-2" />
            Filtrer
          </Button>
          <Button 
            className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium transition-all duration-200 transform hover:scale-105"
          >
            <PlusCircle className="h-5 w-5 mr-2" />
            Ajouter une propriété
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {publishedProperties.map((property) => (
          <Card 
            key={property.id} 
            className="border-0 shadow-lg rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="relative">
              <div className="w-full h-48 bg-gradient-to-br from-emerald-100 to-green-100 flex items-center justify-center">
                <img 
                  src={property.image} 
                  alt={property.title} 
                  className="w-full h-full object-cover rounded-t-2xl"
                  onError={(e) => ((e.target as HTMLImageElement).src = '/api/placeholder/300/200')} 
                />
              </div>
              <Badge 
                variant={property.status === 'Actif' ? 'default' : 'secondary'} 
                className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${
                  property.status === 'Actif' ? 'bg-emerald-600 text-white' : 'bg-gray-200 text-gray-700'
                }`}
              >
                {property.status}
              </Badge>
            </div>
            <CardContent className="p-6">
              <div className="flex flex-col space-y-4">
                <div>
                  <h4 className="font-bold text-xl text-gray-900 hover:text-emerald-600 transition-colors">{property.title}</h4>
                  <p className="text-gray-500 text-sm mt-1 flex items-center">
                    <MapPin className="h-4 w-4 mr-1 text-emerald-600" />
                    {property.location}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-bold text-2xl text-emerald-600">{property.price} SAR</p>
                  <Badge 
                    variant="outline" 
                    className="border-emerald-300 text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full"
                  >
                    {property.type}
                  </Badge>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <span className="flex items-center">
                    <Eye className="h-4 w-4 mr-1 text-emerald-600" />
                    {property.views} vues
                  </span>
                  <span className="flex items-center">
                    <Heart className="h-4 w-4 mr-1 text-emerald-600" />
                    {property.favorites} favoris
                  </span>
                  <span className="flex items-center col-span-2">
                    <Calendar className="h-4 w-4 mr-1 text-emerald-600" />
                    Publié le {property.datePublished}
                  </span>
                </div>
                <div className="flex space-x-3 space-x-reverse">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 py-2 rounded-full border-2 border-emerald-300 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-400 transition-all"
                  >
                    <Edit className="h-4 w-4 mr-2" />
                    Modifier
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 py-2 rounded-full border-2 border-emerald-300 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-400 transition-all"
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    Voir
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 py-2 rounded-full border-2 border-emerald-300 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-400 transition-all"
                  >
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Statistiques
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