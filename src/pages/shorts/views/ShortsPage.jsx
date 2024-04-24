import ShortsElem from "./ShortsElem";
import { MainShortsContainer } from "../styles/ShortsStyle";
import Data from "../../../data";
import SubscribeBtn from "../../../components/SubscribeBtn";

const ShortsPage = () => {
  const sortedData = [...Data].sort((a, b) => new Date(b.uploadDate) - new Date(a.uploadDate));

  return (
    <MainShortsContainer>
      {sortedData.map((elem) => (
        <ShortsElem key={elem.id} data={elem}>
          <SubscribeBtn data={elem} />
        </ShortsElem>
      ))}
    </MainShortsContainer>
  );
};

export default ShortsPage;
