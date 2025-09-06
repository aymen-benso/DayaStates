
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Newsletter() {
  return (
    <section
      className="relative bg-cover bg-center py-10 px-4 text-white max-w-5xl h-[230px] mx-auto rounded-[50px] shadow-2xl"
      style={{ backgroundImage: "url('/img7.png')" }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-green-900/40 rounded-[50px]"></div>

      <div className="relative max-w-2xl  text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Abonnez-vous à notre newsletter
        </h2>
        <p className="text-sm mb-6">
          Recevez les dernières offres immobilières et conseils directement dans
          votre boîte mail.
        </p>

        <form className="max-w-[530px] rounded-[40px]  flex flex-col sm:flex-row items-left gap-3 bg-white p-2">
          <Input
            type="email"
            placeholder="Entrez votre adresse e-mail"
            className="flex-1 bg-white text-gray-800"
          />
          <Button type="submit" className="rounded-[40px] p-6" >
            S’abonner
          </Button>
        </form>
      </div>
    </section>
  );
}
