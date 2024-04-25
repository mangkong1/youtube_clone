import React from "react";
import Main from "./features/main/views/Main";
import ShortsPage from "./pages/shorts/views/ShortsPage";
import ChannelPage from "./pages/channel/views/ChannelPage";
import { Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/shorts" element={<ShortsPage />} />
      <Route path="/subscribe" />
      <Route path="/mypage" />
      {/* 뒤에 어떤 경로가 오더라도 ChannelPage를 렌더링하겠다는 뜻 */}
      <Route path="/:channelName/*" element={<ChannelPage />} />
    </Routes>
  );
};

export default Router;
