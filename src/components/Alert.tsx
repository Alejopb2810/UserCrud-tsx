import React, { FC } from "react";
import { AlertInfo } from "../interface/types";
import "./style/alert.css";

interface AlertProps {
  setHiddenAlert: (value: boolean) => void;
  hiddenAlert: boolean;
  alertInfo: AlertInfo;
  isSuccess: boolean;
}

const Alert: FC<AlertProps> = ({
  setHiddenAlert,
  hiddenAlert,
  alertInfo,
  isSuccess,
}) => {
  return (
    <div className={`alert ${hiddenAlert && "alertHidden"}`}>
      <div className="alert__x" onClick={() => setHiddenAlert(true)}>
        <i className="fa-solid fa-xmark"></i>
      </div>
      <h2 className="alert__title">{alertInfo.title}</h2>
      <p
        className="alert__message"
        dangerouslySetInnerHTML={{ __html: alertInfo.message }}
      ></p>
      <button className="alert__btn" onClick={() => setHiddenAlert(true)}>
        Accept
      </button>
    </div>
  );
};

export default Alert;
