import React from 'react';
import Avatar from './Avatar';
import Header from './Header';
import ContactInfo from './ContactInfo';
import Education from './Education';
import Skill from './Skill';

function Sidebar() {
  return (
    <aside className='-bg--dark p-3'>
      <Header />
      <ul className='flex flex-col gap-3'>
        <li>
          <ContactInfo />
        </li>
        <li>
          <Education />
        </li>
        <li>
          <Skill />
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
