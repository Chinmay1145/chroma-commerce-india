
import { Link } from "react-router-dom";
import { useState } from "react";
import { ShoppingCart, Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import { useCart } from "@/contexts/CartContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useCart();
  
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const categories = [
    { name: "Laptops", path: "/products/laptops" },
    { name: "Desktops", path: "/products/desktops" },
    { name: "Smartphones", path: "/products/smartphones" },
    { name: "Headphones", path: "/products/headphones" },
    { name: "Earbuds", path: "/products/earbuds" },
    { name: "Accessories", path: "/products/accessories" }
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-background border-b border-border">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
          
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gamer-purple to-gamer-cyan">
              ChromaGear
            </span>
          </Link>
        </div>
        
        <nav className="hidden lg:flex items-center space-x-6">
          <Link to="/" className="text-foreground hover:text-primary transition-colors">
            Home
          </Link>
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.path}
              className="text-foreground hover:text-primary transition-colors"
            >
              {category.name}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex relative rounded-md">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-8 pr-4 py-2 bg-secondary rounded-md w-[200px] focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          
          <ThemeToggle />
          
          <Link to="/cart" className="relative">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-white text-xs flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute w-full bg-background border-b border-border py-4 px-6 shadow-lg">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-foreground hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            {categories.map((category) => (
              <Link
                key={category.name}
                to={category.path}
                className="text-foreground hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {category.name}
              </Link>
            ))}
            <div className="relative rounded-md mt-2">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-8 pr-4 py-2 bg-secondary rounded-md w-full focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
