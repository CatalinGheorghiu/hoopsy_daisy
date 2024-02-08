import TestimonialCardList from "@/components/sections/testimonials/TestimonialCardList";

const Testimonials = () => {
  return (
    <section className="mx-auto flex w-full max-w-screen-xl flex-col px-4 py-14 md:px-14">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col">
        <div className="relative flex items-center justify-between">
          <h2 className="h4-semibold md:h3-semibold text-center">
            Testimonials
          </h2>
        </div>
      </div>

      <TestimonialCardList />
    </section>
  );
};

export default Testimonials;
