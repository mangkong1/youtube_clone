import { ChannelTabContainer, ChannelTabBtn } from "../styles/ChannelStyle";
import { useChangeTab } from "../hooks/ChannelHooks";

const ChannelTab = () => {
  const { activeTab, handleTabClick } = useChangeTab();

  return (
    <ChannelTabContainer>
      {["홈", "동영상", "Shorts", "라이브", "팟캐스트"].map((elem) => (
        <ChannelTabBtn key={elem} $active={activeTab === elem} onClick={() => handleTabClick(elem)}>
          {elem}
        </ChannelTabBtn>
      ))}
    </ChannelTabContainer>
  );
};

export default ChannelTab;
