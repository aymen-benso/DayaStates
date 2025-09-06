"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Lock, Eye, EyeOff, User, Phone } from "lucide-react"
import { FaGoogle, FaFacebook } from "react-icons/fa"

export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    userType: "",
    acceptTerms: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement registration logic
    console.log("Registration attempt:", formData)
  }

  return (
<form onSubmit={handleSubmit} className="space-y-4 ">
  <div className="text-center mb-6">
  <h1 className="text-3xl font-bold">Dayastates</h1>
  <p className="text-lg text-muted-foreground mt-2">Rejoignez-nous dès aujourd'hui</p>
</div>

  {/* Social login buttons */}
  <div className="mx-auto flex justify-center gap-4">
    <Button
      variant="outline"
      className="h-16 w-16 rounded-full flex items-center justify-center bg-transparent"
      type="button"
    >
      <FaGoogle className="h-22 w-22" />
    </Button>
    <Button
      variant="outline"
      className="h-16 w-16 rounded-full flex items-center justify-center bg-transparent"
      type="button"
    >
      <FaFacebook className="h-22 w-22" />
    </Button>
  </div>

  {/* First Name + Last Name */}
  <div className="grid grid-cols-2 gap-4">
    <div className="space-y-2">
      <Label htmlFor="firstName">Prénom</Label>
      <div className="relative">
        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          id="firstName"
          placeholder="Prénom"
          className="p-7 rounded-full"
          value={formData.firstName}
          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          required
        />
      </div>
    </div>

    <div className="space-y-2">
      <Label htmlFor="lastName">Nom</Label>
      <div className="relative">
        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          id="lastName"
          placeholder="Nom"
          className="p-7 rounded-full"
          value={formData.lastName}
          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          required
        />
      </div>
    </div>
  </div>

  {/* Email + Phone */}
  <div className="flex gap-4">
    {/* Email */}
    <div className="flex-1 space-y-2">
      <Label htmlFor="email">Email</Label>
      <div className="relative">
        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          id="email"
          type="email"
          placeholder="votre@email.com"
          className="p-7 rounded-full"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </div>
    </div>

    {/* Phone */}
    <div className="flex-1 space-y-2">
      <Label htmlFor="phone">Téléphone</Label>
      <div className="relative">
        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          id="phone"
          type="tel"
          placeholder="+33 6 12 34 56 78"
          className="p-7 rounded-full"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>
    </div>
  </div>

  {/* User Type */}
  <div className="space-y-2">
    <Label htmlFor="userType">Type de compte</Label>
    <Select
      value={formData.userType}
      onValueChange={(value) => setFormData({ ...formData, userType: value })}
    >
      <SelectTrigger>
        <SelectValue placeholder="Sélectionnez votre profil" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="buyer">Acheteur/Locataire</SelectItem>
        <SelectItem value="seller">Vendeur/Propriétaire</SelectItem>
        <SelectItem value="agent">Agent immobilier</SelectItem>
      </SelectContent>
    </Select>
  </div>

  {/* Password + Confirm Password */}
  <div className="grid grid-cols-2 gap-4">
    <div className="space-y-2">
      <Label htmlFor="password">Mot de passe</Label>
      <div className="relative">
        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder="••••••••"
          className="p-7 rounded-full pr-10"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
        />
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="absolute right-0 top-0 h-full px-3"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        </Button>
      </div>
    </div>

    <div className="space-y-2">
      <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
      <div className="relative">
        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          id="confirmPassword"
          type="password"
          placeholder="••••••••"
          className="p-7 rounded-full"
          value={formData.confirmPassword}
          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
          required
        />
      </div>
    </div>
  </div>

  {/* Terms */}
  <div className="flex items-center space-x-2">
    <Checkbox
      id="terms"
      checked={formData.acceptTerms}
      onCheckedChange={(checked) => setFormData({ ...formData, acceptTerms: checked as boolean })}
    />
    <Label htmlFor="terms" className="text-sm">
      J'accepte les{" "}
      <Button variant="link" className="p-0 h-auto text-sm">
        conditions d'utilisation
      </Button>{" "}
      et la{" "}
      <Button variant="link" className="p-0 h-auto text-sm">
        politique de confidentialité
      </Button>
    </Label>
  </div>

  {/* Submit */}
  <Button type="submit" className="w-full" disabled={!formData.acceptTerms}>
    Créer mon compte
  </Button>

  <Separator />
</form>


  )
}
