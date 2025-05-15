
import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
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
  );
};
