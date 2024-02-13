import Collage from "@/components/sections/collage/Collage";
import Faq from "@/components/sections/faq/Faq";
import FeaturedIn from "@/components/sections/featured-in/FeaturedIn";
import FeaturedProduct from "@/components/sections/featured-product/FeaturedProduct";
import FeaturedCategory from "@/components/sections/FeaturedCategory";
import HeroBanner from "@/components/sections/HeroBanner";
import ImageBanner from "@/components/sections/image-banner/ImageBanner";
import ImageWithCard from "@/components/sections/ImageWithCard";
import Inspiration from "@/components/sections/inspiration/Inspiration";
import MultiColumn from "@/components/sections/MultiColumn";
import OrderSteps from "@/components/sections/order-steps/OrderSteps";
import PopularProducts from "@/components/sections/popular-products/PopularProducts";
import RichText from "@/components/sections/RichText";
import Testimonials from "@/components/sections/testimonials/Testimonials";

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
      <Collage />
      <ImageBanner />
      <FeaturedProduct />
      <Testimonials />
      <Inspiration />
      <Faq />
    </>
  );
}
