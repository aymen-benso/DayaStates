import { Check } from "lucide-react";
import Image from "next/image";
import { Star } from "lucide-react";

export function OurValue() {
  const values = [
    { icon: Check, title: "Expertise & Expérience" },
    { icon: Check, title: "Service Centré Client" },
    { icon: Check, title: "Intégrité ; Qualité & Excellence" },
    { icon: Check, title: "Accessibilité" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Text Content Div */}
          <div>
            <div className="mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-6">
                Nos <span className="text-primary">Valeurs</span>
              </h2>
              <p className="text-base text-muted-foreground">
                Découvrez les valeurs qui guident notre équipe et définissent notre engagement envers l'excellence, la confiance, et la satisfaction de nos clients à chaque étape de vos projets.
              </p>
            </div>

            <div className="space-y-8">
              {values.map((value, index) => (
                <div key={index} className="flex gap-4 items-center group">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <value.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{value.title}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Image Div */}
          <div className="flex justify-center relative">
            <div className="w-[380px] h-[620px] shadow-2xl overflow-hidden rounded-bl-[220px] relative z-0">
              <Image
                src="/img11.png"
                alt="Nos valeurs"
                width={380}
                height={620}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Boxes */}
            <div className="flex items-start gap-2 absolute bg-white/80 backdrop-blur-md top-40 right-[120px] translate-x-1/2 rounded-xl shadow-lg justify-center p-4 z-10">
              <img
                src="/img10.png"
                alt="Icône maison"
                className="w-[40px] h-[40px] rounded-full"
              />
              <div>
                <p className="text-sm text-muted-foreground">dduf fhfsf</p>
                <div className="flex mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2 absolute bg-white/80 backdrop-blur-md top-130 right-[150px] translate-x-1/2 rounded-xl shadow-lg justify-center p-4 z-10">
              <img
                src="/img10.png"
                alt="Icône maison"
                className="w-[40px] h-[40px] rounded-full"
              />
              <div>
                <p className="text-sm text-muted-foreground">dduf fhfsf</p>
                <div className="flex mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2 absolute bg-white/80 backdrop-blur-md top-65 -left-[90px] translate-x-1/2 rounded-xl shadow-lg justify-center p-4 z-10">
              <img
                src="/img10.png"
                alt="Icône maison"
                className="w-[40px] h-[40px] rounded-full"
              />
              <div>
                <p className="text-sm text-muted-foreground">dduf fhfsf</p>
                <div className="flex mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}