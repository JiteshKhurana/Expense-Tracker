"use client";
import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  if (!isLoaded) {
    // Handle loading state however you like
    return null;
  }
  console.log(user);
  return (
    <div className="flex flex-row justify-between items-center p-3 shadow-md border">
      <Image alt="app-logo" src={"/logo.svg"} height={50} width={50} />
      {isSignedIn ? (
        <UserButton />
      ) : (
        <Link href={"/sign-in"}>
          <Button>Get Started</Button>
        </Link>
      )}
    </div>
  );
};

export default Header;
