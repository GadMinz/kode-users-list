import React from "react";
import { useAppSelector } from "../../../../hook";
import { UserItem } from "../../../../redux/types";
import s from "./Users.module.scss";
import UsersItem from "./UsersItem";

interface UsersProps {
  getUsers: () => void;
}

const Users: React.FC<UsersProps> = ({getUsers}) => {
  const { items, status } = useAppSelector((state) => state.users);
  return (
    <div className={s.users}>
      {items.map((item: UserItem) => (
        <UsersItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Users;
