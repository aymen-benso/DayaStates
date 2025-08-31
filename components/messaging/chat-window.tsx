"use client"

import type React from "react"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Send, Phone, Video, MoreVertical, Euro } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import type { Conversation } from "./messaging-interface"

interface Message {
  id: string
  content: string
  senderId: string
  timestamp: string
  type: "text" | "property" | "system"
}

const mockMessages: Message[] = [
  {
    id: "1",
    content: "Bonjour ! Je suis très intéressée par votre appartement. Pourriez-vous me donner plus d'informations ?",
    senderId: "marie",
    timestamp: "14:30",
    type: "text",
  },
  {
    id: "2",
    content: "Bonjour Marie ! Bien sûr, je serais ravi de vous renseigner. Qu'aimeriez-vous savoir en particulier ?",
    senderId: "me",
    timestamp: "14:32",
    type: "text",
  },
  {
    id: "3",
    content: "L'appartement est-il toujours disponible ? Et serait-il possible d'organiser une visite cette semaine ?",
    senderId: "marie",
    timestamp: "14:35",
    type: "text",
  },
  {
    id: "4",
    content:
      "Oui, l'appartement est toujours disponible ! Je peux vous proposer une visite jeudi ou vendredi après-midi. Quel créneau vous conviendrait le mieux ?",
    senderId: "me",
    timestamp: "14:37",
    type: "text",
  },
  {
    id: "5",
    content: "Parfait ! Vendredi après-midi serait idéal pour moi. Vers 15h si c'est possible ?",
    senderId: "marie",
    timestamp: "16:20",
    type: "text",
  },
]

interface ChatWindowProps {
  conversation: Conversation
}

export function ChatWindow({ conversation }: ChatWindowProps) {
  const [newMessage, setNewMessage] = useState("")
  const [messages] = useState<Message[]>(mockMessages)

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Here you would typically send the message to your backend
      console.log("Sending message:", newMessage)
      setNewMessage("")
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b bg-card">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage
                src={conversation.participant.avatar || "/placeholder.svg"}
                alt={conversation.participant.name}
              />
              <AvatarFallback>
                {conversation.participant.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <h2 className="font-semibold">{conversation.participant.name}</h2>
              <p className="text-sm text-muted-foreground">{conversation.participant.role}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Phone className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Video className="h-4 w-4" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Voir le profil</DropdownMenuItem>
                <DropdownMenuItem>Bloquer l'utilisateur</DropdownMenuItem>
                <DropdownMenuItem className="text-red-600">Signaler</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Property Info */}
        <Card className="mt-4 p-3">
          <div className="flex gap-3">
            <div className="w-16 h-12 rounded overflow-hidden bg-muted flex-shrink-0">
              <img
                src={conversation.property.image || "/placeholder.svg"}
                alt={conversation.property.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-sm truncate">{conversation.property.title}</h3>
              <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                <span className="flex items-center gap-1">
                  <Euro className="h-3 w-3" />
                  {conversation.property.price}
                </span>
              </div>
            </div>
            <Button variant="outline" size="sm">
              Voir l'annonce
            </Button>
          </div>
        </Card>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.senderId === "me" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[70%] rounded-lg px-4 py-2 ${
                message.senderId === "me" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              }`}
            >
              <p className="text-sm">{message.content}</p>
              <p
                className={`text-xs mt-1 ${
                  message.senderId === "me" ? "text-primary-foreground/70" : "text-muted-foreground/70"
                }`}
              >
                {message.timestamp}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="p-4 border-t bg-card">
        <div className="flex gap-2">
          <Input
            placeholder="Tapez votre message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1"
          />
          <Button onClick={handleSendMessage} disabled={!newMessage.trim()}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
