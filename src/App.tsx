import { useEffect, useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import UserCard from "./components/UserCard";
import UserForm from "./components/UserForm";
import useCrud from "./hooks/useCrud";
import { Users } from "./interface/types";

function App() {
  const {
    users,
    getAllUsers,
    createNewUser,
    deleteUsers,
    updateUser,
    isSuccess,
    alertInfo,
    hiddenAlert,
    setHiddenAlert,
  } = useCrud();

  const [updateInfo, setUpdateInfo] = useState<Users | undefined>(undefined);
  const [closeForm, setCloseForm] = useState<boolean>(true);

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="App">
      <header className="header-container">
        <h1 className="header__title">Add Users</h1>
        <button className="app__btn" onClick={() => setCloseForm(false)}>
          <i className="fa-solid fa-plus"></i>
          Open Form
        </button>
      </header>

      <div className={`form-container ${closeForm && "close__form"}`}>
        <UserForm
          createNewUser={createNewUser}
          updateInfo={updateInfo}
          updateUser={updateUser}
          setUpdateInfo={setUpdateInfo}
          setCloseForm={setCloseForm}
          closeForm={closeForm}
        />
      </div>

      <div className={`alert-container ${hiddenAlert && "hidden__alert"}`}>
        {alertInfo && (
          <Alert
            setHiddenAlert={setHiddenAlert}
            hiddenAlert={hiddenAlert}
            alertInfo={alertInfo}
            isSuccess={isSuccess}
          />
        )}
      </div>

      <div className="user-container">
        {users?.length ? (
          users?.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              deleteUsers={deleteUsers}
              setUpdateInfo={setUpdateInfo}
              setCloseForm={setCloseForm}
            />
          ))
        ) : (
          <p className="User__info">Add new users...!</p>
        )}
      </div>
    </div>
  );
}

export default App;
