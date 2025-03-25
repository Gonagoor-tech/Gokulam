
import { Music, Award, Headphones } from "lucide-react";

const TeachingPhilosophySection = () => {
  return (
    <section className="py-16 bg-slate-900 text-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Teaching Philosophy
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-300">
            The core values and principles that guide Vidwan H.S. Venugopal's approach to music education
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative z-10 rounded-lg overflow-hidden h-full min-h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                alt="Vidwan H.S. Venugopal teaching" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div>
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 rounded-full bg-amber-600/20 flex items-center justify-center">
                    <Music className="text-amber-500 w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Devotion to Tradition</h3>
                  <p className="text-slate-300">
                    Emphasizes a deep respect for the rich heritage of Carnatic music, ensuring that 
                    students understand the historical context and significance of the art form.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 rounded-full bg-amber-600/20 flex items-center justify-center">
                    <Award className="text-amber-500 w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Technical Excellence</h3>
                  <p className="text-slate-300">
                    Advocates for rigorous practice and technical precision, believing that a strong foundation 
                    in the fundamentals is essential for artistic expression.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 rounded-full bg-amber-600/20 flex items-center justify-center">
                    <Headphones className="text-amber-500 w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Emotional Authenticity</h3>
                  <p className="text-slate-300">
                    Guides students to infuse their performances with genuine emotion, teaching that 
                    music is not just about notes but about expressing feelings and telling stories.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachingPhilosophySection;
