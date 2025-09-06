"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Bell, Shield, Save } from 'lucide-react';

export default function Settings() {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-6 border border-green-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Paramètres</h2>
        <p className="text-gray-600 mb-6">Gérez les paramètres de votre compte</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-gray-900 flex items-center">
                <Bell className="h-5 w-5 ml-2 text-emerald-600" />
                Paramètres de notification
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <label className="flex items-center space-x-3 space-x-reverse">
                <input type="checkbox" className="rounded border-green-300 text-emerald-600 focus:ring-emerald-500" defaultChecked />
                <span className="text-sm text-gray-700">Notifications de nouveaux messages</span>
              </label>
              <label className="flex items-center space-x-3 space-x-reverse">
                <input type="checkbox" className="rounded border-green-300 text-emerald-600 focus:ring-emerald-500" defaultChecked />
                <span className="text-sm text-gray-700">Notifications des mises à jour des propriétés</span>
              </label>
              <label className="flex items-center space-x-3 space-x-reverse">
                <input type="checkbox" className="rounded border-green-300 text-emerald-600 focus:ring-emerald-500" />
                <span className="text-sm text-gray-700">Notifications des offres promotionnelles</span>
              </label>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-gray-900 flex items-center">
                <Shield className="h-5 w-5 ml-2 text-emerald-600" />
                Paramètres de sécurité
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block text-gray-700">Changer le mot de passe</label>
                <Input type="password" placeholder="Mot de passe actuel" className="mb-2" />
                <Input type="password" placeholder="Nouveau mot de passe" />
              </div>
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                <Save className="h-4 w-4 ml-2" />
                Enregistrer le mot de passe
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}