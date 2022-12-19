import React from 'react';
import PersonalInfo from '../../data/constants';
import Separator from './Separator';

function Profile() {
  const {} = PersonalInfo;
  return (
    <div className=''>
      <h3 className='text-lg font-bold uppercase'>profile</h3>
      <Separator />
      <p>
        Web Development enthusiast with over 6 years backend experience for a wide range of projects
        and industries.
      </p>
      <p>Enjoys technical challenges and providing elegant coding solutions.</p>
    </div>
  );
}

export default Profile;
