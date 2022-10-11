import React from "react";
import { Category } from "../../../../../redux/types";
import s from "./Categories.module.scss";

interface CategoriesProps {}

type CategoryTitle =
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

const Categories: React.FC<CategoriesProps> = () => {
  return (
    <div className={s.categories}>
      <ul>
        {categories.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
