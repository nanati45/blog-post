import React from "react";
import SupportLogo from "./../../public/assets/helping.svg";
import Image from "next/image";

const links = ["Home", "Success Stories", "About us", "Get Involved"];
const teams = ["Board Members", "Advisors/Mentors", "Excutives", "Staffs"];
const blogs = ["Recent Blogs", "New Blogs"];
const Footer = () => {
  return (
    <footer className="space-y-4 px-6 py-5 font-montserrat">
      <div className="  border-t pt-4  grid grid-cols-10 ">
        <div className="flex col-span-2 justify-center">
          <Image
            src="/assets/helping.svg"
            alt="Support Logo"
            width={150}
            height={200}
          />
        </div>
        <div className="flex flex-col col-span-2 items-start justify-center h-full px-2 font-semibold">
          <p>Get involved in improving tech education in Africa!</p>
          <button className="rounded-md bg-[#264fad] text-white font-semibold px-8 py-1 mt-2">
            Support Us
          </button>
        </div>
        <div className="col-span-2">
          <p className="font-semibold mb-3">Links</p>
          {links.map((link, index) => (
            <div key={index} className="font-light">
              {link}
            </div>
          ))}
        </div>
        <div className="col-span-2">
          <p className="font-semibold mb-3">Teams</p>
          {teams.map((team, index) => (
            <div key={index} className="font-light">
              {team}
            </div>
          ))}
        </div>
        <div className="col-span-2">
          <p className="font-semibold mb-3">Blogs</p>
          {blogs.map((blog, index) => (
            <div key={index} className="font-light">
              {blog}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between border-t pt-4">
        <p className="font-light">
          &copy 2020 Africa to Silicon Valley, Inc. All right reserved.
        </p>
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
