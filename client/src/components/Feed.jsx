import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import pic from "../assets/pexels-photo-4686585.jpeg";
import dp from "../assets/avatar.png";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";

const Feed = () => {
  const [videos, setVideos] = useState([]);
  const fetachFeed = async () => {
    try {
      const response = await axios.get(
        `${
          import.meta.env.VITE_REACT_APP_YOUTUBE_API_URL
        }/search?maxResults=20&key=${
          import.meta.env.VITE_REACT_APP_YOUTUBE_API_KEY
        }&part=snippet&type=video`
      );
      setVideos(response.data.items);
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetachFeed();
  }, []);
  return (
    <>
      {videos.length > 0 ? (
        <>
          <InfiniteScroll></InfiniteScroll>
          <div className="mx-auto md:max-w-full grid justify-center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 max-w-md gap-x-6 gap-y-16 p-10">
            {videos.map((video) => (
              <Card
                key={video.snippet.title}
                thumbnail={video.snippet.thumbnails.high.url}
                channelTitle={video.snippet.channelTitle}
                title={video.snippet.title}
                publishedAt={Math.floor(
                  (new Date() - new Date(video.snippet.publishedAt)) /
                    (1000 * 60 * 60 * 24)
                )}
              />
            ))}
          </div>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Feed;
