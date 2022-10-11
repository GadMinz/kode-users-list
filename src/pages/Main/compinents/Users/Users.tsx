import React from "react";
import { useAppSelector } from "../../../../hook";
import { UserItem } from "../../../../redux/types";
import s from "./Users.module.scss";
import UsersItem from "./UsersItem";
import NotFound from "./Error/NotFound";
import LoadingBlock from "./LoadingBlock";
import Error from "./Error/Error";

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
      {status === "loading" ? (
          [...new Array(8)].map((_, i) => <LoadingBlock key={i} />)
      ) : status === "completed" ? (
          itemsFiltered.length > 0 ? (
              itemsFiltered.map((item: UserItem, i) => (
                  <UsersItem
                      key={item.id + i}
                      item={item}
                  />
              ))
          ) : (
              <NotFound />
          )
      ) : (
          <Error refresh={getUsers} />
      )}
    </div>
  );
};

export default Users;
