import React from "react";
import s from "./Users.module.scss";
import { categoriesMap } from "../Header/Categories/Categories";
import { SortType, UserItem } from "../../../../redux/types";
import { Link } from "react-router-dom";
import moment from "moment/moment";

interface UsersItemProps {
  item: UserItem;
  sort: SortType;
  nextYear: boolean;
}

const UsersItem: React.FC<UsersItemProps> = ({ item, sort, nextYear }) => {
  const { id, avatarUrl, firstName, lastName, userTag, department, birthday } =
    item;
  const date = moment(birthday).format("DD MMM");
  return (
    <>
      {nextYear && (
        <div className={s.separation}>
          <div className={s.separation_line}></div>
          <div className={s.separation_year}>{moment().year() + 1}</div>
          <div className={s.separation_line}></div>
        </div>
      )}
      <Link to={`/${id}`} className={s.users_item}>
        <div className={s.users_item_avatar}>
          <img src={avatarUrl} alt="avatar" />
        </div>
        <div className={s.users_item_content}>
          <div className={s.users_item_title}>
            {firstName} {lastName} <p>{userTag}</p>
          </div>
          <div className={s.users_item_department}>
            {categoriesMap[department]}
          </div>
        </div>
        {sort === "b-day" && <div className={s.users_item_bday}>{date}</div>}
      </Link>
    </>
  );
};

export default UsersItem;
