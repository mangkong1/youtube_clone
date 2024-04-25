import * as S from "../styles/HomeStyle";
import DotIcon from "../../../assets/images/dot.png";
import useWeeksAgo from "../../../hooks/MainUploadDateHook";
import useFormatViews from "../../../hooks/FormatView";

const ChannelHomeElem = (props) => {
  const { thumbnailSrc, title, channelName, views, uploadDate } = props.data;

  const weeksAgo = useWeeksAgo(uploadDate);
  const formattedViews = useFormatViews(views);

  return (
    <>
      <S.VideoInfoContainer>
        <S.Thumbnail src={thumbnailSrc} />
        <S.VideoInfo>
          <S.VideoTitle>{title}</S.VideoTitle>
          <S.ChannelName>{channelName}</S.ChannelName>
          <S.UploadInfo>
            <S.Views>{formattedViews}회</S.Views>
            <S.DotIcon src={DotIcon} />
            <S.UploadDate>{`${weeksAgo}주 전`}</S.UploadDate>
          </S.UploadInfo>
        </S.VideoInfo>
      </S.VideoInfoContainer>
    </>
  );
};

export default ChannelHomeElem;
