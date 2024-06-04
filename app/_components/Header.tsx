import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="flex flex-row justify-between items-center p-3 shadow-md border">
      <Image alt="app-logo" src={"/logo.png"} height={50} width={50} />
      <Button>Get Started</Button>
    </div>
  );
};

export default Header;
