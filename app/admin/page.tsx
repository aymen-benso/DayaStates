import { Badge } from "@/components/ui/badge"
import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { AdminOverview } from "@/components/admin/admin-overview"
import { RecentActivity } from "@/components/admin/recent-activity"
import { QuickActions } from "@/components/admin/quick-actions"

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <AdminSidebar />
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-balance">Administration</h1>
                <p className="text-muted-foreground">Gérez votre plateforme immobilière</p>
              </div>
              <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">
                Admin
              </Badge>
            </div>

            <AdminOverview />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <RecentActivity />
              <QuickActions />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
