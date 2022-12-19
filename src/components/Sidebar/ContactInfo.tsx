import React from 'react';
import Separator from '../Common/Separator';
import ContactInfoList from './ContactInfoList';

function ContactInfo() {
  return (
    <div className=''>
      <h3 className='font-bold uppercase -text--primary'>contact</h3>
      <Separator />
      <ContactInfoList />
    </div>
  );
}

export default ContactInfo;
