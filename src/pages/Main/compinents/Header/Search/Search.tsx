import React from "react";
import GlobalSvgSelector from "../../../../../assets/icons/GlobalSvgSelector";
import s from "./Search.module.scss";

interface SearchProps {}

const Search: React.FC<SearchProps> = () => {
  const [value, setValue] = React.useState("");
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <div className={s.search}>
      <GlobalSvgSelector id="search" />
      <input
        value={value}
        onChange={onChangeInput}
        placeholder="Введи имя, тег, почту..."
      />
      <div className={s.search_sort}>
        <GlobalSvgSelector id="sort" />
      </div>
    </div>
  );
};

export default Search;
