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
    <div className="w-[20%] h-[92.5vh] inline-block overflow-x-auto text-white border-r border-customGrey sticky top-[82px] left-0">
      <ul>
        {mainLinks?.map((link) => (
          <li key={link.name}>
            <a
              href=""
              className="flex gap-6 py-4 pl-6 transition hover:bg-red-600"
            >
              <p>{link.icon}</p>
              <div>{link.name}</div>
            </a>
          </li>
        ))}
      </ul>
      <hr className="ms-2 border-customGrey" />
      <ul>
        {secondaryLinks?.map((link) => (
          <li key={link.name}>
            <a
              href=""
              className="flex gap-6 py-4 pl-6 transition hover:bg-red-600"
            >
              <p>{link.icon}</p>
              <div>{link.name}</div>
            </a>
          </li>
        ))}
      </ul>
      <hr className="ms-2 border-customGrey" />
      <ul>
        {subscriptionLinks?.map((link) => (
          <li key={link.name}>
            <a
              href=""
              className="flex gap-6 py-4 pl-6 transition hover:bg-red-600"
            >
              <p>{link.icon}</p>
              <div>{link.name}</div>
            </a>
          </li>
        ))}
      </ul>
      <hr className="ms-2 border-customGrey" />
      <ul>
        {helpLinks?.map((link) => (
          <li key={link.name}>
            <a
              href=""
              className="flex gap-6 py-4 pl-6 transition hover:bg-red-600"
            >
              <p>{link.icon}</p>
              <div>{link.name}</div>
            </a>
          </li>
        ))}
      </ul>
      <hr className="ms-2 border-customGrey" />
      <ul className="flex flex-wrap gap-2 p-4 text-sm">
        {textLinks[0]?.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <hr className="ms-2 border-customGrey" />
      <ul className="flex flex-wrap gap-2 p-4 text-sm">
        {textLinks[1]?.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <hr className="ms-2 border-customGrey" />
      <span className="text-sm p-4">Copyright@ umar</span>
    </div>
  );
};

export default SideBar;
