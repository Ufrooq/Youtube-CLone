import React, { useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import pic from "../assets/pexels-photo-4686585.jpeg";
import dp from "../assets/avatar.png";

const Feed = () => {
  const fetachFeed = async () => {
    //
    try {
      const response = await axios.get(
        `${
          import.meta.env.VITE_REACT_APP_YOUTUBE_API_URL
        }/search?maxResults=20&q="reactjs projects"&key=${
          import.meta.env.VITE_REACT_APP_YOUTUBE_API_KEY
        }&part=snippet&type=video`
      );
      console.log(response.data);
      console.log(response.data.items[0].snippet.thumbnails.default);
      console.log(response.data.items[0].snippet.channelTitle);
      console.log(response.data.items[0].snippet.title);
      console.log(response.data.items[0].snippet.publishedAt);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetachFeed();
  }, []);
  return (
    <div className="mx-auto md:max-w-full grid justify-center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 max-w-md gap-x-6 gap-y-16 p-10">
      <Card media={pic} dp={dp} />
      <Card media={pic} dp={dp} />
      <Card media={pic} dp={dp} />
      <Card media={pic} dp={dp} />
      <Card media={pic} dp={dp} />
      <Card media={pic} dp={dp} />
      <Card media={pic} dp={dp} />
      <Card media={pic} dp={dp} />
      <Card media={pic} dp={dp} />
      <Card media={pic} dp={dp} />
      <Card media={pic} dp={dp} />
      <Card media={pic} dp={dp} />
      <Card media={pic} dp={dp} />
      <Card media={pic} dp={dp} />
      <Card media={pic} dp={dp} />
      <Card media={pic} dp={dp} />
      <Card media={pic} dp={dp} />
      <Card media={pic} dp={dp} />
      <Card media={pic} dp={dp} />
      <Card media={pic} dp={dp} />
      <Card media={pic} dp={dp} />
      <Card media={pic} dp={dp} />
      <Card media={pic} dp={dp} />
      <Card media={pic} dp={dp} />
    </div>
  );
};

export default Feed;
