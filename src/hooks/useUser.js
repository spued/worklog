import { useLocalStorage } from "./useLocalStorage";
import { useContext } from "react"
import { AuthContext } from "../contextes/AuthContext"

export const useUser = () => {
  const { user } = useContext(AuthContext);
  const { setItem, removeItem } = useLocalStorage();
  const addUser = (user) => {
    setItem("user", JSON.stringify(user));
    return user;
  };
  const removeUser = () => {
    removeItem("user");
  };
  const getUser = () => {
    return user;
  };
  return { getUser,addUser, removeUser };
};
