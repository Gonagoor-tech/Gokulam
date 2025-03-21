
import AspectImage from "./ui/AspectImage";

const Kalaarnava = () => {
  return (
    <section id="kalaarnava" className="section-container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="rounded-xl overflow-hidden shadow-xl">
            <AspectImage 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
              alt="Kalaarnava Festival" 
              aspectRatio={4/3}
            />
          </div>
        </div>
        
        <div>
          <div className="animate-fade-in">
            <span className="inline-block px-3 py-1 mb-2 bg-gokulam-gold/20 text-gokulam-burgundy rounded-full font-serif">
              Annual Festival
            </span>
            
            <h2 className="section-title">Kalaarnava</h2>
            <h3 className="font-serif text-lg md:text-xl italic text-gokulam-dark/80 mb-6">
              An Ocean of Art - A Celebration of Indian Classical Arts
            </h3>
            
            <div className="prose prose-lg max-w-none">
              <p className="mb-4">
                KALAARNAVA, an annual day-long Music-Dance-Art festival, is a visionary initiative 
                by Vidwan H.S. Venugopal, founder of Gokulam School of Music. The name derives from 
                'Kala' (art) and 'Arnava' (ocean), representing an immersive experience in the ocean of arts.
              </p>
              
              <p className="mb-4">
                Conceived with the sole intention of propagating music & art, Kalaarnava has evolved into 
                a beautiful festival celebrating divine music & art across the country. For over 15 years, 
                the festival has added considerably to the scope and range of Indian classical arts, creating 
                a unique celebration that charges spiritual fervor into music and creates phenomenal artistic masterpieces.
              </p>
              
              <p className="mb-4">
                Co-curated with his daughter and fellow musician Varijashree, Kalaarnava showcases 
                diverse art forms, including music, dance, literature, visual arts, and theatre, making 
                it one of the most distinctive and celebrated festivals in Bangalore.
              </p>
            </div>
            
            <div className="mt-8">
              <a 
                href="#media"
                className="px-6 py-3 bg-gokulam-burgundy text-white rounded-md hover:bg-gokulam-burgundy/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
              >
                Experience Kalaarnava
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="glass-card p-8 rounded-lg">
          <h3 className="font-serif text-xl font-bold mb-4 text-gokulam-burgundy">Music Performances</h3>
          <p>
            From traditional Carnatic recitals to innovative fusion concerts, Kalaarnava presents 
            a wide spectrum of musical expressions by established maestros and emerging talents.
          </p>
        </div>
        
        <div className="glass-card p-8 rounded-lg">
          <h3 className="font-serif text-xl font-bold mb-4 text-gokulam-burgundy">Dance Presentations</h3>
          <p>
            Classical dance forms like Bharatanatyam, Kathak, Mohiniyattam, and Kuchipudi are showcased, 
            celebrating the rich choreographic traditions of India.
          </p>
        </div>
        
        <div className="glass-card p-8 rounded-lg">
          <h3 className="font-serif text-xl font-bold mb-4 text-gokulam-burgundy">Multidisciplinary Arts</h3>
          <p>
            Beyond music and dance, the festival embraces literature, visual arts, and theatre, 
            creating a holistic experience that honors the interconnectedness of all art forms.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Kalaarnava;
