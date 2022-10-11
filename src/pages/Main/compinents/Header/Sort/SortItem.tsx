import React from "react";
import { SortType } from "../../../../../redux/types";

interface SortItemProps {
  id: SortType;
  title: string;
  activeId: SortType;
  onClickSortItem: (id: SortType) => void;
}

const SortItem: React.FC<SortItemProps> = ({
  id,
  title,
  activeId,
  onClickSortItem,
}) => {
  return (
    <>
      <input
        id={`${id}`}
        type="radio"
        name={"sort-" + id}
        value={id}
        checked={id === activeId}
        onClick={() => onClickSortItem(id)}
        readOnly={true}
      />
      <label htmlFor={`${id}`}>{title}</label>
    </>
  );
};

export default SortItem;
