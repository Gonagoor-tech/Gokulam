
import { useState } from 'react';
import AspectImage from './ui/AspectImage';

const AboutFounder = () => {
  const [expandedBio, setExpandedBio] = useState(false);
  
  return (
    <section id="about" className="section-container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <div className="animate-fade-in">
            <span className="inline-block px-3 py-1 mb-2 bg-gokulam-gold/20 text-gokulam-burgundy rounded-full font-serif">
              About Our Founder
            </span>
            
            <h2 className="section-title">Vidwan H.S. Venugopal</h2>
            
            <h3 className="font-serif text-lg md:text-xl italic text-gokulam-dark/80 mb-6">
              Carnatic Flautist | Music Educator | Founder - Gokulam School of Music
            </h3>
            
            <div className={`prose prose-lg max-w-none ${expandedBio ? '' : 'line-clamp-6'}`}>
              <p className="mb-4">
                Born on December 25, 1959, to H.S. Jayalakshmi and H.S. Sreenivasamurthy, 
                Vidwan Hemmige Srinivasa Murthy Venugopal stands as a towering figure in the 
                world of Carnatic music. His initial tutelage under Vid. A.V. Prakash in Mysore, 
                followed by advanced guidance under Vid. M.S. Srinivasa Murthy in Bangalore, 
                laid the foundation for a remarkable career spanning almost five decades.
              </p>
              
              <p className="mb-4">
                Venugopal is uniquely distinguished as both a soloist and an accompanying artist, 
                revered for his profound artistry and enduring contributions to the Indian 
                classical music landscape. As a solo flautist, he has graced numerous prestigious 
                platforms across India and internationally, captivating audiences with his 
                mellifluous renditions.
              </p>
              
              <p className="mb-4">
                His illustrious performances include a memorable recital at the Durbar Hall of 
                the Mysore Palace in 1991 and a distinguished concert at the Raj Bhavan, 
                witnessed by Her Excellency Dr. Rama Devi, the former Governor of Karnataka.
              </p>
              
              {expandedBio && (
                <>
                  <p className="mb-4">
                    His repertoire extends to acclaimed events such as the Ugadi Music Festival, 
                    Unity Concerts for National Integration in New Delhi organized by the Madras 
                    Telugu Academy, and performances under the aegis of the Department of 
                    Kannada and Culture, Government of Karnataka, and the Indian Council for 
                    Cultural Relations.
                  </p>
                  
                  <p className="mb-4">
                    As an accompanying artist, Vidwan Venugopal has added immense value to the 
                    performances of numerous renowned artists across diverse dance forms such as 
                    Bharatanatyam, Kathak, Mohiniyattam, Kathakali, Kuchipudi, Yakshagana, and 
                    Kavya Vachana. His versatility and ability to seamlessly integrate with these 
                    art forms make him one of the rare artists in the country.
                  </p>
                  
                  <p className="mb-4">
                    Over the years, Vidwan Venugopal has been the recipient of numerous accolades, 
                    including the 'Hamsa Puraskar' by Hamsa Jyothi, the title of 'Sunada Vinoda' 
                    by Sri Shirdi Sai Baba Mandir, and 'Venu Brahma' by Shri Naadabrahma Sangeetha Sabha.
                  </p>
                </>
              )}
            </div>
            
            <button 
              onClick={() => setExpandedBio(!expandedBio)}
              className="mt-4 px-4 py-2 text-gokulam-burgundy hover:text-gokulam-gold transition-colors duration-300"
            >
              {expandedBio ? 'Read Less' : 'Read More'}
            </button>
          </div>
        </div>
        
        <div className="order-1 md:order-2">
          <div className="rounded-xl overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-[1.02]">
            <AspectImage 
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
              alt="Vidwan H.S. Venugopal" 
              aspectRatio={3/4}
            />
          </div>
        </div>
      </div>
      
      <div className="mt-20 text-center">
        <h2 className="section-title">Our Legacy</h2>
        <p className="text-xl max-w-3xl mx-auto mb-10">
          For 40 years, Gokulam School of Music has been a beacon of Carnatic flute education in Bangalore, 
          nurturing over 150 students and producing accomplished musicians who continue to enrich 
          the classical music tradition.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="glass-card p-8 rounded-lg animate-scale-in">
            <div className="text-4xl font-serif font-bold text-gokulam-gold mb-4">40+</div>
            <h3 className="text-xl font-serif mb-2">Years of Excellence</h3>
            <p className="text-gokulam-dark/70">Dedicated to preserving and advancing the art of Carnatic flute</p>
          </div>
          
          <div className="glass-card p-8 rounded-lg animate-scale-in delay-150">
            <div className="text-4xl font-serif font-bold text-gokulam-gold mb-4">150+</div>
            <h3 className="text-xl font-serif mb-2">Active Students</h3>
            <p className="text-gokulam-dark/70">Learning and mastering the nuances of flute playing</p>
          </div>
          
          <div className="glass-card p-8 rounded-lg animate-scale-in delay-300">
            <div className="text-4xl font-serif font-bold text-gokulam-gold mb-4">15</div>
            <h3 className="text-xl font-serif mb-2">Kalaarnava Festivals</h3>
            <p className="text-gokulam-dark/70">Celebrating the diversity of Indian classical arts</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFounder;
