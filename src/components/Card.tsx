import { CardType } from "@/components/sections/MultiColumn";

type CardProps = {
  card: CardType;
};

const Card = ({ card: { subtitle, content, title } }: CardProps) => {
  return (
    <li className="rounded-8 w-full max-w-[25rem] border border-custom-purple-400 bg-custom-black-200/80 px-4 py-12 text-center">
      <h2 className="h3 h3-semibold pb-3">{title}</h2>
      <h3 className="h6 h6-medium py-3">{subtitle}</h3>
      <p className="text-sm leading-6">{content}</p>
    </li>
  );
};

export default Card;
