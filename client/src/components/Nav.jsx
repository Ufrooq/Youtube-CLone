import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import {
  BiSolidMicrophone,
  BiSolidCameraMovie,
  BiSolidBell,
} from "react-icons/bi";

const Nav = () => {
  const IconStyle = {
    fontSize: "1.5em",
    color: "white",
    backgroundColor: "rgba(255, 255, 255, 0.206)",
    padding: "9px",
    width: "42px",
    height: "40px",
    borderRadius: "50%",
  };
  const SearchIconStyle = {
    fontSize: "1.5em",
    color: "white",
    backgroundColor: "rgba(255, 255, 255, 0.206)",
    padding: "8px",
    width: "60px",
    height: "42px",
  };
  return (
    <div className="w-full grid grid-cols-6 items-center justify-between shadow-md p-3">
      <h1 className="font-bold text-3xl text-red-500">YouTube</h1>
      <div className="flex items-center gap-5 col-span-4">
        <div className="bg-customGrey flex items-center outline-1 w-full rounded-full overflow-hidden">
          <input
            className="w-full bg-transparent outline-none placeholder:text-white ms-5 text-white"
            placeholder="Search"
            type="text"
          />
          <button>
            <AiOutlineSearch style={SearchIconStyle} />
          </button>
        </div>
        <BiSolidMicrophone style={IconStyle} />
      </div>
      <div className="flex justify-end gap-5">
        <BiSolidCameraMovie style={IconStyle} />
        <BiSolidBell style={IconStyle} />
      </div>
    </div>
  );
};

export default Nav;
