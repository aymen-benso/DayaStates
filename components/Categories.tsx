"use client"
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

// Define Category interface inline
interface Category {
  id: string;
  name: string;
  number: number;
  image: string;
}

// Inline categories data
const categories: Category[] = [
  {
    id: "1",
    name: "Appartements",
    number: 120,
    image: "/appartements.png",
  },
  {
    id: "2",
    name: "Maisons",
    number: 85,
    image: "/maisons.png",
  },
  {
    id: "3",
    name: "Villas",
    number: 45,
    image: "/villas.png",
  },
  {
    id: "4",
    name: "Studios",
    number: 60,
    image: "/studios.png",
  },
  {
    id: "5",
    name: "Terrains",
    number: 40,
    image: "/terrains.png",
  },
  {
    id: "6",
    name: "Bureaux",
    number: 55,
    image: "/bureaux.png",
  },
  {
    id: "7",
    name: "Commerces",
    number: 35,
    image: "/img1.png",
  },
  {
    id: "8",
    name: "Hôtels",
    number: 20,
    image: "/img1.png",
  },
];

export function Categories() {
  const categoryContainer = useRef<HTMLDivElement>(null);
  const [isScroll, setIsScroll] = useState(false);

  const scrollContainer = (direction: "left" | "right") => {
    if (categoryContainer.current) {
      direction === "right"
        ? (categoryContainer.current.scrollLeft += 200)
        : (categoryContainer.current.scrollLeft -= 200);
      setIsScroll(categoryContainer.current.scrollLeft > 0);
    }
  };

  return (
    <div className="py-16 bg-background">
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Description Section */}
          <div className="md:col-span-1">
            <span className="text-sm font-semibold text-primary uppercase">Catégories</span>
            <h2 className="text-3xl font-bold mt-2 mb-4">
              Trouvez la maison de vos rêves par catégorie
            </h2>
            <p className="text-gray-600 mb-6">
              Découvrez nos catégories populaires pour trouver le bien immobilier qui vous correspond.
            </p>
            <Button asChild>
              <Link href="/categories">Toutes les catégories</Link>
            </Button>
          </div>

          {/* Categories Section */}
          <div className="md:col-span-3">
            <div className="flex justify-end items-center gap-3 mb-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => scrollContainer("left")}
                disabled={!isScroll}
                className={`p-2 ${!isScroll && "opacity-50 cursor-not-allowed"}`}
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => scrollContainer("right")}
                className="p-2"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            <div
              className="flex items-center gap-3 mt-4 overflow-auto scroll-smooth no-scrollbar"
              ref={categoryContainer}
            >
              {categories.map(({ id, name, number, image }) => (
                <Link key={id} href={`/category/${id}`}>
                  <Card
                    className="relative flex-shrink-0 w-[240px] rounded-lg  hover:shadow-lg transition-shadow"
                  >
                    <div className="relative w-full h-[320px]">
  <Image
    src={image}
    alt={name}
    fill
    className="object-cover group-hover:scale-125 transition-transform duration-300"
  />
  {/* Overlay */}
  <div className="absolute inset-0 bg-green-500/20"></div>
</div>

                    <CardContent className="absolute bottom-0 left-0 px-4 py-3 bg-white/80 backdrop-blur-sm rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
                      <p className="text-sm text-gray-600">{number} biens</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}