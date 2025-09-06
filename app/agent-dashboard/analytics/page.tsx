// /app/dashboard/analytics/page.tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Clock, DollarSign, Star } from 'lucide-react';
import { properties, analyticsData, Property, AnalyticsData } from '@/lib/data';

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Analyses et Statistiques</h2>
        <p className="text-gray-600 mt-1">Suivez les performances de vos propriétés</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100">Taux de conversion</p>
                <p className="text-3xl font-bold">18.5%</p>
              </div>
              <TrendingUp className="h-8 w-8" />
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-lg bg-gradient-to-r from-green-600 to-green-700 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100">Temps de vente moyen</p>
                <p className="text-3xl font-bold">45j</p>
              </div>
              <Clock className="h-8 w-8" />
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-lg bg-gradient-to-r from-purple-600 to-purple-700 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100">Revenus ce mois</p>
                <p className="text-3xl font-bold">€45k</p>
              </div>
              <DollarSign className="h-8 w-8" />
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-lg bg-gradient-to-r from-orange-600 to-orange-700 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100">Note satisfaction</p>
                <p className="text-3xl font-bold">4.8/5</p>
              </div>
              <Star className="h-8 w-8" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-0 shadow-lg bg-white">
          <CardHeader>
            <CardTitle>Performance Mensuelle</CardTitle>
            <CardDescription>Évolution des vues, demandes et ventes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <p className="text-gray-600 font-medium">Graphique des performances</p>
                <p className="text-sm text-gray-500">Données des 4 derniers mois</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-white">
          <CardHeader>
            <CardTitle>Top Propriétés</CardTitle>
            <CardDescription>Les plus performantes ce mois</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {properties.slice(0, 3).map((property, index) => (
                <div key={property.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{property.title}</p>
                    <p className="text-sm text-gray-600">{property.views} vues</p>
                  </div>
                  <Badge variant="outline">{property.type}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
      );
}