"use client";
import { useUser } from "@clerk/nextjs";
import DashboardHeader from "./_components/DashboardHeader";
import Sidenav from "./_components/Sidenav";
import { db } from "@/utils/dbConfig";
import { Budgets } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

function DashBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    user && checkUserBudgets();
  }, [user]);
  const checkUserBudgets = async () => {
    if (user?.primaryEmailAddress?.emailAddress) {
      const result = await db
        .select()
        .from(Budgets)
        .where(eq(Budgets.createdBy, user.primaryEmailAddress.emailAddress));
      if (result?.length === 0) router.replace("/dashboard/budgets");
    }
  };

  return (
    <div>
      <div className="fixed md:w-64 hidden md:block shadow-sm border">
        <Sidenav />
      </div>
      <div className="md:ml-64">
        <DashboardHeader />
        {children}
      </div>
    </div>
  );
}

export default DashBoardLayout;
