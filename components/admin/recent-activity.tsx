import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const activities = [
  {
    id: 1,
    type: "user_registration",
    user: "Marie Dubois",
    avatar: "/placeholder.svg?height=32&width=32",
    action: "s'est inscrite sur la plateforme",
    time: "Il y a 5 minutes",
    status: "success",
  },
  {
    id: 2,
    type: "property_submission",
    user: "Pierre Martin",
    avatar: "/placeholder.svg?height=32&width=32",
    action: "a soumis une nouvelle annonce",
    time: "Il y a 15 minutes",
    status: "pending",
  },
  {
    id: 3,
    type: "payment_received",
    user: "Sophie Laurent",
    avatar: "/placeholder.svg?height=32&width=32",
    action: "a effectué un paiement",
    time: "Il y a 1 heure",
    status: "success",
  },
  {
    id: 4,
    type: "report_submitted",
    user: "Jean Dupont",
    avatar: "/placeholder.svg?height=32&width=32",
    action: "a signalé une annonce",
    time: "Il y a 2 heures",
    status: "warning",
  },
]

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Activité Récente</CardTitle>
        <CardDescription>Dernières actions sur la plateforme</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src={activity.avatar || "/placeholder.svg"} alt={activity.user} />
                <AvatarFallback>
                  {activity.user
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="text-sm">
                  <span className="font-medium">{activity.user}</span> {activity.action}
                </div>
                <div className="text-xs text-muted-foreground">{activity.time}</div>
              </div>
              <Badge
                variant="secondary"
                className={
                  activity.status === "success"
                    ? "bg-emerald-100 text-emerald-800"
                    : activity.status === "warning"
                      ? "bg-yellow-100 text-yellow-800"
                      : activity.status === "pending"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-gray-100 text-gray-800"
                }
              >
                {activity.status === "success"
                  ? "Succès"
                  : activity.status === "warning"
                    ? "Attention"
                    : activity.status === "pending"
                      ? "En attente"
                      : "Info"}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
