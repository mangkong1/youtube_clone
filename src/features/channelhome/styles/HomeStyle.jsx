import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  flex-wrap: wrap;
  border-bottom: 1px solid black;
`;

export const HomeIndex = styled.h1`
  font-size: 20px;
  font-weight: 700;
  display: inline-block;
  width: 100%;
  margin-top: 24px;
`;

export const Thumbnail = styled.img`
  width: 190px;
  height: 118px;
  border: 1px solid white;
  border-radius: 10px;
  object-fit: cover;
  aspect-ratio: 16/9;
  margin-bottom: 5px;
`;

export const VideoInfoContainer = styled.article`
  display: flex;
  flex-direction: column;
  margin: 12px 0 24px 0;
`;

export const ChannelImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 12px;
  object-fit: cover;
`;

export const VideoInfo = styled.div``;

export const VideoTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 6px;
`;

export const ChannelName = styled.p`
  font-size: 14px;
  margin: 4px 0 4px 0;
`;

export const UploadInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const Views = styled.p`
  font-size: 14px;
`;

export const DotIcon = styled.img`
  width: 14px;
  height: 14px;
`;

export const UploadDate = styled.p`
  font-size: 14px;
`;