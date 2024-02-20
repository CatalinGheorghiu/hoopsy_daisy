import Image from "next/image";

import QuantitySelector from "@/components/product/QuantitySelector";
import { Button } from "@/components/ui/Button";
import { cartProducts } from "@/lib/product";
import { formatNumberWithComma } from "@/lib/utils";

type CartPageProps = {};

const CartPage = ({}: CartPageProps) => {
  return (
    <section className="mx-auto flex w-full max-w-screen-xl flex-col px-4 py-14 md:px-14">
      <div className="relative mx-auto flex w-full max-w-screen-xl flex-col">
        <h1 className="h1-semibold pb-8 text-center">Your cart</h1>

        <div>
          {/*  Products */}
          <div>
            {/* Mobile grid */}
            <ul className="grid grid-cols-1 gap-y-4 border-y border-custom-black-300 py-5">
              {cartProducts.map((product) => (
                <li
                  key={product.id}
                  className="flex gap-x-3 rounded-4 bg-custom-purple-200 p-4"
                >
                  {/* Image */}
                  <div className="flex h-full min-w-fit flex-col">
                    <Image
                      src={product.images[0]}
                      alt={product.title}
                      width={64}
                      height={64}
                      className="h-16 w-16 rounded-8 border border-custom-black-200 object-cover"
                    />
                  </div>
                  {/* Product details */}
                  <div className="w-full">
                    <h3 className="h6-bold">{product.title}</h3>
                    {product.size && (
                      <p className="text-sm font-black">
                        Size:{" "}
                        <span className="font-semibold text-custom-black-500">
                          {product.size}
                        </span>
                      </p>
                    )}
                    {product.color && (
                      <p className="text-sm font-black">
                        Color:{" "}
                        <span className="font-semibold text-custom-black-500">
                          {product.color}
                        </span>
                      </p>
                    )}

                    <QuantitySelector className="py-4" />

                    <div className="flex items-center justify-between">
                      <Button
                        variant="link"
                        className="px-0 font-semibold text-custom-black-500 underline"
                      >
                        Remove
                      </Button>

                      <div className="font-semibold">
                        {product.price_max > product.price && (
                          <span className="mr-2 text-custom-black-500 line-through">
                            €{formatNumberWithComma(product.price_max)}
                          </span>
                        )}
                        <span>€{formatNumberWithComma(product.price)}</span>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            {/* Desktop Table */}
          </div>

          {/*  Subtotal */}

          {/*  Order Note */}
        </div>
      </div>
    </section>
  );
};

export default CartPage;
