import * as S from "../styles/MainStyle";
import { Link } from "react-router-dom";
import DotIcon from "../../../assets/images/dot.png";
import useWeeksAgo from "../../../hooks/MainUploadDateHook";
import useFormatViews from "../../../hooks/FormatView";

const MainElem = (props) => {
  const { thumbnailSrc, channelImgSrc, title, channelName, views, uploadDate } = props.data;

  const weeksAgo = useWeeksAgo(uploadDate);
  const formattedViews = useFormatViews(views);

  return (
    <S.MainSection>
      <S.Thumbnail src={thumbnailSrc} />
      <S.VideoInfoContainer>
        <Link to={channelName}>
          <S.ChannelImg src={channelImgSrc} />
        </Link>
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
    </S.MainSection>
  );
};

export default MainElem;
