import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Users, Building2, Eye, DollarSign } from "lucide-react"

const analyticsData = [
  {
    title: "Visiteurs Uniques",
    value: "12,847",
    change: "+15.2%",
    changeType: "positive" as const,
    period: "vs mois dernier",
    icon: Users,
  },
  {
    title: "Nouvelles Annonces",
    value: "234",
    change: "+8.1%",
    changeType: "positive" as const,
    period: "ce mois",
    icon: Building2,
  },
  {
    title: "Pages Vues",
    value: "89,432",
    change: "-2.4%",
    changeType: "negative" as const,
    period: "cette semaine",
    icon: Eye,
  },
  {
    title: "Revenus",
    value: "€45,678",
    change: "+23.5%",
    changeType: "positive" as const,
    period: "ce mois",
    icon: DollarSign,
  },
]

const topProperties = [
  { title: "Villa moderne Cannes", views: 1247, inquiries: 23 },
  { title: "Appartement Paris 16ème", views: 987, inquiries: 18 },
  { title: "Maison familiale Lyon", views: 756, inquiries: 15 },
  { title: "Studio Marseille", views: 654, inquiries: 12 },
  { title: "Loft industriel Lille", views: 543, inquiries: 9 },
]

const recentActivity = [
  { action: "Nouvelle inscription", user: "Marie Dubois", time: "Il y a 5 min" },
  { action: "Annonce publiée", user: "Pierre Martin", time: "Il y a 12 min" },
  { action: "Message envoyé", user: "Sophie Laurent", time: "Il y a 25 min" },
  { action: "Paiement reçu", user: "Jean Dupont", time: "Il y a 1h" },
]

export function AnalyticsDashboard() {
  return (
    <div className="space-y-6">
      {/* Métriques principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {analyticsData.map((metric) => (
          <Card key={metric.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{metric.title}</CardTitle>
              <metric.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <div className="flex items-center gap-2 text-xs">
                <Badge
                  variant="secondary"
                  className={`flex items-center gap-1 ${
                    metric.changeType === "positive" ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800"
                  }`}
                >
                  {metric.changeType === "positive" ? (
                    <TrendingUp className="h-3 w-3" />
                  ) : (
                    <TrendingDown className="h-3 w-3" />
                  )}
                  {metric.change}
                </Badge>
                <span className="text-muted-foreground">{metric.period}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Annonces les plus populaires */}
        <Card>
          <CardHeader>
            <CardTitle>Annonces Populaires</CardTitle>
            <CardDescription>Les plus consultées cette semaine</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProperties.map((property, index) => (
                <div key={property.title} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium">
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-medium text-sm">{property.title}</div>
                      <div className="text-xs text-muted-foreground">
                        {property.views} vues • {property.inquiries} demandes
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Activité récente */}
        <Card>
          <CardHeader>
            <CardTitle>Activité Récente</CardTitle>
            <CardDescription>Dernières actions sur la plateforme</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <div className="flex-1">
                    <div className="text-sm font-medium">{activity.action}</div>
                    <div className="text-xs text-muted-foreground">
                      {activity.user} • {activity.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
