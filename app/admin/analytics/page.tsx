import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { AnalyticsDashboard } from "@/components/admin/analytics-dashboard"

export default function AdminAnalytics() {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <AdminSidebar />
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-balance">Analyses & Statistiques</h1>
              <p className="text-muted-foreground">Suivez les performances de votre plateforme</p>
            </div>
            <AnalyticsDashboard />
          </div>
        </main>
      </div>
    </div>
  )
}
