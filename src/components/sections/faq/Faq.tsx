import FaqList from "@/components/sections/faq/FaqList";
import { Button } from "@/components/ui/Button";

export type FaqItemType = {
  id: number;
  question: string;
  answer: string;
  isOpen: boolean;
};

const Faq = () => {
  return (
    <section className="mx-auto flex w-full max-w-screen-xl flex-col px-4 py-14 md:px-14">
      <div className="relative mx-auto flex w-full max-w-screen-xl flex-col">
        <div className="flex items-center justify-between">
          <h2 className="h4-semibold md:h3-semibold text-center">Faq</h2>
          <Button size="xl">View All</Button>
        </div>
      </div>

      <FaqList items={faqItems} />
    </section>
  );
};

export default Faq;

const faqItems: FaqItemType[] = [
  {
    id: 1,
    question: "What is Lorem Ipsum?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    isOpen: false
  },
  {
    id: 2,
    question: "Why do we use it?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    isOpen: false
  },
  {
    id: 3,
    question: "Where does it come from?",
    answer:
      "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    isOpen: false
  },
  {
    id: 4,
    question: "Where can I get some?",
    answer: "There are many variations of passages of Lorem Ipsum available.",
    isOpen: false
  },
  {
    id: 5,
    question: "What is the history of Lorem Ipsum?",
    answer:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    isOpen: false
  },
  {
    id: 6,
    question: "What are the uses of Lorem Ipsum?",
    answer:
      "Lorem Ipsum is used for various purposes such as design mockups, website development, and printing industry.",
    isOpen: false
  },
  {
    id: 7,
    question: "Is Lorem Ipsum readable content?",
    answer:
      "Yes, Lorem Ipsum is readable content, but it does not have any meaningful information.",
    isOpen: false
  },
  {
    id: 8,
    question: "Why is Lorem Ipsum called Lorem Ipsum?",
    answer:
      "The term 'Lorem Ipsum' is derived from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero.",
    isOpen: false
  },
  {
    id: 9,
    question: "How can I contact customer support?",
    answer:
      "You can contact our customer support team via email at support@example.com or by phone at 1-800-123-4567.",
    isOpen: false
  },
  {
    id: 10,
    question: "Do you offer refunds?",
    answer:
      "Yes, we offer refunds within 30 days of purchase. Please refer to our refund policy for more details.",
    isOpen: false
  },
  {
    id: 11,
    question: "Can I change my shipping address after placing an order?",
    answer:
      "Yes, you can change your shipping address before the order is shipped. Please contact us as soon as possible to request the change.",
    isOpen: false
  },
  {
    id: 12,
    question: "Are there any discounts for bulk orders?",
    answer:
      "Yes, we offer discounts for bulk orders. Please contact our sales team for more information.",
    isOpen: false
  }
];
