import MainElem from "./MainElem";
import Data from "../../../data";
import { MainContainer } from "../styles/MainStyle";

const Main = () => {
  const sortedData = [...Data].sort((a, b) => new Date(b.uploadDate) - new Date(a.uploadDate)); // date 기준으로 오름차순 정렬

  return (
    <MainContainer>
      {sortedData.map((elem) => (
        <MainElem key={elem.id} data={elem} />
      ))}
    </MainContainer>
  );
};

export default Main;

// 부모 자식 관계를 고려하여 폴더 구조를 해보자
