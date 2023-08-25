import React from "react";
import { mainLinks, secondaryLinks } from "../utils/sideBarIcons.jsx";

const SideBar = () => {
  return (
    <div className="w-3/12 h-[92.5vh] overflow-auto text-white">
      <ul>
        {mainLinks?.map((link) => (
          <li key={link.name} className="bg-customGrey py-2 pl-6">
            <a href="" className="flex gap-5 transition hover:opacity-0">
              <p>{link.icon}</p>
              <div>{link.name}</div>
            </a>
          </li>
        ))}
      </ul>
      <hr />
      <ul>
        {secondaryLinks?.map((link) => (
          <li key={link.name}>
            <a
              href=""
              className="flex gap-10 px-5 py-3 bg-customGrey transition hover:bg-red-200"
            >
              <p>{link.icon}</p>
              <div>{link.name}</div>
            </a>
          </li>
        ))}
      </ul>
      <hr />
      <ul>
        {mainLinks?.map((link) => (
          <li key={link.name}>
            <a
              href=""
              className="flex gap-10 px-5 py-3 bg-customGrey transition hover:bg-red-200"
            >
              <p>{link.icon}</p>
              <div>{link.name}</div>
            </a>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
};

export default SideBar;
