import React from 'react';
import Header from "./Header";
import AddForm from "./AddForm";
import WorkList from "./WorkList"

const DashboardPage = () => {

return (
  <div>
    <Header />
    <div className='content-container'>
      <WorkList lasttime={ 86400000 }/>
      <AddForm />
    </div>
  </div>
);
}
export default DashboardPage;
