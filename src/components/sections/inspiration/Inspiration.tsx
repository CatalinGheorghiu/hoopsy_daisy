import { Button } from "@/components/ui/Button";
import InspirationCardList from "@/components/sections/inspiration/InspirationCardList";

type InspirationProps = {};

const Inspiration = ({}: InspirationProps) => {
  return (
    <section className="mx-auto flex w-full max-w-screen-xl flex-col px-4 py-14 md:px-14">
      <div className="relative mx-auto flex w-full max-w-screen-xl flex-col">
        <div className="flex items-center justify-between">
          <h2 className="h4-semibold md:h3-semibold text-center">
            Our Inspiration
          </h2>
          <Button size="xl">View All</Button>
        </div>
      </div>

      <InspirationCardList />
    </section>
  );
};

export default Inspiration;
