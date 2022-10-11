import React from "react";
import s from "./Header.module.scss";
import Search from "./Search/Search";
import Categories from "./Categories/Categories";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className={s.header}>
      <div className={s.header_title}>
        <h1>Поиск</h1>
      </div>
      <Search />
      <Categories />
    </div>
  );
};

export default Header;
