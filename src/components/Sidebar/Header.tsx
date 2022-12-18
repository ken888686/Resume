import React from 'react';
import Avatar from './Avatar';

function Header() {
  return (
    <header className='flex items-center gap-5 p-3'>
      <Avatar img='images/yungchuntu.jpeg' title='Yung Chun Tu' />
      <div className='-text--light'>
        <h1 className='text-2xl'>Yung Chun Tu</h1>
        <span className='mt-1 inline-block text-sm'>C# Engineer</span>
      </div>
    </header>
  );
}

export default Header;
