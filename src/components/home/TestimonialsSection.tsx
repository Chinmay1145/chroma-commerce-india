
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Raj Patel",
    role: "Professional Gamer",
    content: "The Razer Blade 15 I purchased from ChromaGear completely transformed my gaming experience. The performance is exceptional, and the build quality is top-notch.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Priya Singh",
    role: "Twitch Streamer",
    content: "As a full-time streamer, my equipment is crucial. ChromaGear's selection and service exceeded my expectations. My new gaming PC handles everything I throw at it!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Vikram Mehta",
    role: "eSports Coach",
    content: "I recommend ChromaGear to all my students. Their products are reliable, and their customer service is excellent. The ROG headphones have perfect audio positioning.",
    avatar: "https://randomuser.me/api/portraits/men/62.jpg"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">What Gamers Say</h2>
        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          Don't just take our word for it – hear from the professional gamers and enthusiasts who trust ChromaGear for their gaming equipment.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-secondary/30">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="italic">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
