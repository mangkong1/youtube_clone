import { useState } from "react";

export const useChangeTab = () => {
  const [activeTab, setActiveTab] = useState("홈");

  const handleTabClick = (e) => {
    setActiveTab(e);
  };

  return { activeTab, handleTabClick };
};
