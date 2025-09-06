// /app/dashboard/layout.tsx
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Building2,
  LogOut,
  Menu,
  Bell,
  BarChart3,
  MessageSquare,
  PieChart,
  PlusCircle,
  FileText,
  Settings,
} from 'lucide-react';
import { sidebarItems } from '@/lib/data';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const pathname = usePathname();

  // Map string icon names to actual components
  const iconMap = {
    BarChart3: BarChart3,
    Building2: Building2,
    MessageSquare: MessageSquare,
    PieChart: PieChart,
    PlusCircle: PlusCircle,
    FileText: FileText,
    Settings: Settings,
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`bg-white shadow-lg transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-16'} fixed h-full`}>
        <div className="p-4 flex items-center justify-between">
          {sidebarOpen && (
            <div className="flex items-center space-x-2">
              <Building2 className="h-6 w-6 text-blue-600" />
              <span className="font-bold text-xl text-gray-900">Agent Dashboard</span>
            </div>
          )}
          <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        <nav className="mt-4">
          {sidebarItems.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <Link
                key={item.id}
                href={item.path}
                className={`flex items-center w-full p-4 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-all ${
                  pathname === item.path ? 'bg-blue-50 text-blue-600' : ''
                }`}
              >
                <Icon className="h-5 w-5" />
                {sidebarOpen && <span className="ml-3">{item.label}</span>}
              </Link>
            );
          })}
          <button className="flex items-center w-full p-4 text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all">
            <LogOut className="h-5 w-5" />
            {sidebarOpen && <span className="ml-3">Déconnexion</span>}
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className={`flex-1 p-8 ${sidebarOpen ? 'ml-64' : 'ml-16'} transition-all duration-300`}>
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Input placeholder="Rechercher..." className="w-64" />
            <Button variant="outline" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
              JD
            </div>
            {sidebarOpen && <span className="font-medium">Jean Dupont</span>}
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}