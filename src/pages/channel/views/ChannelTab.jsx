import { ChannelTabContainer, ChannelTabBtn } from "../styles/ChannelStyle";
import { useChangeTab } from "../hooks/ChannelHooks";
import tabs from "../services/ChannelTabData";
import ChannelRouter from "./ChannelRouter";

const ChannelTab = () => {
  const { activeTab, handleTabNavigation } = useChangeTab(tabs[0].path);

  return (
    <>
      <ChannelTabContainer>
        {tabs.map((tab) => (
          <ChannelTabBtn key={tab.path} $active={activeTab === tab.path} onClick={() => handleTabNavigation(tab.path)}>
            {tab.name}
          </ChannelTabBtn>
        ))}
      </ChannelTabContainer>
      <ChannelRouter />
    </>
  );
};

export default ChannelTab;
