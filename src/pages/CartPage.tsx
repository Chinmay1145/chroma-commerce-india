
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { calculateOrderSummary } from "@/utils/helpers";
import { ShoppingCart } from "lucide-react";

const CartPage = () => {
  const navigate = useNavigate();
  const { cartItems, clearCart } = useCart();
  
  const subtotal = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );
  
  const summary = calculateOrderSummary(subtotal);
  
  const handleCheckout = () => {
    navigate("/checkout");
  };
  
  if (cartItems.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-md mx-auto">
            <ShoppingCart className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
            <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
            <p className="text-muted-foreground mb-8">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Button onClick={() => navigate("/products/all")}>
              Continue Shopping
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">
                  Items ({cartItems.reduce((total, item) => total + item.quantity, 0)})
                </h2>
                <Button variant="ghost" onClick={clearCart} size="sm">
                  Clear Cart
                </Button>
              </div>
              
              <div className="divide-y divide-border">
                {cartItems.map((item) => (
                  <CartItem key={item.product.id} item={item} />
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <CartSummary summary={summary} onCheckout={handleCheckout} />
            
            <div className="mt-4 bg-secondary/30 p-6 rounded-lg">
              <h3 className="font-semibold mb-2">Need Help?</h3>
              <p className="text-sm text-muted-foreground mb-2">
                If you have questions about your order, please contact our customer service:
              </p>
              <p className="text-sm">
                <strong>Phone:</strong> 1800-123-4567
              </p>
              <p className="text-sm">
                <strong>Email:</strong> support@chromagear.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
