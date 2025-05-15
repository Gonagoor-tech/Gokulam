
import React from 'react';
import { Music, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <section id="about-us" className="section-container relative bg-gradient-to-b from-gokulam-light to-white">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gokulam-burgundy/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gokulam-gold/5 rounded-full -translate-x-1/4 translate-y-1/4 blur-3xl"></div>

      <div className="flex flex-col items-center mb-12">
        <div className="w-20 h-1 bg-gokulam-burgundy mb-8"></div>
        <h2 className="section-title text-center">About Us</h2>
        <h3 className="font-serif text-xl md:text-2xl text-gokulam-dark/70 mb-6 text-center">
          Gokulam School of Music
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <img 
            src="/lovable-uploads/e9cb090f-d027-4638-93ea-861e883e4e2e.png" 
            alt="Gokulam School Flute Performance" 
            className="rounded-2xl shadow-xl w-full h-auto"
          />
        </div>

        <div className="animate-slide-up">
          <div className="prose prose-lg max-w-none text-gokulam-dark/80">
            <p className="mb-6 leading-relaxed">
              Gokulam School of Music celebrates a distinguished 40‑year legacy of flute pedagogy in Bangalore, 
              currently guiding over 150 dedicated students. Under the expert tutelage of Vidwan H S Venugopal, 
              each pupil embarks on a meticulously structured journey through foundational fingering techniques 
              and the intricate subtleties of Carnatic phrasing.
            </p>
            
            <p className="mb-6 leading-relaxed">
              The school's curriculum artfully balances rigorous technical drills with immersive explorations of 
              raga interpretation and improvisational frameworks. Frequent student recitals and thematic workshops 
              cultivate a thriving performance ethos, while ensemble collaborations foster peer mentorship and 
              artistic camaraderie.
            </p>
            
            <p className="leading-relaxed">
              Its alumni—now gracing concert halls both nationally and abroad—attest to the institution's unwavering 
              pursuit of excellence and innovation in flute music.
            </p>
          </div>
          
          <div className="mt-8">
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
