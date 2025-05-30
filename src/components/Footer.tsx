
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Checkbox } from '@/components/ui/checkbox';

const Footer = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    try {
      // Create a webhook URL that will email the form data
      const webhookUrl = `https://formsubmit.co/jawoorsuraj@gmail.com`;
      
      await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
          _subject: "New Contact Form Submission - Gokulam School of Music",
        }),
      });
      
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="contact" className="bg-gokulam-dark text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-gokulam-gold flex items-center justify-center mr-3">
                <span className="text-white font-serif font-bold text-lg">G</span>
              </div>
              <h3 className="font-serif text-xl font-bold">Gokulam School of Music</h3>
            </div>
            
            <p className="text-white/80 mb-6">
              A premier institution dedicated to preserving and advancing the art of 
              Carnatic flute, established in 1983 by Vidwan H.S. Venugopal.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/gokulamschoolofmusic/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-gokulam-dark transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://www.facebook.com/GokulamSchoolOfMusic" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-gokulam-dark transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://www.youtube.com/@gokulamsangeethashaale" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-gokulam-dark transition-colors duration-300"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-white/80 hover:text-white transition-colors duration-300">Home</a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-colors duration-300">About Us</a>
              </li>
              <li>
                <a href="#faculty" className="text-white/80 hover:text-white transition-colors duration-300">Faculty</a>
              </li>
              <li>
                <a href="#kalaarnava" className="text-white/80 hover:text-white transition-colors duration-300">Kalaarnava Festival</a>
              </li>
              <li>
                <a href="#media" className="text-white/80 hover:text-white transition-colors duration-300">Media</a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-serif text-xl font-bold mb-6">Connect With Us</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <Input
                  {...register('name', { required: "Name is required" })}
                  placeholder="Your Name"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
                {errors.name && (
                  <p className="text-xs text-red-300 mt-1">
                    {errors.name.message?.toString()}
                  </p>
                )}
              </div>
              
              <div>
                <Input
                  {...register('email', { 
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Please enter a valid email"
                    } 
                  })}
                  placeholder="Email Address"
                  type="email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
                {errors.email && (
                  <p className="text-xs text-red-300 mt-1">
                    {errors.email.message?.toString()}
                  </p>
                )}
              </div>
              
              <div>
                <Input
                  {...register('phone', { 
                    required: "Phone number is required" 
                  })}
                  placeholder="Phone Number"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
                {errors.phone && (
                  <p className="text-xs text-red-300 mt-1">
                    {errors.phone.message?.toString()}
                  </p>
                )}
              </div>
              
              <div>
                <Textarea
                  {...register('message')}
                  placeholder="Your Message (Optional)"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 min-h-[100px]"
                />
              </div>
              
              <div className="flex items-start space-x-2">
                <Checkbox 
                  id="consent" 
                  {...register('consent', { required: "Please consent to being contacted" })}
                  className="mt-1 data-[state=checked]:bg-gokulam-gold border-white/30"
                />
                <label 
                  htmlFor="consent" 
                  className="text-sm text-white/80 leading-tight cursor-pointer"
                >
                  I consent to Gokulam School of Music contacting me regarding my inquiry
                </label>
              </div>
              {errors.consent && (
                <p className="text-xs text-red-300">
                  {errors.consent.message?.toString()}
                </p>
              )}
              
              <Button 
                type="submit" 
                className="bg-gokulam-gold hover:bg-gokulam-gold/80 text-white w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-start">
                <Mail className="mr-3 mt-1 text-gokulam-gold" size={18} />
                <a 
                  href="mailto:gokulamsangeetashaale@gmail.com" 
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  gokulamsangeetashaale@gmail.com
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="mr-3 mt-1 text-gokulam-gold" size={18} />
                <span className="text-white/80">Bangalore, Karnataka, India</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Gokulam School of Music. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
