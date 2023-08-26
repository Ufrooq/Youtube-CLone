import React from "react";

const Card = ({ media, dp }) => {
  return (
    <div className="text-white rounded-xl overflow-hidden leading-7">
      <img
        className="aspect-video object-cover rounded-xl"
        src={media}
        alt=""
      />
      <div className="px-3 py-2 mt-3 flex gap-3">
        <img className="w-[50px] h-[50px] rounded-full" src={dp} alt="" />
        <div>
          <h1 className="font-bold">ASMR Gentle Face Tracing on You & Me</h1>
          <h3 className="text-sm text-zinc-500">ASMR BARBIE</h3>
          <span className="text-sm text-zinc-500">
            2.5M views <span className="font-bold text-lg">.</span> 9 days ago
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
