import ShortsElem from "./ShortsElem";
import { MainShortsContainer } from "../styles/ShortsStyle";
import ShortsData from "../services/ShortsData";
import SubscribeBtn from "../../../components/SubscribeBtn";

const ShortsPage = () => {
  return (
    <MainShortsContainer>
      {ShortsData.map((elem) => (
        <ShortsElem key={elem.id} data={elem}>
          <SubscribeBtn data={elem} />
        </ShortsElem>
      ))}
    </MainShortsContainer>
  );
};

export default ShortsPage;
