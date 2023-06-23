import React,{ useContext } from 'react';
import  Header  from "./Header"
import { AuthContext } from "../contextes/AuthContext";

const Profile = () => {
  const user = useContext(AuthContext);
  return (
    <div>
      <Header />
        <div className='content-container'>
          <div  className='list-body'>
            <ul>
              <li className='list-header'><h1 className='list-item__title'>{user.displayName} </h1></li>
              <li className='list-item'><img src={user.photoURL} alt='userPhoto'/></li>
              <li className='list-item'><strong>email:</strong> {user.email }</li>
              <li className='list-item'><strong>Last login:</strong> {user.metadata.lastSignInTime } </li>
            </ul>
          </div>
        </div>
    </div>
  );
};

export default Profile;