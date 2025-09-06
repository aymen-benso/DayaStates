"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";
import {Newsletter }from "@/components/Newsletter"; // ✅ import once

export default function Footer() {
  return (
    <div>
       {/* ✅ Newsletter above footer content */}
      <div className=" -mb-30">
        <Newsletter />
      </div>
  <footer className="bg-[#1d211e] text-gray-500 py-22">
     

      {/* ✅ Main footer grid */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
        {/* Logo + Description */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">MonImmo</h2>
          <p className="text-sm">
            Trouvez la maison de vos rêves grâce à notre plateforme moderne et
            intuitive. Nous vous aidons à chaque étape de votre recherche
            immobilière.
          </p>
        </div>

        {/* Liens rapides */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Liens rapides
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-green-500 transition-colors">
                Accueil
              </Link>
            </li>
            <li>
              <Link
                href="/categories"
                className="hover:text-green-500 transition-colors"
              >
                Catégories
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-green-500 transition-colors"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-green-500 transition-colors"
              >
                À propos
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <p className="text-sm">Email : contact@monimmo.com</p>
          <p className="text-sm">Téléphone : +33 1 23 45 67 89</p>
          <div className="flex items-center gap-4 mt-4">
            <Link href="#" className="hover:text-green-500">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="hover:text-green-500">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="hover:text-green-500">
              <Instagram size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bas du footer */}
      <div className="mt-10 border-t border-gray-700 text-center pt-4 text-sm">
        © {new Date().getFullYear()} MonImmo. Tous droits réservés.
      </div>
    </footer>
    </div>
  
  );
}
