
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import CategorySection from "@/components/home/CategorySection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedProducts />
      <CategorySection />
      <TestimonialsSection />
    </Layout>
  );
};

export default HomePage;
