import React from 'react';
import Avatar from './Avatar';
import Header from './Header';
import ContactInfo from './ContactInfo';

function Sidebar() {
  return (
    <aside className='-bg--dark p-3'>
      <Header />
      <ul>
        <li>
          <ContactInfo />
        </li>
        {/* Education */}
        {/* Skills */}
      </ul>
    </aside>
  );
}

export default Sidebar;
