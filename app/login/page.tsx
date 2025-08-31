import { LoginForm } from "@/components/auth/login-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Connexion</CardTitle>
          <CardDescription>Connectez-vous à votre compte ImmoFrance</CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
          <div className="mt-6 text-center text-sm">
            <span className="text-muted-foreground">Pas encore de compte ? </span>
            <Link href="/register" className="text-primary hover:underline font-medium">
              Créer un compte
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
