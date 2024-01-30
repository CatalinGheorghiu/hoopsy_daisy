import { Button } from "@/components/ui/Button";

const RichText = () => {
  return (
    <section className="w-full bg-gradient-to-r from-custom-purple-200 to-custom-purple-400 px-4 py-14 text-center md:px-14 md:py-24">
      <div className="mx-auto w-full max-w-[525px]">
        <h2 className="h4 h4-semibold md:h3 md:h3-semibold">
          Rich text section
        </h2>
        <p className="py-4 text-sm leading-6 text-custom-black-600 md:text-base">
          Share information about your brand with your customers. Describe a
          product, make announcements, or welcome customers to your store.
        </p>

        <div className="flex justify-center gap-x-4 py-5">
          <Button size="2xl">Button label</Button>
          <Button variant="outline" size="2xl">
            Button label
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RichText;
