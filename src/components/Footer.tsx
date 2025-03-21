
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gokulam-dark text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-gokulam-gold flex items-center justify-center mr-3">
                <span className="text-white font-serif font-bold text-lg">G</span>
              </div>
              <h3 className="font-serif text-xl font-bold">Gokulam School of Music</h3>
            </div>
            
            <p className="text-white/80 mb-6">
              A premier institution dedicated to preserving and advancing the art of 
              Carnatic flute, established in 1983 by Vidwan H.S. Venugopal.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/gokulamschoolofmusic/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-gokulam-dark transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://www.facebook.com/GokulamSchoolOfMusic" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-gokulam-dark transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://www.youtube.com/@gokulamsangeethashaale" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-gokulam-dark transition-colors duration-300"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-white/80 hover:text-white transition-colors duration-300">Home</a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-colors duration-300">About Us</a>
              </li>
              <li>
                <a href="#faculty" className="text-white/80 hover:text-white transition-colors duration-300">Faculty</a>
              </li>
              <li>
                <a href="#kalaarnava" className="text-white/80 hover:text-white transition-colors duration-300">Kalaarnava Festival</a>
              </li>
              <li>
                <a href="#media" className="text-white/80 hover:text-white transition-colors duration-300">Media</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-xl font-bold mb-6">Connect With Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="mr-3 mt-1 text-gokulam-gold" size={18} />
                <a 
                  href="mailto:gokulamsangeetashaale@gmail.com" 
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  gokulamsangeetashaale@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="mr-3 mt-1 text-gokulam-gold" size={18} />
                <span className="text-white/80">Contact number to be provided</span>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-3 mt-1 text-gokulam-gold" size={18} />
                <span className="text-white/80">Bangalore, Karnataka, India</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-xl font-bold mb-6">Faculty Social</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://www.instagram.com/venugopalhemmige" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <Instagram size={16} className="mr-2" />
                  <span>Vidwan H.S. Venugopal</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/varijashree" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <Instagram size={16} className="mr-2" />
                  <span>Varijashree Venugopal</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/ramatv68" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <Instagram size={16} className="mr-2" />
                  <span>Vidushi T.V. Rama</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/praveendraoofficial" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <Instagram size={16} className="mr-2" />
                  <span>Praveen D. Rao</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Gokulam School of Music. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
