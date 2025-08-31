"use client"

import { useState } from "react"
import { ConversationList } from "./conversation-list"
import { ChatWindow } from "./chat-window"
import { MessageSquare } from "lucide-react"

export interface Conversation {
  id: string
  participant: {
    name: string
    avatar: string
    role: string
  }
  property: {
    title: string
    image: string
    price: string
  }
  lastMessage: {
    content: string
    timestamp: string
    isRead: boolean
    senderId: string
  }
  unreadCount: number
}

const mockConversations: Conversation[] = [
  {
    id: "1",
    participant: {
      name: "Marie Dubois",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Acheteur potentiel",
    },
    property: {
      title: "Appartement moderne 3 pièces",
      image: "/modern-apartment-living.png",
      price: "450,000€",
    },
    lastMessage: {
      content:
        "Bonjour, je suis très intéressée par votre appartement. Serait-il possible d'organiser une visite cette semaine ?",
      timestamp: "Il y a 2h",
      isRead: false,
      senderId: "marie",
    },
    unreadCount: 2,
  },
  {
    id: "2",
    participant: {
      name: "Pierre Martin",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Agent immobilier",
    },
    property: {
      title: "Villa avec piscine",
      image: "/luxury-villa-pool.png",
      price: "850,000€",
    },
    lastMessage: {
      content: "Parfait, je vous confirme le rendez-vous pour demain à 14h.",
      timestamp: "Il y a 5h",
      isRead: true,
      senderId: "me",
    },
    unreadCount: 0,
  },
  {
    id: "3",
    participant: {
      name: "Sophie Laurent",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Propriétaire",
    },
    property: {
      title: "Studio centre-ville",
      image: "/city-center-studio.png",
      price: "180,000€",
    },
    lastMessage: {
      content: "Merci pour votre intérêt. Le studio est toujours disponible.",
      timestamp: "Hier",
      isRead: true,
      senderId: "sophie",
    },
    unreadCount: 0,
  },
]

export function MessagingInterface() {
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(mockConversations[0])

  return (
    <div className="flex h-full">
      {/* Conversations List */}
      <div className="w-80 border-r bg-card">
        <div className="p-4 border-b">
          <h1 className="text-xl font-semibold flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            Messages
          </h1>
        </div>
        <ConversationList
          conversations={mockConversations}
          selectedConversation={selectedConversation}
          onSelectConversation={setSelectedConversation}
        />
      </div>

      {/* Chat Window */}
      <div className="flex-1">
        {selectedConversation ? (
          <ChatWindow conversation={selectedConversation} />
        ) : (
          <div className="flex items-center justify-center h-full text-muted-foreground">
            <div className="text-center">
              <MessageSquare className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Sélectionnez une conversation pour commencer</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
