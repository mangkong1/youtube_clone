import React from "react";
import Header from "./features/header/views/Header";
import Aside from "./features/aside/views/Aside";
import Main from "./features/main/views/Main";
import ShortsPage from "./pages/shorts/views/ShortsPage";

const App = () => {
  return (
    <>
      <Header />
      <Aside />
      <Main />
      <ShortsPage />
    </>
  );
};

export default App;
