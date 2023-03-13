import { useEffect } from "react";
import { useForm, SubmitHandler, set } from "react-hook-form";
import { Users } from "../interface/types";
import "./style/userForm.css";

interface UserFormProps {
  createNewUser: (value: Users) => void;
  updateInfo: Users | undefined;
  updateUser: (value: number, value2: Users) => void;
  setUpdateInfo: (value: undefined) => void;
  setCloseForm: (value: boolean) => void;
  closeForm: boolean;
}

const UserForm: React.FC<UserFormProps> = ({
  createNewUser,
  updateInfo,
  updateUser,
  setUpdateInfo,
  setCloseForm,
  closeForm,
}) => {
  const { register, reset, handleSubmit } = useForm<Users>();

  useEffect(() => {
    reset(updateInfo);
  }, [updateInfo]);

  const submit: SubmitHandler<Users> = (data) => {
    if (updateInfo) {
      //update
      updateUser(updateInfo.id, data);
      setUpdateInfo(undefined);
    } else {
      //create
      createNewUser(data);
    }
    setCloseForm(true);
    reset({
      email: "",
      first_name: "",
      last_name: "",
      birthday: "",
      password: "",
    });
  };

  const handleClickCancel = () => {
    setUpdateInfo(undefined);
    reset({
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      birthday: "",
    });
  };

  return (
    <form
      className={`form ${closeForm && "formHidden"}`}
      onSubmit={handleSubmit(submit)}
    >
      <div className="form__x" onClick={() => setCloseForm(true)}>
        <i className="fa-solid fa-xmark"></i>
      </div>

      <h2 className="form__title">
        {updateInfo ? "Update User" : "Create User"}{" "}
      </h2>

      <div className="form__div">
        <label className="form__label" htmlFor="email">
          Email
        </label>
        <input
          className="form__input"
          type="email"
          id="email"
          placeholder="Type an Email"
          {...register("email")}
        />
      </div>

      <div className="form__div">
        <label className="form__label" htmlFor="password">
          Password
        </label>
        <input
          className="form__input"
          type="password"
          id="password"
          placeholder="Type a Password"
          {...register("password")}
        />
      </div>

      <div className="form__div">
        <label className="form__label" htmlFor="first_name">
          First Name
        </label>
        <input
          className="form__input"
          type="text"
          id="first_name"
          placeholder="Type a First name"
          {...register("first_name")}
        />
      </div>

      <div className="form__div">
        <label className="form__label" htmlFor="last_name">
          Last Name
        </label>
        <input
          className="form__input"
          type="text"
          id="last_name"
          placeholder="Type a Last name"
          {...register("last_name")}
        />
      </div>

      <div className="form__div">
        <label className="form__label" htmlFor="birthday">
          Birthday
        </label>
        <input
          className="form__input"
          type="date"
          id="birthday"
          placeholder="Type a Birthday"
          {...register("birthday")}
        />
      </div>

      <div className="form__buttons">
        <button className="form__btn">Submit</button>
      </div>
      {updateInfo && (
        <button
          className="form__btn form__btn--warning"
          onClick={handleClickCancel}
        >
          Cancel Edit
        </button>
      )}
    </form>
  );
};

export default UserForm;
