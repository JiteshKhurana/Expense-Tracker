"use client";
import { UserButton } from "@clerk/nextjs";
import { LayoutGrid, PiggyBank, ReceiptText, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";

const Sidenav = () => {
  const path = usePathname();
  const menuList = [
    {
      id: 1,
      name: "Dashboard",
      icon: LayoutGrid,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Budgets",
      icon: PiggyBank,
      path: "/dashboard/budgets",
    },
    {
      id: 3,
      name: "Expenses",
      icon: ReceiptText,
      path: "/dashboard/expenses",
    },
    {
      id: 4,
      name: "Upgrade",
      icon: ShieldCheck,
      path: "/dashboard/upgrade",
    },
  ];
  return (
    <div className="h-screen">
      <Image
        alt="app-logo"
        src={"/logo.svg"}
        height={50}
        width={50}
        className="mx-auto my-5"
      />
      <div>
        {menuList.map((menu, index) => (
          <Link key={index} href={menu.path}>
            <h2
              className={`flex gap-2 items-center text-gray-500 font-medium p-5 cursor-pointer mx-2 mb-2 rounded-md hover:text-primary hover:bg-blue-100 ${
                path === menu.path && "text-primary bg-blue-100"
              }`}
            >
              <menu.icon /> {menu.name}
            </h2>
          </Link>
        ))}
      </div>
      <div>
        <div className="fixed bottom-5 p-5 flex gap-2 items-center justify-center">
          <UserButton /> Profile
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
