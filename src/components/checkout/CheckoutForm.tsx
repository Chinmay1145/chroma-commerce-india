
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CheckoutFormData } from "@/types";
import { generateOrderId } from "@/utils/helpers";
import { CreditCard, Wallet2, QrCode } from "lucide-react";

interface CheckoutFormProps {
  onSubmit: (orderId: string) => void;
}

const CheckoutForm = ({ onSubmit }: CheckoutFormProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [formData, setFormData] = useState<CheckoutFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
    upiId: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof CheckoutFormData, string>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when field is edited
    if (errors[name as keyof CheckoutFormData]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors: Partial<Record<keyof CheckoutFormData, string>> = {};
    
    // Validate personal information
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[^0-9]/g, ''))) {
      newErrors.phone = "Phone number should be 10 digits";
    }
    
    // Validate shipping address
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.state.trim()) newErrors.state = "State is required";
    if (!formData.zipCode.trim()) {
      newErrors.zipCode = "PIN code is required";
    } else if (!/^\d{6}$/.test(formData.zipCode.replace(/[^0-9]/g, ''))) {
      newErrors.zipCode = "PIN code should be 6 digits";
    }
    
    // Validate payment information based on selected method
    if (paymentMethod === "card") {
      if (!formData.cardNumber.trim()) {
        newErrors.cardNumber = "Card number is required";
      } else if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ''))) {
        newErrors.cardNumber = "Card number should be 16 digits";
      }
      if (!formData.cardName.trim()) newErrors.cardName = "Name on card is required";
      if (!formData.expiryDate.trim()) {
        newErrors.expiryDate = "Expiry date is required";
      } else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiryDate)) {
        newErrors.expiryDate = "Expiry date should be in MM/YY format";
      }
      if (!formData.cvv.trim()) {
        newErrors.cvv = "CVV is required";
      } else if (!/^\d{3,4}$/.test(formData.cvv)) {
        newErrors.cvv = "CVV should be 3 or 4 digits";
      }
    } else if (paymentMethod === "upi") {
      if (!formData.upiId.trim()) {
        newErrors.upiId = "UPI ID is required";
      } else if (!/^[\w\.\-]+@[\w\-]+$/.test(formData.upiId)) {
        newErrors.upiId = "Invalid UPI ID format";
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setLoading(true);
    
    try {
      // Simulate payment processing delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Generate a random order ID
      const orderId = generateOrderId();
      
      // Call the onSubmit callback with the order ID
      onSubmit(orderId);
      
      // Navigate to success page
      navigate(`/checkout/success?orderId=${orderId}`);
    } catch (error) {
      console.error("Payment processing failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Personal Information */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={errors.firstName ? "border-destructive" : ""}
            />
            {errors.firstName && (
              <p className="text-destructive text-sm">{errors.firstName}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={errors.lastName ? "border-destructive" : ""}
            />
            {errors.lastName && (
              <p className="text-destructive text-sm">{errors.lastName}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "border-destructive" : ""}
            />
            {errors.email && (
              <p className="text-destructive text-sm">{errors.email}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={errors.phone ? "border-destructive" : ""}
            />
            {errors.phone && (
              <p className="text-destructive text-sm">{errors.phone}</p>
            )}
          </div>
        </div>
      </div>
      
      <Separator />
      
      {/* Shipping Address */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Shipping Address</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className={errors.address ? "border-destructive" : ""}
            />
            {errors.address && (
              <p className="text-destructive text-sm">{errors.address}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className={errors.city ? "border-destructive" : ""}
            />
            {errors.city && (
              <p className="text-destructive text-sm">{errors.city}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="state">State</Label>
            <Input
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className={errors.state ? "border-destructive" : ""}
            />
            {errors.state && (
              <p className="text-destructive text-sm">{errors.state}</p>
            )}
          </div>
          
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="zipCode">PIN Code</Label>
            <Input
              id="zipCode"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              className={errors.zipCode ? "border-destructive" : ""}
            />
            {errors.zipCode && (
              <p className="text-destructive text-sm">{errors.zipCode}</p>
            )}
          </div>
        </div>
      </div>
      
      <Separator />
      
      {/* Payment Information */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
        
        <RadioGroup
          value={paymentMethod}
          onValueChange={setPaymentMethod}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"
        >
          <div className={`flex items-center justify-between rounded-lg border p-4 cursor-pointer ${
            paymentMethod === "card" ? "border-primary" : "border-border"
          }`}>
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="card" id="card" />
              <Label htmlFor="card" className="flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                <span>Credit/Debit Card</span>
              </Label>
            </div>
          </div>
          
          <div className={`flex items-center justify-between rounded-lg border p-4 cursor-pointer ${
            paymentMethod === "upi" ? "border-primary" : "border-border"
          }`}>
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="upi" id="upi" />
              <Label htmlFor="upi" className="flex items-center gap-2">
                <QrCode className="h-4 w-4" />
                <span>UPI Payment</span>
              </Label>
            </div>
          </div>
          
          <div className={`flex items-center justify-between rounded-lg border p-4 cursor-pointer ${
            paymentMethod === "cod" ? "border-primary" : "border-border"
          }`}>
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="cod" id="cod" />
              <Label htmlFor="cod" className="flex items-center gap-2">
                <Wallet2 className="h-4 w-4" />
                <span>Cash on Delivery</span>
              </Label>
            </div>
          </div>
        </RadioGroup>

        {paymentMethod === "card" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="cardNumber">Card Number</Label>
              <Input
                id="cardNumber"
                name="cardNumber"
                placeholder="1234 5678 9012 3456"
                value={formData.cardNumber}
                onChange={handleChange}
                className={errors.cardNumber ? "border-destructive" : ""}
              />
              {errors.cardNumber && (
                <p className="text-destructive text-sm">{errors.cardNumber}</p>
              )}
            </div>
            
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="cardName">Name on Card</Label>
              <Input
                id="cardName"
                name="cardName"
                value={formData.cardName}
                onChange={handleChange}
                className={errors.cardName ? "border-destructive" : ""}
              />
              {errors.cardName && (
                <p className="text-destructive text-sm">{errors.cardName}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="expiryDate">Expiry Date</Label>
              <Input
                id="expiryDate"
                name="expiryDate"
                placeholder="MM/YY"
                value={formData.expiryDate}
                onChange={handleChange}
                className={errors.expiryDate ? "border-destructive" : ""}
              />
              {errors.expiryDate && (
                <p className="text-destructive text-sm">{errors.expiryDate}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="cvv">CVV</Label>
              <Input
                id="cvv"
                name="cvv"
                type="password"
                placeholder="123"
                value={formData.cvv}
                onChange={handleChange}
                className={errors.cvv ? "border-destructive" : ""}
                maxLength={4}
              />
              {errors.cvv && (
                <p className="text-destructive text-sm">{errors.cvv}</p>
              )}
            </div>
          </div>
        )}

        {paymentMethod === "upi" && (
          <div className="space-y-2">
            <Label htmlFor="upiId">UPI ID</Label>
            <Input
              id="upiId"
              name="upiId"
              placeholder="username@upi"
              value={formData.upiId}
              onChange={handleChange}
              className={errors.upiId ? "border-destructive" : ""}
            />
            {errors.upiId && (
              <p className="text-destructive text-sm">{errors.upiId}</p>
            )}
          </div>
        )}

        {paymentMethod === "cod" && (
          <div className="bg-secondary/30 p-4 rounded-lg">
            <p className="text-sm text-muted-foreground">
              Pay with cash upon delivery. Additional charges may apply.
            </p>
          </div>
        )}
      </div>
      
      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Processing Payment..." : `Place Order (${paymentMethod.toUpperCase()})`}
      </Button>
    </form>
  );
};

export default CheckoutForm;
