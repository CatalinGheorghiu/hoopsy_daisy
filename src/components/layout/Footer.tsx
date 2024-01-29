import Link from "next/link";

import Logo from "@/components/Logo";
import Facebook from "@/components/icons/Facebook";
import Instagram from "@/components/icons/Instagram";
import Twitter from "@/components/icons/Twitter";
import GooglePay from "@/components/icons/GooglePay";
import Maestro from "@/components/icons/Maestro";
import MasterCard from "@/components/icons/MasterCard";
import PayPal from "@/components/icons/PayPal";
import Visa from "@/components/icons/Visa";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-custom-purple-800 px-4 pb-5 pt-14 text-white md:px-14 md:py-14">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col">
        <div className="md:gap-x-10 lg:mb-20 lg:flex lg:justify-between">
          {/* Newsletter */}
          <div>
            <div className="flex flex-col gap-y-4 pb-8">
              <Logo className="lg:h-28 lg:w-28" />
              <p className="max-w-lg leading-7 lg:my-6">
                Subscribe to our newsletter for a 10% discount on your first
                order! Be the first to access exclusive offers, product updates,
                and more. Elevate your shopping experience with our curated
                content. Join now and enjoy the perks of being part of our
                community!
              </p>
            </div>
            {/* Input */}
            <div className="max-w-md lg:max-w-xl">
              <label className="flex">
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full rounded-l-[50px] border bg-transparent px-5 py-2.5 lg:px-10 lg:py-5"
                />
                <button className="w-32 rounded-r-[50px] border bg-white px-5 py-2.5 font-semibold text-custom-purple-800 lg:w-48 lg:px-10 lg:py-5">
                  Subscribe
                </button>
              </label>
            </div>
          </div>
          {/* Follow us */}
          <div className="my-12 flex justify-between border-t border-custom-purple-700 py-12 lg:my-0 lg:items-center lg:justify-center lg:border-x lg:border-y-0 lg:px-12 lg:py-0">
            <h3 className="h5-semibold h6 h6-medium">Follow Us</h3>
            <div className="ml-12 flex gap-x-7 lg:ml-4">
              <Link
                href="https://www.instagram.com/hoopsy_daisy_/"
                target="_blank"
              >
                <Facebook />
              </Link>
              <Link
                href="https://www.instagram.com/hoopsy_daisy_/"
                target="_blank"
              >
                <Instagram />
              </Link>
              <Link
                href="https://www.instagram.com/hoopsy_daisy_/"
                target="_blank"
              >
                <Twitter />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-y-3 border-t border-t-custom-purple-700 py-4 lg:flex-row-reverse lg:justify-between">
          {/* Payment Icons */}
          <div className="flex gap-x-2.5 md:gap-x-6">
            <GooglePay />
            <Maestro />
            <MasterCard />
            <PayPal />
            <Visa />
          </div>
          {/* Copyright */}
          <p className="text-sm md:text-base">
            © {new Date().getFullYear()}, Made by{" "}
            <Link
              href="https://catalin-gheorghiu.dev"
              target="_blank"
              className="text-base text-custom-green transition-all delay-300 hover:text-green-600 md:text-base"
            >
              Catalin Gheorghiu
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
