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
import Flowers from "@/public/images/bg_flowers.jpg";

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
      <ImageBanner imageBanner={imageBanner} />
      <FeaturedProduct />
      <Testimonials />
      <Inspiration />
      <Faq />
    </>
  );
}

const imageBanner = {
  image: Flowers,
  title: "PULVINAR ALIQUETL ELGET ADIP",
  content:
    "Lorem ipsuascm dolor sit amet, cons ectaa eturing. Ut adipass isciicang eu, vulputate vulputate congue adipi avoscing integer volutpat. vitae a",
  buttonText: "Shop Now"
};
