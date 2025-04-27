
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";

const CheckoutSuccessPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { clearCart } = useCart();
  const orderId = searchParams.get("orderId");
  
  useEffect(() => {
    // Clear the cart on successful order
    clearCart();
  }, [clearCart]);
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-xl mx-auto">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-green-100 dark:bg-green-900/30 p-3">
              <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-400" />
            </div>
          </div>
          
          <h1 className="text-3xl font-bold mb-4">Order Placed Successfully!</h1>
          
          <p className="text-xl mb-2">
            Thank you for your purchase!
          </p>
          
          <p className="text-muted-foreground mb-8">
            Your order has been placed and is being processed. You will receive an email confirmation shortly.
          </p>
          
          {orderId && (
            <div className="bg-secondary/30 rounded-lg p-6 mb-8">
              <p className="text-sm text-muted-foreground">Order ID</p>
              <p className="text-lg font-mono font-semibold">{orderId}</p>
            </div>
          )}
          
          <div className="space-y-4">
            <Button onClick={() => navigate("/products/all")} className="min-w-[200px]">
              Continue Shopping
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CheckoutSuccessPage;
