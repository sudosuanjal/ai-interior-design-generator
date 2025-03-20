"use client";

import React, { useState } from "react";
import { ImageSelection } from "./_components/ImageSelection";
import { RoomType } from "./_components/RoomType";
import { DesignType } from "./_components/DesignType";
import { AdditionalReq } from "./_components/AdditionalReq";
import { Button } from "@/components/ui/button";
import { getDownloadURL, uploadBytes } from "firebase/storage";
import axios from "axios";
import { useUser } from "@clerk/nextjs";

function CreateNew() {
  const { user } = useUser();

  const [formData, setFormData] = useState([]);
  const onHandleInputChange = (value, filedName) => {
    setFormData((prev) => ({
      ...prev,
      [filedName]: [value],
    }));

    console.log(formData);
  };
  const generateAiImage = async () => {
    const rawImageUrl = await saveRawImageToFirebase();
    const result = await axios.post("/api/redesing-room", {
      imageUrl: rawImageUrl,
      roomType: formData?.roomType,
      designType: formData?.designType,
      additionalReq: formData?.additionalReq,
      userEmail: user?.primaryEmailAddress.emailAddress,
    });
    console.log(result.data);
  };

  const saveRawImageToFirebase = async () => {
    const fileName = Date.now() + "_.raw.png";
    const imageRef = ref(storage, "room-redesign/" + fileName);

    await uploadBytes(imageRef, formData.image).then((resp) => {
      console.log("file uploaded");
    });

    const downloadUrl = await getDownloadURL(imageRef);
    console.log(downloadUrl);
    return downloadUrl;
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
          <Button className="w-full mt-5" onClick={generateAiImage}>
            generate
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CreateNew;
