import React from 'react';
import Experience from './Experience';
import Header from './Header';
import Profile from './Profile';

function Main() {
  return (
    <div className='mt-2 flex flex-col gap-3 p-3'>
      <Header />
      <Profile />
      <Experience />
    </div>
  );
}

export default Main;
