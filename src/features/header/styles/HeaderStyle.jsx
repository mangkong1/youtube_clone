import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 56px;
  position: fixed; /* fixed는 left와 right로 width:100% 조절 */
  top: 0;
  left: 0;
  padding: 0 22px;
  box-sizing: border-box; /* 어떤 속성을 주던 width보다는 커지지 않게 하는 설정 */
  background-color: white;
  z-index: 1;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderMenuIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
