import * as S from "../styles/ShortsStyle";
import { Link } from "react-router-dom";
import ShortsBtns from "../../../features/shorts_btns/views/ShortsBtns";

const ShortsElem = (props) => {
  const { thumbnailSrc, channelImgSrc, channelName } = props.data;
  const { children } = props;

  return (
    <S.ShortsContainer>
      <S.ShortsVideoContainer>
        <S.ShortsVideoImg src={thumbnailSrc} />
        <S.ShortsVideoInfo>
          <Link to={`/${channelName}`}>
            <S.ShortsProfileImg src={channelImgSrc} />
          </Link>
          <S.ShortsProfileName>{channelName}</S.ShortsProfileName>
          {children}
        </S.ShortsVideoInfo>
      </S.ShortsVideoContainer>
      <ShortsBtns />
    </S.ShortsContainer>
  );
};

export default ShortsElem;
