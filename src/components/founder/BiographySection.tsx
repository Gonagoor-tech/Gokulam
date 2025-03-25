
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const BiographySection = () => {
  const [expandedBio, setExpandedBio] = useState(false);
  
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-6 text-center">
            Musical Journey
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-10"></div>
          
          <div className="prose prose-lg max-w-none text-slate-700">
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
            
            <div className={`${expandedBio ? 'block' : 'hidden'}`}>
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
              
              <p className="mb-4">
                Beyond his artistic pursuits, Vidwan Venugopal's legacy extends into education 
                through the establishment of the Gokulam School of Music in Bangalore. For 
                over four decades, this institution has nurtured countless students, many of 
                whom have emerged as accomplished musicians in their own right.
              </p>
            </div>
          </div>
          
          <button 
            onClick={() => setExpandedBio(!expandedBio)}
            className="mt-6 flex items-center mx-auto text-amber-700 hover:text-amber-900 transition-colors duration-300 font-medium"
          >
            {expandedBio ? (
              <>Read Less <ChevronUp className="ml-1 w-4 h-4" /></>
            ) : (
              <>Read More <ChevronDown className="ml-1 w-4 h-4" /></>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default BiographySection;
