import React from "react";
import Feed from "../components/Feed";
import SideBar from "../components/SideBar";
import MiniSidebar from "../components/MiniSidebar";

const Home = () => {
  return (
    <div className="flex">
      <MiniSidebar />
      {/* <SideBar /> */}
      <Feed />
    </div>
  );
};

export default Home;
