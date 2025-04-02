
import { useState } from "react";
import { ChevronRight, X, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet";

interface FacultyMember {
  id: number;
  name: string;
  title: string;
  image: string;
  bio: string;
  links: { label: string; url: string }[];
}

const facultyMembers: FacultyMember[] = [
  {
    id: 1,
    name: "Vidwan H.S. Venugopal",
    title: "Founder & Principal",
    image: "/lovable-uploads/0e796ae4-8fe7-489b-b4bd-86141909a510.png",
    bio: "A towering figure in the world of Carnatic music with a career spanning almost five decades. Distinguished as both a soloist and an accompanying artist, revered for his profound artistry and enduring contributions.",
    links: [
      { label: "Instagram", url: "https://www.instagram.com/venugopalhemmige" },
    ]
  },
  {
    id: 2,
    name: "Varijashree Venugopal",
    title: "Faculty & Performer",
    image: "/lovable-uploads/fa45a359-485a-4cc9-8f08-3dd2968a20ce.png",
    bio: "An accomplished musician following in her father's footsteps, Varijashree has carved her own niche in the world of Carnatic music with her exceptional talent and innovative approach.",
    links: [
      { label: "Website", url: "https://www.varijashree.com" },
      { label: "Instagram", url: "https://www.instagram.com/varijashree" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Varijashree_Venugopal" }
    ]
  },
  {
    id: 3,
    name: "Vidushi T.V. Rama",
    title: "Senior Faculty",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    bio: "An esteemed educator and performer, Vidushi T.V. Rama brings decades of experience and expertise to the Gokulam School of Music faculty.",
    links: [
      { label: "Instagram", url: "https://www.instagram.com/ramatv68" }
    ]
  },
  {
    id: 4,
    name: "Praveen D. Rao",
    title: "Guest Faculty & Composer",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
    bio: "A versatile musician and composer, Praveen D. Rao has contributed significantly to the field of music through his compositions and performances.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Praveen_D._Rao" },
      { label: "Instagram", url: "https://www.instagram.com/praveendraoofficial" }
    ]
  }
];

const Faculty = () => {
  const [openMemberId, setOpenMemberId] = useState<number | null>(null);
  
  const openBio = (id: number) => {
    setOpenMemberId(id);
  };
  
  const closeBio = () => {
    setOpenMemberId(null);
  };
  
  return (
    <section id="faculty" className="py-24 bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4 font-serif">Our Distinguished Faculty</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600">
            Learn from masters who bring decades of experience and deep knowledge of Carnatic traditions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facultyMembers.map((member) => (
            <div 
              key={member.id}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-5 text-white">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-white/80 text-sm">{member.title}</p>
                </div>
              </div>
              
              <div className="p-5">
                <p className="text-slate-600 mb-4 line-clamp-3">{member.bio}</p>
                <Button 
                  onClick={() => openBio(member.id)}
                  variant="outline"
                  className="w-full justify-between border-amber-500 hover:bg-amber-50 text-amber-700"
                >
                  Read More <ChevronRight size={16} />
                </Button>
              </div>
              
              {/* Sheet for displaying full bio */}
              <Sheet open={openMemberId === member.id} onOpenChange={(open) => !open && closeBio()}>
                <SheetContent className="w-[90vw] sm:max-w-md border-l-amber-200 bg-slate-50 p-0">
                  <SheetClose className="absolute right-4 top-4 p-1 rounded-full bg-white shadow-md hover:bg-amber-50 z-50">
                    <X className="h-5 w-5 text-slate-700" />
                  </SheetClose>
                  
                  <div className="h-64 relative">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  </div>
                  
                  <SheetHeader className="p-6 text-left">
                    <SheetTitle className="text-2xl font-serif text-slate-800">{member.name}</SheetTitle>
                    <p className="text-amber-700">{member.title}</p>
                  </SheetHeader>
                  
                  <div className="px-6 pb-6">
                    <p className="text-slate-700 mb-8 leading-relaxed">{member.bio}</p>
                    
                    {member.links.length > 0 && (
                      <div>
                        <h4 className="font-medium mb-3 text-slate-800">Connect:</h4>
                        <div className="flex flex-wrap gap-3">
                          {member.links.map((link, index) => (
                            <a 
                              key={index}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-4 py-2 bg-white border border-amber-200 text-amber-800 rounded-md flex items-center hover:bg-amber-50 transition-colors text-sm"
                            >
                              {link.label} <ExternalLink size={14} className="ml-2" />
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;
