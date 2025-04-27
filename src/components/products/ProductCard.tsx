
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { formatPrice } from "@/utils/helpers";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart, isInCart } = useCart();
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 group hover:shadow-lg game-card border-border">
      <div className="relative">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
        
        {discount > 0 && (
          <Badge className="absolute top-2 right-2 bg-gamer-red">
            {discount}% Off
          </Badge>
        )}
        
        {product.featured && (
          <Badge className="absolute top-2 left-2 bg-gamer-purple">
            Featured
          </Badge>
        )}
      </div>
      
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="outline" className="font-normal">
            {product.brand}
          </Badge>
          <div className="flex items-center">
            <span className="text-yellow-500 mr-1">★</span>
            <span className="text-sm">{product.rating}</span>
          </div>
        </div>
        
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="font-medium text-lg mb-1 line-clamp-1 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
          {product.shortDescription}
        </p>
        
        <div className="flex items-baseline gap-2">
          <span className="font-bold text-lg">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={handleAddToCart} 
          className="w-full gap-2"
          variant={isInCart(product.id) ? "secondary" : "default"}
        >
          <ShoppingCart className="h-4 w-4" />
          {isInCart(product.id) ? "Add Another" : "Add to Cart"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
