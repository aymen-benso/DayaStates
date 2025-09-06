// /lib/data.ts (updated with types)
import { 
  BarChart3, 
  Building2, 
  MessageSquare, 
  PieChart, 
  PlusCircle, 
  FileText, 
  Settings,
  Home,
  Eye,
  Phone,
  TrendingUp,
} from 'lucide-react';

// Define icon map for type safety
export const iconMap = {
  BarChart3,
  Building2,
  MessageSquare,
  PieChart,
  PlusCircle,
  FileText,
  Settings,
  Home,
  Eye,
  Phone,
  TrendingUp,
};

// Sidebar item type
interface SidebarItem {
  id: string;
  label: string;
  icon: keyof typeof iconMap;
  path: string;
}

// Stats type
interface Stat {
  title: string;
  value: string;
  icon: keyof typeof iconMap;
  color: string;
  change: string;
}

// Property type
interface Property {
  id: number;
  title: string;
  price: string;
  status: string;
  views: number;
  location: string;
  type: string;
  rooms: number;
  surface: number;
  dateAdded: string;
}

// Inquiry type
interface Inquiry {
  id: number;
  name: string;
  email: string;
  phone: string;
  property: string;
  date: string;
  status: string;
  priority: 'high' | 'medium' | 'low';
  message: string;
}

// Analytics data type
interface AnalyticsData {
  month: string;
  vues: number;
  demandes: number;
  ventes: number;
}
interface Property {
  id: number;
  title: string;
  price: string;
  status: string;
  views: number;
  location: string;
  type: string;
  rooms: number;
  surface: number;
  dateAdded: string;
}

interface Inquiry {
  id: number;
  name: string;
  email: string;
  phone: string;
  property: string;
  date: string;
  status: string;
  priority: 'high' | 'medium' | 'low';
  message: string;
}

// Analytics data type
export interface AnalyticsData {
  month: string;
  vues: number;
  demandes: number;
  ventes: number;
}
export const stats: Stat[] = [
  { title: 'Total Propriétés', value: '24', icon: 'Home', color: 'text-blue-600 bg-blue-100', change: '+12%' },
  { title: 'Vues ce mois', value: '1,234', icon: 'Eye', color: 'text-green-600 bg-green-100', change: '+23%' },
  { title: 'Nouvelles demandes', value: '18', icon: 'Phone', color: 'text-orange-600 bg-orange-100', change: '+8%' },
  { title: 'Propriétés vendues', value: '7', icon: 'TrendingUp', color: 'text-purple-600 bg-purple-100', change: '+15%' }
];

export const properties: Property[] = [
  { 
    id: 1, 
    title: 'Appartement luxueux à Paris', 
    price: '450,000', 
    status: 'À vendre', 
    views: 145, 
    location: 'Paris 16ème', 
    type: 'Appartement',
    rooms: 3,
    surface: 85,
    dateAdded: '2024-01-10'
  },
  { 
    id: 2, 
    title: 'Villa avec jardin', 
    price: '850,000', 
    status: 'À vendre', 
    views: 232, 
    location: 'Neuilly-sur-Seine', 
    type: 'Villa',
    rooms: 5,
    surface: 200,
    dateAdded: '2024-01-08'
  },
  { 
    id: 3, 
    title: 'Bureau commercial', 
    price: '5,000/mois', 
    status: 'À louer', 
    views: 98, 
    location: 'La Défense', 
    type: 'Bureau',
    rooms: 0,
    surface: 120,
    dateAdded: '2024-01-12'
  },
  { 
    id: 4, 
    title: 'Studio moderne', 
    price: '1,200/mois', 
    status: 'À louer', 
    views: 67, 
    location: 'Paris 11ème', 
    type: 'Studio',
    rooms: 1,
    surface: 35,
    dateAdded: '2024-01-05'
  }
];

export const inquiries: Inquiry[] = [
  { 
    id: 1, 
    name: 'Jean Dupont', 
    email: 'jean.dupont@email.com',
    phone: '+33 6 12 34 56 78',
    property: 'Appartement luxueux à Paris', 
    date: '2024-01-15', 
    status: 'Nouveau', 
    priority: 'high',
    message: 'Je suis intéressé par cet appartement. Pouvons-nous organiser une visite ?'
  },
  { 
    id: 2, 
    name: 'Marie Martin', 
    email: 'marie.martin@email.com',
    phone: '+33 6 98 76 54 32',
    property: 'Villa avec jardin', 
    date: '2024-01-14', 
    status: 'Répondu', 
    priority: 'medium',
    message: 'Quelle est la superficie exacte du jardin ?'
  },
  { 
    id: 3, 
    name: 'Pierre Durand', 
    email: 'pierre.durand@email.com',
    phone: '+33 6 11 22 33 44',
    property: 'Bureau commercial', 
    date: '2024-01-13', 
    status: 'En attente', 
    priority: 'low',
    message: 'Le bureau est-il équipé ? Y a-t-il des places de parking ?'
  }
];

export const analyticsData: AnalyticsData[] = [
  { month: 'Jan', vues: 850, demandes: 45, ventes: 3 },
  { month: 'Fév', vues: 920, demandes: 52, ventes: 4 },
  { month: 'Mar', vues: 1100, demandes: 67, ventes: 5 },
  { month: 'Avr', vues: 1234, demandes: 78, ventes: 7 }
];

export const sidebarItems: SidebarItem[] = [
  { id: 'dashboard', label: 'Tableau de bord', icon: 'BarChart3', path: '/agent-dashboard' },
  { id: 'properties', label: 'Mes Propriétés', icon: 'Building2', path: '/agent-dashboard/properties' },
  { id: 'inquiries', label: 'Demandes', icon: 'MessageSquare', path: '/agent-dashboard/inquiries' },
  { id: 'analytics', label: 'Analyses', icon: 'PieChart', path: '/agent-dashboard/analytics' },
  { id: 'create', label: 'Ajouter Propriété', icon: 'PlusCircle', path: '/agent-dashboard/create' },
  { id: 'reports', label: 'Rapports', icon: 'FileText', path: '/agent-dashboard/reports' },
  { id: 'settings', label: 'Paramètres', icon: 'Settings', path: '/agent-dashboard/settings' }
];