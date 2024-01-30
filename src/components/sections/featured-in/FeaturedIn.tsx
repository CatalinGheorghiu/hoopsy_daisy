import CompanyLogoSlider from "@/components/sections/featured-in/CompanyLogoSlider";

const FeaturedIn = () => {
  return (
    <section className="flex w-full flex-col bg-custom-purple-800 px-4 py-14 text-white md:px-14">
      <div className="relative mx-auto flex w-full max-w-screen-xl flex-col">
        <h2 className="h4-semibold text-center">As seen in</h2>
        <CompanyLogoSlider />
      </div>
    </section>
  );
};

export default FeaturedIn;
