import { RegisterForm } from "@/components/auth/register-form";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Home } from "lucide-react";

export default function RegisterPage() {
  return (
    <div className="h-screen flex flex-row w-full p-6">
      

      {/* Form Div */}
      <div className="w-full md:w-1/2 h-screen flex items-center justify-center p-4 bg-background">
        <Card className="w-full bg-background">
          <CardContent className="">
            <RegisterForm />
            <div className="mt-6 text-center text-sm">
              <span className="text-muted-foreground">Déjà un compte ? </span>
              <Link href="/login" className="text-primary hover:underline font-medium">
                Se connecter
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Image Div */}
<div className="hidden md:block w-1/2 relative p-6">
  {/* Image */}
  <Image
    src="/img6.png"
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
    <div className="w-[1px] h-[200px] bg-white/30 backdrop-blur-sm -ml-12"></div>

    {/* Small circle pin */}
    <div className="flex items-center justify-center w-4 h-4   bg-white/30 backdrop-blur-sm rounded-full -ml-12">
    <div className="w-2 h-2 bg-white rounded-full "></div>
    </div>
  </div>

  {/* Location pin2 */}
  <div className="absolute bottom-50 right-20 flex flex-col items-center">
  {/* Small circle pin - moved to top */}
  <div className="flex items-center justify-center w-4 h-4 bg-white/30 backdrop-blur-sm rounded-full -ml-12">
    <div className="w-2 h-2 bg-white rounded-full"></div>
  </div>
  
  {/* Vertical line connecting circle and bubble - now goes upward */}
  <div className="w-[1px] h-[200px] bg-white/30 backdrop-blur-sm -ml-12"></div>
  
  {/* Bubble - moved to bottom */}
  <div className="bg-white/30 backdrop-blur-sm text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg">
    
    <div className="flex flex-col">
      
      <span className="text-sm font-semibold">1.2km</span>
      <span className="text-sm font-semibold">Village de Montmartre</span>
      <span className="text-xs">Maison Blanche</span>
    </div>
  </div>
</div>
  



  
</div>
    </div>
  );
}