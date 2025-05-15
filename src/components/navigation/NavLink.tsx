
import { Link } from 'react-router-dom';
import { NavLinkType } from './types';

type NavLinkProps = {
  link: NavLinkType;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
  className?: string;
};

export const NavLink = ({ link, onClick, className }: NavLinkProps) => {
  if (link.href.startsWith('/') && !link.href.includes('#')) {
    return (
      <Link 
        to={link.href} 
        className={className}
      >
        {link.name}
      </Link>
    );
  }

  return (
    <a 
      href={link.href} 
      className={className}
      onClick={(e) => onClick(e, link.href)}
    >
      {link.name}
    </a>
  );
};
