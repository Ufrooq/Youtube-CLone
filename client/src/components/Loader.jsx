import React from "react";
import { TbLoader3 } from "react-icons/tb";

const Loader = () => {
  return (
    <div className="w-full h-[70vh] flex justify-center items-center text-red-600">
      <TbLoader3 className="animate-spin text-8xl" />
    </div>
  );
};

export default Loader;
