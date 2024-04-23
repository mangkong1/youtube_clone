import * as S from "../styles/HomeStyle";
import DotIcon from "../../../assets/images/dot.png";

const HomeElem = (props) => {
  const { thumbnailSrc, title, channelName, views, uploadDate } = props.data;

  return (
    <>
      <S.VideoInfoContainer>
        <S.Thumbnail src={thumbnailSrc} />
        <S.VideoInfo>
          <S.VideoTitle>{title}</S.VideoTitle>
          <S.ChannelName>{channelName}</S.ChannelName>
          <S.UploadInfo>
            <S.Views>{views}</S.Views>
            <S.DotIcon src={DotIcon} />
            <S.UploadDate>{uploadDate}</S.UploadDate>
          </S.UploadInfo>
        </S.VideoInfo>
      </S.VideoInfoContainer>
    </>
  );
};

export default HomeElem;
