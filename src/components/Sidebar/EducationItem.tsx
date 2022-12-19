import React from 'react';

type Prop = {
  graduated: number;
  degree: string;
  school: string;
};

function EducationItem({ graduated, degree, school }: Prop) {
  return (
    <li className='flex flex-col'>
      <span className='text-sm'>{graduated}</span>
      <span className='font-bold'>{degree}</span>
      <span className='text-sm'>{school}</span>
    </li>
  );
}

export default EducationItem;
