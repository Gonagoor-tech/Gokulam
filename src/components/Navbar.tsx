
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

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
  const navLinks = [
    { name: 'Home', href: '/' },
    { 
      name: 'About',
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 shadow-md backdrop-blur-md py-3 elegant-shadow' 
          : 'bg-transparent py-3 md:py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 md:space-x-3 group">
          <div className="h-10 w-10 md:h-12 md:w-12 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105 flex items-center justify-center bg-[#f8e8c4]">
            <img 
              src="/lovable-uploads/28d9267d-1de4-4e18-aab7-1bcbbf10f3f5.png" 
              alt="Gokulam School of Music Logo" 
              className="h-full w-full object-contain"
            />
          </div>
          <div>
            <span className="font-serif font-bold text-xl md:text-2xl text-gokulam-burgundy block leading-none">Gokulam</span>
            <span className="text-xs tracking-widest text-gokulam-gold/90 uppercase hidden md:block">School of Music</span>
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
        
        {/* Mobile Menu - Using Sheet Component */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button 
                className="flex justify-center items-center h-10 w-10 bg-white/80 text-gokulam-dark hover:text-gokulam-burgundy transition-colors duration-300 rounded-md shadow-md" 
                aria-label="Open menu"
              >
                <Menu size={22} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80%] max-w-sm bg-white pt-12">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link, index) => 
                  link.hasDropdown ? (
                    <div key={index} className="py-3 border-b border-gokulam-gold/20">
                      <div className="font-medium text-gokulam-dark text-lg mb-2">
                        {link.name}
                      </div>
                      <div className="pl-4 flex flex-col space-y-3">
                        {link.items?.map((item, idx) => (
                          <Link 
                            key={idx} 
                            to={item.href} 
                            className="text-gokulam-dark/80 hover:text-gokulam-burgundy py-1.5 transition-colors duration-300 font-medium text-base"
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
                      className="text-gokulam-dark hover:text-gokulam-burgundy py-3 border-b border-gokulam-gold/20 transition-colors duration-300 font-medium text-lg"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a 
                      key={index} 
                      href={link.href} 
                      className="text-gokulam-dark hover:text-gokulam-burgundy py-3 border-b border-gokulam-gold/20 transition-colors duration-300 font-medium text-lg"
                      onClick={(e) => handleNavClick(e, link.href)}
                    >
                      {link.name}
                    </a>
                  )
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
