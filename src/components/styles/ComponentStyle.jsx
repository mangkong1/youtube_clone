import styled from "styled-components";

export const SubscribeBtnContainer = styled.button`
  background-color: ${(props) => (props.$active ? "black" : "white")}; // active라는 속성은 html표준 속성이 아니라서 $를 사용해 tansients props를 만든다. 그러면 여기서만 사용
  color: ${(props) => (props.$active ? "white" : "black")};
  width: 56px;
  height: 36px;
  border: ${(props) => (props.$active ? "1px solid white" : "1px solid black")};
  border-radius: 18px;
  cursor: pointer;
  font-size: ${(props) => (props.$active ? "10px" : "initial")};
`;
