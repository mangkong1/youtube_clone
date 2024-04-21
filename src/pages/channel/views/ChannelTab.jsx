import { ChannelTabContainer, ChannelTabBtn } from "../styles/ChannelStyle";
import { useChangeTab } from "../hooks/ChannelHooks";
import { Routes, Route, useParams, useNavigate } from "react-router-dom";
import Home from "./Home";
import Video from ".//Video";
import Shorts from "./Shorts";
import Live from "./Live";
import Podcast from "./Podcast";

const ChannelTab = () => {
  const { activeTab, handleTabClick } = useChangeTab();
  const { channelName } = useParams();
  const navigate = useNavigate();

  const tabs = [
    { name: "홈", path: "home", component: <Home /> },
    { name: "동영상", path: "video", component: <Video /> },
    { name: "쇼츠", path: "shorts", component: <Shorts /> },
    { name: "라이브", path: "live", component: <Live /> },
    { name: "팟캐스트", path: "podcast", component: <Podcast /> },
  ];

  const handleTabNavigation = (path) => {
    handleTabClick(path);
    navigate(`/${channelName}/${path}`);
  };

  return (
    <>
      <ChannelTabContainer>
        {tabs.map((tab) => (
          <ChannelTabBtn key={tab.path} $active={activeTab === tab.path} onClick={() => handleTabNavigation(tab.path)}>
            {tab.name}
          </ChannelTabBtn>
        ))}
      </ChannelTabContainer>
      <Routes>
        {tabs.map((tab) => (
          <Route key={tab.path} path={tab.path} element={tab.component} />
        ))}
      </Routes>
    </>
  );
};

export default ChannelTab;
