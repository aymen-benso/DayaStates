"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, LogOut, BarChart3, Home, Heart, History, MessageSquare, Settings } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const pathname = usePathname();

  const sidebarItems = [
    { id: 'dashboard', label: 'Tableau de bord', icon: BarChart3, href: '/profile' },
    { id: 'published', label: 'Mes annonces', icon: Home, href: '/profile/published' },
    { id: 'favorites', label: 'Favoris', icon: Heart, href: '/profile/favorites' },
    { id: 'history', label: 'Historique de navigation', icon: History, href: '/profile/history' },
    { id: 'settings', label: 'Paramètres', icon: Settings, href: '/profile/settings' },
  ];

  return (
    <div className="min-h-screen">
      <div className="flex">
        {/* Sidebar */}
        <div
          className={`${
            sidebarCollapsed ? 'w-20' : 'w-64'
          } shadow-xl border-l border-gray-100 min-h-screen transition-all duration-300`}
        >
          <div className="p-4">
            <div className="flex items-center justify-between mb-6">
              <h1 className={`font-bold text-xl text-emerald-600 ${sidebarCollapsed ? 'hidden' : 'block'}`}>
                Profile
              </h1>
              <Button
                variant="ghost"
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                className="p-2 hover:bg-emerald-50"
              >
                <Menu className="h-6 w-6 text-emerald-600" />
              </Button>
            </div>

            <div className="space-y-2">
              {sidebarItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`w-full flex items-center space-x-3 space-x-reverse p-3 rounded-lg transition-all ${
                    pathname === item.href
                      ? 'bg-emerald-100 text-emerald-700'
                      : 'text-gray-600 hover:bg-emerald-50'
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span className={`${sidebarCollapsed ? 'hidden' : 'block'} text-sm font-medium`}>
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>

            <div className="absolute bottom-4 right-4">
              <Button
                variant="outline"
                className="w-full border-red-200 text-red-600 hover:bg-red-50"
              >
                <LogOut className="h-4 w-4 ml-2" />
                <span className={`${sidebarCollapsed ? 'hidden' : 'block'}`}>Déconnexion</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 md:p-8">
          {children}
        </div>
      </div>
    </div>
  );
}