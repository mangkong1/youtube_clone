import { useEffect, useRef, useState } from "react";

// 구독 버튼 클릭시 alert뜨는 기능
export const useSetSubscribeState = (props) => {
  const { subscribeState } = props;
  const [isSubscribe, setIsSubscribe] = useState(subscribeState);
  // useRef는 컴포넌트가 리렌더링될 때마다 초기화되지 않는 값을 저장할 때 사용
  // 따라서 현재 상태를 저장해 이전 상태를 추적하는 데 사용
  const currentSubscribe = useRef(isSubscribe);

  const handleSubscribe = () => {
    setIsSubscribe(!isSubscribe);
  };

  useEffect(() => {
    // 이전상태 false, 현재상태 true일 때 alert
    if (currentSubscribe.current === false && isSubscribe === true) {
      alert("구독을 축하합니다!");
    }
    currentSubscribe.current = isSubscribe;
    // 현재 상태가 true로 변했으므로 다시 currentSubscribe에 저장
  }, [isSubscribe]);

  return { isSubscribe, handleSubscribe };
};
