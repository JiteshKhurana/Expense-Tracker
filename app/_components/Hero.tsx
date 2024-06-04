import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-gray-50 flex flex-col items-center">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Manager Your Expense
            <strong className="font-extrabold text-primary sm:block">
              {" "}
              Control your Money.{" "}
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Start Creating your budget and save ton of money
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href={"/sign-in"}>
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </div>
      <Image
        alt="dashboard-image"
        src={"/dashboard.png"}
        height={1200}
        width={900}
        className="rounded-xl border-2"
      />
    </section>
  );
};

export default Hero;
