"use client";

import { useState } from "react";
import Image from "next/image";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  image: string;
  text: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Marie Dubois",
    role: "Propriétaire d'appartement",
    image: "/client-1.jpg",
    text: "Une expérience exceptionnelle ! L'équipe nous a accompagnés..."
  },
  {
    id: 2,
    name: "Pierre Martin",
    role: "Investisseur immobilier",
    image: "/client-2.jpg",
    text: "Grâce à leur expertise du marché local, j'ai pu trouver..."
  },
  {
    id: 3,
    name: "Sophie Laurent",
    role: "Première acquisition",
    image: "/client-3.jpg",
    text: "En tant que primo-accédante, j'avais beaucoup de questions..."
  },
  {
    id: 4,
    name: "Jean-Luc Bernard",
    role: "Vendeur de villa",
    image: "/client-4.jpg",
    text: "Vendre sa maison peut être stressant, mais pas avec cette équipe..."
  },
  {
    id: 5,
    name: "Amélie Rousseau",
    role: "Locataire",
    image: "/client-5.jpg",
    text: "La recherche d'appartement en location était un vrai casse-tête..."
  }
];

export function TestimonialsSection() {
  const [items, setItems] = useState<Testimonial[]>(testimonials);

  const handleSelect = (id: number) => {
    const index = items.findIndex((t) => t.id === id);
    if (index === -1) return;

    const selected = items[index];
    const newArr = [selected, ...items.filter((t) => t.id !== id)];
    setItems(newArr);
  };

  return (
    <div className="max-w-7xl mx-auto mt-[250px] mb-20 ">

   
    <div className="max-w-3xl mx-auto mb-[220px]  ">
        
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Témoignages de nos clients
        </h2>
        
        <p className="text-gray-600 text-lg leading-7 text-center">
            Nous sommes fiers de la confiance que nous accordent nos clients qui ont choisi nos services immobiliers d'excellence. Des primo-accédants aux investisseurs expérimentés, des propriétaires souhaitant vendre aux locataires en quête du bien idéal - chaque client a une histoire de réussite unique avec nous. Découvrez comment nous avons aidé nos clients à atteindre leurs objectifs immobiliers grâce à notre expertise du marché local et notre service personnalisé de qualité.
        </p>
        
    </div>
    <div className="flex flex-col md:flex-row items-start justify-between  pt-35 max-w-7xl mx-auto">
      {/* النص على اليسار */}
      <div className="max-w-xl space-y-2 order-1 md:order-none">
        <p className="text-lg italic text-gray-700">"{items[0].text}"</p>
        <p className="font-semibold">{items[0].name}</p>
        <p className="text-sm text-gray-500">{items[0].role}</p>
      </div>

      {/* الصور على اليمين مع تمدد للأعلى */}
      <div className="flex items-end gap-4 transition-all duration-500 ease-in-out h-[300px]">
        {items.map((t, idx) => (
          <button
            key={t.id}
            onClick={(e) => {
              e.preventDefault();
              handleSelect(t.id);
            }}
            className={`transition-all duration-500 ease-in-out ${
              idx === 0
                ? "h-[470px] w-[180px] " // الصورة المختارة تكبر للأعلى
                : "h-[80px] w-[80px]" // باقي الصور مصغرة
            }`}
           style={{
              borderTopRightRadius: idx === 0 ? '90px' : '0.375rem',
              borderTopLeftRadius: idx === 0 ? '90px' : '0.375rem',
              borderBottomRightRadius: '0.375rem',
              borderBottomLeftRadius: '0.375rem'
            }}
          >
            <Image
              src={t.image}
              alt={t.name}
              width={200}
              height={300}
              className="rounded-md object-cover w-full h-full"
            />
          </button>
        ))}
      </div>
    </div>
     </div>
  );
}