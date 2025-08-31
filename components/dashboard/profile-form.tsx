"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, Mail, Phone, MapPin, Upload } from "lucide-react"

export function ProfileForm() {
  const [profileData, setProfileData] = useState({
    firstName: "Jean",
    lastName: "Dupont",
    email: "jean.dupont@email.com",
    phone: "+33 6 12 34 56 78",
    address: "123 Rue de la Paix, 75001 Paris",
    bio: "Passionné d'immobilier depuis plus de 10 ans, je vous accompagne dans tous vos projets immobiliers.",
    userType: "owner",
    company: "Dupont Immobilier",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement profile update logic
    console.log("Profile update:", profileData)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Informations personnelles</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Profile Picture */}
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>
                {profileData.firstName[0]}
                {profileData.lastName[0]}
              </AvatarFallback>
            </Avatar>
            <Button variant="outline" size="sm">
              <Upload className="h-4 w-4 mr-2" />
              Changer la photo
            </Button>
          </div>

          {/* Name Fields */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">Prénom</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="firstName"
                  className="pl-10"
                  value={profileData.firstName}
                  onChange={(e) => setProfileData((prev) => ({ ...prev, firstName: e.target.value }))}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Nom</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="lastName"
                  className="pl-10"
                  value={profileData.lastName}
                  onChange={(e) => setProfileData((prev) => ({ ...prev, lastName: e.target.value }))}
                />
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  className="pl-10"
                  value={profileData.email}
                  onChange={(e) => setProfileData((prev) => ({ ...prev, email: e.target.value }))}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Téléphone</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="phone"
                  type="tel"
                  className="pl-10"
                  value={profileData.phone}
                  onChange={(e) => setProfileData((prev) => ({ ...prev, phone: e.target.value }))}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Adresse</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="address"
                  className="pl-10"
                  value={profileData.address}
                  onChange={(e) => setProfileData((prev) => ({ ...prev, address: e.target.value }))}
                />
              </div>
            </div>
          </div>

          {/* User Type */}
          <div className="space-y-2">
            <Label>Type de profil</Label>
            <Select
              value={profileData.userType}
              onValueChange={(value) => setProfileData((prev) => ({ ...prev, userType: value }))}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="buyer">Acheteur/Locataire</SelectItem>
                <SelectItem value="owner">Propriétaire</SelectItem>
                <SelectItem value="agent">Agent immobilier</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Company (if agent) */}
          {profileData.userType === "agent" && (
            <div className="space-y-2">
              <Label htmlFor="company">Agence</Label>
              <Input
                id="company"
                value={profileData.company}
                onChange={(e) => setProfileData((prev) => ({ ...prev, company: e.target.value }))}
                placeholder="Nom de votre agence"
              />
            </div>
          )}

          {/* Bio */}
          <div className="space-y-2">
            <Label htmlFor="bio">Présentation</Label>
            <Textarea
              id="bio"
              value={profileData.bio}
              onChange={(e) => setProfileData((prev) => ({ ...prev, bio: e.target.value }))}
              placeholder="Présentez-vous en quelques mots..."
              rows={4}
            />
          </div>

          <Button type="submit" className="w-full">
            Sauvegarder les modifications
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
