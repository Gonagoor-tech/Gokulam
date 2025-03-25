
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Music, Award, Headphones, Calendar, 
  MusicNote, ExternalLink, ChevronDown, ChevronUp 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Founder = () => {
  const [expandedBio, setExpandedBio] = useState(false);
  
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-rose-600/10 z-0"></div>
          <div className="container px-4 mx-auto relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-12">
                <div className="order-2 md:order-1">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-800 mb-4">
                    Vidwan H.S. Venugopal
                  </h1>
                  <div className="w-24 h-1 bg-amber-500 mb-6"></div>
                  <h2 className="text-xl md:text-2xl text-slate-600 italic font-serif mb-8">
                    Founder & Principal, Gokulam School of Music
                  </h2>
                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    A towering figure in the world of Carnatic music with a career spanning 
                    almost five decades. Distinguished as both a soloist and an accompanying 
                    artist, revered for his profound artistry and enduring contributions.
                  </p>
                  <div className="flex flex-wrap gap-4 mt-8">
                    <a 
                      href="https://www.youtube.com/watch?v=example" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-md transition-colors flex items-center"
                    >
                      <Headphones className="mr-2 h-5 w-5" />
                      Listen to Performances
                    </a>
                    <a 
                      href="#timeline" 
                      className="bg-white border border-amber-600 text-amber-700 hover:bg-amber-50 px-6 py-3 rounded-md transition-colors flex items-center"
                    >
                      <Calendar className="mr-2 h-5 w-5" />
                      View Career Milestones
                    </a>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="relative mx-auto max-w-sm md:max-w-none">
                    <div className="absolute -top-4 -right-4 w-full h-full border-2 border-amber-500/30 rounded-2xl"></div>
                    <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] bg-white">
                      <img 
                        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
                        alt="Vidwan H.S. Venugopal" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-amber-600/10 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Biography Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-6 text-center">
                Musical Journey
              </h2>
              <div className="w-24 h-1 bg-amber-500 mx-auto mb-10"></div>
              
              <div className="prose prose-lg max-w-none text-slate-700">
                <p className="mb-4">
                  Born on December 25, 1959, to H.S. Jayalakshmi and H.S. Sreenivasamurthy, 
                  Vidwan Hemmige Srinivasa Murthy Venugopal stands as a towering figure in the 
                  world of Carnatic music. His initial tutelage under Vid. A.V. Prakash in Mysore, 
                  followed by advanced guidance under Vid. M.S. Srinivasa Murthy in Bangalore, 
                  laid the foundation for a remarkable career spanning almost five decades.
                </p>
                
                <p className="mb-4">
                  Venugopal is uniquely distinguished as both a soloist and an accompanying artist, 
                  revered for his profound artistry and enduring contributions to the Indian 
                  classical music landscape. As a solo flautist, he has graced numerous prestigious 
                  platforms across India and internationally, captivating audiences with his 
                  mellifluous renditions.
                </p>
                
                <p className="mb-4">
                  His illustrious performances include a memorable recital at the Durbar Hall of 
                  the Mysore Palace in 1991 and a distinguished concert at the Raj Bhavan, 
                  witnessed by Her Excellency Dr. Rama Devi, the former Governor of Karnataka.
                </p>
                
                <div className={`${expandedBio ? 'block' : 'hidden'}`}>
                  <p className="mb-4">
                    His repertoire extends to acclaimed events such as the Ugadi Music Festival, 
                    Unity Concerts for National Integration in New Delhi organized by the Madras 
                    Telugu Academy, and performances under the aegis of the Department of 
                    Kannada and Culture, Government of Karnataka, and the Indian Council for 
                    Cultural Relations.
                  </p>
                  
                  <p className="mb-4">
                    As an accompanying artist, Vidwan Venugopal has added immense value to the 
                    performances of numerous renowned artists across diverse dance forms such as 
                    Bharatanatyam, Kathak, Mohiniyattam, Kathakali, Kuchipudi, Yakshagana, and 
                    Kavya Vachana. His versatility and ability to seamlessly integrate with these 
                    art forms make him one of the rare artists in the country.
                  </p>
                  
                  <p className="mb-4">
                    Over the years, Vidwan Venugopal has been the recipient of numerous accolades, 
                    including the 'Hamsa Puraskar' by Hamsa Jyothi, the title of 'Sunada Vinoda' 
                    by Sri Shirdi Sai Baba Mandir, and 'Venu Brahma' by Shri Naadabrahma Sangeetha Sabha.
                  </p>
                  
                  <p className="mb-4">
                    Beyond his artistic pursuits, Vidwan Venugopal's legacy extends into education 
                    through the establishment of the Gokulam School of Music in Bangalore. For 
                    over four decades, this institution has nurtured countless students, many of 
                    whom have emerged as accomplished musicians in their own right.
                  </p>
                </div>
              </div>
              
              <button 
                onClick={() => setExpandedBio(!expandedBio)}
                className="mt-6 flex items-center mx-auto text-amber-700 hover:text-amber-900 transition-colors duration-300 font-medium"
              >
                {expandedBio ? (
                  <>Read Less <ChevronUp className="ml-1 w-4 h-4" /></>
                ) : (
                  <>Read More <ChevronDown className="ml-1 w-4 h-4" /></>
                )}
              </button>
            </div>
          </div>
        </section>
        
        {/* Achievements */}
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
                {/* Event 1 */}
                <div className="timeline-item mb-12">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow md:ml-auto md:mr-0 max-w-md">
                        <span className="text-amber-600 font-medium">1979</span>
                        <h3 className="text-xl font-bold mb-2">First Professional Performance</h3>
                        <p className="text-slate-600">
                          Gave his first professional performance at the Rama Navami festival in Bangalore
                        </p>
                      </div>
                    </div>
                    <div className="timeline-marker"></div>
                    <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
                  </div>
                </div>
                
                {/* Event 2 */}
                <div className="timeline-item mb-12">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-12 hidden md:block"></div>
                    <div className="timeline-marker"></div>
                    <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0">
                      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow md:mr-auto md:ml-0 max-w-md">
                        <span className="text-amber-600 font-medium">1991</span>
                        <h3 className="text-xl font-bold mb-2">Mysore Palace Recital</h3>
                        <p className="text-slate-600">
                          Performed a historic recital at the Durbar Hall of the Mysore Palace
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Event 3 */}
                <div className="timeline-item mb-12">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow md:ml-auto md:mr-0 max-w-md">
                        <span className="text-amber-600 font-medium">1998</span>
                        <h3 className="text-xl font-bold mb-2">'Sunada Vinoda' Title</h3>
                        <p className="text-slate-600">
                          Conferred with the prestigious title of 'Sunada Vinoda' by Sri Shirdi Sai Baba Mandir
                        </p>
                      </div>
                    </div>
                    <div className="timeline-marker"></div>
                    <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
                  </div>
                </div>
                
                {/* Event 4 */}
                <div className="timeline-item mb-12">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-12 hidden md:block"></div>
                    <div className="timeline-marker"></div>
                    <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0">
                      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow md:mr-auto md:ml-0 max-w-md">
                        <span className="text-amber-600 font-medium">2005</span>
                        <h3 className="text-xl font-bold mb-2">International Tour</h3>
                        <p className="text-slate-600">
                          Completed a successful international tour covering the United States, 
                          United Kingdom, and Singapore
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Event 5 */}
                <div className="timeline-item">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow md:ml-auto md:mr-0 max-w-md">
                        <span className="text-amber-600 font-medium">2015</span>
                        <h3 className="text-xl font-bold mb-2">'Venu Brahma' Award</h3>
                        <p className="text-slate-600">
                          Received the 'Venu Brahma' award by Shri Naadabrahma Sangeetha Sabha in recognition 
                          of his contributions to flute music
                        </p>
                      </div>
                    </div>
                    <div className="timeline-marker"></div>
                    <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 bg-gradient-to-b from-white to-amber-50">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4">
                Tributes & Testimonials
              </h2>
              <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
              <p className="text-lg text-slate-600">
                Words from contemporaries, critics, and students about Vidwan H.S. Venugopal
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white border-amber-200 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-amber-500 mb-4">
                    <MusicNote className="inline-block w-8 h-8" />
                  </div>
                  <blockquote className="text-slate-700 italic mb-6">
                    "Venugopal's flute recitals transcend mere musical performances; 
                    they are spiritual journeys that transport the listener to a realm of divine bliss."
                  </blockquote>
                  <div className="flex items-center">
                    <div>
                      <p className="font-bold text-slate-900">Dr. N. Rajam</p>
                      <p className="text-sm text-slate-500">Renowned Violinist</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-amber-200 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-amber-500 mb-4">
                    <MusicNote className="inline-block w-8 h-8" />
                  </div>
                  <blockquote className="text-slate-700 italic mb-6">
                    "The technical brilliance and emotional depth of Venugopal's flute playing 
                    makes him one of the most significant contributors to the Carnatic flute tradition."
                  </blockquote>
                  <div className="flex items-center">
                    <div>
                      <p className="font-bold text-slate-900">The Hindu</p>
                      <p className="text-sm text-slate-500">Music Review, 2012</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-amber-200 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-amber-500 mb-4">
                    <MusicNote className="inline-block w-8 h-8" />
                  </div>
                  <blockquote className="text-slate-700 italic mb-6">
                    "As a guru, Venugopal Sir embodies patience, perfection, and profound knowledge. 
                    His teaching methods have not only shaped my musical abilities but have also 
                    influenced my approach to life."
                  </blockquote>
                  <div className="flex items-center">
                    <div>
                      <p className="font-bold text-slate-900">Raghav Krishnan</p>
                      <p className="text-sm text-slate-500">Former Student & Professional Flautist</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Teachings & Philosophy */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Teaching Philosophy
              </h2>
              <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
              <p className="text-lg text-slate-300">
                The core values and principles that guide Vidwan H.S. Venugopal's approach to music education
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="relative z-10 rounded-lg overflow-hidden h-full min-h-[400px]">
                  <img 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                    alt="Vidwan H.S. Venugopal teaching" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div>
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 rounded-full bg-amber-600/20 flex items-center justify-center">
                        <Music className="text-amber-500 w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Devotion to Tradition</h3>
                      <p className="text-slate-300">
                        Emphasizes a deep respect for the rich heritage of Carnatic music, ensuring that 
                        students understand the historical context and significance of the art form.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 rounded-full bg-amber-600/20 flex items-center justify-center">
                        <Award className="text-amber-500 w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Technical Excellence</h3>
                      <p className="text-slate-300">
                        Advocates for rigorous practice and technical precision, believing that a strong foundation 
                        in the fundamentals is essential for artistic expression.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 rounded-full bg-amber-600/20 flex items-center justify-center">
                        <Headphones className="text-amber-500 w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Emotional Authenticity</h3>
                      <p className="text-slate-300">
                        Guides students to infuse their performances with genuine emotion, teaching that 
                        music is not just about notes but about expressing feelings and telling stories.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-amber-50">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto text-center bg-white rounded-xl shadow-xl p-10 border border-amber-200">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4">
                Learn from the Master
              </h2>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                Embark on your musical journey with guidance from Vidwan H.S. Venugopal and join the 
                community of talented musicians at Gokulam School of Music
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="#contact" 
                  className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-md transition-colors"
                >
                  Enroll Now
                </a>
                <a 
                  href="/faculty" 
                  className="bg-white border border-amber-600 text-amber-700 hover:bg-amber-50 px-6 py-3 rounded-md transition-colors"
                >
                  Meet All Faculty
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default Founder;
