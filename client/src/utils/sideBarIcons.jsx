import {
  MdHomeFilled,
  MdOutlineSlowMotionVideo,
  MdSubscriptions,
  MdOutlineVideoLibrary,
  MdHistory,
  MdOutlineSmartDisplay,
  MdOutlineWatchLater,
  MdThumbUpOffAlt,
  MdSettings,
  MdOutlinedFlag,
  MdOutlineHelpOutline,
  MdOutlineFeedback,
  MdOutlineSportsVolleyball,
} from "react-icons/md";

import { TbMusic, TbDeviceGamepad2 } from "react-icons/tb";
import { FaRegCompass } from "react-icons/fa";
import { GiFilmStrip } from "react-icons/gi";

export const mainLinks = [
  {
    icon: <MdHomeFilled className="text-[25px]" />,
    name: "Home",
  },
  {
    icon: <FaRegCompass className="text-[25px]" />,
    name: "Explore",
  },
  {
    icon: <MdOutlineSlowMotionVideo className="text-[25px]" />,
    name: "Shorts",
  },
  {
    icon: <MdSubscriptions className="text-[25px]" />,
    name: "Subscriptions",
  },
];

export const secondaryLinks = [
  {
    icon: <MdOutlineVideoLibrary className="text-[25px]" />,
    name: "Library",
  },
  {
    icon: <MdHistory className="text-[25px]" />,
    name: "History",
  },
  {
    icon: <MdOutlineSmartDisplay className="text-[25px]" />,
    name: "Your Videos",
  },
  {
    icon: <MdOutlineWatchLater className="text-[25px]" />,
    name: "Watch Later",
  },
  {
    icon: <MdThumbUpOffAlt className="text-[25px]" />,
    name: "Liked Videos",
  },
];

export const subscriptionLinks = [
  {
    icon: <TbMusic className="text-[25px]" />,
    name: "Music",
  },
  {
    icon: <MdOutlineSportsVolleyball className="text-[25px]" />,
    name: "Sport",
  },
  {
    icon: <TbDeviceGamepad2 className="text-[25px]" />,
    name: "Gaming",
  },
  {
    icon: <GiFilmStrip className="text-[25px]" />,
    name: "Films",
  },
];

export const helpLinks = [
  {
    icon: <MdSettings className="text-[25px]" />,
    name: "Settings",
  },
  {
    icon: <MdOutlinedFlag className="text-[25px]" />,
    name: "Report history",
  },
  {
    icon: <MdOutlineHelpOutline className="text-[25px]" />,
    name: "Help",
  },
  {
    icon: <MdOutlineFeedback className="text-[25px]" />,
    name: "Send feedback",
  },
];

export const textLinks = [
  [
    "About",
    "Press",
    "Copyright",
    "Contact us",
    "Creator",
    "Advertise",
    "Developers",
  ],
  [
    "Terms",
    "Privacy",
    "Policy & Safety",
    "How YouTube works",
    "Test new features",
  ],
];
