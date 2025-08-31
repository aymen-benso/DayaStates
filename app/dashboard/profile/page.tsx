import { ProfileForm } from "@/components/dashboard/profile-form"
import { AccountSettings } from "@/components/dashboard/account-settings"
import { Header } from "@/components/header"
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Mon profil</h1>
              <p className="text-muted-foreground">Gérez vos informations personnelles et préférences</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ProfileForm />
              <AccountSettings />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
