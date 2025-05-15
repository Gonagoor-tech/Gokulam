
import { Link } from 'react-router-dom';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Menu, ChevronDown } from 'lucide-react';
import { NavLink } from './NavLink';
import { NavLinkType } from './types';

type MobileNavProps = {
  navLinks: NavLinkType[];
  handleNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
};

export const MobileNav = ({ navLinks, handleNavClick }: MobileNavProps) => {
  return (
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
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center justify-between w-full font-medium text-gokulam-dark text-lg mb-2">
                      {link.name}
                      <ChevronDown size={18} />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="min-w-[200px] bg-white">
                      {link.items?.map((item, idx) => (
                        <DropdownMenuItem key={idx} asChild>
                          <Link 
                            to={item.href} 
                            className="text-gokulam-dark/80 hover:text-gokulam-burgundy py-1.5 transition-colors duration-300 font-medium text-base w-full"
                          >
                            {item.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              ) : (
                <NavLink 
                  key={index}
                  link={link}
                  onClick={handleNavClick}
                  className="text-gokulam-dark hover:text-gokulam-burgundy py-3 border-b border-gokulam-gold/20 transition-colors duration-300 font-medium text-lg"
                />
              )
            )}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};
