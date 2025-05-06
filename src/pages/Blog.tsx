
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FileText, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

const BlogPage = () => {
  const blogs = [
    {
      title: "Gokula at Dakshina Naimishaaranya",
      url: "https://medium.com/@chiragsrao/gokula-at-dakshina-naimishaaranya-477f38acf2ea",
      excerpt: "A journey through the spiritual and musical essence of Gokulam"
    },
    {
      title: "Miracles of Music - The Gokulam Chronicle",
      url: "https://medium.com/@chiragsrao/miracles-of-music-the-gokulam-chronicle-a1a8a1524bfe",
      excerpt: "Exploring the transformative power of music at Gokulam"
    },
    {
      title: "ನವರಸ Navaratri",
      url: "https://medium.com/@chiragsrao/ನವರಸ-navaratri-7ba42c717289",
      excerpt: "Celebrating the nine nights of divine music"
    },
    {
      title: "Gokula Ganesha - A Mellifluous Naada Seve",
      url: "https://medium.com/@chiragsrao/gokula-ganesha-a-mellifluous-naada-seve-e4504eea3886",
      excerpt: "A musical offering to Lord Ganesha"
    },
    {
      title: "Gokulam Reflections - A Musical Medley",
      url: "https://medium.com/@chiragsrao/gokulam-reflections-a-musical-medley-of-thoughts-and-its-journey-through-gokulam-a82fb62db530",
      excerpt: "Thoughts and journey through Gokulam"
    },
    {
      title: "Quintessence of Naadopasana",
      url: "https://medium.com/@chiragsrao/quintessence-of-naadopasana-a-day-filled-with-harmonious-sangeetha-31st-march-2024-ff4d88421bf9",
      excerpt: "A day filled with harmonious Sangeetha"
    },
    {
      title: "Sangeetha - The Divine Symphony of Souls",
      url: "https://medium.com/@chiragsrao/sangeetha-the-divine-symphony-of-souls-75a8f327cc58",
      excerpt: "Exploring the spiritual connection through music"
    },
    {
      title: "ಶ್ರೀ ಪಟ್ಟಾಭಿರಾಮ ವೈಭವ",
      url: "https://medium.com/@chiragsrao/ಶ್ರೀ-ಪಟ್ಟಾಭಿರಾಮ-ವೈಭವ-46674e21f422",
      excerpt: "The glory of Sri Pattabhirama"
    },
    {
      title: "An Ode to Music",
      url: "https://medium.com/@chiragsrao/an-ode-to-music-b07588dbc54f",
      excerpt: "A poetic celebration of musical traditions"
    },
    {
      title: "ಶ್ರೀ ಕೃಷ್ಣಾರ್ಪಣಮಸ್ತು",
      url: "https://medium.com/@chiragsrao/ಶ್ರೀ-ಕೃಷ್ಣಾರ್ಪಣಮಸ್ತು-a2e27be4d3e8",
      excerpt: "Devotional offerings to Lord Krishna"
    }
  ];

  const handleDownloadBlogList = () => {
    // Create content with blog titles and URLs
    let content = "Gokulam School of Music - Blog List\n\n";
    blogs.forEach((blog, index) => {
      content += `${index + 1}. ${blog.title}\n   ${blog.url}\n\n`;
    });
    
    // Create a blob with the content
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    // Create a temporary anchor element to trigger the download
    const a = document.createElement('a');
    a.href = url;
    a.download = 'gokulam-blog-list.txt';
    document.body.appendChild(a);
    a.click();
    
    // Clean up
    URL.revokeObjectURL(url);
    document.body.removeChild(a);
    
    toast({
      title: "Blog list downloaded",
      description: "The list of blog links has been downloaded successfully.",
    });
  };

  return (
    <div className="min-h-screen bg-gokulam-light">
      <Helmet>
        <title>Blog - Gokulam School of Music</title>
      </Helmet>
      <Navbar />
      
      <main className="container mx-auto px-4 py-20 md:py-28">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 mb-2 bg-gokulam-gold/20 text-gokulam-burgundy rounded-full font-serif">
            Our Blog
          </span>
          <h1 className="section-title">Articles & Insights</h1>
          <p className="text-xl text-gokulam-dark/80 mb-8">
            Explore our collection of articles about music, culture, and spirituality
          </p>
          <Button 
            onClick={handleDownloadBlogList}
            className="bg-gokulam-burgundy hover:bg-gokulam-dark text-white flex items-center gap-2"
          >
            <Download size={16} />
            Download Blog List
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <a
              key={blog.url}
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gokulam-burgundy/10 flex items-center justify-center">
                  <FileText className="text-gokulam-burgundy" size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-medium mb-2 text-gokulam-burgundy">
                    {blog.title}
                  </h3>
                  <p className="text-gokulam-dark/70">{blog.excerpt}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPage;
