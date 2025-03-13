import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export function EmptyState() {
  return (
    <div className="flex items-center justify-center mt-10 flex-col">
      {/* <Image width={200} height={200}/> */}
      <h2>create new ai interior desgin for your room</h2>
      <Link href={"/dashboard/create-new"}>
        <Button className="mt-5">redesign room</Button>
      </Link>
    </div>
  );
}
