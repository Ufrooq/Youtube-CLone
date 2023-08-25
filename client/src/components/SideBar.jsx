import React from "react";
import {
  helpLinks,
  mainLinks,
  secondaryLinks,
  subscriptionLinks,
  textLinks,
} from "../utils/sideBarIcons.jsx";

const SideBar = () => {
  return (
    <div className="w-[18%] h-[92.5vh] overflow-auto text-white bg-customGrey">
      <ul>
        {mainLinks?.map((link) => (
          <li
            key={link.name}
            className="py-4 pl-6 transition hover:bg-zinc-500"
          >
            <a href="" className="flex gap-6">
              <p>{link.icon}</p>
              <div>{link.name}</div>
            </a>
          </li>
        ))}
      </ul>
      <hr className="ms-2" />
      <ul>
        {secondaryLinks?.map((link) => (
          <li
            key={link.name}
            className="py-4 pl-6 transition hover:bg-zinc-500"
          >
            <a href="" className="flex gap-6">
              <p>{link.icon}</p>
              <div>{link.name}</div>
            </a>
          </li>
        ))}
      </ul>
      <hr className="ms-2" />
      <ul>
        {subscriptionLinks?.map((link) => (
          <li
            key={link.name}
            className="py-4 pl-6 transition hover:bg-zinc-500"
          >
            <a href="" className="flex gap-6">
              <p>{link.icon}</p>
              <div>{link.name}</div>
            </a>
          </li>
        ))}
      </ul>
      <hr className="ms-2" />
      <ul>
        {helpLinks?.map((link) => (
          <li
            key={link.name}
            className="py-4 pl-6 transition hover:bg-zinc-500"
          >
            <a href="" className="flex gap-6">
              <p>{link.icon}</p>
              <div>{link.name}</div>
            </a>
          </li>
        ))}
      </ul>
      <hr className="ms-2" />
      <ul className="flex flex-wrap gap-2 p-4 text-sm">
        {textLinks[0]?.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <hr className="ms-2" />
      <ul className="flex flex-wrap gap-2 p-4 text-sm">
        {textLinks[1]?.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <hr className="ms-2" />
      <span className="text-sm p-4">Copyright@ umar</span>
    </div>
  );
};

export default SideBar;
