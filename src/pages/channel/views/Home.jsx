import { useParams } from "react-router-dom";
import ChannelData from "../services/ChannelData";
import { HomeContainer, HomeIndex } from "../styles/HomeStyle";
import HomeElem from "./HomeElem";

const Home = () => {
  const { channelName } = useParams(); // URL에서 channelName 부분을 추출
  const filteredData = ChannelData.filter((elem) => elem.channelName === channelName); // channelName과 일치하는 데이터만 필터링

  return (
    <>
      <HomeContainer>
        <HomeIndex>추천영상</HomeIndex>
        {filteredData.map((elem) => (
          <HomeElem key={elem.id} data={elem} />
        ))}
      </HomeContainer>
    </>
  );
};

export default Home;
