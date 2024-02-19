import Collections from "@/components/sections/collections/Collections";
import ImageBanner from "@/components/sections/image-banner/ImageBanner";
import Flowers from "@/public/images/bg_flowers.jpg";

const CollectionsPage = () => {
  return (
    <>
      <ImageBanner imageBanner={imageBanner} />
      <Collections />
    </>
  );
};

export default CollectionsPage;

const imageBanner = {
  image: Flowers,
  title: "PULVINAR ALIQUETL ELGET ADIP",
  content:
    "Lorem ipsuascm dolor sit amet, cons ectaa eturing. Ut adipass isciicang eu, vulputate vulputate congue adipi avoscing integer volutpat. vitae a"
};
