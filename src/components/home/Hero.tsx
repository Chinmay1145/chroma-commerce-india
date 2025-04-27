
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-background">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')", 
          opacity: 0.3 
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Content */}
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gamer-purple to-gamer-teal">
            Level Up Your Gaming Experience
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/90 mb-8">
            Premium gaming gear for professional gamers and enthusiasts.
            Discover the latest in gaming laptops, PCs, smartphones, headphones, and more.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gamer-purple hover:bg-gamer-purple/90 animate-pulse-glow">
              <Link to="/products/all">
                Explore Products <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            
            <Button asChild size="lg" variant="outline">
              <Link to="/products/featured">
                Featured Gear
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
