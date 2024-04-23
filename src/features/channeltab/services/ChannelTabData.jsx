import Home from "../../home/views/Home";
import Video from "../../../pages/channel/views/Video";
import Shorts from "../../../pages/channel/views/Shorts";
import Live from "../../../pages/channel/views/Live";
import Podcast from "../../../pages/channel/views/Podcast";

const tabs = [
  { name: "홈", path: "home", component: <Home /> },
  { name: "동영상", path: "video", component: <Video /> },
  { name: "쇼츠", path: "shorts", component: <Shorts /> },
  { name: "라이브", path: "live", component: <Live /> },
  { name: "팟캐스트", path: "podcast", component: <Podcast /> },
];

export default tabs;
