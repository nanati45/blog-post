import React from "react";

import Image from "next/image";
const tabs = [
  "Home",
  "Teams",
  "Success Stories",
  "About Us",
  "Blogs",
  "Get Involved",
];
const Header = () => {
  return (
    <div className="flex justify-between items-center p-6 ">
      <div className="flex-shrink-0">
        <Image
          src="/assets/logo.svg"
          alt="A2SV Logo"
          width={150}
          height={200}
        />
      </div>
      <div className="flex gap-8">
        {tabs.map((tab, index) => (
          <div key={index}>{tab}</div>
        ))}
      </div>
      <div className="flex gap-8 justify-items-center items-center">
        <div>Login</div>
        <button className=" rounded-md text-white  bg-[#264fad] font-semibold px-5 py-1  ">
          Donate
        </button>
      </div>
    </div>
  );
};

export default Header;
