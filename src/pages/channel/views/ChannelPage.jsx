import { MainChannelContainer, ChannelContainer } from "../styles/ChannelStyle";
import { useParams } from "react-router-dom";
import ChannelInfo from "./ChannelInfo";
import ChannelTab from "./ChannelTab";
import SubscribeBtn from "../../../components/SubscribeBtn";
import ChannelData from "../services/ChannelData";

const ChannelPage = () => {
  const { channelName } = useParams();
  const filteredData = ChannelData.find((elem) => elem.channelName === channelName);

  return (
    <MainChannelContainer>
      <ChannelContainer>
        {filteredData && (
          <ChannelInfo key={filteredData.id} data={filteredData}>
            <SubscribeBtn data={filteredData} />
          </ChannelInfo>
        )}
      </ChannelContainer>
      <ChannelTab />
    </MainChannelContainer>
  );
};

export default ChannelPage;
