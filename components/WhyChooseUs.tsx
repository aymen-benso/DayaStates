import Image from "next/image";

export function WhyChooseUs() {
  const reasons = [
    {
      title: "Expertise et Confiance",
      description: "Plus de 15 ans d'expérience dans l'immobilier français avec des milliers de transactions réussies. Notre équipe d'experts vous accompagne à chaque étape."
    },
    {
      title: "Service Personnalisé",
      description: "Un accompagnement sur mesure adapté à vos besoins spécifiques. Nous prenons le temps de comprendre vos attentes pour vous proposer les meilleures opportunités."
    },
    {
      title: "Réseau National",
      description: "Accédez à notre vaste réseau de propriétés dans toute la France. Des appartements parisiens aux villas méditerranéennes, nous avons ce qu'il vous faut."
    }
  ];

  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Image Div */}
          <div className="flex justify-center relative">
            <div className="w-[380px] h-[620px] shadow-2xl overflow-hidden rounded-tr-[220px] relative z-0">
              <Image
                src="/img1.png"
                alt="Pourquoi nous choisir - Expert immobilier"
                width={380}
                height={620}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute bg-white/80 backdrop-blur-md top-40 right-[120px] translate-x-1/2 w-[230px] rounded-xl shadow-lg flex flex-col items-center justify-center p-4 z-10">
              <img
                src="/img10.png"
                alt="Icône maison"
                className="w-full h-[140px] rounded-sm"
              />
              <h3 className="text-sm font-semibold text-gray-800 text-center">
                Trouvez le meilleur bien
              </h3>
            </div>
          </div>

          {/* Text Content Div */}
          <div>
            <div className="mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Pourquoi nous <span className="text-primary">choisir</span> ?
              </h2>
              <p className="text-lg text-muted-foreground">
                Découvrez les raisons qui font de nous le partenaire idéal pour tous vos projets immobiliers en France
              </p>
            </div>

            <div className="space-y-8">
              {reasons.map((reason, index) => (
                <div key={index} className="flex flex-col gap-2">
                  {/* Number Circle */}
                  <div className="flex-shrink-0 w-12 h-6 bg-primary/10 rounded-sm flex items-center justify-center text-primary font-bold text-lg group-hover:bg-primary/20 transition-colors">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
