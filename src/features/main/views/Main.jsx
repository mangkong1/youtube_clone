import MainElem from "./MainElem";
import MainData from "../services/MainData";

const Main = () => {
  return (
    <>
      <main id="main">
        {MainData.map((elem) => (
          <MainElem key={elem.id} data={elem} />
        ))}
      </main>
    </>
  );
};

export default Main;

// 부모 자식 관계를 고려하여 폴더 구조를 해보자
