import React from "react";
import A2SVLogo from "../../../public/assets/logo.svg";
import Buttons from "./Buttons";
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
    <div className="flex justify-between p-6 ">
      <div>
        <Image
          src="/assets/logo.svg"
          alt="A2SV Logo"
          width={150}
          height={200}
        />
      </div>
      <div className="flex gap-8">
        {tabs.map((tab) => (
          <div>{tab}</div>
        ))}
      </div>
      <div className="flex gap-8 justify-items-center">
        <div>Login</div>
        <Buttons name="Donate" />
      </div>
    </div>
  );
};

export default Header;
