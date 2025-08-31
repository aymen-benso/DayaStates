import { MyListingsManager } from "@/components/dashboard/my-listings-manager"
import { Header } from "@/components/header"
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar"

export default function ListingsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold mb-2">Mes annonces</h1>
                <p className="text-muted-foreground">Gérez vos propriétés en vente ou en location</p>
              </div>
            </div>

            <MyListingsManager />
          </div>
        </main>
      </div>
    </div>
  )
}
