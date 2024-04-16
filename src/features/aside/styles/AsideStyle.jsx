import styled from "styled-components";

export const AsideContainer = styled.aside`
  width: 72px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  /* css변수 선언으로 header-height값과 동일하게 맞춰줘야함 */
  top: 56px;
`;

export const AsideInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 22px;
`;

export const AsideIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-bottom: 4px;
`;

export const AsideName = styled.p`
  font-size: 12px;
  margin: 0;
  color: black;
`;
