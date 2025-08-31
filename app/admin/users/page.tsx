import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { UserManagement } from "@/components/admin/user-management"

export default function AdminUsers() {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <AdminSidebar />
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-balance">Gestion des Utilisateurs</h1>
              <p className="text-muted-foreground">Gérez les comptes utilisateurs et leurs permissions</p>
            </div>
            <UserManagement />
          </div>
        </main>
      </div>
    </div>
  )
}
