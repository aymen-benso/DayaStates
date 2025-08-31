import { DashboardOverview } from "@/components/dashboard/dashboard-overview"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { SavedProperties } from "@/components/dashboard/saved-properties"
import { MyListings } from "@/components/dashboard/my-listings"
import { Header } from "@/components/header"
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto space-y-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Tableau de bord</h1>
              <p className="text-muted-foreground">Bienvenue sur votre espace personnel</p>
            </div>

            <DashboardOverview />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <RecentActivity />
              <SavedProperties />
            </div>

            <MyListings />
          </div>
        </main>
      </div>
    </div>
  )
}
