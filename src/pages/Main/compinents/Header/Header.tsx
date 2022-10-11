import React from "react";
import s from "./Header.module.scss";
import Search from "./Search/Search";
import Categories from "./Categories/Categories";
import { useAppSelector } from "../../../../hook";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const { category, searchValue } = useAppSelector((state) => state.filters);

  return (
    <div className={s.header}>
      <div className={s.header_title}>
        <h1>Поиск</h1>
      </div>
      <Search searchValue={searchValue} />
      <Categories category={category} />
    </div>
  );
};

export default Header;
