import React,{ useContext } from 'react';
import { Navigate } from "react-router-dom";
import { auth } from '../firebase/firebase';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { AuthContext } from "../contextes/AuthContext";

function LoginPage() {
  const _user = useContext(AuthContext);
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
        <button className="button" onClick={ <Navigate replace to='/' /> }>Return</button>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user || _user) {
    return <Navigate replace to='/dashboard' />;
  }
  return (
    <div className="box-layout">
      <div className="box-layout__title">
        <img src="/images/worklog_logo.png" className="box-layout__logo" alt="logo" />
        <form>
            <button className="button" onClick={ () => signInWithGoogle() } >Login with Google</button>
        </form>
      </div>
    </div>
  );
}
export default LoginPage;
