"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Mail, Lock, Eye, EyeOff } from "lucide-react"
import { FaGoogle, FaFacebook } from "react-icons/fa"

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login attempt:", formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-background">
       <div className="text-center mb-6">
              <h1 className="text-3xl font-bold">Dayastates</h1>
              <p className="text-lg text-muted-foreground mt-2">Bienvenue de retour</p>
            </div>
      <div className="space-y-2">
         {/* Social login buttons */}
      <div className="mx-auto flex justify-center gap-4">
        <Button variant="outline" className="h-16 w-16 rounded-full flex items-center justify-center bg-transparent" type="button">
          <FaGoogle className="h-22 w-22"  />
        </Button>
        <Button variant="outline" className="h-16 w-16 rounded-full flex items-center justify-center bg-transparent" type="button">
          <FaFacebook className="h-22 w-22 " />
        </Button>
      </div>
      <div className="flex items-center my-4">
  <Separator className="flex-1" />
  <span className="px-4 text-sm text-muted-foreground">OU</span>
  <Separator className="flex-1" />
</div>

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

      <div className="space-y-2">
        <Label htmlFor="password">Mot de passe</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            className="p-7 rounded-full"
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

      <Button type="submit" className="w-full p-7 rounded-full">
        Se connecter
      </Button>

      <div className="text-center">
        <Button variant="link" className="text-sm text-muted-foreground">
          Mot de passe oublié ?
        </Button>
      </div>

      <Separator />

     
    </form>
  )
}
