"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React, { useContext } from "react";
import { UserDetailContext } from "../../_context/UserDetailContext";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  console.log("useDetail" + userDetail?.name);

  return (
    <>
      <div className="p-5 shadow-sm flex justify-between items-center">
        <div className="flex gap-2 items-center">
          {/* <Image width={40} height={40} /> */}
          <h2 className="font-bold text-lg">ai-interior-design-app</h2>
        </div>

        {/* <Button>buy more credits</Button> */}

        <div className="flex gap-7 items-center">
          <div className="flex gap-2 p-1 items-center bg-slate-200 px-3 rounded-full">
            {/* <Image width={20} height={20} /> */}
            <h3>{userDetail?.credits}</h3>
          </div>
          <UserButton />
        </div>
      </div>
    </>
  );
};
