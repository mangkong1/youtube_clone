import Home from "../views/Home";
import Video from "../views/Video";
import Shorts from "../views/Shorts";
import Live from "../views/Live";
import Podcast from "../views/Podcast";

const tabs = [
  { name: "홈", path: "home", component: <Home /> },
  { name: "동영상", path: "video", component: <Video /> },
  { name: "쇼츠", path: "shorts", component: <Shorts /> },
  { name: "라이브", path: "live", component: <Live /> },
  { name: "팟캐스트", path: "podcast", component: <Podcast /> },
];

export default tabs;
