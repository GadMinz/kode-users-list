import React from "react";
import s from "./Users.module.scss";
import UsersItem from "./UsersItem";
import { useAppSelector } from "../../../../hook";
import { UserItem } from "../../../../redux/types";
import LoadingBlock from "./LoadingBlock";
import Error from "./Error/Error";
import NotFound from "./Error/NotFound";
import moment from "moment/moment";

interface UsersProps {
  getUsers: () => void;
}

const daysUntilBirthday = (birthday: string) => {
  const birthdate = moment(birthday).format("YYYY-MM-DD");
  const today = moment().format("YYYY-MM-DD");
  const years = moment().diff(birthdate, "years");
  const adjustToday = birthdate.substring(5) === today.substring(5) ? 0 : 1;
  const nextBirthday = moment(birthdate).add(years + adjustToday, "years");
  return nextBirthday.diff(today, "days");
};

const Users: React.FC<UsersProps> = ({ getUsers }) => {
  const { items, status } = useAppSelector((state) => state.users);
  let { searchValue, sort } = useAppSelector((state) => state.filters);
  searchValue = searchValue.toLowerCase();

  let itemsFiltered: UserItem[] = items.filter(
      (item: UserItem) =>
          item.firstName.toLowerCase().includes(searchValue) ||
          item.lastName.toLowerCase().includes(searchValue) ||
          item.userTag.toLowerCase().includes(searchValue)
  );

  let newYearId: string = "";
  if (sort === "b-day") {
    const newYear = moment().endOf("year").diff(moment(), "days");
    itemsFiltered = itemsFiltered.map((item) => ({
      ...item,
      nextBday: daysUntilBirthday(item.birthday),
    }));
    itemsFiltered.sort((a, b) =>
        a.nextBday && b.nextBday ? a.nextBday - b.nextBday : 0
    );
    for (const item of itemsFiltered) {
      if (item.nextBday && item.nextBday > newYear) {
        newYearId = item.id;
        break;
      }
    }
  }

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
                        sort={sort}
                        nextYear={item.id === newYearId}
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
