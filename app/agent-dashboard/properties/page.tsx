// /app/dashboard/properties/page.tsx
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Home, MapPin, Target, Eye, Filter, Search, PlusCircle, Edit, Trash2 } from 'lucide-react';
import { properties, Property } from '@/lib/data';

export default function PropertiesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Gestion des Propriétés</h2>
          <p className="text-gray-600 mt-1">Gérez toutes vos propriétés immobilières</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filtres
          </Button>
          <Button variant="outline">
            <Search className="h-4 w-4 mr-2" />
            Rechercher
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <PlusCircle className="h-4 w-4 mr-2" />
            Nouvelle Propriété
          </Button>
        </div>
      </div>

      <div className="flex space-x-3">
        <Badge variant="default" className="px-4 py-2">Toutes (24)</Badge>
        <Badge variant="outline" className="px-4 py-2">À vendre (18)</Badge>
        <Badge variant="outline" className="px-4 py-2">À louer (6)</Badge>
        <Badge variant="outline" className="px-4 py-2">Réservées (3)</Badge>
      </div>

      <div className="grid gap-6">
        {properties.map((property: Property) => (
          <Card key={property.id} className="border-0 shadow-lg hover:shadow-xl transition-all bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-start space-x-4">
                  <div className="w-20 h-20 bg-gray-200 rounded-xl flex items-center justify-center">
                    <Home className="h-8 w-8 text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="font-bold text-xl text-gray-900">{property.title}</h3>
                      <Badge variant="outline">{property.type}</Badge>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600 mb-3">
                      <span className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {property.location}
                      </span>
                      <span className="flex items-center">
                        <Home className="h-4 w-4 mr-1" />
                        {property.rooms} pièces
                      </span>
                      <span className="flex items-center">
                        <Target className="h-4 w-4 mr-1" />
                        {property.surface} m²
                      </span>
                      <span className="flex items-center">
                        <Eye className="h-4 w-4 mr-1" />
                        {property.views} vues
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">Ajoutée le {property.dateAdded}</p>
                  </div>
                </div>
                <div className="text-right space-y-3">
                  <div>
                    <Badge variant={property.status === 'À vendre' ? 'default' : 'secondary'}>
                      {property.status}
                    </Badge>
                    <p className="font-bold text-2xl text-blue-600 mt-1">{property.price} €</p>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}