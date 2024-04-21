import Main from "./features/main/views/Main";
import ShortsPage from "./pages/shorts/views/ShortsPage";
import ChannelPage from "./pages/channel/views/ChannelPage";
import { Routes, Route } from "react-router-dom";
// import Home from "./pages/channel/views/Home";
// import Video from "./pages/channel/views/Video";
// import Shorts from "./pages/channel/views/Shorts";
// import Live from "./pages/channel/views/Live";
// import Podcast from "./pages/channel/views/Podcast";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/shorts" element={<ShortsPage />} />
      <Route path="/subscribe" />
      <Route path="/mypage" />
      <Route path="/:channelName/*" element={<ChannelPage />} />
      {/* <Route path="/:channelName/home" element={<Home />} />
      <Route path="/:channelName/video" element={<Video />} />
      <Route path="/:channelName/shorts" element={<Shorts />} />
      <Route path="/:channelName/live" element={<Live />} />
      <Route path="/:channelName/podcast" element={<Podcast />} /> */}
    </Routes>
  );
};

export default Router;
