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
            {/* Flex container for the two main parts */}
            <div className="flex flex-col lg:flex-row gap-6">
              {/* First part - bigger */}
              <div className="flex-1 lg:flex-[2]">
                <div className="">
                  <div
                    className="relative bg-cover bg-center h-[250px] rounded-[50px] flex items-center justify-between px-8"
                    style={{ backgroundImage: "url(/img15.jpg)" }}
                  >
                    {/* Overlay */}
                    <div>
                      <h1 className="text-3xl font-bold text-balance text-white">Administration</h1>
                      <p className="text-muted-foreground text-white">Gérez votre plateforme immobilière</p>
                    </div>
                    <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">
                      Admin
                    </Badge>
                  </div>
                </div>
                <div className="mt-6">
                  <AdminOverview />
                </div>
              </div>

              {/* Second part - smaller */}
              <div className="flex-1 lg:flex-[1]">
                <div className="grid grid-cols-1  gap-6">
                  <RecentActivity />
                  <QuickActions />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
