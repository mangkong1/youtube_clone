import { MainChannelContainer, ChannelContainer } from "../styles/ChannelStyle";
import { useParams } from "react-router-dom";
import ChannelInfo from "../../../features/channel_info/views/ChannelInfo";
import ChannelTab from "../../../features/channel_tab/views/ChannelTab";
import SubscribeBtn from "../../../components/SubscribeBtn";
import Data from "../../../data";

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
