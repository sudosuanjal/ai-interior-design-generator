import Image from "next/image";
import React, { useState } from "react";

export function DesignType({ selectedDesignType }) {
  const Designs = [
    {
      name: "modern",
      image: "/modern.jpg",
    },
    { name: "industrial", image: "/industrial.jpg" },
    { name: "bohemian", image: "/bohemian.jpeg" },
    { name: "traditional", image: "/traditional.jpg" },
    { name: "rustic", image: "/rustic.jpeg" },
    { name: "minimalist", image: "/minimalist.jpg" },
  ];

  const [selectedOption, setSelectionOption] = useState();
  return (
    <div className="mt-5">
      <label className="text-gray-500">select interior design type</label>
      <div className="grid gird-cols-2 mt-3 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {Designs.map((design, index) => (
          <div
            key={index}
            onClick={() => {
              setSelectionOption(design.name);
              selectedDesignType(design.name);
            }}
          >
            <Image
              src={design.image}
              width={100}
              height={100}
              className={`h-[70px] rounded-md hover:scale-105 transition-all cursor-pointer ${
                design.name == selectedOption &&
                "border-2 border-purple-500 rounded-md p-1"
              }`}
            />
            <h2>{design.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
