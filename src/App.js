import React from "react";
import Header from "./features/header/views/Header";
import Aside from "./features/aside/views/Aside";
import Router from "./router";

const App = () => {
  return (
    <>
      <Header />
      <Aside />
      <Router />
    </>
  );
};

export default App;
