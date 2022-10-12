import React from "react";
import s from "./Sort.module.scss";
import { useAppDispatch, useAppSelector } from "../../../../../hook";
import SortItem from "./SortItem";
import { setSort } from "../../../../../redux/slices/filterSlice";
import { SortType } from "../../../../../redux/types";
import GlobalSvgSelector from "../../../../../assets/icons/GlobalSvgSelector";

interface SortProps {
  active: boolean;
  setActive: (b: boolean) => void;
}

type SortItemType = {
  id: SortType;
  title: string;
};

const sortItems: SortItemType[] = [
  { id: "abc", title: "По алфавиту" },
  { id: "b-day", title: "По дню рождения" },
];

const Sort: React.FC<SortProps> = React.memo(({ active, setActive }) => {
  const dispatch = useAppDispatch();
  const { sort } = useAppSelector((state) => state.filters);
  const onClickSortItem = (id: SortType) => {
    dispatch(setSort(id));
    setActive(false);
  };
  return (
      <div
          className={`${s.sort} ${active ? s.active : ""}`}
          onClick={() => setActive(false)}
      >
        <div className={s.sort_content} onClick={(e) => e.stopPropagation()}>
          <div className={s.sort_header}>
            <div className={s.sort_title}>Сортировка</div>
            <div className={s.sort_close} onClick={() => setActive(false)}>
              <GlobalSvgSelector id="close" />
            </div>
          </div>
          <div className={s.sort_form}>
            {sortItems.map((item) => (
                <SortItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    activeId={sort}
                    onClickSortItem={onClickSortItem}
                />
            ))}
          </div>
        </div>
      </div>
  );
});

export default Sort;
