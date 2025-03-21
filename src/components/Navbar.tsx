
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Faculty', href: '#faculty' },
    { name: 'Kalaarnava', href: '#kalaarnava' },
    { name: 'Media', href: '#media' },
    { name: 'Contact', href: '#contact' }
  ];
  
  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 shadow-md backdrop-blur-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-gokulam-gold flex items-center justify-center">
            <span className="text-white font-serif font-bold text-lg">G</span>
          </div>
          <span className="font-serif font-bold text-xl text-gokulam-burgundy">Gokulam</span>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-gokulam-dark hover:text-gokulam-gold transition-colors duration-300 link-underline"
            >
              {link.name}
            </a>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-gokulam-dark" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-sm shadow-md transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-gokulam-dark hover:text-gokulam-gold py-2 border-b border-gray-100 transition-colors duration-300"
              onClick={toggleMenu}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
