"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Bell, MessageSquare, Heart, Eye, Calendar, Settings, X } from "lucide-react"

interface Notification {
  id: string
  type: "message" | "favorite" | "view" | "appointment" | "system"
  title: string
  description: string
  timestamp: string
  isRead: boolean
  actionUrl?: string
}

const mockNotifications: Notification[] = [
  {
    id: "1",
    type: "message",
    title: "Nouveau message",
    description: "Marie Dubois vous a envoyé un message",
    timestamp: "Il y a 5 min",
    isRead: false,
    actionUrl: "/dashboard/messages",
  },
  {
    id: "2",
    type: "favorite",
    title: "Propriété ajoutée aux favoris",
    description: "Votre villa à Nice a été ajoutée aux favoris",
    timestamp: "Il y a 1h",
    isRead: false,
  },
  {
    id: "3",
    type: "view",
    title: "Nouvelle consultation",
    description: "Votre appartement à Paris a été consulté 5 fois aujourd'hui",
    timestamp: "Il y a 2h",
    isRead: true,
  },
  {
    id: "4",
    type: "appointment",
    title: "Visite confirmée",
    description: "Rendez-vous confirmé pour demain à 14h",
    timestamp: "Il y a 3h",
    isRead: true,
  },
]

const getNotificationIcon = (type: string) => {
  switch (type) {
    case "message":
      return MessageSquare
    case "favorite":
      return Heart
    case "view":
      return Eye
    case "appointment":
      return Calendar
    default:
      return Bell
  }
}

const getNotificationColor = (type: string) => {
  switch (type) {
    case "message":
      return "text-blue-500"
    case "favorite":
      return "text-red-500"
    case "view":
      return "text-green-500"
    case "appointment":
      return "text-purple-500"
    default:
      return "text-gray-500"
  }
}

export function NotificationCenter() {
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications)
  const [isOpen, setIsOpen] = useState(false)

  const unreadCount = notifications.filter((n) => !n.isRead).length

  const markAsRead = (id: string) => {
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, isRead: true } : n)))
  }

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })))
  }

  const removeNotification = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id))
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <Badge
              variant="destructive"
              className="absolute -top-1 -right-1 h-5 w-5 p-0 text-xs flex items-center justify-center"
            >
              {unreadCount}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80 p-0">
        <Card className="border-0 shadow-none">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">Notifications</CardTitle>
              {unreadCount > 0 && (
                <Button variant="ghost" size="sm" onClick={markAllAsRead} className="text-xs">
                  Tout marquer comme lu
                </Button>
              )}
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="max-h-96 overflow-y-auto">
              {notifications.length === 0 ? (
                <div className="p-4 text-center text-muted-foreground">
                  <Bell className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p>Aucune notification</p>
                </div>
              ) : (
                <div className="space-y-1">
                  {notifications.map((notification) => {
                    const Icon = getNotificationIcon(notification.type)
                    const iconColor = getNotificationColor(notification.type)

                    return (
                      <div
                        key={notification.id}
                        className={`p-3 hover:bg-accent cursor-pointer border-l-2 ${
                          !notification.isRead ? "border-l-primary bg-accent/50" : "border-l-transparent"
                        }`}
                        onClick={() => {
                          markAsRead(notification.id)
                          if (notification.actionUrl) {
                            window.location.href = notification.actionUrl
                          }
                        }}
                      >
                        <div className="flex gap-3">
                          <div className={`p-1 rounded-full bg-muted ${iconColor}`}>
                            <Icon className="h-3 w-3" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <p className="text-sm font-medium">{notification.title}</p>
                                <p className="text-xs text-muted-foreground">{notification.description}</p>
                                <p className="text-xs text-muted-foreground mt-1">{notification.timestamp}</p>
                              </div>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-6 w-6 opacity-0 group-hover:opacity-100"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  removeNotification(notification.id)
                                }}
                              >
                                <X className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
            <div className="p-3 border-t">
              <Button variant="ghost" size="sm" className="w-full text-xs">
                <Settings className="h-3 w-3 mr-2" />
                Paramètres de notification
              </Button>
            </div>
          </CardContent>
        </Card>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
