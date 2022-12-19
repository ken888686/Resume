import React, { lazy } from 'react';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className='m-1 flex flex-col'>
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
