import Image from "next/image";
import React from "react";

const RelatedBlog = () => {
  return (
    <div className="col-span-2 bg-gray-50 border-gray-200 shadow-lg">
      <div className="w-full">
        <Image
          src="/assets/image.png"
          alt="profile"
          width="300"
          height="180"
          className="w-full"
        />
      </div>
      <div className="p-3">
        <div>
          <p className="font-montserrat text-sm">
            Design Liberalized Exchange Rate Management
          </p>
        </div>
        <div className="flex gap-2 py-2">
          <Image
            src="/assets/ppImage.png"
            alt="profile picture"
            width="30"
            height="30"
          />
          <p className="font-montserrat text-sm ">by Fred Boone </p>
          <p className="font-montserrat text-sm text-gray-400">Jan 10, 2020</p>
        </div>
        <div className="space-x-2 py-2">
          <button className="font-montserrat text-sm gap-2 rounded-3xl text-gray-400 bg-[#f5f5f5] font-normal p-2 ">
            UI/UX
          </button>
          <button className="font-montserrat text-sm gap-2 rounded-3xl text-gray-400 bg-[#f5f5f5] font-normal p-2 ">
            Development
          </button>
        </div>
        <div className="font-montserrat text-sm py-2">
          A little personality goes a long way, especially on a business blog.
          So don’t be afraid to let loose.
        </div>
        <div className="flex justify-between  border-t py-3 mx-auto">
          <div className="flex">
            <Image
              src="/assets/likes.png"
              alt="profile picture"
              width="20"
              height="19"
            />
            <p className="font-montserrat text-sm">2.3k Likes</p>
          </div>
          <p className="font-montserrat text-sm text-[#7367F0]">Read More</p>
        </div>
      </div>
    </div>
  );
};

export default RelatedBlog;
