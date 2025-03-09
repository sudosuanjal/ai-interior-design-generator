"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import React, { useState } from "react";
import { EmptyState } from "./EmptyState";

export const Listing = () => {
  const { user } = useUser();
  const [userRoomList, setUserRoomList] = useState([]);

  console.log(user?.ew);

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-3xl">hello,{user?.fullname}</h2>
        <Button>redesign room</Button>
      </div>
      {userRoomList?.length == 0 ? <EmptyState /> : <div>{/*listing*/}</div>}
    </div>
  );
};
