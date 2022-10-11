import React from "react";
import GlobalSvgSelector from "../../../../../assets/icons/GlobalSvgSelector";
import Sort from "../Sort/Sort";
import s from "./Search.module.scss";
import { setSearchValue } from "../../../../../redux/slices/filterSlice";
import debounce from "lodash.debounce";
import { useAppDispatch } from "../../../../../hook";

interface SearchProps {
  searchValue: string;
}

const Search: React.FC<SearchProps> = ({ searchValue }) => {
  const dispatch = useAppDispatch();
  const [value, setValue] = React.useState(searchValue);
  const [active, setActive] = React.useState(false);

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 1000),
    []
  );

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
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
