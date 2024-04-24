import { useSetSubscribeState } from "../hooks/SetSubscribeState";
import { SubscribeBtnContainer } from "./styles/SubscribeBtnStyle";

const SubscribeBtn = ({ data }) => {
  const { isSubscribe, handleSubscribe } = useSetSubscribeState(data);

  return (
    <SubscribeBtnContainer $active={isSubscribe} onClick={handleSubscribe}>
      {isSubscribe ? "구독 취소" : "구독"}
    </SubscribeBtnContainer>
  );
};

export default SubscribeBtn;
