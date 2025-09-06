import type React from "react"
import type { Metadata } from "next"
import { Geist as GeistSansFont, Geist_Mono as GeistMonoFont } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { MessageNotifications } from "@/components/messaging/message-notifications"
import { Suspense } from "react"
import Header from "@/components/Header"   // ✅ import header
import Footer from "@/components/Footer"   // ✅ import footer
import "./globals.css"

export const metadata: Metadata = {
  title: "Dayastates App",
  description: "Created with Dayastates",
  generator: "Dayastates.app",
}

// استدعاء الخطوط في module scope
const GeistSans = GeistSansFont({ subsets: ["latin"], variable: "--geist-sans" })
const GeistMono = GeistMonoFont({ subsets: ["latin"], variable: "--geist-mono" })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header /> {/* ✅ Header on top */}
          <main>
            <Suspense fallback={null}>
              {children}
              <Toaster />
              <MessageNotifications />
            </Suspense>
          </main>
          <Footer /> {/* ✅ Footer at bottom */}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}

