
/**
 * Format a price in Indian Rupees
 */
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);
};

/**
 * Calculate order summary for cart items
 */
export const calculateOrderSummary = (subtotal: number) => {
  // Apply GST (18%)
  const tax = subtotal * 0.18;
  
  // Free shipping for orders over ₹10,000
  const shipping = subtotal >= 10000 ? 0 : 499;
  
  const total = subtotal + tax + shipping;
  
  return {
    subtotal,
    shipping,
    tax,
    total,
  };
};

/**
 * Truncate text to specific length
 */
export const truncateText = (text: string, length: number): string => {
  if (text.length <= length) return text;
  return text.substring(0, length) + '...';
};

/**
 * Generate random string for order IDs
 */
export const generateOrderId = (): string => {
  return Math.random().toString(36).substring(2, 12).toUpperCase();
};

/**
 * Validate credit card number (Luhn algorithm)
 */
export const validateCardNumber = (cardNumber: string): boolean => {
  // Remove all non-digit characters
  const digits = cardNumber.replace(/\D/g, '');
  
  // Check if we have a valid length
  if (digits.length < 13 || digits.length > 19) return false;
  
  // Luhn algorithm
  let sum = 0;
  let shouldDouble = false;
  
  // Loop through digits in reverse
  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = parseInt(digits.charAt(i));
    
    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    
    sum += digit;
    shouldDouble = !shouldDouble;
  }
  
  return sum % 10 === 0;
};

/**
 * Filter products by category
 */
export const filterProductsByCategory = (products: any[], category: string) => {
  if (category === 'all') return products;
  return products.filter(product => product.category === category);
};

/**
 * Sort products by different criteria
 */
export const sortProducts = (products: any[], sortBy: string) => {
  const productsCopy = [...products];
  
  switch (sortBy) {
    case 'price-low-high':
      return productsCopy.sort((a, b) => a.price - b.price);
    case 'price-high-low':
      return productsCopy.sort((a, b) => b.price - a.price);
    case 'name-a-z':
      return productsCopy.sort((a, b) => a.name.localeCompare(b.name));
    case 'name-z-a':
      return productsCopy.sort((a, b) => b.name.localeCompare(a.name));
    case 'rating':
      return productsCopy.sort((a, b) => b.rating - a.rating);
    default:
      return productsCopy;
  }
};

/**
 * Search products by query
 */
export const searchProducts = (products: any[], query: string) => {
  const searchTerm = query.toLowerCase().trim();
  if (!searchTerm) return products;
  
  return products.filter(product => 
    product.name.toLowerCase().includes(searchTerm) ||
    product.brand.toLowerCase().includes(searchTerm) ||
    product.category.toLowerCase().includes(searchTerm) ||
    product.shortDescription.toLowerCase().includes(searchTerm)
  );
};
