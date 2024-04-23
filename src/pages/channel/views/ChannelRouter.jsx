import { Routes, Route } from "react-router-dom";
import Home from "../../../features/home/views/Home";
import tabs from "../../../features/channeltab/services/ChannelTabData";

const ChannelRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    {tabs.map((tab) => (
      <Route key={tab.path} path={tab.path} element={tab.component} />
    ))}
  </Routes>
);

export default ChannelRouter;
