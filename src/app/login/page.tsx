"use client";

import Link from "next/link";

import { Button } from "@/components/ui/Button";
import Input from "@/components/ui/Input";

type LoginProps = {};

const Login = ({}: LoginProps) => {
  return (
    <section className="flex w-full flex-col px-4 py-20 md:px-14">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col">
        {/* Title */}
        <div className="flex flex-col text-center">
          <h1 className="h1-semibold pb-2 text-center md:pb-4">Log in</h1>
          <p className="text-sm text-custom-black-600 md:text-base">
            Please login into your account{" "}
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
            <Input
              name="password"
              type="password"
              placeholder="Password"
              autoComplete="current-password"
            />
          </div>
          <p className="w-full cursor-pointer py-4 text-right text-sm font-medium underline md:text-base">
            Forgot the password?
          </p>

          <Button size="2xl" className="my-3 w-[160px] md:w-[200px]">
            Log in
          </Button>
        </form>

        {/*  Redirect Register */}
        <div className="flex w-full justify-center pt-2">
          <p className="text-custom-black-600">Don&apos;t have an account?</p>
          <Link href="/register" className="pl-1 font-semibold hover:underline">
            Create
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
