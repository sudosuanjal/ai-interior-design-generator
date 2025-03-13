import { Textarea } from "@/components/ui/textarea";
import React from "react";

export function AdditionalReq({ addReqInput }) {
  return (
    <div className="mt-5">
      <label className="text-gray-400">
        enter additional requirments (optional)
      </label>
      <Textarea
        className="mt-3"
        onChange={(e) => addReqInput(e.target.value)}
      />
    </div>
  );
}
