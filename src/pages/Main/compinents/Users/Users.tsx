import React from "react";
import { useAppSelector } from "../../../../hook";
import { UserItem } from "../../../../redux/types";
import s from "./Users.module.scss";
import UsersItem from "./UsersItem";

interface UsersProps {
  getUsers: () => void;
}

const Users: React.FC<UsersProps> = ({ getUsers }) => {
  const { items, status } = useAppSelector((state) => state.users);
  let { searchValue } = useAppSelector((state) => state.filters);
  searchValue = searchValue.toLowerCase();

  let itemsFiltered: UserItem[] = items.filter(
    (item: UserItem) =>
      item.firstName.toLowerCase().includes(searchValue) ||
      item.lastName.toLowerCase().includes(searchValue) ||
      item.userTag.toLowerCase().includes(searchValue)
  );

  return (
    <div className={s.users}>
      {itemsFiltered.map((item: UserItem) => (
        <UsersItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Users;
