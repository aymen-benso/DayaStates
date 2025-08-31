"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { NotificationCenter } from "@/components/messaging/notification-center"
import { Menu, X, Home, Building, Hotel, MapPin } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Home className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-primary">DayaStates</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Propriétés</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 w-[400px]">
                  <NavigationMenuLink asChild>
                    <Link
                      href="/properties/apartments"
                      className="flex items-center space-x-2 p-2 hover:bg-accent rounded-md"
                    >
                      <Building className="h-4 w-4" />
                      <span>Appartements</span>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/properties/villas"
                      className="flex items-center space-x-2 p-2 hover:bg-accent rounded-md"
                    >
                      <Home className="h-4 w-4" />
                      <span>Villas</span>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/properties/hotels"
                      className="flex items-center space-x-2 p-2 hover:bg-accent rounded-md"
                    >
                      <Hotel className="h-4 w-4" />
                      <span>Hôtels</span>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/properties/land"
                      className="flex items-center space-x-2 p-2 hover:bg-accent rounded-md"
                    >
                      <MapPin className="h-4 w-4" />
                      <span>Terrains</span>
                    </Link>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/search" className="px-4 py-2 text-sm font-medium hover:text-primary">
                Recherche
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" className="px-4 py-2 text-sm font-medium hover:text-primary">
                À propos
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Auth Buttons & Notifications */}
        <div className="hidden md:flex items-center space-x-2">
          <NotificationCenter />
          <Button variant="ghost" asChild>
            <Link href="/login">Connexion</Link>
          </Button>
          <Button asChild>
            <Link href="/register">Inscription</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container mx-auto px-4 py-4 space-y-2">
            <Link href="/properties" className="block py-2 text-sm font-medium hover:text-primary">
              Propriétés
            </Link>
            <Link href="/search" className="block py-2 text-sm font-medium hover:text-primary">
              Recherche
            </Link>
            <Link href="/about" className="block py-2 text-sm font-medium hover:text-primary">
              À propos
            </Link>
            <div className="pt-4 space-y-2">
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link href="/login">Connexion</Link>
              </Button>
              <Button className="w-full" asChild>
                <Link href="/register">Inscription</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
