import React from 'react';
import Avatar from './Avatar';
import PersonalInfo from '../../data/constants';

function Header() {
  const { firstName, lastName, avatar, position } = PersonalInfo;
  return (
    <header className='mb-2 flex items-center gap-5'>
      <Avatar img={avatar} title={`${firstName} ${lastName}`} />
      <div className='-text--light'>
        <h1 className='text-2xl'>{`${firstName} ${lastName}`}</h1>
        <span className='mt-1 inline-block text-sm'>{position}</span>
      </div>
    </header>
  );
}

export default Header;
