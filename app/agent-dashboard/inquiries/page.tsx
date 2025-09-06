// /app/dashboard/inquiries/page.tsx
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, MessageSquare, CheckCircle2, Users, Mail, Phone, Filter, Search, Calendar } from 'lucide-react';
import { inquiries, Inquiry } from '@/lib/data';

export default function InquiriesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Demandes de Renseignements</h2>
          <p className="text-gray-600 mt-1">Gérez toutes les demandes de vos clients</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filtrer
          </Button>
          <Button variant="outline">
            <Search className="h-4 w-4 mr-2" />
            Rechercher
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card className="border-0 shadow-lg bg-white">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Clock className="h-6 w-6 text-red-600" />
            </div>
            <h3 className="font-bold text-2xl text-gray-900">5</h3>
            <p className="text-gray-600">Nouvelles demandes</p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-lg bg-white">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <MessageSquare className="h-6 w-6 text-yellow-600" />
            </div>
            <h3 className="font-bold text-2xl text-gray-900">8</h3>
            <p className="text-gray-600">En attente de réponse</p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-lg bg-white">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="font-bold text-2xl text-gray-900">12</h3>
            <p className="text-gray-600">Traitées</p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        {inquiries.map((inquiry: Inquiry) => (
          <Card key={inquiry.id} className="border-0 shadow-lg hover:shadow-xl transition-all bg-white">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-bold text-lg text-gray-900">{inquiry.name}</h4>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                        <span className="flex items-center">
                          <Mail className="h-4 w-4 mr-1" />
                          {inquiry.email}
                        </span>
                        <span className="flex items-center">
                          <Phone className="h-4 w-4 mr-1" />
                          {inquiry.phone}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={inquiry.priority === 'high' ? 'destructive' : inquiry.priority === 'medium' ? 'default' : 'secondary'}>
                        {inquiry.priority === 'high' ? 'Haute' : inquiry.priority === 'medium' ? 'Moyenne' : 'Basse'}
                      </Badge>
                      <Badge variant={inquiry.status === 'Nouveau' ? 'default' : 'secondary'}>
                        {inquiry.status}
                      </Badge>
                    </div>
                  </div>
                  <p className="font-medium text-gray-900 mb-2">Propriété: {inquiry.property}</p>
                  <p className="text-gray-700 bg-gray-50 p-3 rounded-lg mb-4">{inquiry.message}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500">Reçu le {inquiry.date}</p>
                    <div className="flex space-x-2">
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        Répondre
                      </Button>
                      <Button variant="outline" size="sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        Programmer visite
                      </Button>
                    </div>
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