import React from 'react';
import ContactInfoList from './ContactInfoList';

function ContactInfo() {
  return (
    <div className=''>
      <h3 className='font-bold uppercase -text--primary'>contact</h3>
      <div className='h-0.5 rounded-full -bg--light' />
      <ContactInfoList />
    </div>
  );
}

export default ContactInfo;
