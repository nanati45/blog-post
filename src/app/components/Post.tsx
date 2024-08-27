import Image from "next/image";
import React from "react";
import { data } from "@/type";
import InnerHTML from "dangerously-set-html-content";
const Post = ({ da }: { da: data }) => {
  //   const sanitizeHTML = (html: string) => {
  //     return html.replace(/<script[^>]*>(?:(?!<\/script>)[^])*<\/script>/gi, "");
  //   };
  console.log("object", da);
  return (
    <div className="w-full border-t p-4 space-y-2">
      <div className="flex gap-3">
        <div className="flex-shrink-0">
          <Image
            src="/assets/profile.svg"
            alt="profile picture"
            width={50}
            height={50}
          />
        </div>
        <div>
          <p className="font-semibold">{da.author?.name || "Unknown Author"}</p>
          <p className="font-medium  text-[#737373]">
            {da.author?.role || "Unknown"}
          </p>
        </div>
        <div className="text-[#737373]">{da.createdAt}</div>
      </div>
      <div className="grid  grid-cols-6 ">
        <div className="space-y-2 col-span-4">
          <p className="font-bold">{da.title} </p>

          <p className="text-[#737373] font-normal">
            <InnerHTML html={da.description} />
          </p>
        </div>
        <div className="flex-shrink-0 col-span-2">
          <Image
            src="/assets/images/image.png"
            alt="profile picture"
            width="300"
            height="180"
          />
        </div>
      </div>
      <div className="flex gap-3">
        {da.skills.map((skill, index) => (
          <button
            key={index}
            className=" rounded-3xl text-gray-400 bg-[#f5f5f5] font-normal p-2 "
          >
            {skill}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Post;
