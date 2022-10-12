import React from "react";
import s from "./Profile.module.scss";
import { UserItem } from "../../redux/types";
import moment from "moment";
import "moment/locale/ru";
import { Link, useLocation } from "react-router-dom";
import GlobalSvgSelector from "../../assets/icons/GlobalSvgSelector";
import { categoriesMap } from "../Main/compinents/Header/Categories/Categories";

interface ProfileProps {
  getUserById: (id: string) => UserItem[];
}
moment.locale("ru");
const Profile: React.FC<ProfileProps> = ({ getUserById }) => {
  const id = useLocation().pathname.slice(1);
  const user = getUserById(id);
  if (user.length > 0) {
    const {
      avatarUrl,
      firstName,
      lastName,
      userTag,
      department,
      birthday,
      phone,
    } = user[0];
    const date = moment(birthday).format("DD MMMM YYYY");
    const years = moment().diff(birthday, "years", false);
    const phoneFormat =
      phone.slice(0, 2) +
      " (" +
      phone.slice(2, 5) +
      ") " +
      phone.slice(5, 8) +
      " " +
      phone.slice(8, 10) +
      " " +
      phone.slice(10, 12);
    return (
      <div className={s.profile}>
        <div className={s.profile_header}>
          <Link to={"/"} className={s.profile_header_back}>
            <GlobalSvgSelector id="back" />
          </Link>
          <div className={s.profile_header_user}>
            <div className={s.profile_header_user_avatar}>
              <img src={avatarUrl} alt="" />
            </div>
            <div className={s.profile_header_user_title}>
              {firstName} {lastName} <p>{userTag}</p>
            </div>
            <div className={s.profile_header_user_department}>
              {categoriesMap[department]}
            </div>
          </div>
        </div>
        <div className={s.profile_info}>
          <div className={s.profile_info_age}>
            <div className={s.profile_info_age_date}>
              <GlobalSvgSelector id="star" />
              {date}
            </div>
            <div className={s.profile_info_age_years}>
              {moment.duration(years, "year").humanize()}
            </div>
          </div>
          <div className={s.profile_info_phone}>
            <GlobalSvgSelector id="phone" />
            <a href={`tel: ${phone}`}>{phoneFormat}</a>
          </div>
        </div>
      </div>
    );
  }
  return <div></div>;
};

export default Profile;
