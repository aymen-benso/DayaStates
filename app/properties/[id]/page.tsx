"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  Heart, 
  Share2, 
  Phone, 
  Mail, 
  User,
  Star,
  ChevronLeft,
  ChevronRight,
  Home,
  Calendar,
  Play
} from 'lucide-react';

const PropertySinglePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration error with a loading state
  if (!mounted) {
    return (
      <div className="min-h-screen ">
        <div className="max-w-7xl mx-auto p-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <div className="p-8">
                <div className="animate-pulse space-y-4">
                  <div className="h-96 bg-gray-200 rounded-xl"></div>
                  <div className="flex space-x-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div key={i} className="w-24 h-20 bg-gray-200 rounded-lg"></div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <div className="h-8 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-6 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-1 space-y-6">
              <div className="rounded-xl shadow-sm p-6 bg-white">
                <div className="animate-pulse space-y-4">
                  <div className="flex space-x-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
                    <div className="space-y-2 flex-1">
                      <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Property data
  const property = {
    id: 1,
    title: "Villa avec piscine à Nice",
    subtitle: "Nice, Côte d'Azur",
    address: "15 Avenue de la Mer, Nice, 06000, France",
    price: "1,200,000",
    type: "Vente",
    bedrooms: 4,
    bathrooms: 3,
    surface: 150,
    images: [
      "/villa-with-pool-nice-france.png",
      "/modern-apartment-paris.png",
      "/apartment-lyon-city-center.png",
      "/villa-with-pool-nice-france.png",
      "/modern-apartment-paris.png"
    ],
    description: "À seulement 5 minutes de la Promenade des Anglais, cette villa exceptionnelle offre une vue imprenable sur la Méditerranée. L'hôtel dispose d'un accès Wi-Fi gratuit et de chambres modernes équipées d'une télévision à écran plat. La station de métro Garibaldi se trouve à 4 minutes à pied.",
    additionalDescription: "Un canapé d'angle et un réfrigérateur sont inclus dans chaque chambre de cette villa à Nice. Un bureau ainsi que des équipements pour préparer le café sont également inclus.",
    homeDetails: "À seulement 5 minutes de la Promenade des Anglais, cette villa exceptionnelle offre une vue imprenable sur la Méditerranée avec tous les équipements modernes nécessaires pour un séjour de luxe."
  };

  // Seller data with bio
  const seller = {
    name: "Marie Dubois",
    joinedDate: "Sep 01, 2018",
    rating: 4.8,
    reviewCount: 198,
    image: "/agent-profile.jpg",
    phone: "+33 6 12 34 56 78",
    email: "marie.dubois@realty.fr",
    languages: ["Français", "English", "Italiano"],
    responseRate: "100%",
    responseTime: "Dans l'heure",
    bio: "Je suis postdoc travaillant sur la recherche contre le cancer. Je viens de déménager de Taiwan à Nice en 2017. Je ne peux pas vous dire à quel point j'aime cette ville depuis ma première visite en 2010. Je suis une grande amoureuse des chiens. Grande fan de comédies musicales. J'adore la crème glacée mais je n'en prends que quand quelque chose d'important se passe, lol."
  };

  // Nearby properties
  const nearbyProperties = [
    {
      id: 2,
      title: "Villa moderne avec vue mer",
      location: "100 West, 19th Street, San Francisco",
      price: "1,500,000",
      image: "/modern-apartment-paris.png",
      bedrooms: 2,
      bathrooms: 2,
      surface: 2500
    },
    {
      id: 3,
      title: "Appartement de luxe",
      location: "100 West, 19th Street, San Francisco",
      price: "1,500,000",
      image: "/apartment-lyon-city-center.png",
      bedrooms: 2,
      bathrooms: 2,
      surface: 2500
    },
    {
      id: 4,
      title: "Penthouse vue panoramique",
      location: "100 West, 19th Street, San Francisco",
      price: "1,500,000",
      image: "/villa-with-pool-nice-france.png",
      bedrooms: 2,
      bathrooms: 2,
      surface: 2500
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  return (
    <div className="min-h-screen ">
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Property Information Section */}
          <div className="lg:col-span-3">
            <div className="p-8 bg-white rounded-2xl shadow-lg">
              {/* Image Gallery */}
              <div className="mb-8">
                {/* Main Image */}
                <div className="relative mb-4 group">
                  <div className="relative h-96 bg-gray-100 rounded-xl overflow-hidden">
                    <img 
                      src={property.images[currentImageIndex]} 
                      alt={property.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    
                    {/* Navigation */}
                    <button 
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-green-600/80 text-white p-3 rounded-full hover:bg-green-700 transition-all duration-300"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button 
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-green-600/80 text-white p-3 rounded-full hover:bg-green-700 transition-all duration-300"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>

                    {/* Actions */}
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-green-100 text-green-600">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-green-100 text-green-600">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Type Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge variant="default" className="bg-green-600 text-white">
                        {property.type}
                      </Badge>
                    </div>
                  </div>
                  
                  {/* Thumbnail Navigation */}
                  <div className="flex space-x-2 mt-4 overflow-x-auto">
                    {property.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`flex-shrink-0 w-24 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                          index === currentImageIndex ? 'border-green-500 ring-2 ring-green-200' : 'border-gray-200 hover:border-green-300'
                        }`}
                      >
                        <img 
                          src={image} 
                          alt={`Image ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Property Title and Price */}
                <div className="flex justify-between items-start mb-6 border-b border-green-100 pb-6">
                  <div className="flex-1">
                    <h1 className="text-4xl font-serif font-bold mb-3 text-gray-900">{property.title}</h1>
                    <p className="text-xl text-gray-600 mb-2">{property.subtitle}</p>
                    <p className="text-sm text-gray-500 flex items-center">
                      <MapPin className="h-4 w-4 mr-1 text-green-600" />
                      {property.address}
                    </p>
                  </div>
                  <div className="text-right ml-8">
                    <p className="text-sm text-gray-500 mb-1">Prix:</p>
                    <p className="text-4xl font-bold text-green-600">${property.price}</p>
                  </div>
                </div>

                {/* Property Features */}
                <div className="grid grid-cols-3 gap-8 mb-8 py-6 bg-green-50 rounded-xl">
                  <div className="text-center">
                    <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                      <Bath className="h-8 w-8 text-green-600" />
                    </div>
                    <p className="text-2xl font-bold text-gray-900 mb-1">{property.bathrooms}</p>
                    <p className="text-sm text-gray-600">Salle de bain</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                      <Bed className="h-8 w-8 text-green-600" />
                    </div>
                    <p className="text-2xl font-bold text-gray-900 mb-1">{property.bedrooms}</p>
                    <p className="text-sm text-gray-600">Chambre</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                      <Square className="h-8 w-8 text-green-600" />
                    </div>
                    <p className="text-2xl font-bold text-gray-900 mb-1">{property.surface}m²</p>
                    <p className="text-sm text-gray-600">Surface</p>
                  </div>
                </div>

                {/* Description Section */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-serif font-bold mb-4 text-gray-900">Description</h2>
                    <div className="prose prose-gray max-w-none">
                      <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                        {property.description}
                      </p>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {property.additionalDescription}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif font-bold mb-4 text-gray-900">Détails de la maison</h2>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {property.homeDetails}
                    </p>
                  </div>

                  {/* Video Tour Section */}
                  <div>
                    <h2 className="text-2xl font-serif font-bold mb-4 text-gray-900">Visite virtuelle</h2>
                    <div className="relative bg-gray-900 rounded-xl overflow-hidden h-80">
                      <div className="flex items-center justify-center h-full">
                        <Button 
                          onClick={() => setVideoPlaying(true)}
                          size="lg"
                          className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full"
                        >
                          <Play className="h-6 w-6 mr-3" />
                          Démarrer la visite virtuelle
                        </Button>
                      </div>
                      {/* Video overlay when playing */}
                      <div className="absolute inset-0 bg-green-900/20 flex items-center justify-center">
                        <div className="bg-green-600/30 backdrop-blur-sm rounded-full p-4">
                          <Play className="h-12 w-12 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Map Section */}
                  <div>
                    <h2 className="text-2xl font-serif font-bold mb-4 text-gray-900">Emplacement</h2>
                    <div className="bg-gray-200 rounded-xl overflow-hidden h-80 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                        <div className="text-center">
                          <MapPin className="h-16 w-16 text-green-600 mx-auto mb-4" />
                          <p className="text-xl font-semibold text-gray-700 mb-2">{property.subtitle}</p>
                          <p className="text-sm text-gray-600">{property.address}</p>
                        </div>
                      </div>
                      
                      {/* Map Controls */}
                      <div className="absolute top-4 right-4 space-y-2">
                        <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-green-100 text-green-600 shadow-md">
                          +
                        </Button>
                        <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-green-100 text-green-600 shadow-md">
                          -
                        </Button>
                      </div>
                      
                      {/* Location Pin */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="bg-green-500 rounded-full p-2 shadow-lg animate-pulse">
                          <MapPin className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      
                      {/* Address Info Box */}
                      <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-4 max-w-xs">
                        <h4 className="font-semibold text-gray-900 mb-1">{property.title}</h4>
                        <p className="text-sm text-gray-600">{property.address}</p>
                        <Button size="sm" className="mt-2 w-full bg-green-600 hover:bg-green-700 text-white">
                          Ouvrir dans Maps
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Seller Info and Nearby Properties Section */}
          <div className="lg:col-span-1 space-y-6">
            {/* Seller Profile Card */}
            <Card className="bg-white shadow-lg rounded-2xl border border-green-100">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-6">
                  <img 
                    src={seller.image} 
                    alt={seller.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-green-200"
                  />
                  <div className="flex-1">
                    <h3 className="font-serif font-bold text-lg text-gray-900">{seller.name}</h3>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Calendar className="h-4 w-4 mr-1 text-green-600" />
                      Inscrit en {seller.joinedDate}
                    </div>
                    <Link 
                      href={`/sellerprofile/${seller.name.toLowerCase().replace(' ', '-')}`}
                      className="text-green-600 text-sm hover:underline font-medium"
                    >
                      Voir le profil
                    </Link>
                    <div className="flex items-center mt-2">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm font-semibold text-gray-900">{seller.rating}</span>
                      <span className="text-sm text-gray-500 ml-1">({seller.reviewCount})</span>
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <div className="mb-6">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {seller.bio}
                  </p>
                </div>

                {/* Stats */}
                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Langues:</span>
                    <span className="font-medium text-gray-900">{seller.languages.join(", ")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Taux de réponse:</span>
                    <span className="font-medium text-gray-900">{seller.responseRate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Temps de réponse:</span>
                    <span className="font-medium text-gray-900">{seller.responseTime}</span>
                  </div>
                </div>

                {/* Contact Buttons */}
                <div className="space-y-3">
                  <p className="font-semibold text-sm mb-3 text-gray-900">Contacter l'hôte:</p>
                  <div className="flex space-x-2">
                    <Button variant="outline" className="flex-1 border-green-200 text-green-600 hover:bg-green-50">
                      <Mail className="h-4 w-4 mr-2" />
                      Email
                    </Button>
                    <Button variant="outline" className="flex-1 border-green-200 text-green-600 hover:bg-green-50">
                      <Phone className="h-4 w-4 mr-2" />
                      Appel
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Nearby Properties Card */}
            <Card className="bg-white shadow-lg rounded-2xl border border-green-100">
              <CardContent className="p-6">
                <h3 className="font-serif font-bold text-lg mb-6 text-gray-900">Propriétés à proximité</h3>
                
                <div className="space-y-6">
                  {nearbyProperties.map((nearbyProperty) => (
                    <div key={nearbyProperty.id} className="flex space-x-4 p-3 rounded-lg hover:bg-green-50 cursor-pointer transition-colors group">
                      <img 
                        src={nearbyProperty.image} 
                        alt={nearbyProperty.title}
                        className="w-20 h-20 rounded-lg object-cover flex-shrink-0 group-hover:shadow-md transition-shadow"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="mb-2">
                          <p className="font-bold text-lg text-green-600 group-hover:text-green-700">${nearbyProperty.price}</p>
                        </div>
                        <h4 className="font-medium text-gray-900 text-sm mb-1 truncate group-hover:text-gray-700">
                          {nearbyProperty.title}
                        </h4>
                        <p className="text-xs text-gray-500 truncate mb-2">
                          {nearbyProperty.location}
                        </p>
                        <div className="flex items-center space-x-3 text-xs text-gray-400">
                          <div className="flex items-center">
                            <Bath className="h-3 w-3 mr-1 text-green-600" />
                            <span>{nearbyProperty.bathrooms}</span>
                          </div>
                          <div className="flex items-center">
                            <Bed className="h-3 w-3 mr-1 text-green-600" />
                            <span>{nearbyProperty.bedrooms}</span>
                          </div>
                          <div className="flex items-center">
                            <Square className="h-3 w-3 mr-1 text-green-600" />
                            <span>{nearbyProperty.surface}ft²</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertySinglePage;