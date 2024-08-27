import RelatedBlog from "@/app/components/RelatedBlog";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 w-3/4 mx-auto mt-14 ">
      <p className="font-montserrat font-extrabold text-3xl">
        {" "}
        The Essential Guide To Competitive Programming
      </p>
      <p>Programming, Tech | 6 min Read</p>
      <div className="">
        <Image
          src="/assets/pp.svg"
          alt="profile picture"
          width="1587"
          height="792"
        />
      </div>
      <div>
        <Image
          src="/assets/ppImage.png"
          alt="profile picture"
          width="50"
          height="50"
        />
      </div>
      <div className="flex">
        <p className="">chaltu kebede | Software Engineer</p>
      </div>
      <p className="">@chaltu_kebede</p>
      <div className="w-4/5 mx-auto space-y-6">
        <p className="w-full font-montserrat text-xl text-justify  font-normal  ">
          We know that data structure and algorithm can seem hard at first
          glance. And you may not be familiar with advanced algorithms, but
          there are simple steps you can follow to see outstanding results in a
          short period of time.
        </p>
        <p
          className="w-full text-justify font-normal text-sm text-[
#737373]"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </p>
      </div>
      <p className="flex font-montserrat w-full text-2xl font-bold text-left mt-24">
        Related Blogs
      </p>
      <div className="grid grid-cols-6  justify-between gap-4">
        <RelatedBlog />
        <RelatedBlog />
        <RelatedBlog />
      </div>
    </div>
  );
};

export default page;
