import React from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import PersonalInfo from '../../data/constants';
import EducationItem from './EducationItem';

function EducationList() {
  const { address } = PersonalInfo;
  return (
    <ul className='mt-3 flex flex-col gap-2 -text--light'>
      <EducationItem
        graduated={2015}
        degree='Computer and Information Science'
        school='Tamkang University'
      />
    </ul>
  );
}

export default EducationList;
