import { HeartHandshake, Home, LineChart } from 'lucide-react';

export function Manifesto() {
  return (
    <section className="py-24 bg-sage rounded-[3rem] mx-4 lg:mx-12 my-12 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-navy mb-6">
          The New Standard in Companionship.
        </h2>
        <p className="text-lg text-navy/70 leading-relaxed">
          We've abandoned the cold, clinical spreadsheets. Our approach focuses on deep, empathetic matching—ensuring that every pet finds a home where they will thrive, and every human finds a companion that fits their actual lifestyle.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-alabaster p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
          <div className="w-14 h-14 bg-terracotta/10 rounded-2xl flex items-center justify-center mb-6 text-terracotta">
            <LineChart size={28} />
          </div>
          <h3 className="text-xl font-bold text-navy mb-3">Data-Informed</h3>
          <p className="text-navy/70">
            We analyze 40+ distinct variables—from spatial dimensions to dietary biology—to ensure a truly symbiotic match.
          </p>
        </div>

        <div className="bg-alabaster p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
          <div className="w-14 h-14 bg-terracotta/10 rounded-2xl flex items-center justify-center mb-6 text-terracotta">
            <HeartHandshake size={28} />
          </div>
          <h3 className="text-xl font-bold text-navy mb-3">Empathetic Care</h3>
          <p className="text-navy/70">
            We don't treat pets like financial assets. We provide transparent, honest views into their daily care and emotional needs.
          </p>
        </div>

        <div className="bg-alabaster p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
          <div className="w-14 h-14 bg-terracotta/10 rounded-2xl flex items-center justify-center mb-6 text-terracotta">
            <Home size={28} />
          </div>
          <h3 className="text-xl font-bold text-navy mb-3">Realistic Lifestyles</h3>
          <p className="text-navy/70">
            Whether you live in a studio apartment or have a sprawling backyard, we match based on the reality of your daily life.
          </p>
        </div>
      </div>
    </section>
  );
}
