import React from 'react';
import PersonalInfo from '../../data/constants';

function Header() {
  const { firstName, lastName, position } = PersonalInfo;
  return (
    <div className='hidden'>
      <h1>{`${firstName} ${lastName}`}</h1>
      <h2>{position}</h2>
    </div>
  );
}

export default Header;
