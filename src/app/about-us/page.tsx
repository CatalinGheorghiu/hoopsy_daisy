import ImageBanner from "@/components/sections/image-banner/ImageBanner";
import PopularProducts from "@/components/sections/popular-products/PopularProducts";
import Flowers from "@/public/images/bg_flowers.jpg";

const AboutUs = () => {
  return (
    <>
      <ImageBanner imageBanner={imageBanner} />

      <article className="mx-auto flex w-full max-w-screen-md flex-col px-4 py-14 md:px-14 md:py-14 lg:pb-24 lg:pt-20">
        <h2 className="h4-semibold pb-4">Bibendum pellen tesque</h2>
        <p className="text-sm leading-6 text-custom-black-700 md:text-base">
          Lorem ipsum dolor sit amet consectetur. Fermentum vitae ut magna lacus
          neque nisl. Malesuada sit ultricies augue congue a amet. Nec ultrices
          donec euismod arcu auctor. Ante venenatis malesuada a facilisi etiam
          lectus massa. Sed duis ut nulla lectus imperdiet vitae. Rhoncus
          vestibulum enim at nibh tempus neque. At id egestas urna laoreet
          elementum tristique etiam tortor. Enim condimentum rutrum nibh
          elementum morbi id tellus aliquet nulla. Adipiscing dolor arcu leo
          quam. Integer amet molestie ultricies eu lacus praesent nec ut
          ultrices. Tincidunt aenean tincidunt lorem sed amet posuere sed magna.
        </p>
        <br />
        <p className="text-sm leading-6 text-custom-black-700 md:text-base">
          Lorem ipsum dolor sit amet consectetur. Fermentum vitae ut magna lacus
          neque nisl. Malesuada sit ultricies augue congue a amet. Nec ultrices
          donec euismod arcu auctor. Ante venenatis malesuada a facilisi etiam
          lectus massa. Sed duis ut nulla lectus imperdiet vitae. Rhoncus
          vestibulum enim at nibh tempus neque. At id egestas urna laoreet
          elementum tristique etiam tortor. Enim condimentum rutrum nibh
          elementum morbi id tellus aliquet nulla. Adipiscing dolor arcu leo
          quam. Integer amet molestie ultricies eu lacus praesent nec ut
          ultrices. Tincidunt aenean tincidunt lorem sed amet posuere sed magna.
        </p>
        <br />
        <p className="text-sm leading-6 text-custom-black-700 md:text-base">
          Lorem ipsum dolor sit amet consectetur. Fermentum vitae ut magna lacus
          neque nisl. Malesuada sit ultricies augue congue a amet. Nec ultrices
          donec euismod arcu auctor. Ante venenatis malesuada a facilisi etiam
          lectus massa. Sed duis ut nulla lectus imperdiet vitae. Rhoncus
          vestibulum enim at nibh tempus neque. At id egestas urna laoreet
          elementum tristique etiam tortor. Enim condimentum rutrum nibh
          elementum morbi id tellus aliquet nulla. Adipiscing dolor arcu leo
          quam. Integer amet molestie ultricies eu lacus praesent nec ut
          ultrices. Tincidunt aenean tincidunt lorem sed amet posuere sed magna.
        </p>
      </article>

      <PopularProducts />
    </>
  );
};

export default AboutUs;

const imageBanner = {
  image: Flowers,
  title: "PULVINAR ALIQUETL ELGET ADIP",
  content:
    "Lorem ipsuascm dolor sit amet, cons ectaa eturing. Ut adipass isciicang eu, vulputate vulputate congue adipi avoscing integer volutpat. vitae a"
};
