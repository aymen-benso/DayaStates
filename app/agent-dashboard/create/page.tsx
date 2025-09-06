// /app/dashboard/create/page.tsx
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Upload, PlusCircle } from 'lucide-react';

export default function CreatePropertyPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Ajouter une Nouvelle Propriété</h2>
        <p className="text-gray-600 mt-1">Créez une nouvelle annonce immobilière</p>
      </div>

      <Card className="border-0 shadow-lg bg-white">
        <CardContent className="p-8 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Informations générales */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Informations Générales</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Titre de la propriété *</label>
                    <Input placeholder="Ex: Appartement luxueux à Paris" className="w-full" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Prix *</label>
                      <Input placeholder="450,000" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Type de prix</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionner" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fixed">Prix fixe</SelectItem>
                          <SelectItem value="monthly">Par mois</SelectItem>
                          <SelectItem value="negotiable">Négociable</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Type de propriété *</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Choisir le type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="apartment">Appartement</SelectItem>
                        <SelectItem value="house">Maison</SelectItem>
                        <SelectItem value="villa">Villa</SelectItem>
                        <SelectItem value="office">Bureau</SelectItem>
                        <SelectItem value="land">Terrain</SelectItem>
                        <SelectItem value="studio">Studio</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Statut *</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Choisir le statut" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="for-sale">À vendre</SelectItem>
                        <SelectItem value="for-rent">À louer</SelectItem>
                        <SelectItem value="reserved">Réservé</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Détails de la Propriété</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Surface (m²) *</label>
                      <Input placeholder="85" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Nombre de pièces</label>
                      <Input placeholder="3" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Localisation *</label>
                    <Input placeholder="Ex: Paris 16ème" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Description</label>
                    <Textarea placeholder="Décrivez la propriété..." rows={5} />
                  </div>
                </div>
              </div>
            </div>

            {/* Upload d'images */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Images de la Propriété</h3>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-600 font-medium mb-2">Glisser-déposer des images ici</p>
                  <p className="text-sm text-gray-500 mb-4">ou</p>
                  <Button variant="outline">
                    <Upload className="h-4 w-4 mr-2" />
                    Parcourir
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Caractéristiques Additionnelles</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Année de construction</label>
                      <Input placeholder="Ex: 2010" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Étage</label>
                      <Input placeholder="Ex: 3" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Commodités</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionner les commodités" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="parking">Parking</SelectItem>
                        <SelectItem value="elevator">Ascenseur</SelectItem>
                        <SelectItem value="garden">Jardin</SelectItem>
                        <SelectItem value="balcony">Balcon</SelectItem>
                        <SelectItem value="terrace">Terrasse</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-3">
            <Button variant="outline">Annuler</Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <PlusCircle className="h-4 w-4 mr-2" />
              Publier la Propriété
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}