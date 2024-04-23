import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export const useChangeTab = (props) => {
  const [activeTab, setActiveTab] = useState(props);
  const { channelName } = useParams();
  const navigate = useNavigate();

  const handleTabNavigation = (path) => {
    setActiveTab(path);
    navigate(`/${channelName}/${path}`);
  };

  return { activeTab, handleTabNavigation };
};
