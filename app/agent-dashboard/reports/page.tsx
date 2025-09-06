// /app/dashboard/reports/page.tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Eye, MessageSquare, CheckCircle2, FileText, Download } from 'lucide-react';

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Rapports</h2>
        <p className="text-gray-600 mt-1">Générez et consultez vos rapports d'activité</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-0 shadow-lg bg-white">
          <CardHeader>
            <CardTitle>Rapport de Performance</CardTitle>
            <CardDescription>Vue d'ensemble des activités mensuelles</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                <div>
                  <p className="font-medium">Vues Totales</p>
                  <p className="text-2xl font-bold">12,345</p>
                </div>
                <Eye className="h-8 w-8 text-blue-600" />
              </div>
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
                <div>
                  <p className="font-medium">Demandes Reçues</p>
                  <p className="text-2xl font-bold">245</p>
                </div>
                <MessageSquare className="h-8 w-8 text-green-600" />
              </div>
              <div className="flex items-center justify-between p-4 bg-purple-50 rounded-xl">
                <div>
                  <p className="font-medium">Ventes Conclues</p>
                  <p className="text-2xl font-bold">18</p>
                </div>
                <CheckCircle2 className="h-8 w-8 text-purple-600" />
              </div>
            </div>
            <Button className="w-full mt-4">
              <Download className="h-4 w-4 mr-2" />
              Télécharger le Rapport
            </Button>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-white">
          <CardHeader>
            <CardTitle>Filtres de Rapport</CardTitle>
            <CardDescription>Personnalisez vos rapports</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Période</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner une période" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="last-month">Dernier Mois</SelectItem>
                  <SelectItem value="last-quarter">Dernier Trimestre</SelectItem>
                  <SelectItem value="last-year">Dernière Année</SelectItem>
                  <SelectItem value="custom">Personnalisée</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Type de Propriété</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Tous les types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous</SelectItem>
                  <SelectItem value="apartment">Appartement</SelectItem>
                  <SelectItem value="house">Maison</SelectItem>
                  <SelectItem value="villa">Villa</SelectItem>
                  <SelectItem value="office">Bureau</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="w-full">
              <FileText className="h-4 w-4 mr-2" />
              Générer le Rapport
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}