import * as S from "../styles/ShortsStyle";
import { Link } from "react-router-dom";

const ShortsElem = (props) => {
  const { shortsImgSrc, channelImgSrc, channelName } = props.data;
  const { children } = props;

  return (
    <S.ShortsContainer>
      <S.ShortsVideoContainer>
        <S.ShortsVideoImg src={shortsImgSrc} />
        <S.ShortsVideoInfo>
          <Link to={`/${channelName}`}>
            <S.ShortsProfileImg src={channelImgSrc} />
          </Link>
          <S.ShortsProfileName>{channelName}</S.ShortsProfileName>
          {children}
        </S.ShortsVideoInfo>
      </S.ShortsVideoContainer>
      <S.ShortsButtonContainer>
        <S.ShortsButton>좋아요</S.ShortsButton>
        <S.ShortsLikeNum>0</S.ShortsLikeNum>
        <S.ShortsButton>싫아요</S.ShortsButton>
        <S.ShortsButton>댓글</S.ShortsButton>
        <S.ShortsButton>공유</S.ShortsButton>
        <S.ShortsButton>더보기</S.ShortsButton>
      </S.ShortsButtonContainer>
    </S.ShortsContainer>
  );
};

export default ShortsElem;
