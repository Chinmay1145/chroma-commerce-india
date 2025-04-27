
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ProductGrid from "@/components/products/ProductGrid";
import products from "@/data/products";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const ProductsPage = () => {
  const { category } = useParams<{ category: string }>();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  
  useEffect(() => {
    let result = [...products];
    
    // Filter by category
    if (category && category !== "all" && category !== "featured") {
      result = result.filter((product) => product.category === category);
    } else if (category === "featured") {
      result = result.filter((product) => product.featured);
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.brand.toLowerCase().includes(query) ||
          product.shortDescription.toLowerCase().includes(query)
      );
    }
    
    setFilteredProducts(result);
  }, [category, searchQuery]);
  
  const getCategoryName = () => {
    if (!category || category === "all") return "All Products";
    if (category === "featured") return "Featured Products";
    
    // Capitalize category name
    return category.charAt(0).toUpperCase() + category.slice(1);
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <h1 className="text-3xl font-bold">{getCategoryName()}</h1>
          
          <div className="relative w-full md:w-auto md:min-w-[300px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 p-0"
                onClick={() => setSearchQuery("")}
              >
                &times;
              </Button>
            )}
          </div>
        </div>
        
        <ProductGrid products={filteredProducts} />
      </div>
    </Layout>
  );
};

export default ProductsPage;
