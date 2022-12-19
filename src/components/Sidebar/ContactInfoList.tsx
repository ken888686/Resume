import React from 'react';
import { IoLocationSharp, IoPhonePortraitOutline, IoLogoGithub } from 'react-icons/io5';
import PersonalInfo from '../../data/constants';
import ContactInfoItem from './ContactInfoItem';

function ContactInfoList() {
  const { address } = PersonalInfo;
  return (
    <ul className='flex flex-col gap-2 -text--light'>
      <ContactInfoItem icon={<IoLocationSharp className='text-xl' />} title='address'>
        <address className='not-italic'>{address}</address>
      </ContactInfoItem>
      <ContactInfoItem icon={<IoPhonePortraitOutline className='text-xl' />} title='phone'>
        <a className='' href='tel:+8180-7366-1993'>
          +8180-7366-1993
        </a>
      </ContactInfoItem>
      <ContactInfoItem icon={<IoLogoGithub className='text-xl' />} title='github'>
        <a
          className='block'
          href='https://github.com/ken888686'
          target='_blank'
          rel='noopener noreferrer'
        >
          github.com/ken888686
        </a>
        <a
          className='block'
          href='https://ken888686.github.io/'
          target='_blank'
          rel='noopener noreferrer'
        >
          ken888686.github.io
        </a>
      </ContactInfoItem>
    </ul>
  );
}

export default ContactInfoList;
