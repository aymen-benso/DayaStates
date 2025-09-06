"use client";

import React, { useState } from 'react';
import { ChevronDown, Search, Home, Users, Shield, Phone, Mail, MapPin } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'services' | 'pricing' | 'process';
}

const faqData: FAQItem[] = [
  {
    id: '1',
    question: "Comment fonctionne votre service de courtage immobilier ?",
    answer: "Nous servons d'intermédiaire entre les agences immobilières et les clients. Notre plateforme connecte directement les particuliers avec les meilleures agences locales selon leurs besoins spécifiques. Nous analysons votre profil et vous mettons en relation avec les professionnels les plus adaptés à votre projet.",
    category: 'general'
  },
  {
    id: '2',
    question: "Quels sont les frais pour utiliser vos services ?",
    answer: "Nos services de mise en relation sont entièrement gratuits pour les particuliers. Nous sommes rémunérés uniquement par les agences partenaires lorsqu'une transaction aboutit. Vous bénéficiez ainsi d'un accompagnement professionnel sans frais supplémentaires.",
    category: 'pricing'
  },
  {
    id: '3',
    question: "Comment sélectionnez-vous vos agences partenaires ?",
    answer: "Nous appliquons un processus de sélection rigoureux basé sur l'expérience, la réputation, les certifications professionnelles et les avis clients. Toutes nos agences partenaires sont certifiées et disposent des assurances professionnelles requises.",
    category: 'services'
  },
  {
    id: '4',
    question: "Combien de temps prend le processus de mise en relation ?",
    answer: "La mise en relation initiale se fait généralement sous 24h. Après avoir analysé votre dossier, nous vous proposons une sélection d'agences adaptées. Le premier contact avec l'agence choisie s'effectue dans les 48h suivant votre validation.",
    category: 'process'
  },
  {
    id: '5',
    question: "Proposez-vous des services pour l'achat et la vente ?",
    answer: "Oui, nous couvrons tous les types de transactions immobilières : achat, vente, location, et investissement locatif. Nos agences partenaires sont spécialisées dans différents segments pour répondre à tous vos besoins immobiliers.",
    category: 'services'
  },
  {
    id: '6',
    question: "Dans quelles régions êtes-vous présents ?",
    answer: "Nous couvrons l'ensemble du territoire français avec plus de 500 agences partenaires. Que vous cherchiez en région parisienne, en province, ou dans les DOM-TOM, nous avons des professionnels qualifiés dans votre zone géographique.",
    category: 'general'
  },
  {
    id: '7',
    question: "Que se passe-t-il si je ne suis pas satisfait de l'agence proposée ?",
    answer: "Votre satisfaction est notre priorité. Si la première mise en relation ne vous convient pas, nous vous proposons gratuitement d'autres agences alternatives. Nous restons à vos côtés jusqu'à ce que vous trouviez le partenaire idéal.",
    category: 'services'
  },
  {
    id: '8',
    question: "Comment puis-je commencer le processus ?",
    answer: "Il suffit de remplir notre formulaire en ligne en quelques minutes. Décrivez votre projet, vos critères et vos préférences. Notre équipe analyse votre demande et vous contacte rapidement avec des propositions personnalisées.",
    category: 'process'
  }
];

const categories = [
  { key: 'all', label: 'Toutes les questions', icon: Search },
  { key: 'general', label: 'Questions générales', icon: Home },
  { key: 'services', label: 'Nos services', icon: Users },
  { key: 'pricing', label: 'Tarification', icon: Shield },
  { key: 'process', label: 'Processus', icon: Phone }
];

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const filteredFAQ = faqData.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <div className="relative ">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 mb-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold  mb-6">
              Questions Fréquentes
            </h1>
            <p className="text-xl ">
              Trouvez toutes les réponses à vos questions sur notre service de courtage immobilier.
              Notre équipe d'experts est là pour vous accompagner.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search and Filter Section */}
        

        {/* FAQ Items and Image */}
<div className="flex flex-col md:flex-row gap-6">
  {/* FAQ Items */}
  <div className="md:w-1/2 space-y-6">
    {filteredFAQ.length === 0 ? (
      <div className="text-center py-16 bg-[#ebf0ec]  rounded-2xl shadow-lg">
        <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
        <h3 className="text-xl font-medium text-gray-500 mb-2">Aucun résultat trouvé</h3>
        <p className="text-gray-400">Essayez de modifier vos critères de recherche</p>
      </div>
    ) : (
      filteredFAQ.map((item) => (
        <div
          key={item.id}
          className="bg-[#ebf0ec]  rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
        >
          <button
            className="w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-inset"
            onClick={() => toggleItem(item.id)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-semibold text-gray-800 pr-4">
                {item.question}
              </h3>
              <ChevronDown
                className={`h-5 w-5 text-green-600 transform transition-transform duration-200 flex-shrink-0 ${
                  openItems.has(item.id) ? 'rotate-180' : ''
                }`}
              />
            </div>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openItems.has(item.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-6 pb-4">
              <div className="h-px bg-gray-100 mb-3"></div>
              <p className="text-xs text-gray-600 leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        </div>
      ))
    )}
  </div>

  {/* Image */}
  <div className="flex-1 flex items-center justify-center">
    <img
      src="/img16.png"
      alt="FAQ section image"
      className="w-[350px] h-[600px] object-cover rounded-br-[170px] "
    />
  </div>
</div>



        {/* Contact Section */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-3xl shadow-2xl overflow-hidden">
            <div className="px-8 py-12 sm:px-12">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Vous ne trouvez pas votre réponse ?
                </h2>
                <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
                  Notre équipe d'experts est disponible pour répondre à toutes vos questions personnalisées
                </p>
                
                <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                  <div className="text-center">
                    <div className="bg-white bg-opacity-20 rounded-2xl p-6 backdrop-blur-sm">
                      <Phone className="h-8 w-8 text-white mx-auto mb-3" />
                      <h3 className="font-semibold text-white mb-2">Téléphone</h3>
                      <p className="text-green-100">01 23 45 67 89</p>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-white bg-opacity-20 rounded-2xl p-6 backdrop-blur-sm">
                      <Mail className="h-8 w-8 text-white mx-auto mb-3" />
                      <h3 className="font-semibold text-white mb-2">Email</h3>
                      <p className="text-green-100">contact@agence.fr</p>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-white bg-opacity-20 rounded-2xl p-6 backdrop-blur-sm">
                      <MapPin className="h-8 w-8 text-white mx-auto mb-3" />
                      <h3 className="font-semibold text-white mb-2">Adresse</h3>
                      <p className="text-green-100">123 Rue de la Paix, Paris</p>
                    </div>
                  </div>
                </div>
                
                <button className="mt-8 bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-lg">
                  Nous Contacter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}