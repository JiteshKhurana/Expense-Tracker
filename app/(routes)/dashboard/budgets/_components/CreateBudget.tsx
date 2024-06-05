"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import EmojiPicker from "emoji-picker-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Budgets } from "@/utils/schema";
import { db } from "@/utils/dbConfig";
import { useUser } from "@clerk/nextjs";
import { toast } from "sonner";

const CreateBudget = () => {
  const [emojiIcon, setEmojiIcon] = useState<string>("😄");
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false);
  const [budgetName, setBudgetName] = useState<string>("");
  const [budgetAmount, setBudgetAmount] = useState<string>("");

  const { user } = useUser();

  const onCreateBudget = async () => {
    if (!user?.primaryEmailAddress?.emailAddress) {
      // Handle the case when the email address is undefined
      // For example, show an error message
      console.error("Email address is undefined");
      return;
    }

    const result = await db
      .insert(Budgets)
      .values({
        name: budgetName,
        amount: budgetAmount,
        icon: emojiIcon,
        createdBy: user.primaryEmailAddress.emailAddress,
      })
      .returning({ insertedId: Budgets.id });

    if (result) {
      toast("Budget has been created");
    }
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <div className="bg-slate-100 p-10 rounded-md items-center flex flex-col border-2 border-dashed cursor-pointer hover:shadow-md">
            <h2 className="text-3xl">+</h2>
            <h2>Create New Budget</h2>
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Budget</DialogTitle>
            <DialogDescription>
              <div className="mt-5">
                <Button
                  size={"lg"}
                  className="text-2xl"
                  onClick={() => setOpenEmojiPicker(!openEmojiPicker)}
                  variant={"outline"}
                >
                  {emojiIcon}
                </Button>
                <div className="absolute">
                  <EmojiPicker
                    onEmojiClick={(e) => {
                      setEmojiIcon(e.emoji);
                      setOpenEmojiPicker(false);
                    }}
                    open={openEmojiPicker}
                  />
                </div>
                <div className="mt-5">
                  <h2 className="text-black font-medium my-1">Budget Name</h2>
                  <Input
                    placeholder="e.g Home Decor"
                    onChange={(e) => setBudgetName(e.target.value)}
                  />
                </div>
                <div className="mt-5">
                  <h2 className="text-black font-medium my-1">Budget Amount</h2>
                  <Input
                    placeholder="e.g 5000$"
                    onChange={(e) => setBudgetAmount(e.target.value)}
                  />
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button
                onClick={() => onCreateBudget()}
                disabled={!(budgetName && budgetAmount)}
                className="mt-5 w-full"
              >
                Create Budget
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateBudget;
