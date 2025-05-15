
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from 'react-router-dom';
import { NavLink } from './NavLink';
import { NavLinkType } from './types';

type DesktopNavProps = {
  navLinks: NavLinkType[];
  handleNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
};

export const DesktopNav = ({ navLinks, handleNavClick }: DesktopNavProps) => {
  return (
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
            ) : (
              <NavLink 
                key={index}
                link={link}
                onClick={handleNavClick}
                className="text-gokulam-dark hover:text-gokulam-burgundy transition-colors duration-300 link-underline font-medium"
              />
            )
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
