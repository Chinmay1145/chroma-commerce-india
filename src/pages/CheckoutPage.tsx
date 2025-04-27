
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import CartSummary from "@/components/cart/CartSummary";
import { useCart } from "@/contexts/CartContext";
import { calculateOrderSummary } from "@/utils/helpers";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cartItems } = useCart();
  const [orderId, setOrderId] = useState<string | null>(null);
  
  const subtotal = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );
  
  const summary = calculateOrderSummary(subtotal);
  
  // Redirect to cart if it's empty
  useEffect(() => {
    if (cartItems.length === 0) {
      navigate("/cart");
    }
  }, [cartItems, navigate]);
  
  const handleSubmit = (orderId: string) => {
    setOrderId(orderId);
    // Order completion logic will be handled by the CheckoutForm component
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-lg p-6">
              <CheckoutForm onSubmit={handleSubmit} />
            </div>
          </div>
          
          <div>
            <CartSummary summary={summary} showCheckoutButton={false} />
            
            <div className="mt-4">
              <h3 className="font-semibold mb-2">Order Items ({cartItems.length})</h3>
              <div className="bg-secondary/30 p-4 rounded-lg space-y-2">
                {cartItems.map((item) => (
                  <div key={item.product.id} className="flex justify-between items-center">
                    <div className="flex items-center">
                      <img
                        src={item.product.imageUrl}
                        alt={item.product.name}
                        className="w-12 h-12 object-cover rounded mr-3"
                      />
                      <div>
                        <p className="font-medium">{item.product.name}</p>
                        <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CheckoutPage;
