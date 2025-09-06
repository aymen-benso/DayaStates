import Image from "next/image";

export function OurNumbers() {
  const stats = [
    {
      number: "15+",
      label: "Années d'expérience",
    },
    {
      number: "2,500+",
      label: "Propriétés vendues",
    },
    {
      number: "98%",
      label: "Clients satisfaits",
    },
    {
      number: "50+",
      label: "Villes couvertes",
    },
  ];

  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text Content Div */}
          <div>
            <div className="mb-12">
              <h2 className="text-xl md:text-3xl font-bold mb-6">
                Nos <span className="text-primary">chiffres</span> parlent pour nous
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Depuis notre création, nous avons bâti une réputation solide basée sur l'excellence, 
                la confiance et des résultats concrets. Découvrez les chiffres qui témoignent de notre 
                expertise et de notre engagement envers nos clients dans le secteur immobilier français.
              </p>
            </div>

            {/* Statistics Grid */}
            <div className="grid grid-cols-2 gap-2">
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl lg:text-3xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xs text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Div */}
          <div className="relative">
            <div className="flex justify-center relative">
              <div className="w-[380px] h-[620px] shadow-2xl overflow-hidden rounded-tr-[220px] relative z-0">
                <Image
                  src="/img2.png"
                  alt="Pourquoi nous choisir - Expert immobilier"
                  width={380}
                  height={620}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute top-40 right-[120px] translate-x-1/2 w-16 h-16 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center p-4 z-10
                before:content-[''] before:absolute before:w-0 before:h-0 before:border-l-[20px] before:border-l-transparent before:border-r-[20px] before:border-r-transparent before:border-t-[30px] before:border-t-white/80 before:backdrop-blur-sm before:bottom-[-30px]">
                <img
                  src="/img10.png"
                  alt="Icône maison"
                  className="w-10 h-10 rounded-full"
                />
              </div>
              <div className="absolute top-100 left-[120px] translate-x-1/2 w-16 h-16 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center p-4 z-10
                before:content-[''] before:absolute before:w-0 before:h-0 before:border-l-[20px] before:border-l-transparent before:border-r-[20px] before:border-r-transparent before:border-t-[30px] before:border-t-white/80 before:backdrop-blur-sm before:bottom-[-30px]">
                <img
                  src="/img13.png"
                  alt="Icône maison"
                  className="w-10 h-10 rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}