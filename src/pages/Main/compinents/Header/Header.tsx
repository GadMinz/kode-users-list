import React from "react";
import s from "./Header.module.scss";
import Search from "./Search/Search";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className={s.header}>
      <div className={s.header_title}>
        <h1>Поиск</h1>
      </div>
      <Search />
    </div>
  );
};

export default Header;
