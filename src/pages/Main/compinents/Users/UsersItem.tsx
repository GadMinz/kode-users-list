import React from "react";
import s from "./Users.module.scss";
import { categoriesMap } from "../Header/Categories/Categories";
import { UserItem } from "./Users";

interface UsersItemProps {
  item: UserItem;
}

const UsersItem: React.FC<UsersItemProps> = ({ item }) => {
  const { avatarUrl, firstName, lastName, userTag, department } = item;
  return (
    <div className={s.users_item}>
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
    </div>
  );
};

export default UsersItem;
