import React from 'react';
import Header from "./Header";
import WorkList from "./WorkList"


const WeekListPage = () => {
  return (
    <div>
      <Header />
      <div className='content-container'>
        <WorkList lasttime={ 86400000 * 7 } />
      </div>
    </div>
  )
}
export default WeekListPage;
