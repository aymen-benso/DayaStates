import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Heart, Eye, Calendar } from "lucide-react"

const activities = [
  {
    id: 1,
    type: "message",
    title: "Nouveau message",
    description: "Marie Dubois vous a envoyé un message concernant votre appartement à Paris",
    time: "Il y a 2 heures",
    icon: MessageSquare,
    color: "text-blue-500",
  },
  {
    id: 2,
    type: "favorite",
    title: "Propriété ajoutée aux favoris",
    description: "Villa avec piscine à Nice a été ajoutée à vos favoris",
    time: "Il y a 4 heures",
    icon: Heart,
    color: "text-red-500",
  },
  {
    id: 3,
    type: "view",
    title: "Nouvelle vue",
    description: "Votre annonce 'Appartement moderne à Paris' a été consultée 15 fois aujourd'hui",
    time: "Il y a 6 heures",
    icon: Eye,
    color: "text-green-500",
  },
  {
    id: 4,
    type: "appointment",
    title: "Visite programmée",
    description: "Une visite est programmée demain à 14h pour votre villa à Bordeaux",
    time: "Il y a 1 jour",
    icon: Calendar,
    color: "text-purple-500",
  },
]

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Activité récente</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-4">
              <div className={`p-2 rounded-full bg-muted ${activity.color}`}>
                <activity.icon className="h-4 w-4" />
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium">{activity.title}</p>
                <p className="text-sm text-muted-foreground">{activity.description}</p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
