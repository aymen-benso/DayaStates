import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar"
import { MessagingInterface } from "@/components/messaging/messaging-interface"

export default function MessagesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 lg:ml-0">
          <div className="h-screen lg:h-[calc(100vh-4rem)]">
            <MessagingInterface />
          </div>
        </main>
      </div>
    </div>
  )
}
