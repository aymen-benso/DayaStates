"use client"
// /app/dashboard/page.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Home,
  Eye,
  Phone,
  TrendingUp,
  MessageSquare,
  Calendar,
  PlusCircle,
  BarChart3,
} from 'lucide-react';
import { stats, properties, inquiries } from '@/lib/data';

export default function DashboardPage() {
  // Map string icon names to actual components
  const iconMap = {
    Home: Home,
    Eye: Eye,
    Phone: Phone,
    TrendingUp: TrendingUp,
  };

  return (
    <div className="space-y-8">
      {/* Header avec bienvenue */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Bonjour, Jean Dupont 👋</h1>
            <p className="text-blue-100">Voici un aperçu de votre activité aujourd'hui</p>
          </div>
          <div className="text-right">
            <p className="text-blue-100">Aujourd'hui</p>
            <p className="text-2xl font-bold">15 Janvier 2024</p>
          </div>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = iconMap[stat.icon as keyof typeof iconMap];
          return (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-green-600 font-medium mt-1">{stat.change}</p>
                  </div>
                  <div className={`p-3 rounded-full ${stat.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Main Dashboard Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <Card className="lg:col-span-2 border-0 shadow-lg bg-white">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl font-bold text-gray-900">Activité Récente</CardTitle>
                <CardDescription>Dernières interactions avec vos propriétés</CardDescription>
              </div>
              <Button variant="outline" size="sm">Voir tout</Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-xl">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Eye className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Nouvelle vue sur "Appartement luxueux à Paris"</p>
                  <p className="text-sm text-gray-600">Il y a 2 heures</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-xl">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <MessageSquare className="h-5 w-5 text-green-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Nouvelle demande de Jean Dupont</p>
                  <p className="text-sm text-gray-600">Il y a 4 heures</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-orange-50 rounded-xl">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-orange-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Visite programmée pour demain</p>
                  <p className="text-sm text-gray-600">Villa avec jardin - 14h00</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="border-0 shadow-lg bg-white">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-900">Actions Rapides</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start" variant="outline">
              <PlusCircle className="h-4 w-4 mr-2" />
              Ajouter une propriété
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <MessageSquare className="h-4 w-4 mr-2" />
              Répondre aux demandes
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Calendar className="h-4 w-4 mr-2" />
              Programmer une visite
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <BarChart3 className="h-4 w-4 mr-2" />
              Voir les statistiques
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}