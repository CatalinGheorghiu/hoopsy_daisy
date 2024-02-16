import Link from "next/link";

import { Button } from "@/components/ui/Button";
import Input from "@/components/ui/Input";

const PasswordRecovery = () => {
  return (
    <section className="flex w-full flex-col px-4 py-20 md:px-14">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col">
        {/* Title */}
        <div className="flex flex-col text-center">
          <h1 className="h1-semibold pb-2 text-center md:pb-4">
            Reset you password
          </h1>
          <p className="text-sm text-custom-black-600 md:text-base">
            We will send you an email to reset your password
          </p>
        </div>

        {/*  Form */}
        <form className="flex flex-col items-center justify-center py-8 md:py-9">
          {/* Inputs */}
          <div className="flex w-full flex-col gap-y-4">
            <Input
              name="email"
              type="email"
              placeholder="Email"
              autoComplete="username"
            />
          </div>

          <Button size="2xl" className="my-7 w-[160px] md:w-[200px]">
            Reset password
          </Button>
        </form>

        {/*  Redirect Register */}
        <div className="flex w-full justify-center pt-2">
          <p className="text-custom-black-600">Already have an account?</p>
          <Link href="/login" className="pl-1 font-semibold hover:underline">
            Login
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PasswordRecovery;
