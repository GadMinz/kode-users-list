import React from "react";
import s from "./Header.module.scss";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className={s.header}>
      <div className={s.header_title}>
        <h1>Поиск</h1>
      </div>
    </div>
  );
};

export default Header;
