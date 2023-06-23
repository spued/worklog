import React from 'react';
import Header from "./Header";
import WorkList from "./WorkList"

const MonthListPage = () => {

return (
    <div>
      <Header />
      <div className='content-container'>
        <WorkList lasttime={ 86400000 * 7  * 30}/>
      </div>
    </div>
  )
}
export default MonthListPage;
