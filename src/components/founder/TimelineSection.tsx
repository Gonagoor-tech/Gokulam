
import TimelineEvent from "./TimelineEvent";

const TimelineSection = () => {
  const events = [
    {
      year: "",
      title: "First Professional Performance",
      description: "Gave his First Professional Performance at Mayasandra Temple",
      isLeft: true
    },
    {
      year: "",
      title: "Mysore Palace Recital",
      description: "Performed a historic recital at the Durbar Hall of the Mysore Palace",
      isLeft: false
    },
    {
      year: "",
      title: "'Sunada Vinoda' Title",
      description: "Conferred with the prestigious title of 'Sunada Vinoda' by Sri Shirdi Sai Baba Mandir, Ulsoor",
      isLeft: true
    },
    {
      year: "",
      title: "International Tour",
      description: "Completed a successful international tour covering the United States, United Kingdom, and Singapore and many other countries",
      isLeft: false
    },
    {
      year: "",
      title: "'Ananya Puraskaar'",
      description: "Received the 'Ananya Puraskaar' Lifetime Achievement Award by Ananya Bengaluru",
      isLeft: true
    },
    {
      year: "",
      title: "Kempegowda Award",
      description: "Honored with the prestigious Kempegowda Award by the Bruhat Bengaluru Mahanagara Palike (BBMP)",
      isLeft: false
    },
    {
      year: "",
      title: "'Karnataka Kalashree'",
      description: "Honored with the 'Karnataka Kalashree' award by Sangeetha Nrithya Academy of Government of Karnataka",
      isLeft: true
    },
    {
      year: "",
      title: "'Venu Brahma' Award",
      description: "Received the 'Venu Brahma' award by Shri Naadabrahma Sangeetha Sabha in recognition of his contributions to flute music",
      isLeft: false
    }
  ];

  return (
    <section id="timeline" className="py-16 bg-slate-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4">
            Artistic Journey 
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600">
            A glimpse into the distinguished journey of Vidwan H.S. Venugopal through his 
            noteworthy performances and accolades
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line - visible only on md and above screens */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-amber-200"></div>
          
          {/* Mobile timeline line - only visible on small screens */}
          <div className="md:hidden absolute left-4 h-full w-1 bg-amber-200"></div>
          
          {/* Timeline events */}
          <div className="relative z-10">
            {events.map((event, index) => (
              <TimelineEvent
                key={index}
                year={event.year}
                title={event.title}
                description={event.description}
                isLeft={event.isLeft}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
