"use client";
import { useState } from "react";
import { CldUploadButton } from "next-cloudinary";
import { CldImage } from "next-cloudinary";
import { Button } from "@/components/ui/button";

type UploadResult = {
  info: {
    public_id: string;
  };
  event: "success";
};

const Gallery = () => {
  const [imageId, setImageId] = useState("nkmxc6ncujuxilte1hrt");
  return (
    <section>
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Gallery</h1>
        <Button asChild>
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
              />
            </svg>

            <CldUploadButton
              uploadPreset="wtywz9cr"
              onUpload={(result: UploadResult) => {
                setImageId(result.info.public_id);
              }}
            />
          </div>
        </Button>
      </div>
    </section>
  );
};

export default Gallery;
