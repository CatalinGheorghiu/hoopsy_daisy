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
    <footer className="flex flex-col bg-custom-purple-800 px-4 pb-5 pt-14 text-white md:px-12 md:py-14">
      <div className="mx-auto flex w-full max-w-7xl flex-col">
        <div className="md:gap-x-10 lg:my-20 lg:flex lg:justify-between">
          {/* Newsletter */}
          <div>
            <div className="flex flex-col gap-y-4 pb-8">
              <Logo className="lg:h-28 lg:w-28" />
              <p className="max-w-lg lg:my-6 lg:text-2xl">
                Subscribe to our newsletter and receive 10% off your first order
              </p>
            </div>
            {/* Input */}
            <div className="max-w-md lg:max-w-xl">
              <label className="flex lg:text-xl">
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
          <div className="my-12 flex justify-between border-y border-custom-purple-700 py-12 lg:my-0 lg:items-center lg:justify-center lg:border-x lg:border-y-0 lg:px-12 lg:py-0">
            <h3 className="h5-semibold lg:text-3xl">Follow Us</h3>
            <div className="ml-12 flex gap-x-7">
              <Link
                href="https://www.instagram.com/hoopsy_daisy_/"
                target="_blank"
              >
                <Facebook className="lg:h-10 lg:w-10" />
              </Link>
              <Link
                href="https://www.instagram.com/hoopsy_daisy_/"
                target="_blank"
              >
                <Instagram className="lg:h-10 lg:w-10" />
              </Link>
              <Link
                href="https://www.instagram.com/hoopsy_daisy_/"
                target="_blank"
              >
                <Twitter className="lg:h-10 lg:w-10" />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-y-3 lg:flex-row-reverse lg:justify-between">
          {/* Payment Icons */}
          <div className="flex gap-x-2.5">
            <GooglePay className="lg:h-auto lg:w-16" />
            <Maestro className="lg:h-auto lg:w-16" />
            <MasterCard className="lg:h-auto lg:w-16" />
            <PayPal className="lg:h-auto lg:w-16" />
            <Visa className="lg:h-auto lg:w-16" />
          </div>
          {/* Copyright */}
          <p className="text-sm lg:text-lg">
            © {new Date().getFullYear()}, Made by{" "}
            <Link
              href="https://catalin-gheorghiu.dev"
              target="_blank"
              className="text-base text-custom-green transition-all delay-300 hover:text-green-600 lg:text-xl"
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
