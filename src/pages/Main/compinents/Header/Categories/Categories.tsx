import React from "react";
import s from "./Categories.module.scss";
import { useAppDispatch } from "../../../../../hook";
import { setCategory } from "../../../../../redux/slices/filterSlice";
import { Category } from "../../../../../redux/types";

interface CategoriesProps {
  category: Category;
}

export type CategoryTitle =
    | "Все"
    | "Дизайн"
    | "Аналитика"
    | "Менеджмент"
    | "iOS"
    | "Android"
    | "Frontend"
    | "Backend"
    | "Техподдержка"
    | "QA"
    | "Бэк-офис"
    | "PR"
    | "HR";

type CategoriesMapType = {
  [key in Category]: CategoryTitle;
};

export const categoriesMap: CategoriesMapType = {
  all: "Все",
  design: "Дизайн",
  analytics: "Аналитика",
  management: "Менеджмент",
  ios: "iOS",
  android: "Android",
  frontend: "Frontend",
  backend: "Backend",
  support: "Техподдержка",
  qa: "QA",
  back_office: "Бэк-офис",
  pr: "PR",
  hr: "HR",
};

const categoriesShort = Object.keys(categoriesMap) as Category[];
const categories: CategoryTitle[] = categoriesShort.map(
    (key) => categoriesMap[key]
);

const Categories: React.FC<CategoriesProps> = ({ category }) => {
  const dispatch = useAppDispatch();
  const onClickCategory = (title: CategoryTitle) => {
    dispatch(
        setCategory(
            categoriesShort.find((key) => categoriesMap[key] === title) || "all"
        )
    );
  };
  return (
      <div className={s.categories}>
        <ul>
          {categories.map((item, i) => (
              <li
                  onClick={() => onClickCategory(item)}
                  key={i}
                  className={categoriesMap[category] === item ? s.active : ""}
              >
                {item}
              </li>
          ))}
        </ul>
      </div>
  );
};

export default Categories;
