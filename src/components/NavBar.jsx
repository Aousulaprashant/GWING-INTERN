import React from "react";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className="bg-white ">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        <div class="flex items-center">
          <Image src="/images/gwing.svg" width={100} height={100}></Image>
        </div>
        <nav className="hidden sm:block  space-x-6">
          <ul className="flex space-x-9">
            <li className="font-poppins cursor-pointer text-[rgba(77,85,125,1)]">
              Home
            </li>
            <li className="font-poppins cursor-pointer text-[rgba(77,85,125,1)]">
              About
            </li>
            <li className="font-poppins cursor-pointer text-[rgba(77,85,125,1)]">
              internship
            </li>
            <li className="font-poppins cursor-pointer text-[#8256ff]">
              Contact
            </li>
          </ul>
        </nav>
      </div>
      <hr />
    </div>
  );
};

export default NavBar;
