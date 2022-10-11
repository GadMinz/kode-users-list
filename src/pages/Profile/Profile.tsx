import React from "react";
import s from "./Profile.module.scss";
import GlobalSvgSelector from "../../assets/icons/GlobalSvgSelector";

interface ProfileProps {}

const Profile: React.FC<ProfileProps> = () => {
  return (
    <div className={s.profile}>
      <div className={s.profile_header}>
        <div className={s.profile_header_back}>
          <GlobalSvgSelector id="back" />
        </div>
        <div className={s.profile_header_user}>
          <div className={s.profile_header_user_avatar}>
            <img
              src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1210.jpg"
              alt="profile-img"
            />
          </div>
          <div className={s.profile_header_user_title}>
            Alice Ivanova <p>ai</p>
          </div>
          <div className={s.profile_header_user_department}>Designer</div>
        </div>
      </div>
      <div className={s.profile_info}>
        <div className={s.profile_info_age}>
          <div className={s.profile_info_age_date}>
            <GlobalSvgSelector id="star" />5 июня 1996
          </div>
          <div className={s.profile_info_age_years}>24 года</div>
        </div>
        <div className={s.profile_info_phone}>
          <GlobalSvgSelector id="phone" />
          <a href={`tel: +79515454587`}>+79515454587</a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
