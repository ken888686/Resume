import React, { ReactNode } from 'react';

type Prop = {
  icon: JSX.Element;
  title: string;
  children: ReactNode;
};

function ContactInfoItem({ icon, title, children }: Prop) {
  return (
    <li className='flex'>
      <div className='flex justify-center px-2'>{icon}</div>
      <div className='flex-1 text-xs'>
        <h4 className='capitalize'>{title}</h4>
        {children}
      </div>
    </li>
  );
}

export default ContactInfoItem;
