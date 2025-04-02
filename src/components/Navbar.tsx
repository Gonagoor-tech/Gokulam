
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    { name: 'Home', href: '/' },
    { name: 'Founder', href: '/founder' },
    { name: 'About', href: '/#about' },
    { name: 'Faculty', href: '/#faculty' },
    { name: 'Kalaarnava', href: '/#kalaarnava' },
    { name: 'Media', href: '/#media' },
    { name: 'Contact', href: '/#contact' }
  ];
  
  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 shadow-md backdrop-blur-md py-3 elegant-shadow' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="h-12 w-12 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105 flex items-center justify-center bg-black">
            <img 
              src="/lovable-uploads/1ed61e84-fa6f-44b7-a870-e0bccad1b41f.png" 
              alt="Gokulam School of Music Logo" 
              className="h-10 w-10 object-contain"
            />
          </div>
          <div>
            <span className="font-serif font-bold text-2xl text-gokulam-burgundy block leading-none">Gokulam</span>
            <span className="text-xs tracking-widest text-gokulam-gold/90 uppercase">School of Music</span>
          </div>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10">
          {navLinks.map((link) => (
            link.href.startsWith('/') ? (
              <Link 
                key={link.name} 
                to={link.href} 
                className="text-gokulam-dark hover:text-gokulam-burgundy transition-colors duration-300 link-underline font-medium"
              >
                {link.name}
              </Link>
            ) : (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-gokulam-dark hover:text-gokulam-burgundy transition-colors duration-300 link-underline font-medium"
              >
                {link.name}
              </a>
            )
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gokulam-dark hover:text-gokulam-burgundy transition-colors duration-300" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-500 ease-in-out ${
          isMenuOpen 
            ? 'max-h-screen opacity-100 translate-y-0' 
            : 'max-h-0 opacity-0 -translate-y-4 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-6 py-6 bg-white/95 backdrop-blur-md shadow-lg rounded-b-2xl">
          <div className="flex flex-col space-y-5">
            {navLinks.map((link) => (
              link.href.startsWith('/') ? (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  className="text-gokulam-dark hover:text-gokulam-burgundy py-2 border-b border-gokulam-gold/20 transition-colors duration-300 font-medium"
                  onClick={toggleMenu}
                >
                  {link.name}
                </Link>
              ) : (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-gokulam-dark hover:text-gokulam-burgundy py-2 border-b border-gokulam-gold/20 transition-colors duration-300 font-medium"
                  onClick={toggleMenu}
                >
                  {link.name}
                </a>
              )
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
