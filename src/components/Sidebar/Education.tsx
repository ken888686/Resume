import React from 'react';
import Separator from '../Common/Separator';
import EducationList from './EducationList';

function Education() {
  return (
    <div className=''>
      <h3 className='text-lg font-bold uppercase -text--primary'>Education</h3>
      <Separator />
      <EducationList />
    </div>
  );
}

export default Education;
