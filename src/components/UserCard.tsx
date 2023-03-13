import React, { useEffect, useState } from "react";
import { Users } from "../interface/types";
import Confirm from "./Confirm";
import "./style/userCard.css";

interface UserCardProps {
  user: Users;
  deleteUsers: (value: number) => void;
  setUpdateInfo: (value: Users) => void;
  setCloseForm: (value: boolean) => void;
}

const UserCard: React.FC<UserCardProps> = ({
  user,
  deleteUsers,
  setUpdateInfo,
  setCloseForm,
}) => {
  const [hiddenConfirm, setHiddenConfirm] = useState(true);
  const [isConfirm, setIsConfirm] = useState(false);
  const handleClickDelete = () => {
    deleteUsers(user.id);
  };

  const handleEdit = () => {
    setCloseForm(false);
    setUpdateInfo(user);
  };

  useEffect(() => {
    if (isConfirm) {
      deleteUsers(user.id);
      setHiddenConfirm(true);
      setIsConfirm(false);
    }
  }, [isConfirm]);

  return (
    <>
      <article className="card">
        <h2 className="card__title">
          {user.first_name} {user.last_name}
        </h2>
        <ul className="card__body">
          <li className="card__item">
            <span className="card__span">
              <i className="fa-solid fa-square-envelope"></i> Email:
            </span>
            <p>{user.email}</p>
          </li>
          <li className="card__item">
            <span className="card__span">
              <i className="fa-solid fa-cake-candles"></i> Birthday:
            </span>
            <p>{user.birthday}</p>
          </li>
        </ul>

        <footer className="card__footer">
          <button
            className="card__btn card__btn--trash"
            onClick={handleClickDelete}
          >
            <i className="fa-solid fa-trash-can-arrow-up"></i>
          </button>
          <button onClick={handleEdit} className="card__btn card__btn--edit">
            <i className="card__icon fa-solid fa-pen-to-square"></i>
          </button>
        </footer>
      </article>
      <article
        className={`confirm-container ${hiddenConfirm && "hidden__confirm"}`}
      >
        <Confirm
          hiddenConfirm={hiddenConfirm}
          setHiddenConfirm={setHiddenConfirm}
          setIsConfirm={setIsConfirm}
        />
      </article>
    </>
  );
};

export default UserCard;
