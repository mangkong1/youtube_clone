import React from "react";
import MainElem from "./MainElem";
import Data from "../../../data.tsx";
import { MainContainer } from "../styles/MainStyle.jsx";
import type { DataType } from "../../../data.tsx"; // Import the DataType interface

const Main: React.FC = () => {
  const sortedData = [...Data].sort((a: DataType, b: DataType) => new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime()); // date 기준으로 오름차순 정렬

  return (
    <MainContainer>
      {sortedData.map((elem) => (
        <MainElem key={elem.id} data={elem} />
      ))}
    </MainContainer>
  );
};

export default Main;
