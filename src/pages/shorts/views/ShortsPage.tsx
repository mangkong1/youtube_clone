import React from "react";
import ShortsElem from "./ShortsElem.tsx";
import { MainShortsContainer } from "../styles/ShortsStyle.tsx";
import Data from "../../../data.tsx";
import SubscribeBtn from "../../../components/SubscribeBtn.tsx";
import { DataType } from "../../../data.tsx"; // Import the DataType interface

const ShortsPage = () => {
  const sortedData = [...Data].sort((a: DataType, b: DataType) => new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime()); // date 기준으로 오름차순 정렬

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
