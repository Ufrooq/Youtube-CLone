import React from "react";
import { mainLinks } from "../utils/sideBarIcons.jsx";
const MiniSidebar = () => {
  return (
    <div className="w-[15%] h-[92.5vh] inline-block overflow-x-auto text-white sticky top-[82px] left-0">
      <ul>
        {mainLinks?.map((link) => (
          <li key={link.name}>
            <a
              href=""
              className="flex flex-col items-center text-center justify-center m-2 py-1"
            >
              <p className="text-center mx-auto">{link.icon}</p>
              <p className="text-[12px] text-zinc-400 my-2 overflow-hidden">
                {link.name}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MiniSidebar;
