import * as S from "../styles/HeaderStyle";
import ListIcon from "../../../assets/images/list.png";

const Header = () => {
  return (
    <>
      <S.HeaderContainer>
        <S.HeaderLeft>
          <S.HeaderMenuIcon src={ListIcon} alt="list" />
          <img id="youtube_logo" src="/images/yt_logo.png" alt="main_logo" />
          <p id="country">KR</p>
        </S.HeaderLeft>

        <div id="header_center">
          <div id="search_bar">
            <div id="search_info">
              <p id="search_word">검색</p>
              <img id="keyboard_icon" src="/images/keyboard.png" />
            </div>
            <button id="search_btn">
              <img className="header_icon" src="/images/search.png" />
            </button>
          </div>
          <div id="sound_search_btn">
            <img id="sound_search_icon" src="/images/mic.png" />
          </div>
        </div>

        <div id="header_right">
          <img className="header_icon" src="/images/camcoder.png" />
          <img className="header_icon" src="/images/bell.png" />
          <img id="profile" src="/images/profile.jpeg" />
        </div>
      </S.HeaderContainer>
    </>
  );
};

export default Header;
