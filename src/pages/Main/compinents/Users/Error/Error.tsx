import React from "react";
import s from "./Error.module.scss";
import errorImg from "../../../../../assets/img/error.png";
interface ErrorProps {
  refresh: () => void;
}

const Error: React.FC<ErrorProps> = ({ refresh }) => {
  return (
    <div className={s.error}>
      <div>
        <img src={errorImg} alt="error" />
      </div>
      <div className={s.error_title}>Какой-то сверхразум все сломал</div>
      <div className={s.error_description}>Постараемся быстро починить</div>
      <div className={s.error_link} onClick={refresh}>
        Попробовать снова
      </div>
    </div>
  );
};

export default Error;
