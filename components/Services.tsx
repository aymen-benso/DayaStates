"use client";

import { Home, DollarSign, Handshake } from "lucide-react";

export function Services() {
  return (
    <section className="py-16 max-w-7xl mx-auto mt-12">
      {/* Background Image with Overlay for Title and Paragraph */}
      <div
        className="relative bg-cover bg-center h-[400px] rounded-[50px] flex items-center justify-center"
        style={{ backgroundImage: "url(/img4.png)" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-green-800 opacity-50 rounded-[50px]"></div>

        {/* Title and Paragraph */}
        <div className="relative z-10 text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg mb-6">
            Nos Services Immobiliers d’Excellence
          </h2>
          <p className="text-lg text-white drop-shadow-lg max-w-3xl mx-auto mb-20">
            Chez notre société immobilière, nous offrons une gamme complète de
            services pour répondre à vos besoins immobiliers avec efficacité et
            distinction. Que vous cherchiez à acheter la maison de vos rêves, à
            vendre un bien au meilleur prix ou à bénéficier de conseils
            professionnels pour vos investissements, nous sommes là pour vous
            accompagner à chaque étape grâce à notre expertise approfondie du
            marché immobilier.
          </p>
        </div>
      </div>

      {/* Cards Container */}
      <div className="container mx-auto px-4 -mt-26 z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-[#ebf0ec]  rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Home className="h-5 w-5 text-primary"  />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-left mt-2">
              Achat de Propriétés
            </h3>
            <p className="text-gray-600 text-left">
              Trouvez la maison ou le local commercial de vos rêves avec notre
              accompagnement personnalisé.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#ebf0ec]  rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <DollarSign className="h-5 w-5 text-primary"  />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-left mt-2">
              Vente de Propriétés
            </h3>
            <p className="text-gray-600 text-left">
              Vendez votre bien rapidement et au meilleur prix grâce à notre
              expertise du marché immobilier.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#ebf0ec]  rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Handshake className="h-5 w-5 text-primary"  />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-left mt-2">
              Conseil Immobilier
            </h3>
            <p className="text-gray-600 text-left">
              Bénéficiez de conseils experts pour vos investissements
              immobiliers et projets de développement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
