"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Home, Eye, Heart, Star, MapPin, Camera } from 'lucide-react';

export default function Dashboard() {
  const [editMode, setEditMode] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: 'Ahmed Mohammed Ali',
    email: 'ahmed.mohammed@email.com',
    phone: '+966 55 123 4567',
    location: 'Riyad, Arabie Saoudite',
    bio: 'Intéressé par l\'investissement immobilier et à la recherche des meilleures opportunités sur le marché saoudien',
    joinDate: '2023-01-15',
    avatar: "/profile.png"
  });

  const userStats = [
    { title: 'Annonces publiées', value: '8', icon: Home, color: 'text-emerald-600 bg-emerald-50 border-emerald-200' },
    { title: 'Propriétés favorites', value: '12', icon: Heart, color: 'text-green-600 bg-green-50 border-green-200' },
    { title: 'Propriétés consultées', value: '47', icon: Eye, color: 'text-teal-600 bg-teal-50 border-teal-200' },
    { title: 'Évaluation de l\'utilisateur', value: '4.8', icon: Star, color: 'text-yellow-600 bg-yellow-50 border-yellow-200' }
  ];

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target?.result) {
          setUserInfo({...userInfo, avatar: e.target.result as string});
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Main Content - Takes 3/4 width */}
        <div className="lg:col-span-3">
          <div className="space-y-8">
            {/* Welcome Header */}
            <div
              className="relative rounded-2xl p-6 h-[180px] text-white overflow-hidden"
              style={{
                backgroundImage: `url('/img17.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-2">Bienvenue, {userInfo.name}</h2>
                <p className="opacity-90">
                  Voici un aperçu rapide de votre activité immobilière
                </p>
              </div>
            </div>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {userStats.map((stat, index) => (
                <Card key={index} className={`border-2 hover:shadow-xl transition-all duration-300 ${stat.color}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                        <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                      </div>
                      <div className={`p-3 rounded-full`}>
                        <stat.icon className="h-8 w-8" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Activity and Statistics */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-gray-900">Activités récentes</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {[
                      { action: 'Nouvelle propriété publiée', time: 'Il y a 2 heures', icon: Home },
                      { action: 'Ajout d\'une propriété aux favoris', time: 'Il y a 5 heures', icon: Heart },
                      { action: 'Consultation des détails d\'une propriété', time: 'Il y a 1 jour', icon: Eye },
                    ].map((activity, index) => (
                      <div key={index} className="flex items-center space-x-3 space-x-reverse p-3 bg-gray-50 rounded-lg">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <activity.icon className="h-4 w-4 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                          <p className="text-xs text-gray-500">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-emerald-50 to-green-50">
                  <CardTitle className="text-gray-900">Statistiques mensuelles</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {[
                      { label: 'Vues des annonces', value: '1,234', change: '+12%' },
                      { label: 'Nouvelles demandes', value: '56', change: '+8%' },
                      { label: 'Propriétés vendues', value: '3', change: '+50%' },
                    ].map((stat, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm font-medium text-gray-900">{stat.label}</span>
                        <div className="text-left">
                          <span className="text-lg font-bold text-gray-900">{stat.value}</span>
                          <span className="text-xs text-green-600 mr-2">{stat.change}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        {/* Profile Card - Takes 1/4 width */}
        <div className="lg:col-span-2">
          <Card className="border-0 shadow-lg overflow-hidden sticky top-4">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className="w-24 h-24 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gray-200">
                    {userInfo.avatar ? (
                      <img 
                        src={userInfo.avatar} 
                        alt="Profile" 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-300">
                        <User className="h-12 w-12 text-gray-500" />
                      </div>
                    )}
                  </div>
                  {editMode && (
                    <label className="absolute bottom-0 right-0 bg-emerald-500 rounded-full p-2 cursor-pointer shadow-lg hover:bg-emerald-600 transition-colors">
                      <Camera className="h-4 w-4 text-white" />
                      <input 
                        type="file" 
                        className="hidden" 
                        accept="image/*"
                        onChange={handleImageUpload}
                      />
                    </label>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{userInfo.name}</h3>
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{userInfo.location}</span>
                </div>
                <p className="text-sm text-gray-600 mb-4 text-center">{userInfo.bio}</p>
                
                <div className="w-full space-y-2 text-xs text-gray-500">
                  <div className="text-center">
                    Membre depuis {new Date(userInfo.joinDate).toLocaleDateString('fr-FR', { 
                      year: 'numeric', 
                      month: 'long' 
                    })}
                  </div>
                  <div className="flex items-center justify-center">
                    <Star className="h-3 w-3 text-yellow-500 mr-1 fill-current" />
                    4.8 (24 avis)
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}