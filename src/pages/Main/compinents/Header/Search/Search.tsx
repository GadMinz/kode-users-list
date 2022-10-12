import React from "react";
import s from "./Search.module.scss";
import debounce from "lodash.debounce";
import { useAppDispatch, useAppSelector } from "../../../../../hook";
import { setSearchValue } from "../../../../../redux/slices/filterSlice";
import Sort from "../Sort/Sort";
import GlobalSvgSelector from "../../../../../assets/icons/GlobalSvgSelector";

interface SearchProps {
  searchValue: string;
}

const Search: React.FC<SearchProps> = ({ searchValue }) => {
  const dispatch = useAppDispatch();
  const { sort } = useAppSelector((state) => state.filters);

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
      <div
        className={`${s.search_sort} ${sort === "b-day" && s.active}`}
        onClick={() => setActive(true)}
      >
        <GlobalSvgSelector id="sort" />
      </div>
      <Sort active={active} setActive={setActive} />
    </div>
  );
};

export default Search;
