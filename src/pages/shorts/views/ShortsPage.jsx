import ShortsElem from "./ShortsElem";
import { MainShortsContainer } from "../styles/ShortsStyle";
import Data from "../../../data";
import SubscribeBtn from "../../../components/SubscribeBtn";

const ShortsPage = () => {
  return (
    <MainShortsContainer>
      {Data.map((elem) => (
        <ShortsElem key={elem.id} data={elem}>
          <SubscribeBtn data={elem} />
        </ShortsElem>
      ))}
    </MainShortsContainer>
  );
};

export default ShortsPage;
