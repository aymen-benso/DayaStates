"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Phone, Mail, MessageSquare, Calendar, Heart } from "lucide-react"

interface PropertyContactProps {
  property: {
    id: string
    title: string
    agent: {
      name: string
      phone: string
      email: string
      agency: string
    }
  }
}

export function PropertyContact({ property }: PropertyContactProps) {
  const [message, setMessage] = useState("")
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: `Bonjour, je suis intéressé(e) par votre propriété "${property.title}". Pourriez-vous me contacter pour plus d'informations ?`,
  })

  return (
    <div className="space-y-6">
      {/* Quick Actions */}
      <Card>
        <CardContent className="p-4">
          <div className="grid grid-cols-2 gap-3">
            <Button className="w-full">
              <Phone className="h-4 w-4 mr-2" />
              Appeler
            </Button>
            <Button variant="outline" className="w-full bg-transparent">
              <Heart className="h-4 w-4 mr-2" />
              Favoris
            </Button>
            <Button variant="outline" className="w-full bg-transparent">
              <Calendar className="h-4 w-4 mr-2" />
              Visite
            </Button>
            <Button variant="outline" className="w-full bg-transparent">
              <MessageSquare className="h-4 w-4 mr-2" />
              Message
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Agent Info */}
      <Card>
        <CardHeader>
          <CardTitle>Votre contact</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>
                {property.agent.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="font-semibold">{property.agent.name}</div>
              <div className="text-sm text-muted-foreground">{property.agent.agency}</div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span>{property.agent.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span>{property.agent.email}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Form */}
      <Card>
        <CardHeader>
          <CardTitle>Demande d'information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nom</Label>
              <Input
                id="name"
                value={contactForm.name}
                onChange={(e) => setContactForm((prev) => ({ ...prev, name: e.target.value }))}
                placeholder="Votre nom"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={contactForm.email}
                onChange={(e) => setContactForm((prev) => ({ ...prev, email: e.target.value }))}
                placeholder="votre@email.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Téléphone</Label>
            <Input
              id="phone"
              type="tel"
              value={contactForm.phone}
              onChange={(e) => setContactForm((prev) => ({ ...prev, phone: e.target.value }))}
              placeholder="+33 6 12 34 56 78"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              value={contactForm.message}
              onChange={(e) => setContactForm((prev) => ({ ...prev, message: e.target.value }))}
              placeholder="Votre message..."
              rows={4}
            />
          </div>

          <Button className="w-full">
            <MessageSquare className="h-4 w-4 mr-2" />
            Envoyer la demande
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
