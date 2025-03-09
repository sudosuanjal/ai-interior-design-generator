import { Button } from "@/components/ui/button";
import React from "react";

export function EmptyState() {
  return (
    <div className="flex items-center justify-center mt-10 flex-col">
      <h2>no image found</h2>
      <Button className="mt-5">redesign room</Button>
    </div>
  );
}
