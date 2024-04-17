import MainElem from "./MainElem";
import MainData from "../services/MainData";
import { MainContainer } from "../styles/MainStyle";

const Main = () => {
  return (
    <>
      <MainContainer>
        {MainData.map((elem) => (
          <MainElem key={elem.id} data={elem} />
        ))}
      </MainContainer>
    </>
  );
};

export default Main;

// 부모 자식 관계를 고려하여 폴더 구조를 해보자
