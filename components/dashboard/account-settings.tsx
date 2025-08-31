"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Lock, Bell, Shield, Trash2 } from "lucide-react"

export function AccountSettings() {
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    pushNotifications: false,
    marketingEmails: true,
    newListings: true,
    priceAlerts: false,
  })

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  return (
    <div className="space-y-6">
      {/* Notifications */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Notifications
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label>Notifications par email</Label>
              <p className="text-sm text-muted-foreground">Recevoir les notifications importantes par email</p>
            </div>
            <Switch
              checked={notifications.emailNotifications}
              onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, emailNotifications: checked }))}
            />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div>
              <Label>Notifications push</Label>
              <p className="text-sm text-muted-foreground">Recevoir des notifications sur votre navigateur</p>
            </div>
            <Switch
              checked={notifications.pushNotifications}
              onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, pushNotifications: checked }))}
            />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div>
              <Label>Nouvelles annonces</Label>
              <p className="text-sm text-muted-foreground">
                Être notifié des nouvelles propriétés correspondant à vos critères
              </p>
            </div>
            <Switch
              checked={notifications.newListings}
              onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, newListings: checked }))}
            />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div>
              <Label>Alertes prix</Label>
              <p className="text-sm text-muted-foreground">Être notifié des baisses de prix sur vos favoris</p>
            </div>
            <Switch
              checked={notifications.priceAlerts}
              onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, priceAlerts: checked }))}
            />
          </div>
        </CardContent>
      </Card>

      {/* Password Change */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lock className="h-5 w-5" />
            Changer le mot de passe
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="currentPassword">Mot de passe actuel</Label>
              <Input
                id="currentPassword"
                type="password"
                value={passwordData.currentPassword}
                onChange={(e) => setPasswordData((prev) => ({ ...prev, currentPassword: e.target.value }))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="newPassword">Nouveau mot de passe</Label>
              <Input
                id="newPassword"
                type="password"
                value={passwordData.newPassword}
                onChange={(e) => setPasswordData((prev) => ({ ...prev, newPassword: e.target.value }))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirmer le nouveau mot de passe</Label>
              <Input
                id="confirmPassword"
                type="password"
                value={passwordData.confirmPassword}
                onChange={(e) => setPasswordData((prev) => ({ ...prev, confirmPassword: e.target.value }))}
              />
            </div>

            <Button type="submit" className="w-full">
              Mettre à jour le mot de passe
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Privacy & Security */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Confidentialité et sécurité
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label>Profil public</Label>
              <p className="text-sm text-muted-foreground">Permettre aux autres utilisateurs de voir votre profil</p>
            </div>
            <Switch defaultChecked />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div>
              <Label>Afficher mes coordonnées</Label>
              <p className="text-sm text-muted-foreground">Afficher votre téléphone et email sur vos annonces</p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>

      {/* Danger Zone */}
      <Card className="border-destructive">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-destructive">
            <Trash2 className="h-5 w-5" />
            Zone de danger
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium">Supprimer mon compte</h4>
              <p className="text-sm text-muted-foreground">
                Cette action est irréversible. Toutes vos données seront définitivement supprimées.
              </p>
            </div>
            <Button variant="destructive" size="sm">
              Supprimer mon compte
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
