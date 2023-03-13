import React, { FC } from "react";
import "./style/confirm.css";

interface ConfirmProps {
  hiddenConfirm: boolean;
  setHiddenConfirm: (value: boolean) => void;
  setIsConfirm: (value: boolean) => void;
}
const Confirm: FC<ConfirmProps> = ({
  hiddenConfirm,
  setHiddenConfirm,
  setIsConfirm,
}) => {
  return (
    <div className={`confirm ${hiddenConfirm && "confirmHidden"}`}>
      <div className="confirm__x" onClick={() => setHiddenConfirm(true)}>
        <i className="fa-solid fa-xmark"></i>
      </div>
      <h2 className="confirm__title">Delete User</h2>
      <p>are you sure to delete this user? </p>
      <div className="confirm__buttons">
        <button
          onClick={() => setIsConfirm(true)}
          className="confirm__btn confirm__btn--red"
        >
          Accept
        </button>
        <button onClick={() => setHiddenConfirm(true)} className="confirm__btn">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Confirm;
