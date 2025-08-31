import type React from "react"
import type { Metadata } from "next"
import { Geist as GeistSans, Geist_Mono as GeistMono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { MessageNotifications } from "@/components/messaging/message-notifications"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Dayastates App",
  description: "Created with Dayastates",
  generator: "Dayastates.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Suspense fallback={null}>
            {children}
            <Toaster />
            <MessageNotifications />
          </Suspense>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
