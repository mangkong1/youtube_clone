import React from "react";
import { MainChannelContainer, ChannelContainer } from "../styles/ChannelStyle.tsx";
import { useParams } from "react-router-dom";
import ChannelInfo from "../../../features/channel_info/views/ChannelInfo.tsx";
import ChannelTab from "../../../features/channel_tab/views/ChannelTab.tsx";
import SubscribeBtn from "../../../components/SubscribeBtn.tsx";
import Data from "../../../data.tsx";

const ChannelPage = () => {
  const { channelName } = useParams();
  const filteredData = Data.find((elem) => elem.channelName === channelName);

  return (
    <MainChannelContainer>
      <ChannelContainer>
        {filteredData && (
          <ChannelInfo key={filteredData.id} data={filteredData}>
            <SubscribeBtn data={filteredData} />
          </ChannelInfo>
        )}
        <ChannelTab />
      </ChannelContainer>
    </MainChannelContainer>
  );
};

export default ChannelPage;
