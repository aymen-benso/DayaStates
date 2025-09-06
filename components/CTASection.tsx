"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function CTASection() {
  // مصفوفة الصور مع توزيع عشوائي حول النص المركزي
  const images = [
    { src: "/img1.png", size: 50, top: "15%", left: "8%" },
    { src: "/img3.png", size: 40, top: "65%", left: "12%" },
    { src: "/img5.png", size: 45, top: "10%", right: "15%" },
    { src: "/img6.png", size: 60, top: "30%", right: "8%" },
    { src: "/img7.png", size: 45, top: "55%", right: "18%" },
    // إضافة صور إضافية للتوزيع الأكثر عشوائية
    { src: "/img1.png", size: 55, top: "20%", left: "25%" },
    { src: "/img5.png", size: 42, top: "5%", left: "35%" },
    { src: "/img4.png", size: 44, top: "50%", left: "2%" },
    { src: "/img6.png", size: 36, top: "25%", right: "2%" },
  ];

  return (
    <section className="relative bg-[#8d9990]   mx-auto py-32 px-6 flex justify-center items-center min-h-[600px] overflow-hidden mt-33 mb-20">
      {/* الصور الموزعة بشكل عشوائي */}
      {images.map((img, index) => (
        <div
          key={index}
          className="absolute rounded-full overflow-hidden border-2 border-white shadow-lg hover:scale-110 transition-transform duration-300"
          style={{ 
            width: img.size, 
            height: img.size, 
            top: img.top, 
            left: img.left,
            right: img.right,
            transform: `rotate(${Math.random() * 20 - 10}deg)` // دوران عشوائي خفيف
          }}
        >
          <Image 
            src={img.src} 
            alt={`user-${index}`} 
            width={img.size} 
            height={img.size}
            className="object-cover w-full h-full"
          />
        </div>
      ))}

      {/* النص المركزي */}
      <div className="text-center max-w-2xl z-20 relative ">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          Rejoignez des milliers de clients satisfaits
        </h2>
        <p className="mb-6 text-lg text-gray-600">
          Découvrez les biens qui vous correspondent et rejoignez notre communauté
          de clients heureux.
        </p>
        <Button
          size="lg"
          className="bg-green-600 text-white font-semibold hover:bg-green-700 shadow-lg"
        >
          Commencez maintenant
        </Button>
      </div>

      {/* تأثير الخلفية */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl -z-10"></div>
    </section>
  );
}
