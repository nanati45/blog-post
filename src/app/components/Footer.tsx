import React from "react";
import SupportLogo from "./../../public/assets/helping.svg";
import Image from "next/image";
import Buttons from "./Buttons";

const links = ["Home", "Success Stories", "About us", "Get Involved"];
const teams = ["Board Members", "Advisors/Mentors", "Excutives", "Staffs"];
const blogs = ["Recent Blogs", "New Blogs"];
const Footer = () => {
  return (
    <footer className="space-y-4 px-6 py-5 font-montserrat">
      <div className="flex justify-between border-t space-y-3">
        <div>
          <Image
            src="/assets/helping.svg"
            alt="Support Logo"
            width={150}
            height={200}
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <p>Get involved in improving tech education in Africa!</p>
          <button className=" rounded-md bg-[#264fad] text-white font-medium px-2 ">
            Support Us
          </button>
        </div>
        <div>
          <p className="font-semibold mb-3">Links</p>
          {links.map((link) => (
            <div>{link}</div>
          ))}
        </div>
        <div>
          <p className="font-semibold mb-3">Teams</p>
          {teams.map((team) => (
            <div>{team}</div>
          ))}
        </div>
        <div>
          <p className="font-semibold mb-3">Blogs</p>
          {blogs.map((blog) => (
            <div>{blog}</div>
          ))}
        </div>
      </div>
      <div className="flex justify-between border-t">
        <p>&copy 2020 Africa to Silicon Valley, Inc. All right reserved.</p>
        <div>
          <Image
            src="/assets/socials.svg"
            alt="Socials"
            width={300}
            height={50}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
