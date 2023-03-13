import axios from "axios";
import { useState } from "react";
import { AlertInfo, Users,  } from "../interface/types";

const initValuesAlert = {
  title:"",
  message:"",
  status:"",
};


const useCrud = () => {
  const [users, setUsers] = useState<Users[] | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(false)
  const [hiddenAlert, setHiddenAlert] = useState<boolean>(true)
  const [alertInfo, setAlertInfo] = useState<AlertInfo>(initValuesAlert)

    const getAllUsers = () => {
        const URL = `https://users-crud.academlo.tech/users/`;
        axios
          .get(URL)
          .then((res) => setUsers(res.data))
          .catch((err) => console.log(err));
      };
    
    
      const createNewUser = (data: Users) => {
        const URL = `https://users-crud.academlo.tech/users/`;
        axios
          .post(URL, data)

          .then(() => {getAllUsers()
            setIsSuccess(true)
          const dataAlert ={
            title:"Add User",
            message:`The User <b>${data.first_name} ${data.last_name}</b> added successfully`,
            status:"added",
          };
          setAlertInfo(dataAlert)
          setHiddenAlert(false)
          })

          .catch((err) => {console.log(err)
            const dataAlert ={
              title:"Error in User added",
              message:"have to fill all the fields correctly",
              status:"added",
            }
            setAlertInfo(dataAlert)
            setHiddenAlert(false)
            setIsSuccess(false)
          });
      };
    
      const deleteUsers = (id: number) => {
        const URL = `https://users-crud.academlo.tech/users/${id}/`;
        axios
          .delete(URL)
          .then(() => {
            getAllUsers()
            const dataAlert={
              title:"User deleted successfully",
              message:`The User with id <b>${id}</b> deleted successfully`,
              status:"Deleted",
            }
            setAlertInfo(dataAlert)
            setHiddenAlert(false)
            setIsSuccess(true)
          })
          .catch((err) => {
            console.log(err)
            const dataAlert={
              title:"Error User Deleted",
              message:`the User with id <b>${id}</b> has not  be removed` ,
              status:"Removed",
            }
            setAlertInfo(dataAlert)
            setHiddenAlert(false)
            setIsSuccess(true)
          });
      };
    
      const updateUser = (id: number, data: Users) => {
        const URL = `https://users-crud.academlo.tech/users/${id}/`;
        axios
          .put(URL, data)
          .then(() => {
            getAllUsers(),
            setIsSuccess(true)
        const dataAlert = {
        title:"User Edited",
        message:`The user <b>${data.first_name} ${data.last_name}</b> was edited successfully`,
        status:"Edited",
      };
      setAlertInfo(dataAlert)
      setHiddenAlert(false)
          })
          .catch((err) => {
            console.log(err)
      const dataAlert = {
        title:"Error Edit User",
        message:`Have to fill all the fields correctly`,
        status:"Edited",
      };
      setAlertInfo(dataAlert)
      setHiddenAlert(false)
      setIsSuccess(false)
          });
      };
    return {
        users,
        getAllUsers,
        createNewUser,
        deleteUsers,
        updateUser,
        isSuccess,
        hiddenAlert,
        setHiddenAlert,
        setAlertInfo,
        alertInfo
    }
}

export default useCrud