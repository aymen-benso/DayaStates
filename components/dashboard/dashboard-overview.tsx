import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, Heart, MessageSquare, Eye } from "lucide-react"

const stats = [
  {
    title: "Mes annonces",
    value: "12",
    description: "Propriétés actives",
    icon: Building,
    color: "text-primary",
  },
  {
    title: "Favoris",
    value: "8",
    description: "Propriétés sauvegardées",
    icon: Heart,
    color: "text-red-500",
  },
  {
    title: "Messages",
    value: "5",
    description: "Nouveaux messages",
    icon: MessageSquare,
    color: "text-blue-500",
  },
  {
    title: "Vues totales",
    value: "1,247",
    description: "Ce mois-ci",
    icon: Eye,
    color: "text-green-500",
  },
]

export function DashboardOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className={`h-4 w-4 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
