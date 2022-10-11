import React from "react";
import s from "./Error.module.scss";
import NotFoundImg from "../../../../../assets/img/not-found.png";

interface NotFoundProps {}

const NotFound: React.FC<NotFoundProps> = () => {
  return (
    <div className={s.error}>
      <div className={s.error_img}>
        <img src={NotFoundImg} alt="not-found" />
      </div>
      <div className={s.error_title}>Мы никого не нашли</div>
      <div className={s.error_description}>Попробуй скорректировать запрос</div>
    </div>
  );
};

export default NotFound;
