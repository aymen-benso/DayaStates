import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { UserPlus, Building2, MessageSquare, Settings, BarChart3, Shield } from "lucide-react"

const quickActions = [
  {
    title: "Ajouter un utilisateur",
    description: "Créer un nouveau compte",
    icon: UserPlus,
    href: "/admin/users/new",
  },
  {
    title: "Modérer les annonces",
    description: "Approuver les nouvelles annonces",
    icon: Building2,
    href: "/admin/properties",
  },
  {
    title: "Messages support",
    description: "Répondre aux demandes",
    icon: MessageSquare,
    href: "/admin/messages",
  },
  {
    title: "Paramètres système",
    description: "Configurer la plateforme",
    icon: Settings,
    href: "/admin/settings",
  },
  {
    title: "Rapports détaillés",
    description: "Générer des analyses",
    icon: BarChart3,
    href: "/admin/analytics",
  },
  {
    title: "Sécurité",
    description: "Gérer les permissions",
    icon: Shield,
    href: "/admin/security",
  },
]

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Actions Rapides</CardTitle>
        <CardDescription>Accès direct aux fonctions principales</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {quickActions.map((action) => (
            <Button
              key={action.title}
              variant="outline"
              className="h-auto p-4 flex flex-col items-start gap-2 bg-transparent"
              asChild
            >
              <a href={action.href}>
                <action.icon className="h-5 w-5 text-primary" />
                <div className="text-left">
                  <div className="font-medium text-sm">{action.title}</div>
                  <div className="text-xs text-muted-foreground">{action.description}</div>
                </div>
              </a>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
