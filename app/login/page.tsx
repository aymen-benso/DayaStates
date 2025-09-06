import { LoginForm } from "@/components/auth/login-form";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Home } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="h-screen flex flex-row w-full p-6 ">
      {/* Image Div */}
      <div className="hidden md:block w-1/2 relative p-6">
        {/* Image */}
        <Image
          src="/img14.png"
          alt="Register illustration"
          fill
          className="object-cover rounded-[30px]"
          priority
        />
      
        {/* Green overlay */}
        <div className="absolute inset-0 bg-green-500/30 rounded-[30px]"></div>
      
        {/* Location pin1 */}
        <div className="absolute top-20 left-20 flex flex-col items-center">
          {/* Bubble */}
          <div className="bg-white/30 backdrop-blur-sm text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
            <span className="text-lg p-2 bg-white/40 backdrop-blur-sm rounded-full">
              <Home className="h-5 w-5" />
            </span>
          <div className="flex flex-col">
        <span className="text-sm font-semibold">Village de Montmartre</span>
        <span className="text-xs">Maison Blanche</span>
      </div>
          </div>
      
          {/* Vertical line connecting bubble and circle */}
          <div className="w-[1px] h-[400px] bg-white/30 backdrop-blur-sm -ml-12"></div>
      
          {/* Small circle pin */}
          <div className="flex items-center justify-center w-4 h-4   bg-white/30 backdrop-blur-sm rounded-full -ml-12">
          <div className="w-2 h-2 bg-white rounded-full "></div>
          </div>
        </div>
      
      <div className="absolute top-70 right-20 flex flex-col items-center">
          {/* Bubble */}
          <div className="bg-white/30 backdrop-blur-sm text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
            <span className="text-lg p-2 bg-white/40 backdrop-blur-sm rounded-full">
              <Home className="h-5 w-5" />
            </span>
          <div className="flex flex-col">
        <span className="text-sm font-semibold">Village de Montmartre</span>
        <span className="text-xs">Maison Blanche</span>
      </div>
          </div>
      
          {/* Vertical line connecting bubble and circle */}
          <div className="w-[1px] h-[340px] bg-white/30 backdrop-blur-sm -ml-12"></div>
      
          {/* Small circle pin */}
          <div className="flex items-center justify-center w-4 h-4   bg-white/30 backdrop-blur-sm rounded-full -ml-12">
          <div className="w-2 h-2 bg-white rounded-full "></div>
          </div>
        </div>
        
      
      
      
        
      </div>

      {/* Form Div */}
      <div className="w-full md:w-1/2  flex items-center justify-center p-4 bg-background">
        <Card className="w-full max-w-md bg-background shadow-none">
          <CardContent className="pt-6">
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
    </div>
  );
}