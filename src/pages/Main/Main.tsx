import React from "react";
import Header from "./compinents/Header/Header";
import Users from "./compinents/Users/Users";

interface MainProps {}

const Main: React.FC<MainProps> = () => {
  return (
    <div>
      <Header />
      <Users />
    </div>
  );
};

export default Main;
