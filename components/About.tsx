import React from 'react';

export function About() {
  return (
    <div className="mt-10 relative max-w-7xl h-[400px] overflow-hidden mx-auto rounded-[50px] shadow-2xl">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        aria-label="Background video for About page"
      >
        <source src="/about.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Green Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-green-800 opacity-50"></div>

      {/* Text Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center">
       <div>
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            À Propos de Nous
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-white drop-shadow-lg max-w-3xl mx-auto">
            Nous sommes une société immobilière dédiée à la réalisation de vos rêves résidentiels et commerciaux. Découvrez notre expertise et notre passion pour l'immobilier.
          </p>
        </div>
      </div>
    </div>
  );
};