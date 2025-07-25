
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import { Card } from '@/components/ui/card';
import { Album } from 'lucide-react';
import { link } from 'fs';

const Productions = () => {
  const albums = [
    {
      title: "VENU",
      link: "https://open.spotify.com/album/3pfkWvBU3Y1EAUl4WMpu3c",
      type: "Spotify Album"
    },
    {
      title: "Vari",
      link: "https://open.spotify.com/album/0yP0Y5UeIqn0PaMMczQVtI",
      type: "Spotify Album"
    },
    {
      title: "Bidiru",
      type: "Album"
    },
    {
      title: "Mela Raga Malika Part 1",
      type: "Youtube Video",
      link: "https://www.youtube.com/watch?v=u-E3UHNqRTc"

    },
    {
      title: "Mela Raga Malika Part 2",
      type: "Album",
      link: "https://www.youtube.com/watch?v=wqxWst-PBjg"
    },
    {
      title: "Devamanohari",
      type: "Album",
      link: "https://www.youtube.com/watch?v=OX7D-8VN4Ww"
    },
    {
      title: "Kayo Enna Gopala",
      type: "Album"
    },
    {
      title: "Vandanam",
      type: "Album"
    },
    {
      title: "Krishnamrutham",
      type: "Album"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Productions - Gokulam School of Music</title>
      </Helmet>
      <Navbar />
      <div className="container mx-auto px-4 py-24">
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-4xl font-serif text-gokulam-burgundy text-center">Our Productions</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {albums.map((album, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 border border-gokulam-burgundy/10"
            >
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gokulam-burgundy/90 p-3 rounded-full">
                    <Album className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-gokulam-burgundy font-semibold">{album.title}</h3>
                    <p className="text-gray-600 mt-1">{album.type}</p>
                    {album.link && (
                      <a 
                        href={album.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-3 text-gokulam-burgundy hover:text-gokulam-gold transition-colors"
                      >
                        Listen  →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Productions;
