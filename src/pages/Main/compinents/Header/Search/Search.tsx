import React from "react";
import GlobalSvgSelector from "../../../../../assets/icons/GlobalSvgSelector";
import Sort from "../Sort/Sort";
import s from "./Search.module.scss";

interface SearchProps {}

const Search: React.FC<SearchProps> = () => {
  const [value, setValue] = React.useState("");
  const [active, setActive] = React.useState(false);

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
      <div className={s.search_sort} onClick={() => setActive(true)}>
        <GlobalSvgSelector id="sort" />
      </div>
      <Sort active={active} setActive={setActive} />
    </div>
  );
};

export default Search;
