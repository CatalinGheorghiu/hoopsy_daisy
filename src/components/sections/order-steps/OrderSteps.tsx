import UspCardList from "@/components/sections/order-steps/USPCardList";

const OrderSteps = () => {
  return (
    <section className="flex w-full flex-col bg-custom-purple-800 px-4 py-14 text-white md:px-14">
      <div className="relative mx-auto flex w-full max-w-screen-xl flex-col">
        <h2 className="h4-semibold md:h3-semibold text-center">
          Our order steps
        </h2>

        <UspCardList />
      </div>
    </section>
  );
};

export default OrderSteps;
