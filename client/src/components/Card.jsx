import React from "react";
import dp from "../assets/avatar.png";

const Card = ({ thumbnail, channelTitle, title, publishedAt }) => {
  return (
    <a href="/" className="text-white rounded-xl overflow-hidden leading-7">
      <img
        className="aspect-video object-cover rounded-xl"
        src={thumbnail}
        alt=""
      />
      <div className="px-3 py-2 mt-3 flex gap-3">
        <img className="w-[50px] h-[50px] rounded-full" src={dp} alt="" />
        <div>
          <h1 className="font-bold line-clamp-2">{title}</h1>
          <h3 className="text-sm text-zinc-500 font-semibold">
            {channelTitle}
          </h3>
          <span className="text-sm text-zinc-500">
            2.5M views <span className="font-bold text-lg"> . </span>
            {publishedAt > 365
              ? Math.floor(publishedAt / 365) + " years ago"
              : publishedAt > 30
              ? Math.floor(publishedAt / 30) + " months ago"
              : publishedAt + " days ago"}
          </span>
        </div>
      </div>
    </a>
  );
};

export default Card;
