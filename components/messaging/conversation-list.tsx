"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { useState } from "react"
import type { Conversation } from "./messaging-interface"

interface ConversationListProps {
  conversations: Conversation[]
  selectedConversation: Conversation | null
  onSelectConversation: (conversation: Conversation) => void
}

export function ConversationList({ conversations, selectedConversation, onSelectConversation }: ConversationListProps) {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredConversations = conversations.filter(
    (conv) =>
      conv.participant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      conv.property.title.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="flex flex-col h-full">
      {/* Search */}
      <div className="p-4 border-b">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Rechercher une conversation..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Conversations */}
      <div className="flex-1 overflow-y-auto">
        {filteredConversations.map((conversation) => (
          <Button
            key={conversation.id}
            variant="ghost"
            className={`w-full p-4 h-auto justify-start text-left hover:bg-accent ${
              selectedConversation?.id === conversation.id ? "bg-accent" : ""
            }`}
            onClick={() => onSelectConversation(conversation)}
          >
            <div className="flex gap-3 w-full">
              <Avatar className="h-10 w-10 flex-shrink-0">
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

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-medium text-sm truncate">{conversation.participant.name}</h3>
                  <div className="flex items-center gap-1">
                    {conversation.unreadCount > 0 && (
                      <Badge variant="default" className="h-5 w-5 p-0 text-xs flex items-center justify-center">
                        {conversation.unreadCount}
                      </Badge>
                    )}
                    <span className="text-xs text-muted-foreground">{conversation.lastMessage.timestamp}</span>
                  </div>
                </div>

                <div className="text-xs text-muted-foreground mb-1">{conversation.participant.role}</div>

                <div className="text-xs text-muted-foreground mb-2 truncate">{conversation.property.title}</div>

                <p
                  className={`text-sm truncate ${
                    !conversation.lastMessage.isRead && conversation.lastMessage.senderId !== "me"
                      ? "font-medium text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {conversation.lastMessage.content}
                </p>
              </div>
            </div>
          </Button>
        ))}

        {filteredConversations.length === 0 && (
          <div className="p-4 text-center text-muted-foreground">
            <p>Aucune conversation trouvée</p>
          </div>
        )}
      </div>
    </div>
  )
}
