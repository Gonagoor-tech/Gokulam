
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import { Card } from '@/components/ui/card';
import { Album } from 'lucide-react';

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
      type: "Album"
    },
    {
      title: "Mela Raga Malika Part 2",
      type: "Album"
    },
    {
      title: "Devamanohari",
      type: "Album"
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
        <h1 className="text-4xl font-serif text-gokulam-burgundy text-center mb-12">Our Productions</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {albums.map((album, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-gokulam-gold/10 p-3 rounded-full">
                  <Album className="w-6 h-6 text-gokulam-burgundy" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-gokulam-burgundy">{album.title}</h3>
                  <p className="text-gray-600 mt-1">{album.type}</p>
                  {album.link && (
                    <a 
                      href={album.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-gokulam-burgundy hover:text-gokulam-gold transition-colors"
                    >
                      Listen on Spotify →
                    </a>
                  )}
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
