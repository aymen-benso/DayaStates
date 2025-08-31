"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  LayoutDashboard,
  Users,
  Building2,
  BarChart3,
  Settings,
  MessageSquare,
  CreditCard,
  Shield,
  ChevronLeft,
  Menu,
} from "lucide-react"

const navigation = [
  { name: "Tableau de bord", href: "/admin", icon: LayoutDashboard },
  { name: "Utilisateurs", href: "/admin/users", icon: Users },
  { name: "Annonces", href: "/admin/properties", icon: Building2 },
  { name: "Analyses", href: "/admin/analytics", icon: BarChart3 },
  { name: "Messages", href: "/admin/messages", icon: MessageSquare },
  { name: "Paiements", href: "/admin/payments", icon: CreditCard },
  { name: "Sécurité", href: "/admin/security", icon: Shield },
  { name: "Paramètres", href: "/admin/settings", icon: Settings },
]

export function AdminSidebar() {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className={cn("bg-card border-r border-border transition-all duration-300", collapsed ? "w-16" : "w-64")}>
      <div className="p-4">
        <div className="flex items-center justify-between mb-6">
          {!collapsed && (
            <div>
              <h2 className="text-lg font-semibold">Admin Panel</h2>
              <Badge variant="secondary" className="bg-red-100 text-red-800 text-xs">
                Administrateur
              </Badge>
            </div>
          )}
          <Button variant="ghost" size="sm" onClick={() => setCollapsed(!collapsed)} className="h-8 w-8 p-0">
            {collapsed ? <Menu className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </div>

        <nav className="space-y-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link key={item.name} href={item.href}>
                <Button
                  variant={isActive ? "secondary" : "ghost"}
                  className={cn("w-full justify-start gap-3", collapsed && "px-2")}
                >
                  <item.icon className="h-4 w-4 flex-shrink-0" />
                  {!collapsed && <span>{item.name}</span>}
                </Button>
              </Link>
            )
          })}
        </nav>
      </div>

      {!collapsed && (
        <div className="absolute bottom-4 left-4 right-4">
          <Link href="/dashboard">
            <Button variant="outline" className="w-full bg-transparent">
              Retour utilisateur
            </Button>
          </Link>
        </div>
      )}
    </div>
  )
}
