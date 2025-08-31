import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { PropertyModeration } from "@/components/admin/property-moderation"

export default function AdminProperties() {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <AdminSidebar />
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-balance">Modération des Annonces</h1>
              <p className="text-muted-foreground">Approuvez ou rejetez les nouvelles annonces</p>
            </div>
            <PropertyModeration />
          </div>
        </main>
      </div>
    </div>
  )
}
