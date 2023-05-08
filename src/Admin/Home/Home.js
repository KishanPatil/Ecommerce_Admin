// import React from 'react';
// import adminDashboard from '../../Images/adminDashboard.avif'
// const Home = () => {
//   <div style={{backgroundImage:`url(${adminDashboard})`}}>

//   </div>
//   };
  
//   export default Home;
import React from 'react';
import adminDashboard from '../../Images/adminDashboard.avif';

const Home = () => {
  return (
    <div style={{ backgroundImage: `url(${adminDashboard})`, backgroundSize: 'cover', height: '100vh' }}>
      <h1>Welcome To Ekarto!</h1>
    </div>
  );
};

export default Home;

