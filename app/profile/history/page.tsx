"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Search, Filter, Building2, X } from 'lucide-react';

export default function History() {
  const browsingHistory = [
    {
      id: 1,
      title: 'Appartements à vendre à Riyad',
      location: 'Riyad',
      dateViewed: '2024-01-15',
      timeViewed: '14:30',
      duration: '5 minutes',
      type: 'Recherche'
    },
    {
      id: 2,
      title: 'Villa de luxe à Djeddah',
      location: 'Djeddah',
      dateViewed: '2024-01-15',
      timeViewed: '10:15',
      duration: '8 minutes',
      type: 'Propriété'
    },
    {
      id: 3,
      title: 'Bureaux à louer à Dammam',
      location: 'Dammam',
      dateViewed: '2024-01-14',
      timeViewed: '16:45',
      duration: '3 minutes',
      type: 'Recherche'
    },
    {
      id: 4,
      title: 'Studio moderne à Khobar',
      location: 'Khobar',
      dateViewed: '2024-01-14',
      timeViewed: '09:20',
      duration: '12 minutes',
      type: 'Propriété'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Historique de navigation</h2>
          <p className="text-gray-600">Propriétés et recherches récemment consultées</p>
        </div>
        <div className="flex space-x-3 space-x-reverse">
          <Button variant="outline" className="border-green-200 text-green-700 hover:bg-green-50">
            <Filter className="h-4 w-4 ml-2" />
            Filtrer
          </Button>
          <Button variant="outline" className="border-red-200 text-red-600 hover:bg-red-50">Effacer l'historique</Button>
        </div>
      </div>

      <Card className="border-0 shadow-lg">
        <CardContent className="p-6">
          <div className="space-y-4">
            {browsingHistory.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 rounded-xl hover:from-green-100 hover:to-emerald-100 transition-all cursor-pointer border border-green-100">
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    item.type === 'Propriété' ? 'bg-emerald-100' : 'bg-green-100'
                  }`}>
                    {item.type === 'Propriété' ? (
                      <Building2 className={`h-6 w-6 ${item.type === 'Propriété' ? 'text-emerald-600' : 'text-green-600'}`} />
                    ) : (
                      <Search className="h-6 w-6 text-green-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{item.title}</h4>
                    <div className="flex items-center space-x-4 space-x-reverse text-sm text-gray-600 mt-1">
                      <span className="flex items-center">
                        <MapPin className="h-3 w-3 ml-1" />
                        {item.location}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-3 w-3 ml-1" />
                        {item.duration}
                      </span>
                      <Badge variant="outline" className={`text-xs ${
                        item.type === 'Propriété' ? 'border-emerald-200 text-emerald-700' : 'border-green-200 text-green-700'
                      }`}>
                        {item.type}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="text-left text-sm text-gray-500">
                  <p className="font-medium">{item.dateViewed}</p>
                  <p>{item.timeViewed}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}