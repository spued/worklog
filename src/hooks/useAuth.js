import { useEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { auth } from "../firebase/firebase";
import { useUser } from "./useUser";

export const useAuth = () => {
  const { user, addUser } = useUser();
  const { getItem } = useLocalStorage();

  const [state, setState] = useState(() => {
    return {
      initializing: !user,
      user,
    }
  })

  useEffect(() => {
    // listen for auth state changes
    const unsubscribe = auth.onAuthStateChanged(onChange)
    // unsubscribe to the listener when unmounting
    return () => unsubscribe()
  }, []);

  useEffect(() => {
    const _user = getItem("user");
    //console.log(_user);
    if (_user) {
      addUser(JSON.parse(_user));
    }
  }, []);

  function onChange(user) {
    addUser(user);
    setState({ initializing: false, user })
  }

  return { state };
};
