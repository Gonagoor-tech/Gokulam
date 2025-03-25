
import { Music2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type TestimonialProps = {
  quote: string;
  author: string;
  title: string;
};

const Testimonial = ({ quote, author, title }: TestimonialProps) => {
  return (
    <Card className="bg-white border-amber-200 hover:shadow-lg transition-shadow">
      <CardContent className="pt-6">
        <div className="text-amber-500 mb-4">
          <Music2 className="inline-block w-8 h-8" />
        </div>
        <blockquote className="text-slate-700 italic mb-6">
          "{quote}"
        </blockquote>
        <div className="flex items-center">
          <div>
            <p className="font-bold text-slate-900">{author}</p>
            <p className="text-sm text-slate-500">{title}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Venugopal's flute recitals transcend mere musical performances; they are spiritual journeys that transport the listener to a realm of divine bliss.",
      author: "Dr. N. Rajam",
      title: "Renowned Violinist"
    },
    {
      quote: "The technical brilliance and emotional depth of Venugopal's flute playing makes him one of the most significant contributors to the Carnatic flute tradition.",
      author: "The Hindu",
      title: "Music Review, 2012"
    },
    {
      quote: "As a guru, Venugopal Sir embodies patience, perfection, and profound knowledge. His teaching methods have not only shaped my musical abilities but have also influenced my approach to life.",
      author: "Raghav Krishnan",
      title: "Former Student & Professional Flautist"
    }
  ];

  return (
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
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              title={testimonial.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
