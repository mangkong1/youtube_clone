import { useSetSubscribeState } from "../hooks/SetSubscribeState";
import { SubscribeBtnStyle } from "./styles/ComponentStyle";

const SubscribeBtn = ({ data }) => {
  const { isSubscribe, handleSubscribe } = useSetSubscribeState(data);

  return (
    <SubscribeBtnStyle active={isSubscribe} onClick={handleSubscribe}>
      {isSubscribe ? "구독 취소" : "구독"}
    </SubscribeBtnStyle>
  );
};

export default SubscribeBtn;
