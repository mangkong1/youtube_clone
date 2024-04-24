import { Routes, Route } from "react-router-dom";
import ChannelHome from "../../../features/channelhome/views/ChannelHome";
import tabs from "../../../features/channeltab/services/ChannelTabData";

const ChannelRouter = () => (
  <Routes>
    <Route path="/" element={<ChannelHome />} />
    {tabs.map((tab) => (
      <Route key={tab.path} path={tab.path} element={tab.component} />
    ))}
  </Routes>
);

export default ChannelRouter;
