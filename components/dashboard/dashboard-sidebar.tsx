"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Home, User, Heart, Building, MessageSquare, Settings, LogOut, Menu, X } from "lucide-react"

const navigation = [
  { name: "Tableau de bord", href: "/dashboard", icon: Home },
  { name: "Mon profil", href: "/dashboard/profile", icon: User },
  { name: "Mes favoris", href: "/dashboard/favorites", icon: Heart },
  { name: "Mes annonces", href: "/dashboard/listings", icon: Building },
  { name: "Messages", href: "/dashboard/messages", icon: MessageSquare },
  { name: "Paramètres", href: "/dashboard/settings", icon: Settings },
]

export function DashboardSidebar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* User Profile */}
      <div className="p-6">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-semibold">Jean Dupont</div>
            <div className="text-sm text-muted-foreground">Propriétaire</div>
          </div>
        </div>
      </div>

      <Separator />

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      <Separator />

      {/* Logout */}
      <div className="p-4">
        <Button variant="ghost" className="w-full justify-start text-muted-foreground">
          <LogOut className="h-4 w-4 mr-3" />
          Déconnexion
        </Button>
      </div>
    </div>
  )

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-20 left-4 z-50 lg:hidden"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-64 bg-card border-r h-screen sticky top-16">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          <aside className="fixed left-0 top-16 bottom-0 w-64 bg-card border-r">
            <SidebarContent />
          </aside>
        </div>
      )}
    </>
  )
}
