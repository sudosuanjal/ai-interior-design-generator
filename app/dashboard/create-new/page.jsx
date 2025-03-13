"use client";

import React, { useState } from "react";
import { ImageSelection } from "./_components/ImageSelection";
import { RoomType } from "./_components/RoomType";
import { DesignType } from "./_components/DesignType";
import { AdditionalReq } from "./_components/AdditionalReq";
import { Button } from "@/components/ui/button";

function CreateNew() {
  const [formData, setFormData] = useState([]);
  const onHandleInputChange = (value, filedName) => {
    setFormData((prev) => ({
      ...prev,
      [filedName]: [value],
    }));

    console.log(formData);
  };

  return (
    <div>
      <h2 className="font-bold text-4xl text-primary text-center">
        experience the magic of ai remodeling
      </h2>
      <p className="text-center text-gray-500">
        transform any room with a click. select a space, choose a style, and
        watch as ai instantly reimagines your environment
      </p>
      <div className="grid gird-cols-1 md:grid-cols-2 items-center justify-center mt-10 gap-10">
        {/* image selection */}
        <ImageSelection
          selectedImage={(value) => onHandleInputChange(value, "image")}
        />
        {/* form input section */}
        <div>
          {/* room type */}
          <RoomType
            selectedRoomType={(value) => onHandleInputChange(value, "roomType")}
          />
          {/* design type */}
          <DesignType
            selectedDesignType={(value) =>
              onHandleInputChange(value, "designType")
            }
          />

          {/* additional req */}
          <AdditionalReq
            addReqInput={(value) => onHandleInputChange(value, "additionalReq")}
          />
          {/* button to generate */}
          <Button className="w-full mt-5">generate</Button>
        </div>
      </div>
    </div>
  );
}

export default CreateNew;
