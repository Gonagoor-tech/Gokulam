
import { useState } from "react";
import AspectImage from "./ui/AspectImage";
import { ArrowUpRight, X, ExternalLink } from "lucide-react";

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
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    bio: "A towering figure in the world of Carnatic music with a career spanning almost five decades. Distinguished as both a soloist and an accompanying artist, revered for his profound artistry and enduring contributions.",
    links: [
      { label: "Instagram", url: "https://www.instagram.com/venugopalhemmige" },
    ]
  },
  {
    id: 2,
    name: "Varijashree Venugopal",
    title: "Faculty & Performer",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
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
  const [selectedMember, setSelectedMember] = useState<FacultyMember | null>(null);
  
  const openBio = (member: FacultyMember) => {
    setSelectedMember(member);
    document.body.style.overflow = "hidden";
  };
  
  const closeBio = () => {
    setSelectedMember(null);
    document.body.style.overflow = "auto";
  };
  
  return (
    <section id="faculty" className="section-container bg-muted relative">
      <div className="absolute inset-0 bg-texture opacity-10"></div>
      
      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <span className="inline-block px-4 py-1 mb-3 bg-gokulam-gold/10 text-gokulam-burgundy rounded-full font-serif text-sm">
          Meet Our Mentors
        </span>
        <h2 className="section-title">Distinguished Faculty</h2>
        <p className="text-xl text-gokulam-dark/80">
          Learn from masters who bring decades of experience and passion for Carnatic music
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
        {facultyMembers.map((member, index) => (
          <div 
            key={member.id}
            className="group relative overflow-hidden rounded-2xl bg-white elegant-shadow transition-all duration-500 hover:shadow-2xl animate-fade-in"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="relative overflow-hidden">
              <AspectImage 
                src={member.image} 
                alt={member.name} 
                aspectRatio={1} 
                className="group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="font-serif text-2xl font-bold mb-1">{member.name}</h3>
                <p className="text-white/80 font-light">{member.title}</p>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-gokulam-dark/80 mb-5 line-clamp-3 font-light">{member.bio}</p>
              <button 
                onClick={() => openBio(member)}
                className="inline-flex items-center font-medium text-gokulam-burgundy hover:text-gokulam-gold transition-colors"
              >
                Read More <ArrowUpRight size={16} className="ml-1" />
              </button>
            </div>
            
            {/* Hover effect overlay */}
            <div className="absolute inset-0 bg-gokulam-burgundy/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
      
      {/* Bio Modal */}
      {selectedMember && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={closeBio}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-auto animate-scale-in relative"
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={closeBio}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gokulam-dark hover:text-gokulam-burgundy hover:shadow-lg transition-all z-20"
              aria-label="Close biography"
            >
              <X size={20} />
            </button>
            
            <div className="relative">
              <AspectImage 
                src={selectedMember.image} 
                alt={selectedMember.name} 
                aspectRatio={16/9}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h3 className="font-serif text-3xl font-bold mb-1">{selectedMember.name}</h3>
                <p className="text-white/90">{selectedMember.title}</p>
              </div>
            </div>
            
            <div className="p-8">
              <p className="text-lg leading-relaxed mb-8 text-gokulam-dark/90">{selectedMember.bio}</p>
              
              {selectedMember.links.length > 0 && (
                <div>
                  <h4 className="font-serif text-lg font-medium mb-4 text-gokulam-burgundy">Connect:</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedMember.links.map((link, index) => (
                      <a 
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gokulam-light border border-gokulam-gold/30 text-gokulam-dark rounded-full hover:bg-gokulam-gold/10 transition-colors inline-flex items-center"
                      >
                        {link.label} <ExternalLink size={14} className="ml-2" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Faculty;
