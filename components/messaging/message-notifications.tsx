"use client"

import { useEffect } from "react"
import { useToast } from "@/hooks/use-toast"

interface MessageNotificationProps {
  enabled?: boolean
}

export function MessageNotifications({ enabled = true }: MessageNotificationProps) {
  const { toast } = useToast()

  useEffect(() => {
    if (!enabled) return

    // Simulate real-time message notifications
    const interval = setInterval(() => {
      // This would typically come from a WebSocket or Server-Sent Events
      const shouldShowNotification = Math.random() > 0.95 // 5% chance every 5 seconds

      if (shouldShowNotification) {
        toast({
          title: "Nouveau message",
          description: "Vous avez reçu un nouveau message de Marie Dubois",
          action: (
            <button onClick={() => (window.location.href = "/dashboard/messages")} className="text-sm underline">
              Voir
            </button>
          ),
        })
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [enabled, toast])

  return null
}
