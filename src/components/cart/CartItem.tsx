
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartItem as CartItemType } from "@/types";
import { useCart } from "@/contexts/CartContext";
import { formatPrice } from "@/utils/helpers";

interface CartItemProps {
  item: CartItemType;
}

const CartItem = ({ item }: CartItemProps) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;
  
  const handleQuantityChange = (newQuantity: number) => {
    updateQuantity(product.id, newQuantity);
  };

  const itemTotal = product.price * quantity;

  return (
    <div className="flex flex-col sm:flex-row py-4 border-b border-border gap-4">
      <div className="w-full sm:w-24 h-24">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <div>
            <h3 className="font-medium text-lg mb-1">{product.name}</h3>
            <p className="text-sm text-muted-foreground mb-2">{product.brand}</p>
          </div>
          <div className="text-right mt-2 sm:mt-0">
            <p className="font-semibold">{formatPrice(product.price)}</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-3">
          <div className="flex items-center border rounded-md">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleQuantityChange(quantity - 1)}
              disabled={quantity <= 1}
              className="h-8 w-8 text-muted-foreground"
            >
              <Minus className="h-3 w-3" />
            </Button>
            
            <span className="w-8 text-center">{quantity}</span>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleQuantityChange(quantity + 1)}
              className="h-8 w-8 text-muted-foreground"
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
          
          <div className="mt-3 sm:mt-0 flex items-center justify-between w-full sm:w-auto sm:justify-start">
            <div className="sm:ml-6 text-right sm:text-left">
              <p className="font-semibold">{formatPrice(itemTotal)}</p>
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => removeFromCart(product.id)}
              className="text-destructive ml-4"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
