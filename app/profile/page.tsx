"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Home, Eye, Heart, Star, MapPin, Camera, TrendingUp, Calendar, DollarSign, Users } from 'lucide-react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export default function EnhancedDashboard() {
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
    { title: 'Propriétés favorites', value: '12', icon: Heart, color: 'text-rose-600 bg-rose-50 border-rose-200' },
    { title: 'Propriétés consultées', value: '47', icon: Eye, color: 'text-blue-600 bg-blue-50 border-blue-200' },
    { title: 'Évaluation moyenne', value: '4.8', icon: Star, color: 'text-amber-600 bg-amber-50 border-amber-200' }
  ];

  // Chart data
  const monthlyViews = [
    { month: 'Jan', views: 850, inquiries: 12, sales: 2 },
    { month: 'Fév', views: 1200, inquiries: 18, sales: 3 },
    { month: 'Mar', views: 980, inquiries: 15, sales: 1 },
    { month: 'Avr', views: 1450, inquiries: 22, sales: 4 },
    { month: 'Mai', views: 1680, inquiries: 28, sales: 3 },
    { month: 'Jun', views: 1234, inquiries: 25, sales: 5 },
  ];

  const propertyTypes = [
    { name: 'Appartements', value: 35, color: '#10B981' },
    { name: 'Villas', value: 28, color: '#3B82F6' },
    { name: 'Bureaux', value: 20, color: '#F59E0B' },
    { name: 'Terrains', value: 17, color: '#EF4444' },
  ];

  const priceRanges = [
    { range: '< 500K', count: 15 },
    { range: '500K-1M', count: 28 },
    { range: '1M-2M', count: 35 },
    { range: '2M-5M', count: 18 },
    { range: '> 5M', count: 8 },
  ];

  const dailyActivity = [
    { day: 'Lun', views: 45, favorites: 8 },
    { day: 'Mar', views: 52, favorites: 12 },
    { day: 'Mer', views: 38, favorites: 6 },
    { day: 'Jeu', views: 61, favorites: 15 },
    { day: 'Ven', views: 48, favorites: 9 },
    { day: 'Sam', views: 35, favorites: 7 },
    { day: 'Dim', views: 28, favorites: 4 },
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
    <div className="max-w-7xl mx-auto min-h-screen bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content - Takes 3/4 width */}
        <div className="lg:col-span-3 space-y-8">
          {/* Welcome Header with enhanced gradient */}
          <div
            className="relative rounded-3xl p-8 h-[200px] text-white overflow-hidden shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            }}
          >
            <div className="absolute inset-0 bg-black/20 rounded-3xl"></div>
            <div className="absolute top-4 right-4 opacity-20">
              <TrendingUp className="h-24 w-24" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-3">Bienvenue, {userInfo.name}</h2>
              <p className="text-lg opacity-90 mb-4">
                Voici un aperçu détaillé de votre activité immobilière
              </p>
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  Aujourd'hui: 23 vues
                </div>
                <div className="flex items-center">
                  <DollarSign className="h-4 w-4 mr-2" />
                  Revenus ce mois: 45,000 SR
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
            {userStats.map((stat, index) => (
              <Card key={index} className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${stat.color} overflow-hidden`}>
                <CardContent className="p-6 relative">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 mb-2">{stat.title}</p>
                      <p className="text-4xl font-bold text-gray-900 mb-1">{stat.value}</p>
                      <p className="text-xs text-green-600 font-medium">+12% ce mois</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/50 backdrop-blur-sm">
                      <stat.icon className="h-8 w-8" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 right-0 w-16 h-16 opacity-10">
                    <stat.icon className="h-16 w-16" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Performance Chart */}
          <Card className="border-0 shadow-xl rounded-2xl overflow-hidden bg-[#ebf0ec]">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 pb-6">
              <CardTitle className="text-gray-900 flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
                Performance des 6 derniers mois
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={monthlyViews}>
                  <defs>
                    <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorInquiries" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="month" stroke="#6B7280" />
                  <YAxis stroke="#6B7280" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: 'none', 
                      borderRadius: '12px', 
                      boxShadow: '0 10px 25px rgba(0,0,0,0.1)' 
                    }} 
                  />
                  <Legend />
                  <Area type="monotone" dataKey="views" stackId="1" stroke="#3B82F6" fillOpacity={1} fill="url(#colorViews)" name="Vues" strokeWidth={2} />
                  <Area type="monotone" dataKey="inquiries" stackId="1" stroke="#10B981" fillOpacity={1} fill="url(#colorInquiries)" name="Demandes" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 ">
            {/* Property Types Pie Chart */}
            <Card className="border-0 shadow-xl rounded-2xl overflow-hidden bg-[#ebf0ec]">
              <CardHeader className="bg-gradient-to-r from-emerald-50 to-green-50">
                <CardTitle className="text-gray-900 flex items-center">
                  <Home className="h-5 w-5 mr-2 text-emerald-600" />
                  Types de propriétés
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={propertyTypes}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {propertyTypes.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Price Ranges Bar Chart */}
            <Card className="border-0 shadow-xl rounded-2xl overflow-hidden bg-[#ebf0ec]">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                <CardTitle className="text-gray-900 flex items-center">
                  <DollarSign className="h-5 w-5 mr-2 text-purple-600" />
                  Gammes de prix (SR)
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={priceRanges}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis dataKey="range" stroke="#6B7280" />
                    <YAxis stroke="#6B7280" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: 'none', 
                        borderRadius: '12px', 
                        boxShadow: '0 10px 25px rgba(0,0,0,0.1)' 
                      }} 
                    />
                    <Bar dataKey="count" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Weekly Activity Chart */}
          <Card className="border-0 shadow-xl rounded-2xl overflow-hidden bg-[#ebf0ec]">
            <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50">
              <CardTitle className="text-gray-900 flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-orange-600" />
                Activité hebdomadaire
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={dailyActivity}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="day" stroke="#6B7280" />
                  <YAxis stroke="#6B7280" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: 'none', 
                      borderRadius: '12px', 
                      boxShadow: '0 10px 25px rgba(0,0,0,0.1)' 
                    }} 
                  />
                  <Legend />
                  <Line type="monotone" dataKey="views" stroke="#F97316" strokeWidth={3} dot={{ r: 6 }} name="Vues" />
                  <Line type="monotone" dataKey="favorites" stroke="#EF4444" strokeWidth={3} dot={{ r: 6 }} name="Favoris" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Activity Timeline */}
          <Card className="border-0 shadow-xl rounded-2xl overflow-hidden bg-[#ebf0ec]">
            <CardHeader className="bg-gradient-to-r from-gray-50 to-slate-50">
              <CardTitle className="text-gray-900 flex items-center">
                <Users className="h-5 w-5 mr-2 text-gray-600" />
                Activités récentes
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {[
                  { action: 'Nouvelle propriété villa luxueuse publiée', time: 'Il y a 2 heures', icon: Home, color: 'bg-emerald-100 text-emerald-600' },
                  { action: 'Appartement ajouté aux favoris par 3 utilisateurs', time: 'Il y a 4 heures', icon: Heart, color: 'bg-rose-100 text-rose-600' },
                  { action: 'Consultation détaillée - Villa Al-Malaz', time: 'Il y a 6 heures', icon: Eye, color: 'bg-blue-100 text-blue-600' },
                  { action: 'Nouvelle demande de visite reçue', time: 'Il y a 1 jour', icon: Calendar, color: 'bg-purple-100 text-purple-600' },
                ].map((activity, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${activity.color}`}>
                      <activity.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900 mb-1">{activity.action}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Profile Card */}
        <div className="lg:col-span-1">
          <Card className="border-0 shadow-xl rounded-2xl overflow-hidden sticky top-4 bg-[#ebf0ec]">
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 h-24"></div>
            <CardContent className="p-6 -mt-12">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="w-28 h-28 rounded-full border-4 border-white shadow-xl overflow-hidden bg-gray-200">
                    {userInfo.avatar ? (
                      <img 
                        src={userInfo.avatar} 
                        alt="Profile" 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-300">
                        <User className="h-14 w-14 text-gray-500" />
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
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{userInfo.location}</span>
                </div>
                <p className="text-sm text-gray-600 mb-6 text-center leading-relaxed">{userInfo.bio}</p>
                
                {/* Enhanced Stats */}
                <div className="w-full space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-blue-50 rounded-xl">
                      <p className="text-2xl font-bold text-blue-600">156</p>
                      <p className="text-xs text-gray-600">Connexions</p>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-xl">
                      <p className="text-2xl font-bold text-green-600">4.8</p>
                      <p className="text-xs text-gray-600">Note moyenne</p>
                    </div>
                  </div>
                  
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <p className="text-sm text-gray-600">Membre depuis</p>
                    <p className="font-semibold text-gray-900">
                      {new Date(userInfo.joinDate).toLocaleDateString('fr-FR', { 
                        year: 'numeric', 
                        month: 'long' 
                      })}
                    </p>
                    <div className="flex items-center justify-center mt-2">
                      <Star className="h-4 w-4 text-yellow-500 mr-1 fill-current" />
                      <span className="text-sm text-gray-600">24 avis</span>
                    </div>
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