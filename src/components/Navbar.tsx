
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from '@/lib/utils';

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
  
  // Updated navLinks with dropdown for Founder and Media
  const navLinks = [
    { name: 'Home', href: '/' },
    { 
      name: 'About',
      hasDropdown: true,
      items: [
        { name: 'Founder', href: '/founder' },
        { name: 'Gallery', href: '/gallery' }
      ]
    },
    { name: 'Productions', href: '/productions' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/#contact' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.substring(2);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const yOffset = -80; // Account for navbar height
        const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
        
        window.scrollTo({
          top: y,
          behavior: 'smooth'
        });
        
        // Close mobile menu after clicking
        setIsMenuOpen(false);
      }
    }
  };
  
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
          <div className="h-12 w-12 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105 flex items-center justify-center bg-[#f8e8c4]">
            <img 
              src="/lovable-uploads/28d9267d-1de4-4e18-aab7-1bcbbf10f3f5.png" 
              alt="Gokulam School of Music Logo" 
              className="h-full w-full object-contain"
            />
          </div>
          <div>
            <span className="font-serif font-bold text-2xl text-gokulam-burgundy block leading-none">Gokulam</span>
            <span className="text-xs tracking-widest text-gokulam-gold/90 uppercase">School of Music</span>
          </div>
        </Link>
        
        {/* Desktop Menu with Dropdown */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-8">
              {navLinks.map((link, index) => (
                link.hasDropdown ? (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuTrigger className="text-gokulam-dark hover:text-gokulam-burgundy bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
                      {link.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-4 w-[200px]">
                        {link.items?.map((item, idx) => (
                          <li key={idx} className="row-span-1">
                            <Link
                              to={item.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <div className="text-sm font-medium leading-none">{item.name}</div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : link.href.startsWith('/') && !link.href.includes('#') ? (
                  <Link 
                    key={index} 
                    to={link.href} 
                    className="text-gokulam-dark hover:text-gokulam-burgundy transition-colors duration-300 link-underline font-medium"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a 
                    key={index} 
                    href={link.href} 
                    className="text-gokulam-dark hover:text-gokulam-burgundy transition-colors duration-300 link-underline font-medium"
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.name}
                  </a>
                )
              ))}
            </NavigationMenuList>
          </NavigationMenu>
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
            {navLinks.map((link, index) => 
              link.hasDropdown ? (
                <div key={index} className="space-y-2">
                  <div className="font-medium text-gokulam-dark flex items-center">
                    {link.name} <ChevronDown size={16} className="ml-2" />
                  </div>
                  <div className="pl-4 flex flex-col space-y-3">
                    {link.items?.map((item, idx) => (
                      <Link 
                        key={idx} 
                        to={item.href} 
                        className="text-gokulam-dark/80 hover:text-gokulam-burgundy py-1 transition-colors duration-300 font-medium"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : link.href.startsWith('/') && !link.href.includes('#') ? (
                <Link 
                  key={index} 
                  to={link.href} 
                  className="text-gokulam-dark hover:text-gokulam-burgundy py-2 border-b border-gokulam-gold/20 transition-colors duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
                <a 
                  key={index} 
                  href={link.href} 
                  className="text-gokulam-dark hover:text-gokulam-burgundy py-2 border-b border-gokulam-gold/20 transition-colors duration-300 font-medium"
                  onClick={(e) => {
                    handleNavClick(e, link.href);
                    setIsMenuOpen(false);
                  }}
                >
                  {link.name}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
