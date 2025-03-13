import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function RoomType({ selectedRoomType }) {
  return (
    <div>
      <label className="text-slate-400">select room type</label>
      <Select onValueChange={(value) => selectedRoomType(value)}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="room type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="living room">living room</SelectItem>
          <SelectItem value="bedroom">bedroom</SelectItem>
          <SelectItem value="kitchen">kitchen</SelectItem>
          <SelectItem value="office">office</SelectItem>
          <SelectItem value="bathroom">bathroom</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
