
import { useState, useEffect } from 'react';
import { Logo } from './navigation/Logo';
import { MobileNav } from './navigation/MobileNav';
import { DesktopNav } from './navigation/DesktopNav';
import { NavLinkType } from './navigation/types';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Updated navLinks with dropdown for Founder and Media
  const navLinks: NavLinkType[] = [
    { name: 'Home', href: '/' },
    { 
      name: 'About',
      href: '/about', // Added href property to fix the type error
      hasDropdown: true,
      items: [
        { name: 'Our Founder', href: '/founder' },
        { name: 'Media Gallery', href: '/gallery' }
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
      }
    }
  };
  
  return (
    <nav 
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 shadow-md backdrop-blur-md py-3 elegant-shadow' 
          : 'bg-transparent py-3 md:py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo />
        
        {/* Desktop Navigation */}
        <DesktopNav navLinks={navLinks} handleNavClick={handleNavClick} />
        
        {/* Mobile Navigation */}
        <MobileNav navLinks={navLinks} handleNavClick={handleNavClick} />
      </div>
    </nav>
  );
};

export default Navbar;
