import Card from "@/components/Card";

export type CardType = {
  id: number;
  title?: string;
  subtitle: string;
  content: string;
};

const cards: CardType[] = [
  {
    id: 1,
    title: "Hoopsy Daisy 1",
    subtitle: "Purus faucibus ultri dolor",
    content:
      "Pair text with an image to focus on your chosen product, collection, or blog post. Add details on availability, style, or even provide a review."
  },
  {
    id: 2,
    title: "Hoopsy Daisy 2",
    subtitle: "Purus faucibus ultri dolor",
    content:
      "Pair text with an image to focus on your chosen product, collection, or blog post. Add details on availability, style, or even provide a review."
  },
  {
    id: 3,
    title: "Hoopsy Daisy 3",
    subtitle: "Purus faucibus ultri dolor",
    content:
      "Pair text with an image to focus on your chosen product, collection, or blog post. Add details on availability, style, or even provide a review."
  }
];

const MultiColumn = () => {
  return (
    <section className="mx-auto flex w-full max-w-screen-xl flex-col px-4 py-14 md:px-0 lg:pb-24 lg:pt-20">
      <h2 className="h4 h4-semibold md:h3 md:h3-semibold pb-8 text-center">
        Multi column section
      </h2>

      {cards.length > 0 && (
        <ul className="flex w-full flex-col flex-wrap gap-4 md:flex-row md:justify-center md:gap-5 lg:gap-10">
          {cards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </ul>
      )}
    </section>
  );
};

export default MultiColumn;
