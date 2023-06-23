import React,{ useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { auth } from '../firebase/firebase';
import { signOut } from 'firebase/auth';
import { AuthContext } from "../contextes/AuthContext";
import { useDate } from "../hooks/useDate";
const Header = () => {
  const user  = useContext(AuthContext);
  const date = useDate();
  
  const handleLogout = async (e) => {
    signOut(auth);
    return <Navigate replace to="/" />;
  };
  if (!user) {
    return <Navigate replace to="/" />;
  }
  else
    return (
    <header className="header">
      <div className="content-container">
        <div className='header__date'> {date.wish} {date.date} {date.time}</div>
        <div className="header__content">
          <Link className="header__title" to="/dashboard">
            <h1>Today</h1>
          </Link>
          <Link className="header__title" to="/weeklist">
            <h1>Week</h1>
          </Link>
          <Link className="header__title" to="/monthlist">
            <h1>Month</h1>
          </Link>
          <Link className="header__title" to="/profile">
            <h1>Profile</h1>
          </Link>
          <button className="button button--link" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </header>
    )
};
export default Header;
