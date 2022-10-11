import React from "react";
import Header from "./compinents/Header/Header";
import Users from "./compinents/Users/Users";

interface MainProps {
    getUsers: () => void
}

const Main: React.FC<MainProps> = ({getUsers}) => {
  return (
    <div>
      <Header />
      <Users getUsers={getUsers}/>
    </div>
  );
};

export default Main;
