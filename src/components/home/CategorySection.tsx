
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  { 
    name: "Gaming Laptops",
    path: "/products/laptops",
    description: "Portable gaming powerhouses",
    icon: "https://images.unsplash.com/photo-1593642632823-8f2596a2d666?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  { 
    name: "Gaming Desktops",
    path: "/products/desktops",
    description: "Ultimate gaming performance",
    icon: "https://images.unsplash.com/photo-1587202372300-9b38a6c9e0f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  { 
    name: "Gaming Smartphones",
    path: "/products/smartphones",
    description: "Mobile gaming excellence",
    icon: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  { 
    name: "Gaming Headphones",
    path: "/products/headphones",
    description: "Immersive audio experience",
    icon: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  { 
    name: "Gaming Earbuds",
    path: "/products/earbuds",
    description: "Portable gaming audio",
    icon: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  { 
    name: "Gaming Accessories",
    path: "/products/accessories",
    description: "Enhance your setup",
    icon: "https://images.unsplash.com/photo-1563297007-0686b7003af7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  }
];

const CategorySection = () => {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(category => (
            <Link key={category.name} to={category.path}>
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg h-full game-card">
                <div className="relative h-40">
                  <img
                    src={category.icon}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-xl mb-1">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
