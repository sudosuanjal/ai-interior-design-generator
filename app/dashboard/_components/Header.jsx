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
          <div className="flex items-center">
            <div className="bg-black text-white p-2 rounded-md mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z"
                />
              </svg>
            </div>
            <span className="font-bold text-xl">ai-interior-design-app</span>
          </div>
        </div>

        {/* <Button>buy more credits</Button> */}

        <div className="flex gap-7 items-center">
          <div className="flex gap-2 p-1 items-center bg-slate-200 px-3 rounded-full">
            {/* <Image width={20} height={20} /> */}
            {/* <h3>{userDetail?.credits}</h3> */}
          </div>
          <UserButton />
        </div>
      </div>
    </>
  );
};
