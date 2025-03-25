
import TimelineEvent from "./TimelineEvent";

const TimelineSection = () => {
  const events = [
    {
      year: "1979",
      title: "First Professional Performance",
      description: "Gave his first professional performance at the Rama Navami festival in Bangalore",
      isLeft: true
    },
    {
      year: "1991",
      title: "Mysore Palace Recital",
      description: "Performed a historic recital at the Durbar Hall of the Mysore Palace",
      isLeft: false
    },
    {
      year: "1998",
      title: "'Sunada Vinoda' Title",
      description: "Conferred with the prestigious title of 'Sunada Vinoda' by Sri Shirdi Sai Baba Mandir",
      isLeft: true
    },
    {
      year: "2005",
      title: "International Tour",
      description: "Completed a successful international tour covering the United States, United Kingdom, and Singapore",
      isLeft: false
    },
    {
      year: "2015",
      title: "'Venu Brahma' Award",
      description: "Received the 'Venu Brahma' award by Shri Naadabrahma Sangeetha Sabha in recognition of his contributions to flute music",
      isLeft: true
    }
  ];

  return (
    <section id="timeline" className="py-16 bg-slate-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4">
            Career Milestones
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600">
            A glimpse into the distinguished journey of Vidwan H.S. Venugopal through his 
            noteworthy performances and accolades
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-amber-200"></div>
          
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
