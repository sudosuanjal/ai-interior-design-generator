"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import React, { useContext, useState } from "react";
import { EmptyState } from "./EmptyState";
import { UserDetailContext } from "../../_context/UserDetailContext";
import Link from "next/link";

export const Listing = () => {
  const { user } = useUser();
  const [userRoomList, setUserRoomList] = useState([]);
  const { userDetail, setUserDetail } = useContext(UserDetailContext);

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-3xl">hello, {userDetail?.name}</h2>
        <Link href={"/dashboard/create-new"}>
          <Button>redesign room</Button>
        </Link>
      </div>
      {userRoomList?.length == 0 ? <EmptyState /> : <div>{/*listing*/}</div>}
    </div>
  );
};
