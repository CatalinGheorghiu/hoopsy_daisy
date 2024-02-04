import HeroBanner from "@/components/sections/HeroBanner";
import ImageWithCard from "@/components/sections/ImageWithCard";
import FeaturedCategory from "@/components/sections/FeaturedCategory";
import MultiColumn from "@/components/sections/MultiColumn";
import RichText from "@/components/sections/RichText";
import FeaturedIn from "@/components/sections/featured-in/FeaturedIn";
import PopularProducts from "@/components/sections/popular-products/PopularProducts";
import OrderSteps from "@/components/sections/order-steps/OrderSteps";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <ImageWithCard />
      <FeaturedCategory />
      <FeaturedIn />
      <PopularProducts />
      <OrderSteps />
      <MultiColumn />
      <RichText />
    </>
  );
}
