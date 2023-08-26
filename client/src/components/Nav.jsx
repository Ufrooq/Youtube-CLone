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
    <>
      <div className="w-full bg-black grid grid-cols-6 items-center justify-between p-5 z-20 sticky top-0">
        <div className="flex items-center justify-between px-2">
          <div className="w-10 h-7 relative cursor-pointer active:pt-10">
            <span className="w-8 h-1 bg-red-500 absolute top-[4px] rounded-full"></span>
            <span className="w-8 h-1 bg-red-500 absolute top-[14px] rounded-full"></span>
            <span className="w-8 h-1 bg-red-500 absolute top-[24px] rounded-full"></span>
          </div>
          <h1 className="font-bold text-3xl text-red-500">YouTube</h1>
        </div>
        <div className="flex items-center gap-5 col-span-4">
          <form className="bg-customGrey flex items-center outline-1 w-full rounded-full overflow-hidden">
            <input
              className="w-full bg-transparent outline-none placeholder:text-white ms-5 text-white"
              placeholder="Search"
              type="text"
            />
            <button>
              <AiOutlineSearch style={SearchIconStyle} />
            </button>
          </form>
          <BiSolidMicrophone style={IconStyle} />
        </div>
        <div className="flex justify-end gap-5">
          <BiSolidCameraMovie style={IconStyle} />
          <BiSolidBell style={IconStyle} />
        </div>
      </div>
    </>
  );
};

export default Nav;
