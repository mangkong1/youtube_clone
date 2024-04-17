import React from "react";
import Header from "./features/header/views/Header";
import Aside from "./features/aside/views/Aside";
import Main from "./features/main/views/Main";
import ShortsPage from "./pages/shorts/views/ShortsPage";
import ChannelPage from "./pages/channel/views/ChannelPage";

const App = () => {
  return (
    <>
      <Header />
      <Aside />
      <Main />
      <ShortsPage />
      <ChannelPage />
    </>
  );
};

export default App;
