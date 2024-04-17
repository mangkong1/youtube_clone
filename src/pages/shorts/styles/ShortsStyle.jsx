import styled from "styled-components";

export const MainShortsContainer = styled.main`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  margin-top: 56px;
  margin-left: 70px;
`;

export const ShortsContainer = styled.section`
  display: flex;
  margin-top: 50px;
`;

export const ShortsVideoContainer = styled.article``;

export const ShortsVideoImg = styled.img`
  width: 100%;
  max-width: 450px;
  border-radius: 10px;
  object-fit: cover;
  aspect-ratio: 9/16;
`;

export const ShortsVideoInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

export const ShortsProfileImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin: 0 6px 0 12px;
  object-fit: cover;
`;

export const ShortsProfileName = styled.p`
  font-size: 14px;
  margin-right: 6px;
`;

export const ShortsButtonContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: 12px;
`;

export const ShortsButton = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-top: 16px;
  font-size: 12px;

  &.active {
    background-color: black;
    color: white;
  }
`;

export const ShortsLikeNum = styled.p`
  margin-top: 5px;
  text-align: center;
`;
