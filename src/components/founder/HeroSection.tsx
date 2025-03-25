
import { Headphones, Calendar } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-rose-600/10 z-0"></div>
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-12">
            <div className="order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-800 mb-4">
                Vidwan H.S. Venugopal
              </h1>
              <div className="w-24 h-1 bg-amber-500 mb-6"></div>
              <h2 className="text-xl md:text-2xl text-slate-600 italic font-serif mb-8">
                Founder & Principal, Gokulam School of Music
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                A towering figure in the world of Carnatic music with a career spanning 
                almost five decades. Distinguished as both a soloist and an accompanying 
                artist, revered for his profound artistry and enduring contributions.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <a 
                  href="https://www.youtube.com/watch?v=example" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-md transition-colors flex items-center"
                >
                  <Headphones className="mr-2 h-5 w-5" />
                  Listen to Performances
                </a>
                <a 
                  href="#timeline" 
                  className="bg-white border border-amber-600 text-amber-700 hover:bg-amber-50 px-6 py-3 rounded-md transition-colors flex items-center"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  View Career Milestones
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative mx-auto max-w-sm md:max-w-none">
                <div className="absolute -top-4 -right-4 w-full h-full border-2 border-amber-500/30 rounded-2xl"></div>
                <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] bg-white">
                  <img 
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
                    alt="Vidwan H.S. Venugopal" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-amber-600/10 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
