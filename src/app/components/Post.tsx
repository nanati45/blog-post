import Image from "next/image";
import React from "react";
import Buttons from "./Buttons";

const Post = () => {
  return (
    <div className="w-1/2">
      <div className="flex">
        <div>
          <Image
            src="/assets/profile.svg"
            alt="profile picture"
            width={50}
            height={50}
          />
        </div>
        <div>
          <p>Yididiya Kebede</p>
          <p>SOFTWARE ENGINEER</p>
        </div>
        <div>Apr 16, 2022</div>
      </div>
      <div className="flex justify-center items-center">
        <div className="">
          <p>
            The essential guide to Competitive Programming Tab System On React :
            3 ways to do it.{" "}
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea{" "}
          </p>
        </div>
        <div>
          <Image
            src="/assets/images/image.png"
            alt="profile picture"
            width="400"
            height="180"
          />
        </div>
      </div>
      <div className="flex gap-6">
        <Buttons name="UX" />
        <Buttons name="Development" />
      </div>
    </div>
  );
};

export default Post;
