import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import tabs from "../services/ChannelTabData";

const ChannelRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    {tabs.map((tab) => (
      <Route key={tab.path} path={tab.path} element={tab.component} />
    ))}
  </Routes>
);

export default ChannelRouter;
