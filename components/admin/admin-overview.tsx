import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Building2, DollarSign, Eye } from "lucide-react"

const stats = [
  {
    title: "Utilisateurs Actifs",
    value: "2,847",
    change: "+12%",
    changeType: "positive" as const,
    icon: Users,
    description: "Ce mois",
  },
  {
    title: "Annonces Publiées",
    value: "1,234",
    change: "+8%",
    changeType: "positive" as const,
    icon: Building2,
    description: "Total actif",
  },
  {
    title: "Revenus",
    value: "€45,678",
    change: "+23%",
    changeType: "positive" as const,
    icon: DollarSign,
    description: "Ce mois",
  },
  {
    title: "Vues Totales",
    value: "89,432",
    change: "+5%",
    changeType: "positive" as const,
    icon: Eye,
    description: "Cette semaine",
  },
]

const pendingActions = [
  { title: "Annonces en attente", count: 23, priority: "high" as const },
  { title: "Signalements utilisateurs", count: 7, priority: "medium" as const },
  { title: "Messages support", count: 12, priority: "low" as const },
]

export function AdminOverview() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="bg-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Badge
                  variant="secondary"
                  className={
                    stat.changeType === "positive"
                      ? "bg-emerald-100 text-emerald-800"
                      : "bg-red-100 text-red-800"
                  }
                >
                  {stat.change}
                </Badge>
                {stat.description}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-white">
        <CardHeader>
          <CardTitle>Actions Requises</CardTitle>
          <CardDescription>Éléments nécessitant votre attention</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {pendingActions.map((action) => (
              <div key={action.title} className="flex items-center justify-between p-3 rounded-lg border">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      action.priority === "high"
                        ? "bg-red-500"
                        : action.priority === "medium"
                          ? "bg-yellow-500"
                          : "bg-green-500"
                    }`}
                  />
                  <span className="font-medium">{action.title}</span>
                </div>
                <Badge variant="secondary">{action.count}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
