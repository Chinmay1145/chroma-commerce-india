
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/utils/helpers";
import { OrderSummary } from "@/types";

interface CartSummaryProps {
  summary: OrderSummary;
  onCheckout?: () => void;
  showCheckoutButton?: boolean;
}

const CartSummary = ({ summary, onCheckout, showCheckoutButton = true }: CartSummaryProps) => {
  const { subtotal, shipping, tax, total } = summary;
  
  return (
    <div className="bg-secondary/30 p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Order Summary</h2>
      
      <div className="space-y-2 mb-6">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Subtotal</span>
          <span className="font-medium">{formatPrice(subtotal)}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-muted-foreground">Shipping</span>
          {shipping === 0 ? (
            <span className="text-green-500">Free</span>
          ) : (
            <span className="font-medium">{formatPrice(shipping)}</span>
          )}
        </div>
        
        <div className="flex justify-between">
          <span className="text-muted-foreground">GST (18%)</span>
          <span className="font-medium">{formatPrice(tax)}</span>
        </div>
        
        <div className="pt-2 mt-2 border-t border-border">
          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            Including GST
          </p>
        </div>
      </div>
      
      {subtotal > 0 && shipping > 0 && (
        <p className="text-xs text-muted-foreground mb-4">
          Add {formatPrice(10000 - subtotal)} more to qualify for free shipping
        </p>
      )}
      
      {showCheckoutButton && (
        <Button onClick={onCheckout} className="w-full">
          Proceed to Checkout
        </Button>
      )}
    </div>
  );
};

export default CartSummary;
