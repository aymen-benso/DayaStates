"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Eye, Heart, Calendar, Edit, TrendingUp, Filter, PlusCircle, MoreVertical, Search, SortDesc, Grid, List, Settings } from 'lucide-react';

export default function EnhancedPublished() {
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('date');
  
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
      inquiries: 8,
      datePublished: '2024-01-10',
      image: '/api/placeholder/300/200',
      featured: true
    },
    {
      id: 2,
      title: 'Villa avec jardin privé',
      location: 'Quartier Al Narjis, Riyad',
      price: '850,000',
      status: 'Actif',
      type: 'Villa',
      views: 232,
      favorites: 18,
      inquiries: 12,
      datePublished: '2024-01-08',
      image: '/api/placeholder/300/200',
      featured: false
    },
    {
      id: 3,
      title: 'Bureau commercial moderne',
      location: 'Quartier Al Malik Fahd, Riyad',
      price: '5,000/mois',
      status: 'Loué',
      type: 'Bureau',
      views: 98,
      favorites: 7,
      inquiries: 3,
      datePublished: '2023-12-15',
      image: '/api/placeholder/300/200',
      featured: false
    },
    {
      id: 4,
      title: 'Penthouse avec vue panoramique',
      location: 'Quartier King Abdullah, Riyad',
      price: '1,250,000',
      status: 'Actif',
      type: 'Penthouse',
      views: 189,
      favorites: 31,
      inquiries: 15,
      datePublished: '2024-01-05',
      image: '/api/placeholder/300/200',
      featured: true
    }
  ];

  const totalStats = {
    totalViews: publishedProperties.reduce((sum, prop) => sum + prop.views, 0),
    totalFavorites: publishedProperties.reduce((sum, prop) => sum + prop.favorites, 0),
    totalInquiries: publishedProperties.reduce((sum, prop) => sum + prop.inquiries, 0),
    activeListings: publishedProperties.filter(prop => prop.status === 'Actif').length
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white p-8 rounded-2xl mb-8 shadow-xl">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-4xl font-bold mb-2">Mes Annonces Publiées</h2>
            <p className="text-blue-100 text-lg">Gérez et optimisez toutes vos annonces immobilières</p>
          </div>
          <div className="flex space-x-4">
            <Button 
              variant="secondary" 
              className="px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30 transition-all duration-200"
            >
              <Filter className="h-5 w-5 mr-2" />
              Filtrer
            </Button>
            <Button 
              className="px-6 py-3 rounded-full bg-white text-blue-600 font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <PlusCircle className="h-5 w-5 mr-2" />
              Nouvelle Propriété
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 border-l-4 border-l-blue-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">Total des vues</p>
                <p className="text-3xl font-bold text-blue-600">{totalStats.totalViews.toLocaleString()}</p>
                <p className="text-xs text-green-600 font-medium mt-1">+15% ce mois</p>
              </div>
              <div className="p-3 rounded-full bg-blue-100">
                <Eye className="h-8 w-8 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-gradient-to-br from-rose-50 to-pink-50 border-l-4 border-l-rose-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">Favoris</p>
                <p className="text-3xl font-bold text-rose-600">{totalStats.totalFavorites}</p>
                <p className="text-xs text-green-600 font-medium mt-1">+8% ce mois</p>
              </div>
              <div className="p-3 rounded-full bg-rose-100">
                <Heart className="h-8 w-8 text-rose-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-50 to-green-50 border-l-4 border-l-emerald-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">Demandes</p>
                <p className="text-3xl font-bold text-emerald-600">{totalStats.totalInquiries}</p>
                <p className="text-xs text-green-600 font-medium mt-1">+22% ce mois</p>
              </div>
              <div className="p-3 rounded-full bg-emerald-100">
                <TrendingUp className="h-8 w-8 text-emerald-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-l-amber-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">Annonces actives</p>
                <p className="text-3xl font-bold text-amber-600">{totalStats.activeListings}</p>
                <p className="text-xs text-gray-500 font-medium mt-1">sur {publishedProperties.length} total</p>
              </div>
              <div className="p-3 rounded-full bg-amber-100">
                <Settings className="h-8 w-8 text-amber-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Controls Bar */}
      <div className="flex items-center justify-between mb-8 bg-white rounded-2xl p-4 shadow-lg">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="h-5 w-5 absolute left-3 top-3 text-gray-400" />
            <input 
              type="text" 
              placeholder="Rechercher vos propriétés..."
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
            />
          </div>
          <Button variant="outline" className="rounded-full border-gray-200 hover:bg-gray-50">
            <SortDesc className="h-4 w-4 mr-2" />
            Trier par date
          </Button>
        </div>
        <div className="flex items-center space-x-2">
          <Button 
            variant={viewMode === 'grid' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('grid')}
            className="rounded-full"
          >
            <Grid className="h-4 w-4" />
          </Button>
          <Button 
            variant={viewMode === 'list' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('list')}
            className="rounded-full"
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Properties Grid */}
      <div className={`grid gap-8 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
        {publishedProperties.map((property) => (
          <Card 
            key={property.id} 
            className={`border-0 shadow-xl rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
              property.featured ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
            }`}
          >
            <div className="relative">
              <div className="w-full h-56 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                <img 
                  src={property.image} 
                  alt={property.title} 
                  className="w-full h-full object-cover"
                  onError={(e) => ((e.target as HTMLImageElement).src = '/api/placeholder/300/200')} 
                />
              </div>
              {property.featured && (
                <Badge className="absolute top-4 left-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                  ⭐ En vedette
                </Badge>
              )}
              <Badge 
                className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium shadow-lg ${
                  property.status === 'Actif' 
                    ? 'bg-gradient-to-r from-emerald-500 to-green-500 text-white' 
                    : 'bg-gradient-to-r from-gray-400 to-gray-500 text-white'
                }`}
              >
                {property.status}
              </Badge>
              <Button 
                variant="ghost" 
                size="sm"
                className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full p-2 shadow-lg"
              >
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
            
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-xl text-gray-900 mb-2 hover:text-blue-600 transition-colors cursor-pointer">
                    {property.title}
                  </h4>
                  <p className="text-gray-500 flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-blue-500" />
                    {property.location}
                  </p>
                </div>
                
                <div className="flex items-center justify-between">
                  <p className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    {property.price} SAR
                  </p>
                  <Badge className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 border-blue-200 px-3 py-1 rounded-full">
                    {property.type}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-3 gap-3 text-sm">
                  <div className="text-center p-3 bg-blue-50 rounded-xl">
                    <Eye className="h-5 w-5 mx-auto text-blue-500 mb-1" />
                    <p className="font-semibold text-blue-600">{property.views}</p>
                    <p className="text-xs text-gray-500">Vues</p>
                  </div>
                  <div className="text-center p-3 bg-rose-50 rounded-xl">
                    <Heart className="h-5 w-5 mx-auto text-rose-500 mb-1" />
                    <p className="font-semibold text-rose-600">{property.favorites}</p>
                    <p className="text-xs text-gray-500">Favoris</p>
                  </div>
                  <div className="text-center p-3 bg-emerald-50 rounded-xl">
                    <TrendingUp className="h-5 w-5 mx-auto text-emerald-500 mb-1" />
                    <p className="font-semibold text-emerald-600">{property.inquiries}</p>
                    <p className="text-xs text-gray-500">Demandes</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center text-sm text-gray-500 bg-gray-50 rounded-xl p-2">
                  <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                  Publié le {new Date(property.datePublished).toLocaleDateString('fr-FR')}
                </div>
                
                <div className="grid grid-cols-3 gap-2 pt-2">
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white rounded-full py-2 font-medium transition-all transform hover:scale-105"
                  >
                    <Edit className="h-4 w-4 mr-1" />
                    Modifier
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-2 border-blue-200 text-blue-600 hover:bg-blue-50 rounded-full py-2 font-medium"
                  >
                    <Eye className="h-4 w-4 mr-1" />
                    Voir
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-2 border-emerald-200 text-emerald-600 hover:bg-emerald-50 rounded-full py-2 font-medium"
                  >
                    <TrendingUp className="h-4 w-4 mr-1" />
                    Stats
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More Button */}
      <div className="flex justify-center mt-12">
        <Button 
          variant="outline" 
          className="px-8 py-3 rounded-full border-2 border-blue-200 text-blue-600 hover:bg-blue-50 font-medium transition-all duration-200"
        >
          Charger plus d'annonces
        </Button>
      </div>
    </div>
  );
}