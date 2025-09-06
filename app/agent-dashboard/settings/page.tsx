// /app/dashboard/settings/page.tsx
"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle2 } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Paramètres</h2>
        <p className="text-gray-600 mt-1">Gérez vos préférences et paramètres du compte</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-0 shadow-lg bg-white">
          <CardHeader>
            <CardTitle>Profil de l'Agent</CardTitle>
            <CardDescription>Mettez à jour vos informations personnelles</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Nom Complet</label>
              <Input placeholder="Jean Dupont" />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Email</label>
              <Input placeholder="jean.dupont@email.com" />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Téléphone</label>
              <Input placeholder="+33 6 12 34 56 78" />
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <CheckCircle2 className="h-4 w-4 mr-2" />
              Enregistrer
            </Button>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-white">
          <CardHeader>
            <CardTitle>Préférences de Notification</CardTitle>
            <CardDescription>Configurez vos alertes</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Notifications par Email</p>
                <p className="text-sm text-gray-600">Recevoir des alertes par email</p>
              </div>
              <input type="checkbox" className="toggle toggle-primary" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Notifications Push</p>
                <p className="text-sm text-gray-600">Recevoir des notifications sur mobile</p>
              </div>
              <input type="checkbox" className="toggle toggle-primary" />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Fréquence des Rapports</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily">Quotidien</SelectItem>
                  <SelectItem value="weekly">Hebdomadaire</SelectItem>
                  <SelectItem value="monthly">Mensuel</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <CheckCircle2 className="h-4 w-4 mr-2" />
              Enregistrer
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}