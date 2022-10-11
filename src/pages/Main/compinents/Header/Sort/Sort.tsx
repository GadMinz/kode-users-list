import React from "react";
import GlobalSvgSelector from "../../../../../assets/icons/GlobalSvgSelector";
import { SortType } from "../../../../../redux/types";
import s from "./Sort.module.scss";
import SortItem from "./SortItem";

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

const Sort: React.FC<SortProps> = ({ active, setActive }) => {
  const onClickSortItem = (id: SortType) => {
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
              activeId={"abc"}
              onClickSortItem={onClickSortItem}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sort;
