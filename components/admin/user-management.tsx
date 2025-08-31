"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Search, MoreHorizontal, UserCheck, UserX, Mail, Shield } from "lucide-react"

const users = [
  {
    id: 1,
    name: "Marie Dubois",
    email: "marie.dubois@email.com",
    role: "Utilisateur",
    status: "Actif",
    joinDate: "15 Jan 2024",
    properties: 3,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Pierre Martin",
    email: "pierre.martin@email.com",
    role: "Agent",
    status: "Actif",
    joinDate: "12 Jan 2024",
    properties: 12,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "Sophie Laurent",
    email: "sophie.laurent@email.com",
    role: "Utilisateur",
    status: "Suspendu",
    joinDate: "08 Jan 2024",
    properties: 0,
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export function UserManagement() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Utilisateurs</CardTitle>
            <CardDescription>Gérez les comptes utilisateurs de la plateforme</CardDescription>
          </div>
          <Button>
            <UserCheck className="h-4 w-4 mr-2" />
            Nouvel utilisateur
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Rechercher un utilisateur..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="space-y-4">
          {filteredUsers.map((user) => (
            <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                  <AvatarFallback>
                    {user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{user.name}</div>
                  <div className="text-sm text-muted-foreground">{user.email}</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right">
                  <Badge variant={user.role === "Agent" ? "default" : "secondary"}>{user.role}</Badge>
                  <div className="text-sm text-muted-foreground mt-1">{user.properties} annonces</div>
                </div>

                <Badge variant={user.status === "Actif" ? "default" : "destructive"}>{user.status}</Badge>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Mail className="h-4 w-4 mr-2" />
                      Envoyer un email
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Shield className="h-4 w-4 mr-2" />
                      Modifier les permissions
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">
                      <UserX className="h-4 w-4 mr-2" />
                      Suspendre
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
