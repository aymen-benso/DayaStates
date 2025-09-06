"use client";
import React, { useState, useEffect } from 'react';
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
  Star,
  Calendar,
  Users,
  Trophy,
  MessageCircle,
  Globe,
  Shield,
  Award,
  Home,
  TrendingUp,
  Clock,
  CheckCircle
} from 'lucide-react';

const SellerProfilePage = () => {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState('listings');

  useEffect(() => {
    setMounted(true);
  }, []);

  // Seller data (unchanged)
  const seller = {
    id: 1,
    name: "Marie Dubois",
    title: "Agent immobilier certifié",
    joinedDate: "Sep 01, 2018",
    rating: 4.8,
    reviewCount: 198,
    image: "/agent.png",
    coverImage: "/agent-profile.bg.jpg",
    phone: "+33 6 12 34 56 78",
    email: "marie.dubois@realty.fr",
    website: "www.mariedubois-realty.fr",
    languages: ["Français", "English", "Italiano", "Español"],
    responseRate: "100%",
    responseTime: "Dans l'heure",
    location: "Nice, Côte d'Azur",
    propertiesSold: 145,
    totalSales: "€25.8M",
    experience: "6 ans",
    specialties: ["Villas de luxe", "Appartements", "Investissement", "Bord de mer"],
    certifications: ["Agent immobilier certifié", "Spécialiste luxe", "Expert négociation"],
    bio: "Je suis postdoc travaillant sur la recherche contre le cancer. Je viens de déménager de Taiwan à Nice en 2017. Je ne peux pas vous dire à quel point j'aime cette ville depuis ma première visite en 2010. Je suis une grande amoureuse des chiens. Grande fan de comédies musicales. J'adore la crème glacée mais je n'en prends que quand quelque chose d'important se passe, lol. Avec plus de 6 ans d'expérience dans l'immobilier de luxe sur la Côte d'Azur, je me spécialise dans les propriétés haut de gamme et l'accompagnement personnalisé de mes clients."
  };

  // Reviews data (unchanged)
  const reviews = [
    {
      id: 1,
      name: "Pierre Martin",
      rating: 5,
      date: "Il y a 2 semaines",
      text: "Marie a été exceptionnelle du début à la fin. Elle a trouvé la villa parfaite pour notre famille et a négocié un excellent prix. Service professionnel et très réactif !",
      propertyType: "Villa 4 chambres à Cannes"
    },
    {
      id: 2,
      name: "Sophie Laurent",
      rating: 5,
      date: "Il y a 1 mois",
      text: "Premier achat immobilier et Marie m'a accompagnée avec patience et expertise. Elle connaît parfaitement le marché local. Je recommande vivement !",
      propertyType: "Appartement 2 pièces à Nice"
    },
    {
      id: 3,
      name: "Jean-Luc Bernard",
      rating: 4,
      date: "Il y a 2 mois", 
      text: "Vente de notre maison en moins de 3 mois grâce à Marie. Photos professionnelles, visites bien organisées. Très satisfait du service.",
      propertyType: "Maison familiale à Antibes"
    }
  ];

  // Seller listings data (unchanged)
  const sellerListings = [
    {
      id: 1,
      title: "Villa moderne avec piscine",
      location: "Nice, Mont Boron",
      price: "1,850,000",
      type: "Vente",
      bedrooms: 5,
      bathrooms: 4,
      surface: 220,
      image: "/villa-with-pool-nice-france.png",
      status: "Active",
      daysOnMarket: 12
    },
    {
      id: 2,
      title: "Appartement vue mer",
      location: "Cannes, Croisette",
      price: "950,000",
      type: "Vente",
      bedrooms: 3,
      bathrooms: 2,
      surface: 95,
      image: "/modern-apartment-paris.png",
      status: "Under Offer",
      daysOnMarket: 8
    },
    {
      id: 3,
      title: "Penthouse de luxe",
      location: "Monaco, Monte-Carlo",
      price: "3,200,000",
      type: "Vente",
      bedrooms: 4,
      bathrooms: 3,
      surface: 180,
      image: "/apartment-lyon-city-center.png",
      status: "Active",
      daysOnMarket: 25
    },
    {
      id: 4,
      title: "Villa familiale",
      location: "Antibes, Cap d'Antibes",
      price: "2,100,000",
      type: "Vente",
      bedrooms: 6,
      bathrooms: 5,
      surface: 280,
      image: "/villa-with-pool-nice-france.png",
      status: "Active",
      daysOnMarket: 18
    }
  ];

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-100">
        <div className="animate-pulse">
          <div className="h-64 bg-gray-200"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="space-y-4">
                <div className="h-48 bg-gray-200 rounded-lg"></div>
                <div className="h-32 bg-gray-200 rounded-lg"></div>
              </div>
              <div className="lg:col-span-3 space-y-6">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="h-32 bg-gray-200 rounded-lg"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 pt-12 font-sans">
      {/* Cover Section */}
      <div className="h-80 overflow-hidden max-w-7xl mx-auto rounded-xl shadow-lg">
        <img 
          src={seller.coverImage} 
          alt="Cover"
          className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Agent Profile & Contact Card */}
            <Card className="mt-[-8rem] bg-white shadow-xl rounded-xl">
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-4 mb-6">
                  <img 
                    src={seller.image} 
                    alt={seller.name}
                    className="w-32 h-32 rounded-full border-4 border-green-100 shadow-md object-cover"
                  />
                  <div className="text-center">
                    <h1 className="text-2xl font-semibold text-gray-800">{seller.name}</h1>
                    <p className="text-lg text-gray-600">{seller.title}</p>
                    <div className="space-y-2 text-sm text-gray-600 mt-3">
                      <div className="flex items-center justify-center">
                        <MapPin className="h-4 w-4 text-green-600 mr-2" />
                        <span>{seller.location}</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <Calendar className="h-4 w-4 text-green-600 mr-2" />
                        <span>Membre depuis {seller.joinedDate}</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current mr-2" />
                        <span>{seller.rating} ({seller.reviewCount} avis)</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="font-semibold text-lg mb-4 text-center text-gray-800">Contact</h3>
                  <div className="space-y-3">
                    <Button 
                      className="w-full bg-green-600 hover:bg-green-700 text-white transition-colors duration-200" 
                      size="lg"
                      aria-label="Appeler Marie Dubois"
                    >
                      <Phone className="h-5 w-5 mr-2" />
                      {seller.phone}
                    </Button>
                    <Button 
                      className="w-full bg-white border-green-600 text-green-600 hover:bg-green-50 transition-colors duration-200" 
                      variant="outline" 
                      size="lg"
                      aria-label="Envoyer un email à Marie Dubois"
                    >
                      <Mail className="h-5 w-5 mr-2" />
                      Envoyer un email
                    </Button>
                    <Button 
                      className="w-full bg-white border-green-600 text-green-600 hover:bg-green-50 transition-colors duration-200" 
                      variant="outline" 
                      size="lg"
                      aria-label="Ouvrir le chat avec Marie Dubois"
                    >
                      <MessageCircle className="h-5 w-5 mr-2" />
                      Ouvrir le chat
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stats Card */}
            <Card className="bg-white shadow-md rounded-xl">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4 text-gray-800">Statistiques</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Home className="h-5 w-5 text-green-600 mr-2" />
                      <span className="text-sm">Biens vendus</span>
                    </div>
                    <span className="font-semibold">{seller.propertiesSold}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
                      <span className="text-sm">Volume total</span>
                    </div>
                    <span className="font-semibold">{seller.totalSales}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-green-600 mr-2" />
                      <span className="text-sm">Expérience</span>
                    </div>
                    <span className="font-semibold">{seller.experience}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                      <span className="text-sm">Taux de réponse</span>
                    </div>
                    <span className="font-semibold">{seller.responseRate}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Languages Card */}
            <Card className="bg-white shadow-md rounded-xl">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4 text-gray-800">Langues parlées</h3>
                <div className="space-y-2">
                  {seller.languages.map((language, index) => (
                    <div key={index} className="flex items-center">
                      <Globe className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-sm">{language}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Verification Card */}
            <Card className="bg-white shadow-md rounded-xl">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4 text-gray-800">Vérifications</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    <span className="text-sm">Identité vérifiée</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    <span className="text-sm">Email vérifié</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    <span className="text-sm">Téléphone vérifié</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 text-green-600 mr-2" />
                    <span className="text-sm">Agent certifié</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Tabs Navigation */}
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8">
                <button
                  onClick={() => setActiveTab('listings')}
                  className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors duration-200 ${
                    activeTab === 'listings'
                      ? 'border-green-600 text-green-700'
                      : 'border-transparent text-gray-500 hover:text-green-600 hover:border-green-300'
                  }`}
                >
                  Annonces ({sellerListings.length})
                </button>
                <button
                  onClick={() => setActiveTab('reviews')}
                  className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors duration-200 ${
                    activeTab === 'reviews'
                      ? 'border-green-600 text-green-700'
                      : 'border-transparent text-gray-500 hover:text-green-600 hover:border-green-300'
                  }`}
                >
                  Avis clients ({reviews.length})
                </button>
                <button
                  onClick={() => setActiveTab('about')}
                  className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors duration-200 ${
                    activeTab === 'about'
                      ? 'border-green-600 text-green-700'
                      : 'border-transparent text-gray-500 hover:text-green-600 hover:border-green-300'
                  }`}
                >
                  À propos
                </button>
              </nav>
            </div>

            {/* Listings Tab */}
            {activeTab === 'listings' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-800">Annonces actives</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {sellerListings.map((property) => (
                    <Card 
                      key={property.id} 
                      className="overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300 rounded-xl cursor-pointer"
                    >
                      <div className="relative">
                        <img 
                          src={property.image} 
                          alt={property.title}
                          className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-105"
                        />
                        <div className="p-3">
                          <Badge 
                            className={`mb-2 ${property.status === "Active" ? "bg-green-600 text-white" : "bg-gray-200 text-gray-800"}`} 
                          >
                            {property.status}
                          </Badge>
                          <div className="text-xs text-gray-500">
                            {property.daysOnMarket} jours sur le marché
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-lg text-gray-800 mb-2">{property.title}</h3>
                        <div className="flex items-center text-gray-600 mb-3">
                          <MapPin className="h-4 w-4 text-green-600 mr-2" />
                          <span className="text-sm">{property.location}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center">
                              <Bed className="h-4 w-4 text-green-600 mr-1" />
                              <span>{property.bedrooms}</span>
                            </div>
                            <div className="flex items-center">
                              <Bath className="h-4 w-4 text-green-600 mr-1" />
                              <span>{property.bathrooms}</span>
                            </div>
                            <div className ="flex items-center">
                              <Square className="h-4 w-4 text-green-600 mr-1" />
                              <span>{property.surface}m²</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-xl font-semibold text-green-700">
                          €{property.price}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Reviews Tab */}
            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-800">Avis clients</h2>
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <Card key={review.id} className="bg-white shadow-md rounded-xl">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                            <span className="font-semibold text-green-600">
                              {review.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold text-gray-800">{review.name}</h4>
                              <span className="text-sm text-gray-500">{review.date}</span>
                            </div>
                            <div className="flex items-center mb-2">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`h-4 w-4 ${
                                    i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                  }`} 
                                />
                              ))}
                            </div>
                            <p className="text-gray-700 mb-2">{review.text}</p>
                            <p className="text-sm text-gray-500">{review.propertyType}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* About Tab */}
            {activeTab === 'about' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">À propos de {seller.name}</h2>
                  <p className="text-gray-700 leading-relaxed text-base">
                    {seller.bio}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Spécialisations</h3>
                  <div className="flex flex-wrap gap-2">
                    {seller.specialties.map((specialty, index) => (
                      <Badge key={index} className="bg-green-100 text-green-700 border-green-200">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Certifications</h3>
                  <div className="space-y-2">
                    {seller.certifications.map((cert, index) => (
                      <div key={index} className="flex items-center">
                        <Award className="h-5 w-5 text-green-600 mr-2" />
                        <span className="text-sm">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerProfilePage;